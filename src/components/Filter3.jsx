import React, { useContext, useState } from 'react'
import { DataContext } from './App'

function Filter3({setMember}) {
    const data = useContext(DataContext)
    const [item, setItem] = useState('Launch vehicle'); 

function click(item) {
        setItem(item.name)
        setMember(item.name)
    }

function classes(name) {
    return item === name ? "bg-white text-black" : "border-[1px] border-white border-opacity-40 group-hover:border-opacity-100 text-white " 
}

  return (
    <div className='w-[50%] md:w-[15%]'>
      <ul className='flex md:flex-col justify-between h-full'>
        {data?.technology.map((item , i) => (
            <div key={i} className='group w-[10%]'>  
                <li onClick={() => click(item)} className={`rounded-[50%]   w-[66px] h-[66px]  flex items-center justify-center text-2xl cursor-pointer ${classes(item.name)} transition-all duration-300`} key={i}>{i + 1}</li>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Filter3
