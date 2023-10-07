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
           ? `http://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=7041b7213f50405a972157577c7ad627`
          :"http://newsapi.org/v2/top-headlines?country=in&apiKey=7041b7213f50405a972157577c7ad627"
          )
        
        console.log(data);
        const news = data.articles;
        setNews(news);
       
    }

      fetchTopHeadings();
    },[cat])

  return (
    <>
      <Hero />
      <h1 className='text-2xl font-bold underline p-10'>Top HeadLines</h1>
       {
          news ?  
           news.map((i) => (
           
               <News 
                 
                   title={i.title}
                   imgSrc={i.urlToImage}
                   key={i.id} 
                   content={i.content}
                   url={i.url}
                  
                 />
              
                  ))
                  : "Loading...."
       }
    </>
  )
}

export default Home
