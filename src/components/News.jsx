import React, {useState} from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from "moment";

import { useGetCryptoNewsQuery } from '../services/cryptoNewApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title} = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'; 

const News = ({simplified}) => {
 
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data} = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery( { newsCategory, count: simplified ? 6 : 12});
  console.log(cryptoNews);
  
  if(!cryptoNews || !cryptoNews.articles) return 'Loading ...';
  const articlesToDisplay = simplified ? cryptoNews.articles.slice(0, 6) : cryptoNews.articles;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24} >
          <Select
            showSearch
            className='select-news'
            placeholder="Select a Cryto"
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency" >Cryptocurrency</Option>
            {data?.data?.coins.map( (coin) => (<Option key={coin.id} value={coin.name}>{coin.name}</Option>))}
          </Select>
        </Col>
      )}
      {articlesToDisplay.map((news, i) => (

        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreference" >
                <div className="news-image-container" >
                  <Title className='new-title' level={4}>{news.title}</Title>
                  <img style={{maxWidth: '90px', maxHeight: '100px'}} src={news.urlToImage|| demoImage} alt="news"/>
                </div>
                <p> {news.description > 100 
                        ? `${news.description.substring(0,10)}...` 
                        : news.description} 
                </p>
                <div className="provider-container">
                  {/* <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text> */}
                </div>
              </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
