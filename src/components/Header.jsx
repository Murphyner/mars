import Nav from "./Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav2 from "./Nav2";
import { useState } from "react";


function Header() {
  const [toggle, setToggle] = useState(false)
  return (
      <header className="h-[30vh]">
        <div className="container mx-auto flex justify-between items-center   my-7 float-right">
          <div className="pr-7 pl-5 h-[48px]">
            <img className="w-[48px] h-[48px]" src="/assets/img/logo.svg" alt="" />
          </div>
          <div className="hidden sm:inline-block relative flex-1">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-white/25"></div>
          </div>
          <Nav />
          <Nav2 setToggle={setToggle} toggle={toggle} />
          {toggle ? <GiHamburgerMenu onClick={() => setToggle(!toggle)} className="text-white text-3xl block sm:hidden mr-5 cursor-pointer" /> :''}
        </div>
      </header>
   
    
    
  );
}

export default Header;
