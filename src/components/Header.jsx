import React from "react";
import Logo from "../image/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-orange-100  max-w-[1161]">
    <div className = "max-w-[1027] mx-auto flex justify-between items-center p-4 ml-60">
        <div>
        <img
                        className="h-full hidden md:block"
                        src={Logo}
                        alt="cafelogo"
                         />
        </div>
       
        <div >
        <ul className="flex flex-row gap-10 font-semibold text-lg ">
        <li className="text-orange-400 ">About us</li>
        <li>Our Products</li>
        <li>Delievery</li>
        </ul>
        </div>

        <div className="flex flex-row gap-4 mr-10">
                <AiOutlineSearch size={30}/>
                <input 
                className="rounded-full text-black"
                type="text"
                placefolder="Cappucino"
                />
              <CiShoppingCart size={30}/>
        </div>

    </div>
    </div>
  )
}


export default Header;