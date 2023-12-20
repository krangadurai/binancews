import { React, useState, useEffect } from "react";
import { Space, Table, Tag,Input,Button } from 'antd';
import 'antd/dist/reset.css';
import './style.css'; // Import your CSS file
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const PairBinance = () => {

    const [incomingData, setIncomingData] = useState([]);

    // Paginated data and state management
    const [currentPage, setCurrentPage] = useState(1); // Set default page here


    const [cryptoData, setCryptoData] = useState([]);
    const [prevPrices, setPrevPrices] = useState({});
    useEffect(() => {
        const startWebSocket = () => {
            const socket = new WebSocket("ws://localhost:4589",);

            socket.onmessage = (event) => {
                console.log("webSocket connected");
                let data = JSON.parse(event.data);

                const filteredData = convertfunction(data)
                filteredData.sort((a, b) => b.hour24Volume - a.hour24Volume);

                filteredData.forEach((item) => {
                    if (!prevPrices[item.symbol]) {
                        setPrevPrices((prevPrices) => ({
                            ...prevPrices,
                            [item.symbol]: item
                        }));
                    } else {
                        setTimeout(() => {
                            setPrevPrices((prevPrices) => ({
                                ...prevPrices,
                                [item.symbol]: item
                            }));
                        }, 3000);
                    }
                });

                setCryptoData(filteredData);
                socket.close();
            };

            socket.onclose = (e) => {
                console.log("Disconnected webSocket");
                setTimeout(() => {
                    startWebSocket();
                }, 3000);
            };
        };

        startWebSocket();
    }, []);
   
    const columnsPair = [
        {
            title: 'Symbols',
            dataIndex: 'symbol',
            key: 'symbol',
            sorter: (a, b) => a.symbol.localeCompare(b.symbol),
            render: (text) => text || '',
            render: (text) => <Link to={`/${text}`}>{ text.substring(0, text.length - 4)}</Link>,
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        placeholder="Search symbol"
                        value={selectedKeys[0]}
                        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm, 'symbol')}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, 'symbol')}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </div>
            ),
            onFilter: (value, record) =>
                record.symbol.toLowerCase().includes(value.toLowerCase())
        },
        {
            title: 'Last Price',
            dataIndex: 'lastPrice',
            key: 'lastPrice',
            sorter: (a, b) => parseFloat(a.lastPrice) - parseFloat(b.lastPrice),
            render: (text) => parseFloat(text) || ''
        },
        {
            title: '1 Hour Change',
            dataIndex: 'hour1Change',
            key: 'hour1Change',
            sorter: (a, b) => parseFloat(a.hour1Change) - parseFloat(b.hour1Change),
            render: (text) => (
                <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
                    {`${parseFloat(text).toFixed(2)}%` || ''}
                </span>
            )
        },
        {
            title: '4 Hour Change',
            dataIndex: 'hour4Change',
            key: 'hour4Change',
            sorter: (a, b) => parseFloat(a.hour4Change) - parseFloat(b.hour4Change),
            render: (text) => (
                <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
                    {`${parseFloat(text).toFixed(2)}%` || ''}
                </span>
            )
        },
        {
            title: '24 Hour Change',
            dataIndex: 'hour24Change',
            key: 'hour24Change',
            sorter: (a, b) => parseFloat(a.hour24Change) - parseFloat(b.hour24Change),
            render: (text) => (
                <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
                    {`${parseFloat(text).toFixed(2)}%` || ''}
                </span>
            )
        },
        {
            title: '1 Hour Volume',
            dataIndex: 'hour1Volume',
            key: 'hour1Volume',
            sorter: (a, b) => parseFloat(a.hour1Volume) - parseFloat(b.hour1Volume),
            render: (text) => parseFloat(text).toFixed(2) || ''
        },
        {
            title: '4 Hour Volume',
            dataIndex: 'hour4Volume',
            key: 'hour4Volume',
            sorter: (a, b) => parseFloat(a.hour4Volume) - parseFloat(b.hour4Volume),
            render: (text) => parseFloat(text).toFixed(2) || ''
        },
        {
            title: '24 Hour Volume',
            dataIndex: 'hour24Volume',
            key: 'hour24Volume',
            sorter: (a, b) => parseFloat(a.hour24Volume) - parseFloat(b.hour24Volume),
            render: (text) => parseFloat(text).toFixed(2) || ''
        },
    ];
    

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        const filteredData = cryptoData.filter((item) =>
            item[dataIndex].toLowerCase().includes(selectedKeys[0].toLowerCase())
        );
    
       
        setCryptoData(filteredData);
    };
    

    const handleReset = (clearFilters) => {
        clearFilters();
    };


    const convertfunction = (rawData) => {
        let convertedData = [];
        for (const symbol in rawData) {
            if(symbol.endsWith('USDT')){
                const tickerData = rawData[symbol];
                const lastPrice = rawData[symbol]?.['24hrTicker']?.c;
                const hour1Change = rawData[symbol]?.['1hTicker']?.P;
                const hour4Change = rawData[symbol]?.['4hTicker']?.P;
                const hour24Change = rawData[symbol]?.['24hrTicker']?.P;
                const hour1Volume = rawData[symbol]?.['1hTicker']?.q;
                const hour4Volume = rawData[symbol]?.['4hTicker']?.q;
                const hour24Volume = rawData[symbol]?.['24hrTicker']?.q;
    
    
                convertedData.push({
                    symbol,
                    lastPrice,
                    hour1Change,
                    hour4Change,
                    hour24Change,
                    hour1Volume,
                    hour4Volume,
                    hour24Volume,
                });
            }
           
        }
        return convertedData
    }

    const handlePaginationChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <Table
            columns={columnsPair}
            dataSource={cryptoData}
            className="custom-table" 
            pagination={{
                current: currentPage,
                onChange: handlePaginationChange,
            }}
        />
    );

}
export default PairBinance;


