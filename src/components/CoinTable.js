import React from "react";
import {useEffect, useState} from 'react';
import Axios from 'axios';
import './TableStyles.css';

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
           {coinList.map((coin) =>{
            return (
                <table cellPadding={0} cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>Name:</th>
                        <th>Icon:</th>
                        <th>Symbol:</th>
                        <th>Price:</th>
                    </tr> 
                    </thead>
                    <tbody>  
                    <tr>
                        <td>
                            {coin.name}
                        </td> 
                        <td>
                            <img src={coin.icon} alt="coin icon" />
                        </td>
                        <td>
                            {coin.symbol}
                        </td>
                        <td>
                            {coin.price}
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