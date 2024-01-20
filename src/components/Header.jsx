import React from "react";
import Logo from "../image/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div className = "max-w-[1027] mx-auto flex justify-between items-center p-4 bg-[#F9D9AAA]">
        <div>
        <img
                        className="h-full hidden md:block"
                        src={Logo}
                        alt="cafelogo"
                         />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-3xl px-2">
                <span>Cafe</span>
                Street
        </h1>

        <div>
        <ul>
        <li>About us</li>
        <li>Our Products</li>
        <li>Delievery</li>
        </ul>
        </div>

        <div className="">
                <AiOutlineSearch size={30}/>
                <input 
                className=" "
                type="text"
                placefolder="Cappucino"
                />
              <CiShoppingCart size={30}/>
        </div>

    </div>
  )
}


export default Header;