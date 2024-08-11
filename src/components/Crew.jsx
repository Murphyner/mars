import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { DataContext } from "./App";
import Filter2 from "./Filter2";

function Crew() {
  const data = useContext(DataContext);
  const [member, setMember] = useState('Douglas Hurley');
  const [fade, setFade] = useState(true);
  const { bio, images, name, role } = data?.crew?.find(item => item.name === member) || {};

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
    }
  }

  return (
    <div className="crew min-h-screen">
      <Header />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto">
          <div className="flex flex-col items-center md:items-start md:justify-between order-2 md:order-1">
            <h2 className="text-white text-2xl font-medium tracking-widest pb-5 uppercase">
              <span className="opacity-30">02</span> Meet your crew
            </h2>
            <div className={`w-full ${fade ? "slide-left" : "slide-right"}`}>
              <h4 className={`text-white opacity-50 uppercase tracking-wider  w-[50%] ${fade ? "slide-left" : "slide-right"}` }>{role}</h4>
              <h2 className="text-xl sm:text-2xl md:text-5xl text-white uppercase">{name}</h2>
              <p className="text-white w-full md:w-[70%] tracking-wide pt-3 pb-4 opacity-70">{bio}</p>
            </div>
            <Filter2 className="w-full" setMember={animation} />
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <div className={`max-w-[90%] md:max-w-[80%] ${fade ? "fade-out" : "fade-in"}`}>
              <img className="max-w-[90%] md:max-w-[80%]" src={images?.webp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
