import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import './Styles.css';

const FiatCurrency = () => {

    const [fiatCurrency, setFiatCurrency] = useState([]);

    useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/coins/bitcoin?currency=AMD
        `)
        .then((response) => {
            console.log(response.data);
            setFiatCurrency(response.data);<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
        })
    }, [])

    return (
        <div>

            <table>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default FiatCurrency;