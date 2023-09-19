import React from 'react'

const News = ({title, imgSrc, content, url}) => {
  return (
    <>
       <div className='flex flex-col gap-y-4 justify-center items-center mt-[40rem]'>
          <div className='border-2 rounded-md p-2'>
              <h5 className='w-[40rem] font-bold'>{title}</h5>
              <img className='h-[25rem] w-[40rem]' src={imgSrc} alt={title} />
              <p className='w-[40rem]'>{content}</p>
              <a className='p-4 underline text-blue-400' href={url} target="blank">view more</a>
              </div>
        </div>
    </>
  )
}

export default News
