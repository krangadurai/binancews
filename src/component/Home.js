import React, { useEffect, useMemo, useState } from "react";
import "../App.css";

import { Link } from "react-router-dom";
import PairBinance from "./PairBinance"; 

const Home = () => {
    return (
        <>
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
            <div className="container"  style={{ marginTop: "100px",background:"#fff" }}>
                 <PairBinance/>
            </div>
        </>
    );
};

export default Home;
