import React from "react";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import './Styles.css';

const Trending = () => {

    //State for exchanges data
    const [coins, setCoins] = useState([]);

    //useEffect hook to perform async function
    useEffect(() => {

        Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=4&currency=USD`)
        .then((response) => {
          setCoins(response.data.coins);
        })
      }, []);

      //Number format object used to convert market cap numbers to American currency
      const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

    return (
            <div>
                <div style={{display:"block", width:"auto", margin:"auto"}}> 
                {coins.map((coin) =>{
                    return(
                        <div className="trendingCards">
                            <div>
                                <img src={coin.icon} alt="icon" />
                                <h5 style={{color:"greenYellow"}}>{coin.name}</h5>
                                <h5>Total Supply: {coin.totalSupply}</h5>
                                <h5>Market Cap: {currency.format(coin.marketCap).split(',')[0]+'B'}</h5>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div> 
            )
}
export default Trending;