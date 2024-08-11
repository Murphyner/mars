import React, { useContext, useState } from 'react'
import { DataContext } from './App';

function Filter2({setMember}) {
    const data = useContext(DataContext)
    console.log(data?.crew);
    const [item, setItem] = useState('Douglas Hurley'); 

    function click(member) {
        setItem(member?.name)
        setMember(member?.name)
    }
    function opacitiy(name){
        return item === name ? 'opacity-100' : 'opacity-35' ;
    }

  return (
    <div className='pt-10 pl-3 mb-4 w-full'>
        <ul className='flex w-[20%] justify-between'>
            {data?.crew.map((item , i) => (
                <li onClick={() => click(item)} className={`rounded-[50%] bg-white  w-3 h-3 cursor-pointer ${opacitiy(item.name)}`} key={i}></li>
            )
            )}
            
      </ul>
    </div>
  )
}

export default Filter2
