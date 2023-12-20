import { React } from "react";



const TradeComponent = ({ title, totalAsset, buyAsset, price, symbol }) => {

    const onlySymbol = symbol.substring(0, symbol.length - 4);
    const symbolLowerCase = symbol.toLowerCase();

    let buyVolume = parseFloat(buyAsset) * parseFloat(price);
    let totalVolume = parseFloat(totalAsset) * parseFloat(price);
    let sellAsset = parseFloat(totalAsset) - parseFloat(buyAsset);
    let sellVolume = parseFloat(totalVolume) - parseFloat(buyVolume);
    let sellVolumePercentage = ((sellVolume / parseFloat(totalVolume)) * 100).toFixed(2);
    let buyVolumePercentage = ((parseFloat(buyVolume) / parseFloat(totalVolume)) * 100).toFixed(2);

    buyAsset = parseFloat(buyAsset).toLocaleString();
    sellAsset = parseFloat(sellAsset).toLocaleString();
    buyVolume = buyVolume.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    sellVolume = sellVolume.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


    return (
        <tr className="top">
            <td className="right">
                <div className="trade">
                    <h6>
                        <span>{title} Trades</span> |{' '}
                        <span>
                            BOUGHT:{' '}
                            {buyAsset} {onlySymbol}
                        </span>{' '}
                        |{' '}
                        <span>
                            SOLD:{' '}
                            {sellAsset} {onlySymbol}
                        </span>
                    </h6>
                    <div className="bar_chart_inside">
                        <span
                            id="lineChartBuy_24h"
                            className="text-center lineMyChart text-nowrap"
                            style={{
                                backgroundColor: 'rgb(22, 185, 134)',
                                width: `${buyVolumePercentage}%`,
                                transition: 'width 2s',
                            }}
                        >
                            <span className="bTotalBase_24h">{buyVolume} USDT</span> |{' '}
                            <span className="bTotalPrc_24h">{buyVolumePercentage} %</span>
                        </span>
                        <span
                            id="lineChartSell_24h"
                            className="text-center lineMyChart text-nowrap"
                            style={{
                                backgroundColor: 'rgb(220, 57, 80)',
                                width: `${sellVolumePercentage}%`,
                                transition: 'width 2s',
                            }}
                        >
                            <span className="sTotalBase_24h">{sellVolume} USDT</span> |{' '}
                            <span className="sTotalPrc_24h">{sellVolumePercentage} %</span>
                        </span>
                    </div>
                </div>
            </td>
        </tr>
    );
};



const RightCard = ({ data, symbol }) => {
    return (
        <div class="col-lg-7 col-md-12 col-sm-12 col-12 buysell px-3 mb-5">
            <div class="card pt-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-2 col-md-2 col-sm-2 col-2  livetrade">
                        <img
                            width="100%"
                            class="ml-2"
                            src="./assets/images/binance.png"
                        />
                    </div>
                    <div class="col-lg-10 col-md-10 col-sm-10 col-10 pl-2 pt-3 liveupdate">
                        <h5>
                            <strong>{symbol}</strong> - Binance
                        </h5>
                        <h5>LIVE TRADE UPDATES</h5>
                    </div>
                </div>
                <table class="table table-borderless my-0 ">
                    <tbody>
                      {data['24h'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'24 Hours'}
                                totalAsset={data['24h'][5]}
                                buyAsset={data['24h'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}
                        {data['1hr'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'1 Hour'}
                                totalAsset={data['1hr'][5]}
                                buyAsset={data['1hr'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}

                        {data['30m'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'30 Minutes'}
                                totalAsset={data['30m'][5]}
                                buyAsset={data['30m'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}

                        {data['15m'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'15 Minutes'}
                                totalAsset={data['15m'][5]}
                                buyAsset={data['15m'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}

                        {data['5m'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'5 Minutes'}
                                totalAsset={data['5m'][5]}
                                buyAsset={data['5m'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}
                         {data['1m'] !== undefined && data['1d'] !== undefined ? (
                            <TradeComponent
                                title={'1 Minute'}
                                totalAsset={data['1m'][5]}
                                buyAsset={data['1m'][9]}
                                price={data['1d'].w}
                                symbol={symbol}
                            />
                        ) : null}

                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default RightCard;