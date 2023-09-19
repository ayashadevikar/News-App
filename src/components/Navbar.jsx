import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <> 
      <div className='flex justify-between items-center px-4 mx-8 mt-4'>

      <h2 className='text-3xl font-bold'>NEWS App</h2>
       <div className='flex gap-x-4'>
            <Link to="/">Home</Link>
            <Link to="/general">General</Link>
            <Link to="/business">Business</Link>
            <Link to="/entertainment">Entertainment</Link>
            <Link to="/health">Health</Link>
            <Link to="/science">Science</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/technology">Technology</Link>
        </div>

        </div>
    </>
  )
}

export default Navbar
