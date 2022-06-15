import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import './Styles.css';
import FiatCurrency from "./FiatCurrency";


const News = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/news/trending?skip=0&limit=8
        `)
        .then((response) => {
            console.log(response.data);
            setNews(response.data.news);
        }, [])
    })

    return (
        <div>
            <header>
            <h1>Crypto Checker</h1>
            </header>
            <FiatCurrency />
            <br/><br />
            {news.map((article) => {
                return (
                    <div className="newsContainer">
                       <a href={article.link}>
                       <div className="innerContainer">
                       <img className="newsImg" src={article.imgURL} alt="new images" />
                       <h5>{article.source}</h5> 
                       <h4>{article.title}</h4>

                       </div>
                       </a>
                    </div>   
                )
            })}
        </div>
    )
}
export default News;