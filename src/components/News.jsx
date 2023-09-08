import React from 'react'

const News = ({title, imgSrc, content, url}) => {
  return (
    <>
     <div className='flex flex-col gap-y-4 justify-center items-center'>
         <h5 className='w-96'>{title}</h5>
         <img className='h-[20rem] w-[30rem]' src={imgSrc} alt={title} />
         <p className='w-96'>{content}</p>
         <a className='p-4' href={url} target="blank">view more</a>
      </div>
    </>
  )
}

export default News
