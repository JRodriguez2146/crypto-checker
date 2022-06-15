import React from "react";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import './Styles.css';

const CoinTable = () => {

    const [coinList, setCoinList] = useState([]);

    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?')
        .then((response) => {
          console.log(response.data);
          setCoinList(response.data.coins);
        })
      }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                        <th>Price</th>
                        <th>24h%</th>
                        <th>7d%</th>
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
                            {coin.name}
                            <br/>
                            ( {coin.symbol} )
                        </td> 
                        <td>
                        <img src={coin.icon} alt="coin icon" />
                        </td>
                        <td>
                            ${coin.price.toFixed(2)}
                        </td>
                        <td>
                            {coin.priceChange1h}%
                        </td>
                        <td>
                            {coin.priceChange1w}%
                        </td>
                        <td>
                            ${coin.marketCap}
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