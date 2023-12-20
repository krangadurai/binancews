import { React, useState, useEffect } from "react";
import axios from "axios";

const Change30days = ({ symbol }) => {
    const [cryptoInfo30days, setCryptoInfo30days] = useState(null);
    const [loading30days, setLoading30days] = useState(true);

    useEffect(() => {
        const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // Start date (30 days ago)
        const endDate = Date.now();

        const fetchData30days = async () => {
            try {
                const response = await axios.get('https://api.binance.com/api/v3/klines', {
                    params: {
                        symbol: `${symbol.toUpperCase()}`,
                        interval: '1d',
                        startTime: startDate.getTime(),
                        endTime: endDate,
                    },
                });
                
                setCryptoInfo30days(response.data.reverse());
                setLoading30days(false);
            } catch (error) {
                console.error('Error fetching 30-day data:', error);
            }
        };

        fetchData30days();
    }, [symbol]);

    return (
        <section id="history">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                        <div className="card">
                            <div className="card-header">
                                <h1>30 Days History</h1>
                            </div>
                            <div className="horizontal_scroll">
                                <table className="full-width-table">
                                    <tbody>
                                        <tr style={{ color: "white" }}>
                                            <td >Date/Time (UTC)</td>
                                            {!loading30days ? (
                                                cryptoInfo30days.map((data, key) => (
                                                    <td key={key}>
                                                       <span> {new Date(data[0]).toLocaleString('en-US', {
                                                            month: 'short',
                                                            day: '2-digit',
                                                            year: 'numeric',
                                                            hour12: false,
                                                            timeZone: 'UTC' // Display in UTC
                                                        })}
                                                        </span>
                                                    </td>
                                                ))
                                            ) : null}
                                        </tr>
                                        <tr style={{ color: "green" }}>
                                            <td >Buy</td>
                                            {!loading30days ? (
                                                cryptoInfo30days.map((data, key) => {
                                                    return (
                                                        <td key={key}>
                                                            {Math.ceil(parseFloat(data[9]))} {"("}{Math.round(Math.ceil(parseFloat(data[9])) / Math.ceil(parseFloat(data[5])) * 100)}{"%)"}

                                                        </td>
                                                    );
                                                })
                                            ) : null}
                                        </tr>
                                        <tr style={{ color: "red" }}>
                                            <td>Sell</td>
                                            {!loading30days ? (
                                                cryptoInfo30days.map((data, key) => {

                                                    return (
                                                        <td key={key}>
                                                            {parseInt(Math.ceil(parseFloat(data[5]) - parseFloat(data[9])))}

                                                            {"("}{Math.round(Math.ceil(parseFloat(data[5]) - parseFloat(data[9])) / Math.ceil(parseFloat(data[5])) * 100)}{"%)"}
                                                        </td>
                                                    );
                                                })
                                            ) : null}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Change30days;
