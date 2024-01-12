import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select, Input, Button, Table, Typography } from 'antd';

const { Option } = Select;
const { Text } = Typography;

const Exchanges = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

  // Fetch data for the selected trading pair
  useEffect(() => {
    // const fetchData = async () => {
    //   const buyOrdersResponse = await fetchBuyOrders(selectedPair);
    //   const sellOrdersResponse = await fetchSellOrders(selectedPair);
    //   setBuyOrders(buyOrdersResponse);
    //   setSellOrders(sellOrdersResponse);
    // };
    // fetchData();
  }, [selectedPair]);

  const columns = [
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <div>
      <Row gutter={1}>
        <Col span={24}>
          <Card title={`Order Book - ${selectedPair}`}>
            <div>
              <Select defaultValue='BTC/USD' style={{ width: '100%' }} onChange={(value) => setSelectedPair(value)}>
                <Option value='BTC/USD'>BTC/USD</Option>
                {/* Add more trading pairs as needed */}
              </Select>
            </div>
            <div >
              <Row gutter={18} style={{ marginBottom: '10px' }}>
                <Col span={12}>
                  <Card title='Buy Orders' size='small'>
                    <Table dataSource={buyOrders} columns={columns} pagination={false} size='small' />
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title='Sell Orders' size='small'>
                    <Table dataSource={sellOrders} columns={columns} pagination={false} size='small' />
                  </Card>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={60}>
          <Card title='Trade Execution'>
            <div style={{ marginBottom: '10px'}}>
              <Input placeholder='Quantity' style={{ marginRight: '10px' }} />
              <Input placeholder='Price' style={{ marginRight: '10px' }} />
              <Button type='primary'>Buy</Button>
              <Button type='danger' style={{ marginLeft: '10px' }}>
                Sell
              </Button>
            </div>
            <div>
              <Text strong>Selected Trading Pair:</Text> {selectedPair}
            </div>
          </Card>
        </Col>
      </Row>
      {/* Additional components for trading history, user balances, etc. can be added here */}
    </div>
  );
};

export default Exchanges;
