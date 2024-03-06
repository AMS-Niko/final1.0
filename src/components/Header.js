import * as React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
    <div className="container">

      {/* Header Start */}

      {/* Header Left */}
      <div className="relative flex items-center justify-between">
        <div className="px-4">
          <a href="#home" className="block py-6 text-lg font-bold text-red-600">
            Justice League
          </a>
        </div>
        
      {/* Header Right */}
        <div className="flex items-center px-4">
          {/* Start Of Mobile LayOut */}
          <button id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden">
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
          {/* End Of Mobile LayOut */}
          

          {/* Start Of Destop LayOut */}
          <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
            <ul className="block lg:flex">
                <li className="group">
                    <Link to="/" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                        Beranda
                    </Link>
                </li>
                <li className="group">
                    <a href="#about" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                        About US
                    </a>
                </li>
                <li className="group">
                    <a href="#portfolio" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                        Portfolio
                    </a>
                </li>
                <li className="group">
                    <a href="#clients" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                      Clients
                    </a>
                </li>
                <li className="group">
                    <a href="#blog" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                      Blog
                    </a>
                </li>
                <li className="group">
                    <Link to="/form" className="text-base text-gray-700 py-2 mx-8 flex group-hover:text-purple-700">
                      Profile
                    </Link>
                </li>
            </ul>
          </nav>
          {/* End Of Destop LayOut */}
        </div>
      </div>
    </div>
    </header>
    )
}

export default Header;