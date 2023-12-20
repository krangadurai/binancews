// import { React, useState, useEffect } from "react";
// import { Space, Table, Tag,Input,Button } from 'antd';
// import 'antd/dist/reset.css';
// import './style.css'; // Import your CSS file
// import { SearchOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';




// const PairBybit = () => {

//     const [incomingData, setIncomingData] = useState([]);

//     // Paginated data and state management
//     const [currentPage, setCurrentPage] = useState(1); // Set default page here


//     const [tickers, setTickers] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://api-testnet.bybit.com/v5/market/tickers?category=linear');
//                 console.log(response.data)
//                 setTickers(response.data.result);
//             } catch (error) {
//                 // Handle errors
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);


   
//     const columnsPair = [
//             {
//                 title: 'Symbols',
//                 dataIndex: 'symbol',
//                 key: 'symbol',
//                 sorter: (a, b) => a.symbol.localeCompare(b.symbol),
//                 render: (text) => text || '',
//                 render: (text) => <Link to={`/${text}`}>{text.substring(0, text.length - 4)}</Link>,
//                 filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//                     <div style={{ padding: 8 }}>
//                         <Input
//                             placeholder="Search symbol"
//                             value={selectedKeys[0]}
//                             onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//                             onPressEnter={() => handleSearch(selectedKeys, confirm, 'symbol')}
//                             style={{ width: 188, marginBottom: 8, display: 'block' }}
//                         />
//                         <Button
//                             type="primary"
//                             onClick={() => handleSearch(selectedKeys, confirm, 'symbol')}
//                             icon={<SearchOutlined />}
//                             size="small"
//                             style={{ width: 90 }}
//                         >
//                             Search
//                         </Button>
//                         <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//                             Reset
//                         </Button>
//                     </div>
//                 ),
//                 onFilter: (value, record) =>
//                     record.symbol.toLowerCase().includes(value.toLowerCase())
//             },
//             {
//                 title: 'Last Price',
//                 dataIndex: 'lastPrice',
//                 key: 'lastPrice',
//                 sorter: (a, b) => parseFloat(a.lastPrice) - parseFloat(b.lastPrice),
//                 render: (text) => parseFloat(text) || ''
//             },
//             {
//                 title: '1 Hour Change',
//                 dataIndex: 'hour1Change',
//                 key: 'hour1Change',
//                 sorter: (a, b) => parseFloat(a.hour1Change) - parseFloat(b.hour1Change),
//                 render: (text) => (
//                     <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
//                         {`${parseFloat(text).toFixed(2)}%` || ''}
//                     </span>
//                 )
//             },
//             {
//                 title: '4 Hour Change',
//                 dataIndex: 'hour4Change',
//                 key: 'hour4Change',
//                 sorter: (a, b) => parseFloat(a.hour4Change) - parseFloat(b.hour4Change),
//                 render: (text) => (
//                     <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
//                         {`${parseFloat(text).toFixed(2)}%` || ''}
//                     </span>
//                 )
//             },
//             {
//                 title: '24 Hour Change',
//                 dataIndex: 'hour24Change',
//                 key: 'hour24Change',
//                 sorter: (a, b) => parseFloat(a.hour24Change) - parseFloat(b.hour24Change),
//                 render: (text) => (
//                     <span style={{ color: parseFloat(text) < 0 ? 'red' : 'green' }}>
//                         {`${parseFloat(text).toFixed(2)}%` || ''}
//                     </span>
//                 )
//             },
//             {
//                 title: '1 Hour Volume',
//                 dataIndex: 'hour1Volume',
//                 key: 'hour1Volume',
//                 sorter: (a, b) => parseFloat(a.hour1Volume) - parseFloat(b.hour1Volume),
//                 render: (text) => parseFloat(text).toFixed(2) || ''
//             },
//             {
//                 title: '4 Hour Volume',
//                 dataIndex: 'hour4Volume',
//                 key: 'hour4Volume',
//                 sorter: (a, b) => parseFloat(a.hour4Volume) - parseFloat(b.hour4Volume),
//                 render: (text) => parseFloat(text).toFixed(2) || ''
//             },
//             {
//                 title: '24 Hour Volume',
//                 dataIndex: 'hour24Volume',
//                 key: 'hour24Volume',
//                 sorter: (a, b) => parseFloat(a.hour24Volume) - parseFloat(b.hour24Volume),
//                 render: (text) => parseFloat(text).toFixed(2) || ''
//             },
//         ];


//     const handleSearch = (selectedKeys, confirm, dataIndex) => {
//         confirm();
//         const filteredData = cryptoData.filter((item) =>
//             item[dataIndex].toLowerCase().includes(selectedKeys[0].toLowerCase())
//         );


//         setCryptoData(filteredData);
//     };


//     const handleReset = (clearFilters) => {
//         clearFilters();
//     };




//     const handlePaginationChange = (page) => {
//         setCurrentPage(page);
//     };
//     return (
//         <Table
//             columns={columnsPair}
//             dataSource={tickers}
//             className="custom-table"
//             pagination={{
//                 current: currentPage,
//                 onChange: handlePaginationChange,
//             }}
//         />
//     );

// }
// export default PairBybit;


