import { useContext, useEffect, useState } from "react"
import Filter3 from "./Filter3"
import Header from "./Header"
import { DataContext } from "./App"

function Technology() {
  const data = useContext(DataContext)
  const [member, setMember] = useState('Launch vehicle')
  const [fade, setFade] = useState(true)
  const { description, images, name } = data?.technology.find(item => item.name === member) || {};
  const { portrait } = data? images : {}

  useEffect(() => {
    setFade(false);
  }, [member]);

  function animation(newMember) {
    if (member !== newMember) {
      setFade(true);
      setTimeout(() => {
        setMember(newMember);
        setFade(false);
      }, 1000);
    } else {
    }
  }
  return (
    <div className="tech min-h-screen">
      <Header />
        <div className="w-full mx-auto">
          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-2 w-full">
            <div className="col-span-2 md:col-span-1 grid  md:grid-rows-[50px_20px_280px]  md:pl-24 ">
              <h2 className="row-span-1 text-white text-2xl font-medium tracking-widest pb-5 col-span-1 uppercase flex justify-center md:justify-start gap-1"><span className="opacity-30">03</span> Space Launch 101</h2>
              <div className="row-span-1"></div>
              <div className="row-span-1 flex flex-col md:flex-row  items-center md:items-stretch">
                <Filter3 className='h-full' setMember={animation} />
                <div className={` grid grid-rows-[40px_auto_150px] ${fade ? "slide-left" : "slide-right"} w-[90%]`}>
                  <h3 className="text-white uppercase tracking-tighter row-span-1 opacity-80 pt-3 flex justify-center md:block">The Terminology...</h3>
                  <h2 className="text-white text-3xl md:text-5xl uppercase row-span-1 flex justify-center md:block"> {name}</h2>
                  <p className="text-white row-span-1 md:w-full opacity-45 flex   justify-center md:block">{description}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 grid-cols-1 flex items-center md:justify-end pt-5 md:p-0 ">
            <div className={`row-span-1 flex justify-center md:justify-end ${fade ? "fade-out" : 'fade-in'}`}><img className="max-w-[80%]" src={portrait} alt="" /></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Technology
