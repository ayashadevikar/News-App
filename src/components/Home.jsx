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
           
            // `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7041b7213f50405a972157577c7ad627`
            // :`https://newsapi.org/v2/everything?q=apple&from=2023-10-11&to=2023-10-11&sortBy=popularity&apiKey=7041b7213f50405a972157577c7ad627`
         

             cat 
            ?
            `https://newsdata.io/api/1/news?apikey=pub_313847ddf3a9459fab992612edcae66828c00&category=${cat}&country=in`
           : `https://newsdata.io/api/1/news?apikey=pub_313847ddf3a9459fab992612edcae66828c00&country=in`
         
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
  news ? news.map((i, id) => (
    <News 
      key={id} 
      title={i.title}
      imgSrc={i.image_url}
      content={i.content}
      url={i.url}
    />
  )) : "Loading...."
}
    </>
  )
}

export default Home