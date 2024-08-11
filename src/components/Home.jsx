import { Link } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="home h-[100%] py-[20px] lg:min-h-screen">
      <Header />
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 w-full">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <h1 className="text-white text-xl md:text-2xl tracking-widest uppercase text-left sm:whitespace-nowrap w-[80%]">
              So, you want to travel to
              <span className="text-white block tracking-widest text-5xl sm:text-7xl md:text-9xl">
                SPACE
              </span>
            </h1>
            <p className="text-white pt-5 w-[75%] text-justify">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="col-span-2 md:col-span-1  justify-center items-center group flex row-span-1 md:justify-end lg:justify-center">
            <div className="w-[270px] h-[270px] rounded-[50%]  flex justify-center items-center group-hover:border-[20px] group-hover:border-white group-hover:border-opacity-20 transition-all duration-200"><Link to={"/destination"} className="uppercase text-2xl tracking-widest bg-white rounded-[50%] w-[230px] h-[230px] flex items-center justify-center  transition-all duration-400 ">explore</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
