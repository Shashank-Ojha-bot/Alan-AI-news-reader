import React from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey='e7036e70d538511078f4312951b61cb12e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =()=>{
    const [newsArticles,setNewsArticles]=React.useState([]);

    React.useEffect(()=>{
        alanBtn({
            key: alanKey,
            onCommand:({ command,articles })=>{
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                }
            }
        })
    },[])

    return <div>
        <h1>Alan AI news Application</h1>
        <NewsCards articles={newsArticles} />
    </div>
} 

export default App;