import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    const getLinkClasses = (path) => {
        
        return location.pathname === path ? "border-b-white" : "group-hover:border-b-gray-500 border-b-transparent";
    };

    return (
        <nav className="hidden sm:block w-[100%] xl:w-[55%] lg:w-[70%] p-10">
            <ul className="flex justify-around text-white tracking-wide uppercase whitespace-nowrap opacity-50 text-xs font-sans">
                <li className="cursor-pointer group">
                    <Link
                        className={`pb-10 border-b-[3px] transition-all duration-300 ${getLinkClasses('/')}`}
                        to={`/`}
                    >
                        <span className="hidden md:inline-block">00</span> HOME
                    </Link>
                </li>
                <li className="cursor-pointer group">
                    <Link
                        className={`pb-10 border-b-[3px] transition-all duration-300 ${getLinkClasses('/destination')}`}
                        to={`/destination`}
                    >
                        <span className="hidden md:inline-block">01</span> DESTINATION
                    </Link>
                </li>
                <li className="cursor-pointer group">
                    <Link
                        className={`pb-10 border-b-[3px] transition-all duration-300 ${getLinkClasses('/crew')}`}
                        to={`/crew`}
                    >
                        <span className="hidden md:inline-block">02</span> CREW
                    </Link>
                </li>
                <li className="cursor-pointer group">
                    <Link
                        className={`pb-10 border-b-[3px] transition-all duration-300 ${getLinkClasses('/technology')}`}
                        to={`/technology`}
                    >
                        <span className="hidden md:inline-block">03</span> TECHNOLOGY
                    </Link>
                </li>
            </ul>
        </nav>
        
    );
}

export default Nav;
