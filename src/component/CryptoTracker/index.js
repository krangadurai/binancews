import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftCard from './LeftCard';
import RightCard from "./RightCard";
import Change24Hours from "./Change24Hours";
import Change30days from "./Change30days";

const CryptoData = () => {

    const { symbol } = useParams();
    const [intervals, setIntervals] = useState({});

    const indexSum=(obj) =>{
        const lengths = Object.values(obj).map(arr => arr.length);
        const maxLength = Math.max(...lengths);
      
        const result = [];
        for (let i = 0; i < maxLength; i++) {
          let sum = 0;
          for (let key in obj) {
            sum += parseFloat((obj[key][i] || 0)); // Using 0 if the index is out of range in any array
          }
          result.push(sum);
        }

        return result;
      }

   


    const getMillisecondsFromInterval = (interval) => {
        const intervalMap = {
            '1m': 60 * 1000,
            '5m': 5 * 60 * 1000,
            '15m': 15 * 60 * 1000,
            '30m': 30 * 60 * 1000,
            '1h': 60 * 60 * 1000,
            '1hr': 60 * 60 * 1000,
            '24h': 24 * 60 * 60 * 1000, 
            '1d': 24 * 60 * 60 * 1000, 
            '7d': 7 * 24 * 60 * 60 * 1000, 
            '30d': 30 * 24 * 60 * 60 * 1000,
        };
        return intervalMap[interval];
    };
     
    useEffect(()=>{
   

    },[])
    useEffect(() => {
        subscribeToWebSocket(symbol.toLowerCase(), '1d')
        subscribeToWebSocket(symbol.toLowerCase(), '1h')
        cacluatWebSocket(symbol,'24h')
        cacluatWebSocket(symbol,'1hr')
        cacluatWebSocket(symbol,'30m')
        cacluatWebSocket(symbol,'15m')
        cacluatWebSocket(symbol,'5m')
        cacluatWebSocket(symbol,'1m')
        
        const interval = setInterval(() => {
            subscribeToWebSocket(symbol.toLowerCase(), '1d')
            subscribeToWebSocket(symbol.toLowerCase(), '1h')
            cacluatWebSocket(symbol,'24h')
            cacluatWebSocket(symbol,'1hr')
            cacluatWebSocket(symbol,'30m')
            cacluatWebSocket(symbol,'15m')
            cacluatWebSocket(symbol,'5m')
            cacluatWebSocket(symbol,'1m')
        }, 13000);
      
        return () => clearInterval(interval);
      }, [symbol]);


    const cacluatWebSocket = (symbol, interval) => {
        const ws = new WebSocket(`wss://ws-api.binance.com:443/ws-api/v3`);
        let startTime = Date.now()-getMillisecondsFromInterval(interval);
        let intervalSet = interval === "1m"? "1m":"1m"
        if (interval === "24h") {
            intervalSet = "5m";
          }
        const requestData = {
            id: "1dbbeb56-8eea-466a-8f6e-86bdcfa2fc0b",
            method: "klines",
            params: {
              symbol: symbol.toUpperCase(),
              interval:intervalSet,
              startTime: startTime,
            }
          };

        ws.onopen = () => {
            console.log("WebSocket Connected " + interval)
            ws.send(JSON.stringify(requestData));
           
        };
       
        ws.onmessage = async (event) => {
            const newData = JSON.parse(event.data);
            var calculatedIndexSum1;
            if(interval==='24h'){
   
                let  nextFiveMinutes = new Date(Math.ceil(startTime / (5 * 60 * 1000)) * (5 * 60 * 1000));
                let remainingMilliseconds = nextFiveMinutes.getTime() - startTime;
                let limit = Math.floor(remainingMilliseconds /(1000));
              
                if(0<limit){
                    const response = await axios.get('https://api.binance.com/api/v3/klines', {
                        params: {
                            symbol: `${symbol.toUpperCase()}`,
                            interval: '1m',
                            startTime: startTime,
                            limit:limit
                        },
                    });
    
                    var calculatedIndexSum1 = indexSum(response.data)
                }
               
            }
    
            var calculatedIndexSum = indexSum(newData.result);
          
            if(calculatedIndexSum1){
                calculatedIndexSum= sumArrays(calculatedIndexSum,calculatedIndexSum1)
            }
          
            setIntervals(prev => {
              return { ...prev,[interval]: calculatedIndexSum };
            });
            ws.close();
          };
          

        ws.onerror = (error) => {
            console.error(`WebSocket error for ${interval} interval:`, error);
        };

        ws.onclose = () => {
            console.log(`WebSocket connection closed for ${interval} interval for ${symbol} pair!`);
        };
    };

    function sumArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            throw new Error('Arrays must have the same length');
        }
    
        const summedArray = [];
        for (let i = 0; i < arr1.length; i++) {
            summedArray.push(parseFloat(arr1[i]) + parseFloat(arr2[i]));
        }
        return summedArray;
    }
    
    
    const subscribeToWebSocket = (symbol, interval) => {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker_${interval}`);

        ws.onopen = () => {
            console.log("WebSocket Connected " + interval)
        };

        ws.onmessage = (event) => {
            const newData = JSON.parse(event.data);
            setIntervals(prev => {
                return { ...prev, [interval]: newData };
              });
            ws.close();
        };

        ws.onerror = (error) => {
            console.error(`WebSocket error for ${interval} interval:`, error);
        };

        ws.onclose = () => {
            console.log(`WebSocket connection closed for ${interval} interval for ${symbol} pair!`);
        };
    };



    return (
        <>
            <div class="black">
                <nav id="nav" class="fixed-top text-center">
                    <div class="container-fluid ">
                        <div class="row justify-content-center align-items-center">
                            <div class="text-center ">
                                <Link to="/">
                                    <img
                                        class="text-center"
                                        alt="logo"
                                        src="https://arbitribe.com/frontend/images/ArbiTribe.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div class="row justify-content-center align-items-center text-right">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12 pt-5 ">
                            <Link to="/">
                                <button className="backbtn">
                                    <i
                                        class="fa fa-arrow-left success text-success"
                                        aria-hidden="true"
                                    ></i>
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <>
                <section id="trb_usdt">
                    <div class="container-fluid">
                        <div class="row justify-content-center align-items-center">
                            {intervals ? (
                                <>
                                    <LeftCard data={intervals} symbol={symbol} />
                                    <RightCard data={intervals} symbol={symbol} />
                                </>
                            ) : (
                                <div>
                                    {'Loading ..........'}
                                </div>

                            )}

                        </div>
                    </div>
                </section>
                <Change24Hours symbol={symbol} />
                
                <Change30days symbol={symbol} />
             </> 
            </div>
        </>
    );
};

export default CryptoData;
