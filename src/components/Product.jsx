import React from 'react'
import ProductImg from "../image/product1.jpg";
import { CiShoppingCart } from "react-icons/ci";

export const Product = () => {
        return (
                <div className=' flex h-full w-full bg-[#F9D9AA] '>
                        <div className='py-16 px-8 '>
                                <h1 className='text-3xl font-bold'>Popular <span className='underline-offset-1 under decoration-orange-100'>Now</span> </h1>
                        </div>
                        <div className='px-6 py-16  h-full' >
                                <img className='w-1/4 aspect-auto rounded-md'
                                        src={ProductImg}
                                        alt="Vanilla Latte"
                                />
                                <p className='text-2xl text-amber-900 font-semibold py-4'>Vanilla Latte                 21k</p>
                                <button className='border-solid border-black text-lg font-semibold'>Hot</button>
                                <button>Cold</button>
                                <CiShoppingCart size={30} />
                                <div>

                                </div>
                        </div>
                </div>
        )
}
export default Product;