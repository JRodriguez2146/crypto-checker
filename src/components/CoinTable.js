import React from "react";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import './Styles.css';

const CoinTable = () => {

    //State for coin list
    const [coinList, setCoinList] = useState([]);

    //useEffect hook to perform async function
    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?')
        .then((response) => {
          setCoinList(response.data.coins);
        })
      }, []);

      //Number format object used to convert market cap numbers to American currency
      const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24hr</th>
                        <th>7d</th>
                        <th>Market Cap</th>
                    </tr> 
                </thead>
            </table>
           {coinList.map((coin) =>{
            return (
                <table>
                    <tbody>  
                    <tr>
                        <td>
                        <img src={coin.icon} alt="coin icon" />
                        </td>
                        <td style={{color:"greenYellow"}}>
                        {coin.symbol}
                        </td>
                        <td>
                        ${coin.price.toFixed(0)}
                        </td>
                        <td>
                        {coin.priceChange1h}%
                        </td>
                        <td>
                        {coin.priceChange1w}%
                        </td>
                        <td>
                            {currency.format(coin.marketCap).split(',')[0]+'B'}
                        </td>
                    </tr> 
                    </tbody>
                </table>
            )
           })}
        </div>
    )

}
export default CoinTable;