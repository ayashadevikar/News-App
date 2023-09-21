import React from 'react'

const News = ({title, imgSrc, content, url}) => {
  return (
    <>
       {/* mobile view */}

       <div className='md:hidden flex flex-col'>
          <div className='border-2 rounded-md p-2 w-[22.2rem]'>
              <h5 className='font-bold'>{title}</h5>
              <img className='h-30 w-82' src={imgSrc} alt={title} />
              <p className=''>{content}</p>
              <a className='p-4 underline text-blue-400' href={url} target="blank">view more</a>
              </div>
        </div>

       {/* laptop view */}
       <div className='hidden md:flex flex-col justify-center items-center gap-y-4'>
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
