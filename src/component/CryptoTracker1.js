import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CryptoData = () => {
 
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
                  {" "}
                  <i
                    class="fa fa-arrow-left success text-success"
                    aria-hidden="true"
                  ></i>{" "}
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
                  <div class="col-lg-5 col-md-12 col-sm-12 col-12 mt-3 mb-5">
                    <div class="card pt-0">
                      <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3 col-sm-2 col-2 pl-2 currencysybmol">
                          <img
                            class="ml-2"
                            width="100%"
                            src=""
                          />
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8 col-8 pl-2 pt-3 currencyprice">
                          <h5>543 - Price</h5>
                          <h4>54</h4>
                        </div>
                      </div>

                      <table class="table table-borderless alldata py-0 my-0">
                        <tbody>
                          <tr class="top">
                            <td class="right">
                              <p>
                                24h Change
                                <br />
                                <span
                                  style={{
                                    color: "red",
                                  }}
                                >
                                  543 %
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                Volume
                                <br />
                                <span>
                                  654
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <p>
                                24h Low
                                <br />
                                <span>543</span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                24h High
                                <br />
                                <span>4532</span>
                              </p>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <p>
                                24h Buy Worth
                                <br />
                                <span>543 USDT</span>
                                <br />
                                <span class="text-primary">
                                  5432%
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                24h Sell Worth
                                <br />
                                <span>6543 USDT</span>
                                <br />
                                <span class="text-primary">
                                  543%
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <p>
                                Market Buy
                                <br />
                                <span class="text-success">
                                  <i
                                    class="fa fa-arrow-up success text-success"
                                    aria-hidden="true"
                                  ></i>
                                  &nbsp;2.37
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                Market Sell
                                <br />
                                <span class="text-danger">
                                  <i
                                    class="fa fa-arrow-up success text-danger"
                                    aria-hidden="true"
                                  ></i>
                                  &nbsp;107,285,075
                                </span>
                              </p>
                            </td>
                          </tr>

                          <tr class="top">
                            <td class="right">
                              <p>
                                 All Time High
                                <br />
                                <span class="text-success">
                                 453
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                 Down from ATH
                                <br />
                                <span class="text-danger">
                                432 %
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <p>
                                1 Hour Change
                                <br />
                                <span class="text-success">
                                  43 %
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <p>
                                7 Days Change
                                <br />
                                <span class="text-success">
                                 54 %
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <p>
                                30 Days Change
                                <br />
                                <span class="text-success">
                                  54 %
                                </span>
                              </p>
                            </td>
                            <td class="right">
                              <a
                                class="btn"
                                href=""
                                target="_blank"
                              >
                                Live Order Book!
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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
                            <strong>VFCDS</strong> - Binance
                          </h5>
                          <h5>LIVE TRADE UPDATES</h5>
                        </div>
                      </div>
                      <table class="table table-borderless my-0 ">
                        <tbody>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>24 Hour Trades</span> |{" "}
                                  <span>
                                    BOUGHT: VFDC{" "}
                                    VFDC
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: FRDE{" "}
                                    FVDC
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                      FVCD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                      43 %
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      GFD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      432 %
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>1 Hour Trades</span> |{" "}
                                  <span>
                                    BOUGHT: DFS{" "}
                                    FD
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: GDF{" "}
                                    DFS
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                     GFD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                      DF
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `543%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      54 USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      543
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>30 Minutes Trades</span> |{" "}
                                  <span>
                                    BOUGHT: 453{" "}
                                    54
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: 543{" "}
                                    ER
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `43%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                     BV USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                      FD %
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      FD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      DF %
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>15 Minutes Trades</span> |{" "}
                                  <span>
                                    BOUGHT: GFD{" "}
                                    VD
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: FVD{" "}
                                    VDF
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                      VCDS USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                     DF %
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      FD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      FGD %
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>5 Minutes Trades</span> |{" "}
                                  <span>
                                    BOUGHT: GF{" "}
                                    HGFD
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: GHFD{" "}
                                    HFGD
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `56%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                      GHFD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                      HGF %
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `50%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      FD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      HGFD %
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr class="top">
                            <td class="right">
                              <div class="trade">
                                <h6>
                                  <span>1 Minutes Trades</span> |{" "}
                                  <span>
                                    BOUGHT: GBFVD{" "}
                                    FEASD
                                  </span>{" "}
                                  |{" "}
                                  <span>
                                    SOLD: HGFD{" "}
                                    HGFD
                                  </span>
                                </h6>
                                <div className="bar_chart_inside">
                                  <span
                                    id="lineChartBuy_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(22, 185, 134)",
                                      width: `543%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="bTotalBase_24h">
                                      GFD USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="bTotalPrc_24h">
                                      GFD %
                                    </span>
                                  </span>
                                  <span
                                    id="lineChartSell_24h"
                                    className="text-center lineMyChart text-nowrap"
                                    style={{
                                      backgroundColor: "rgb(220, 57, 80)",
                                      width: `54%`,
                                      transition: "width 2s",
                                    }}
                                  >
                                    <span className="sTotalBase_24h">
                                      TGRF USDT
                                    </span>{" "}
                                    |{" "}
                                    <span className="sTotalPrc_24h">
                                      FGD %
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="history">
              <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                    <div class="card">
                      <div class="card-header">
                        <h1>24 Hours History</h1>
                      </div>
                      <div class="horizontal_scroll">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="history">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                    <div class="card">
                      <div class="card-header">
                        <h1>30 Days History</h1>
                      </div>
                      <div class="horizontal_scroll">
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="live_btn">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-12 mb-5 p-5">
                    <a
                      class="btn"
                      href=""
                      target="_blank"
                    >
                      Live Order Book!
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
          </>
      </div>
    </>
  );
};

export default CryptoData;
