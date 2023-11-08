import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import News from '../components/News';
import Hero from './Hero';


const Home = ({ cat }) => {

    const [news, setNews] = useState([])

    useEffect(() => {

        const fetchTopHeadings = async () => {
           const { data } = await axios.get(
           
           cat 
            ?
            `https://newsdata.io/api/1/news?apikey=pub_313847ddf3a9459fab992612edcae66828c00&category=${cat}&country=in&language=en`
           : `https://newsdata.io/api/1/news?apikey=pub_313847ddf3a9459fab992612edcae66828c00&country=in&language=en`
         
            )


        console.log(data);
        const news = data.results;
        setNews(news);
       
    }

      fetchTopHeadings();
    },[cat])

  return (
    <>
      <Hero />
      <h1 className='text-2xl font-bold underline p-10'>Top HeadLines</h1>
      {
  news ? news.map((i) => (
    <News 
      key={i.article_id} 
      title={i.title?i.title:""}
      imgSrc={i.image_url}
      content={i.content}
      url={i.link}
    />
  )) : "Loading...."
}
    </>
  )
}

export default Home