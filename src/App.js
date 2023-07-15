import React from 'react';
import {Routes, Route} from "react-router-dom";
import { Layout, Typography, Space} from 'antd';

import { HeartOutlined } from '@ant-design/icons';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from "./components";
import './App.css';

const App = () => {
  return (
      <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            {/* <Route exact path="/crypto/:coinId" element={<CryptoDetails />} /> */}
                            <Route exact path="/coin/:uuid" element={<CryptoDetails />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer" >
                    <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                        Made with <HeartOutlined /> by Raj Sinha <br />
                    </Typography.Title>
                    <Space>
                        <a href='https://github.com/r-a-j-s-i-n-h-a' target='blank'>GitHub</a>
                        <a href='https://www.linkedin.com/in/raj-sinha-a539bb223/' target='blank'>LinkedIn</a>
                    </Space>
                </div>
            </div>
        </div>
  );
}

export default App