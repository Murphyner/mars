import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom'

function Nav2({setToggle , toggle}) {
  
  return (
    <nav className={`h-full w-[50%] top-0 sm:hidden z-10 fixed transition-right duration-300 ease-in-out ${toggle ? 'right-[-320px]' : 'right-0'
      } `}>
      <GrClose
        className="text-white absolute right-0 m-2 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />
      <ul className='text-white uppercase text-xs font-sans flex flex-col h-[50%] justify-evenly pl-9 pt-5'>
        <li className="cursor-pointer group"><Link onClick={() => setToggle(false)} to={"/"}><span className='font-semibold'>00</span> Home</Link></li>
        <li className="cursor-pointer group"><Link onClick={() => setToggle(false)} to={"/destination"}><span className='font-semibold'>01</span> Destination</Link></li>
        <li className="cursor-pointer group"><Link onClick={() => setToggle(false)} to={"/crew"}><span className='font-semibold'>02</span> Crew</Link></li>
        <li className="cursor-pointer group"><Link onClick={() => setToggle(false)} to={"/technology"}><span className='font-semibold'>03</span> Technology</Link></li>
      </ul>
    </nav>
  )
}

export default Nav2
