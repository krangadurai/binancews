import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

import { ThreeDots } from "react-loader-spinner";

const TopLose = () => {
  return (
    <>
      <div>
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
        <div className="table-container">
          <section id="pairs">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card">
                    <div class="card-header">
                      <div class="row">
                        <div class="col-lg-9">
                          <h1>
                            <img
                              width="50px"
                              class="ml-2"
                              src="./assets/images/binance.png"
                            />
                            Top Loser BINANCE PAIRS
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div class="horizontal_scroll">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TopLose;
