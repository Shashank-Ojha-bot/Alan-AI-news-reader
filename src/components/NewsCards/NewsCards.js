import React from "react";
import {Grid,Grow,Typograpgy} from '@material-ui/core';
import NewsCard from "./NewsCard/NewsCard"

const NewsCards=({articles})=>{
return (
<Grow in>
<Grid container alignItems="stretch" spacing={3}>

{articles.map((article,i) => {
       return <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
       <NewsCard atricle={article} i={i}/>
       </Grid> 
    })}

</Grid>

    


</Grow>
);
}


export default NewsCards;