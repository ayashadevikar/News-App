import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
 
  const [isOpen, setisOpen] = useState(false);

  const toggleActiveClass = () => {
    setisOpen(!isOpen);
  }

  return (
    <> 
     {/* mobile view */}
  
     <div className='md:hidden p-2'>
     <i onClick={toggleActiveClass} className=
   {`fas ${isOpen ? "fa-times" : "fa-bars"}`}>
   
   </i>
        
     </div>

  
     <ul className={`block bg-pink-200 w-full p-2 
      ${isOpen ?  'block' : 'hidden' }`}>
            <Link to="/"><li>Home</li></Link>
            <Link to="/business"><li>Business</li></Link>
            <Link to="/entertainment"><li>Entertainment</li></Link>
            <Link to="/health"><li>Health</li></Link>
            <Link to="/science"><li>Science</li></Link>
            <Link to="/sports"><li>Sports</li></Link>
            <Link to="/technology"><li>Technology</li></Link>
        </ul>


    {/* laptop view */}
      <div className='hidden md:flex justify-between items-center mx-8 p-4'>

      <h2 className='text-3xl font-bold'>NEWS App</h2>
       <div className='flex gap-x-4'>
            <Link to="/">Home</Link>
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
