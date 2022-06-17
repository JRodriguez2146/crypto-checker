import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import './Styles.css';

const News = () => {

    //state for news articles
    const [news, setNews] = useState([]);

    //useEffect hook to perform async function
    useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/news/bullish?skip=0&limit=8`)
        .then((response) => {
            //pass response data to setNews method
            setNews(response.data.news);
        }, [])
    })

    return (
        <div>
             <div style={{width:"90%", height:"85%", margin:"auto", 
                borderRadius:"5px", 
                backgroundColor:"rgb(40, 39, 39)"}}> 
            {news.map((article) => {
                return (
                    <div className="newsContainer">
                       <a href={article.link}>
                       <div className="innerContainer">
                       <img className="newsImg" src={article.imgURL} alt="new images" />
                       <h4>{article.title}</h4>
                       <h5 className="sourceName">{article.source}</h5> 
                       </div>
                       </a>
                    </div>   
                )
            })}
            </div>
        </div>
    )
}
export default News;