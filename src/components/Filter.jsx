import { useContext, useState } from "react";
import { DataContext } from "./App";

function Filter({ setPlanet }) {
  const data = useContext(DataContext);
  const [item, setItem] = useState("Moon");

  const click = (item) => {
    setItem(item.name);
    setPlanet(item.name);
  };

  const getLinkClasses = (name) => {
    return name === item
      ? "border-b-white"
      : "group-hover:border-b-gray-500 border-b-transparent";
  };

  return (
    <div className="w-full">
      <ul className="flex w-full  md:w-[70%] xl:w-[50%] justify-between">
        {data?.destinations.map((item, i) => (
          <div key={i} className="group">
            <li
              onClick={() => click(item)}
              className={`text-white uppercase text-xs cursor-pointer font-mono tracking-widest pb-2 border-b-2 transition-all duration-300 ${getLinkClasses(
                item.name
              )}`}
            >
              {item.name}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
