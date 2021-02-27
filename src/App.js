import alanBtn from '@alan-ai/alan-sdk-web';
import React from "react";
import NewsCards from "./components/NewsCards/NewsCards";
//import classes from "*.module.css";
import {alanKey} from './components/NewsCards/keys'
import useStyles from './styles';
import wordsToNumbers from 'words-to-numbers';



const App =()=>{
    const [newsArticles,setNewsArticles]=React.useState([]);
    const [activeArticle,setActiveArticle]=React.useState(-1);
    const classes=useStyles();
    React.useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({ command,articles,number })=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
                }
                else if(command==='open'){
                    const parsedNumber=number.length > 2 ?wordsToNumbers(number,{fuzzy:true}):null;
                    const article=articles[parsedNumber-1];
                    if(parsedNumber > 20){
                        alanBtn().playText('Please try again');
                    }
                    else if(article){
                        window.open(article.url, '_blank'); 
                        alanBtn().playText('Opening...');
                    }
                    
                }
            }
        })
    },[])

    return <div>
        <div className={classes.logoContainer}>
            <img src="https://bit.ly/3dYcdmF" className={classes.alanLogo} alt="alan logo"/>
        </div>
        <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
} 

export default App;