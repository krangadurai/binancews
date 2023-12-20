import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LeftCard from './LeftCard';
import RightCard from "./RightCard";

const CryptoData = () => {

  const { symbol } = useParams();
  const [cryptoInfo24Hrs, setCryptoInfo24Hrs] = useState(null);
  const [cryptoInfo30Days, setCryptoInfo30Days] = useState(null);

  const [loading24Hrs, setLoading24Hrs] = useState(true);
  const [loading30Days, setLoading30Days] = useState(true);
  const [loadingWsData, setLoadingWsData] = useState(true);
  const [websocketData, setWebsocketData] = useState({});

  useEffect(() => {
    const startDate = new Date(Date.now() -  24 * 60 * 60 * 1000); // Start date (24 hours ago)
    const endDate =Date.now()


    const fetchData24Hrs = async () => {
      try {
        const response = await axios.get('https://api.binance.com/api/v3/klines', {
          params: {
            symbol: `${symbol.toUpperCase()}`,
            interval: '1h',
            startTime: startDate.getTime(),
            endTime: endDate.getTime(),
          },
        });
        setCryptoInfo24Hrs(response.data);
        setLoading24Hrs(false);
      } catch (error) {
        console.error('Error fetching 24-hour data:', error);
      }
    };
    fetchData24Hrs();
  }, [symbol]);


  useEffect(() => {
    const fetchData30Days = async () => {
      try {
        const thirtyDaysAgo = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000));
        const startTime = thirtyDaysAgo.getTime();

        const response = await axios.get('https://api.binance.com/api/v3/klines', {
          params: {
            symbol: `${symbol.toUpperCase()}`,
            interval: '1d',
            startTime,
            endTime: Date.now(),
          },
        });
        setCryptoInfo30Days(response.data);
        setLoading30Days(false)
      } catch (error) {
        console.error('Error fetching 30-day data:', error);
      }
    };

    fetchData30Days();

    subscribeToWebSocket(symbol.toLowerCase(),'')
  }, [symbol]);



  const subscribeToWebSocket = (symbol, interval) => {
    const ws = new WebSocket(`wss://stream.binance.com:9443/ws`);
        
    ws.onopen = () => {
      const subscriptionMsg = {
        method: "SUBSCRIBE",
        params: [
          symbol + "@kline_1m",
          symbol + "@kline_5m",
          symbol + "@kline_15m",
          symbol + "@kline_30m",
          symbol + "@kline_1h",
          symbol + "@kline_1d",
          symbol + "@kline_1w",
          symbol + "@kline_1M"
        ],
        id: 1
      };

      ws.send(JSON.stringify(subscriptionMsg));
    };

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      console.log(newData);
    
      if (newData.k && newData.k.T && newData.k.t) {
        const { k: { T, t } } = newData;
        const enow = new Date(T);
        const snow = new Date(t);
        
        const formattedTime = {
          startTime: `${snow.toTimeString()} ${snow.toDateString()}`,
          endTime: `${enow.toTimeString()} ${enow.toLocaleDateString()}`
        };
    
        if (symbol ) {
          const updatedData = {
            ...newData,
            k: {
              ...newData.k,
              time: formattedTime
            }
          };
    
          setWebsocketData((prevData) => ({
            ...prevData,
            [`${symbol}_${updatedData.k.i}`]: updatedData
          }));
        }
        setLoadingWsData(false);
      }
      

    };
    
    ws.onerror = (error) => {
      console.error(`WebSocket error for ${interval} interval:`, error);
    };

    ws.onclose = () => {
      console.log(`WebSocket connection closed for ${interval} interval for ${symbol} pair!`);
    };
  };



  console.log(cryptoInfo24Hrs, cryptoInfo30Days, websocketData)
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
                {!loadingWsData ? (
                  <>
                    <LeftCard data={websocketData} symbol={symbol} />
                    <RightCard data={websocketData} symbol={symbol} />
                  </>
                ) : (
                  <div>
                    {'Loading ..........'}
                  </div>

                )}

              </div>
            </div>
          </section>
        </>
      </div>
    </>
  );
};

export default CryptoData;
