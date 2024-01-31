import React from "react";
import Logo from "../image/Logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (

    <div className=" mx-auto flex  justify-between items-center px-20 py-4 bg-orange-100 h-[10vh]  ">
      <div className="flex gap-2 align-center">
        <img
          className="h-full hidden md:block"
          src={Logo}
          alt="cafelogo"
        />
        <p className="text-2xl font-bold font-sans "><span className="text-orange-400">Cafe </span>
          Street</p>
      </div>

      <div >
        <ul className="flex flex-row gap-10 font-semibold text-lg ">
          <li className="text-orange-400 ">About us</li>
          <li>Our Products</li>
          <li>Delivery</li>
        </ul>
      </div>

      <div className="flex flex-row gap-4 mr-10 relative">
        <div className="absolute top-0 left-2"><AiOutlineSearch size={30} /></div>
        <input
          className="rounded-full text-black px-10 w-full"
          type="text"
          placeholder="Cappucino"
        />
        <CiShoppingCart size={30} />
      </div>

    </div>

  )
}


export default Header;