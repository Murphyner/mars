import { useContext, useEffect, useState } from "react"
import Header from "./Header"
import { DataContext } from "./App"
import Filter from "./Filter"

function Destination() {
  const data = useContext(DataContext)

  const [planet , setPlanet] = useState('Moon')
  const [fade ,setFade] = useState(true)


  useEffect(() => {
    setFade(false);
  }, [planet]);

  function animation(newPlanet) {
    if (planet !== newPlanet) {
      setFade(true); 
      setTimeout(() => {
        setPlanet(newPlanet);
        setFade(false); 
      }, 1000);
    } else {
    }
  }

  const { description, distance, travel, images ,name } = data?.destinations.find((item) => item.name === planet) || {};


  return (
    <div className="dest min-h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-2 w-[90%] mx-auto">
          <div className="col-span-2 md:col-span-1 grid-cols-1 grid-rows-3">
            <h2 className="row-span-1 text-white text-xl md:text-2xl font-medium tracking-widest pb-5 flex justify-center"><span className="opacity-30">01</span> PICK YOUR DESTIANTION</h2>
            <div className="row-span-1"></div>
            <div className={`row-span-1 ${fade ? "fade-out" : 'fade-in'} flex justify-center` }><img className="max-w-[80%]" src={images?.webp} alt="" /></div>
          </div>
          <div className={`col-span-2 md:col-span-1 grid grid-rows-[25px_20px_290px_auto]`}>
            <div className="row-span-1"></div>
            <Filter className='row-span-1 w-full' setPlanet={animation} />
            <div className={`row-span-1 w-full pt-2 ${fade ? "slide-left" : "slide-right"} flex flex-col items-center md:block `}>
              <h2 className="text-6xl md:text-8xl text-white uppercase">{name}</h2>
              <p className="text-white w-full text-center md:text-left md:w-[70%] tracking-wide pt-3 pb-12 border-b-[1px] border-opacity-20 border-gray-400">{description}</p>
            </div>
            <div className={`pt-4 flex flex-col md:flex-row w-[90%] xl:w-[70%] items-center justify-between md:justify-between ${fade ? "slide-left" : "slide-right"}`}>
              <div>
                <h3 className="uppercase text-sm text-white tracking-wider opacity-35">Avg.distance</h3>
                <p className="text-white uppercase text-2xl">{distance}</p>
              </div>
              <div>
                <h3 className="uppercase text-sm text-white tracking-wider opacity-35">Est. travel time</h3>
                <p className="text-white uppercase text-xl md:text-2xl">{travel}</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
