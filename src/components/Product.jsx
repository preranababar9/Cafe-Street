import React from 'react'
import ProductImg from "../image/product1.jpg";
import { CiShoppingCart } from "react-icons/ci";

export const Product = () => {
        return (
                <div className=' flex py-10 flex-col h-full w-full bg-[#F9D9AA] '>
                        <div className='py-16 px-8 '>
                                <h1 className='text-3xl font-bold'>Popular <span className='underline-offset-1 under decoration-orange-100'>Now</span> </h1>
                        </div>
                        <div className='flex
                     flex-wrap items-center justify-center gap-6 '>  <Card />

                                <Card title={'Vanilla Latte'} img={ProductImg} price={'21k'}/>
                                <Card />
                                <Card />
                                <Card />
                        </div>

                </div>
        )
}
export default Product;



const Card = ({ img, title, price }) => {
        return (
                <div className='px-8 py-12 bg-white h-full w-[30%] rounded-xl' >
                        <img className='w-full aspect-auto rounded-md'
                                src={img}
                                alt="Vanilla Late"
                        />
                        <div className='flex justify-between'> <p className='text-3xl text-amber-900 font-semibold py-4'>{title}              </p>
                                <p className='text-3xl text-amber-900 font-semibold py-4'>{price}</p>
                        </div>
                        <div className='flex justify-between'><div className='flex justify-between'>
                                <button className='border-solid border-black text-lg font-semibold'>Hot</button>
                                <button>Cold</button>
                        </div>

                                <CiShoppingCart size={30} />
                        </div>

                </div>
        )
}

