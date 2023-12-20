import { React, useState, useEffect } from "react";
import axios from "axios";
const Change24Hours = ({ symbol }) => {

    const [cryptoInfo24Hrs, setCryptoInfo24Hrs] = useState(null);
    const [loading24Hrs, setLoading24Hrs] = useState(true);
    useEffect(() => {
        const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000); // Start date (24 hours ago)
        const endDate = Date.now()


        const fetchData24Hrs = async () => {
            try {
                const response = await axios.get('https://api.binance.com/api/v3/klines', {
                    params: {
                        symbol: `${symbol.toUpperCase()}`,
                        interval: '1h',
                        startTime: startDate.getTime(),
                        endTime: endDate,
                    },
                });

                setCryptoInfo24Hrs(response.data.reverse());
                setLoading24Hrs(false);
            } catch (error) {
                console.error('Error fetching 24-hour data:', error);
            }
        };
        fetchData24Hrs();
    }, [symbol]);

    return (
        <section id="history">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div class="card">
                            <div class="card-header">
                                <h1>24 Hours History</h1>
                            </div>
                            <div class="horizontal_scroll">
                                <table className="full-width-table">
                                    <tr style={{color:"white"}}> 
                                        <td>Date/Time (UTC)</td>
                                        {!loading24Hrs ? (
                                            cryptoInfo24Hrs.map((data, key) => {
                                                return (
                                                    <td key={key}>
                                                        {new Date(data[0]).toLocaleString('en-US', {
                                                            month: 'short',
                                                            day: '2-digit',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: false,
                                                            timeZone: 'UTC' // Display in UTC
                                                        })}

                                                    </td>
                                                );
                                            })
                                        ) : null}

                                    </tr>
                                    <tr style={{ color: "green" }}>
                                        <td>Buy</td>
                                        {!loading24Hrs ? (
                                            cryptoInfo24Hrs.map((data, key) => {
                                                return (
                                                    <td key={key}>
                                                        {Math.ceil(parseFloat(data[9]))} {"("}{Math.round(Math.ceil(parseFloat(data[9])) / Math.ceil(parseFloat(data[5])) * 100) }{"%)"}

                                                    </td>
                                                );
                                            })
                                        ) : null}
                                    </tr>
                                    <tr style={{ color: "red" }}>
                                        <td>Sell</td>
                                        {!loading24Hrs ? (
                                            cryptoInfo24Hrs.map((data, key) => {

                                                return (
                                                    <td key={key}>
                                                        {parseInt(Math.ceil(parseFloat(data[5])-parseFloat(data[9])))}
                                                      
                                                        {"("}{Math.round(Math.ceil(parseFloat(data[5])-parseFloat(data[9])) / Math.ceil(parseFloat(data[5])) * 100) }{"%)"}
                                                    </td>
                                                );
                                            })
                                        ) : null}
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Change24Hours;