import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Select, Input, Button, Table, Typography } from 'antd';

const { Option } = Select;
const { Text } = Typography;

const Exchanges = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USD');
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

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
    <div style={{ margin: '20px' }}>
      <Row gutter={16}>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Card title={`Order Book - ${selectedPair}`}>
            <div>
              <Select defaultValue='BTC/USD' style={{ width: '100%' }} onChange={(value) => setSelectedPair(value)}>
                <Option value='BTC/USD'>BTC/USD</Option>
                {/* Add more trading pairs as needed */}
              </Select>
            </div>
            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span={12}>
                <Card title='Buy Orders' style={{ height: '300px', overflowY: 'auto' }} size='small'>
                  <Table dataSource={buyOrders} columns={columns} pagination={false} size='small' />
                </Card>
              </Col>
              <Col span={12}>
                <Card title='Sell Orders' style={{ height: '300px', overflowY: 'auto' }} size='small'>
                  <Table dataSource={sellOrders} columns={columns} pagination={false} size='small' />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={24} style={{ marginBottom: '20px' }}>
          <Card title='Trade Execution' style={{ marginTop: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
              <Input placeholder='Quantity' style={{ width: '80px', marginRight: '10px' }} />
              <Input placeholder='Price' style={{ width: '80px', marginRight: '10px' }} />
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
    </div>
  );
};

export default Exchanges;
