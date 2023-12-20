import { React, useState, useEffect } from 'react';

const PercentageChange = ({ oldValue, newValue }) => {
    let col = {}; // Define an empty object for styles

    if (oldValue === undefined || newValue === undefined) {
        return <div>NaN</div>; // Display a message if values are not provided
    }

    const percentageChange = ((newValue - oldValue) / oldValue) * 100;

    // Apply different styles based on the percentageChange value
    if (percentageChange < 0) {
        col = { color: 'red' }; // Negative change: red color
    } else {
        col = { color: 'green' }; // Non-negative change: green color
    }

    return (
        <div style={col}>
            {percentageChange.toFixed(2)}%
        </div>
    );
};
const formattedNumber = (value) => {
    let parsedNumber = parseFloat(value);
    let formatted = parsedNumber.toLocaleString(undefined, { maximumFractionDigits: 2 });
    return formatted;
  };
  
const LeftCard = ({ data, symbol, price }) => {
    let symbolLowerCase = symbol.toLowerCase();
    const [tradeData, setTradeData] = useState(null);
    const [Loadingsocket, setLoadingSocket] = useState(true);


    return (
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
                        <h5>{symbol} - Price</h5>
                        {data['1d'] !== undefined ? (
                            <h4>
                               {formattedNumber(data['1d'].c)}
                            </h4>
                        ) : null}

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
                                        {data['1d'] !== undefined ? (
                                            <span style={{ color: data['1d'].P > 0 ? 'green' : 'red' }}>
                                                {data['1d'].P}
                                            </span>
                                        ) : null}
                                    </span>
                                </p>
                            </td>
                            <td class="right">
                                <p>
                                    Volume
                                    <br />
                                    <span>

                                        {data['1d'] !== undefined && data['1d'].q !== undefined ? (
                                            <span>
                                                {formattedNumber(data['1d'].q)}
                                            </span>
                                        ) : null}
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr class="top">
                            <td class="right">
                                <p>
                                    24h Low
                                    <br />

                                    {data['1d'] !== undefined && data['1d'].q !== undefined ? (
                                        <span>
                                            {formattedNumber(data['1d'].l)}
                                        </span>
                                    ) : null}

                                </p>
                            </td>
                            <td class="right">
                                <p>
                                    24h High
                                    <br />
                                    {data['1d'] !== undefined && data['1d'].q !== undefined ? (
                                        <span>
                                            {formattedNumber(data['1d'].h)}
                                        </span>
                                    ) : null}
                                </p>
                            </td>
                        </tr>
                        <tr class="top">
                            <td class="right">
                                <p>
                                    24h Buy Worth
                                    <br />
                                    {data['1d'] !== undefined && data['24h'] !== undefined ? (
                                        <span>
                                           $ {formattedNumber(data['24h'][10])} USDT
                                        </span>
                                    ) : null}
                                    <br />
                                    <span class="text-primary">
                                    {data['1d'] !== undefined && data['24h'] !== undefined ? (
                                     ((parseFloat(data['24h'][10])/parseFloat(data['1d'].q))*100 ).toFixed(2)
                                     ) : null} %
                                     </span>
                                </p>
                            </td>
                            <td class="right">
                                <p>
                                    24h Sell Worth
                                    <br />
                                    {data['1d'] !== undefined && data['24h'] !== undefined ? (
                                        <span>
                                            $ {formattedNumber(parseFloat(data['1d'].q)-parseFloat(data['24h'][10]))} USDT
                                        </span>
                                    ) : null}
                                    <br />
                                    <span class="text-primary">
                                    {data['1d'] !== undefined && data['24h'] !== undefined ? (
                                     ((parseFloat(parseFloat(data['1d'].q)-parseFloat(data['24h'][10]))/parseFloat(data['1d'].q))*100 ).toFixed(2)
                                     ) : null} %
                                    </span>
                                </p>
                            </td>
                        </tr>
                        {/* <tr class="top">
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
                        </tr> */}
                        <tr class="top">
                            <td class="right">
                                <p>
                                    1 Hour Change
                                    <br />
                                    <span class="text-success">
                                        {data['1h'] !== undefined ? (
                                            <span style={{ color: data['1h'].P > 0 ? 'green' : 'red' }}>
                                                {data['1h'].P}
                                            </span>
                                        ) : null}
                                    </span>
                                </p>
                            </td>
                            <td class="right">
                                <p>
                                    7 Days Change
                                    <br />
                                    {data[`${symbolLowerCase}_1w`] !== undefined ? (
                                        <PercentageChange oldValue={data[`${symbolLowerCase}_1w`].k.o} newValue={data[`${symbolLowerCase}_1w`].k.c} />
                                    ) : null}
                                </p>
                            </td>
                        </tr>
                        <tr class="top">
                            <td class="right">
                                <p>
                                    30 Days Change
                                    <br />
                                    {data[`${symbolLowerCase}_1M`] !== undefined ? (
                                        <PercentageChange oldValue={data[`${symbolLowerCase}_1M`].k.o} newValue={data[`${symbolLowerCase}_1M`].k.c} />
                                    ) : null}
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
        </div >
    )


}

export default LeftCard;