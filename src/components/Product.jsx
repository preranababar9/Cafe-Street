import React from 'react'
import ProductImg1 from "../image/product1.jpg";
import ProductImg2 from "../image/product2.jpg";
import ProductImg3 from "../image/product3.jpg";
import { CiShoppingCart } from "react-icons/ci";

export const Product = () => {
        return (
                <div className=' flex py-10 flex-col h-full w-full bg-[#F9D9AA] '>
                        <div className='py-16 px-20 text-amber-900   '>
                                <h1 className='text-3xl font-bold'>Popular <span className='underline-offset-1 under decoration-orange-100'>Now</span> </h1>
                        </div>
                        <div className='flex
                     flex-wrap items-center justify-center gap-6 '> 
                      <Card  title={'Espresso'} img={ProductImg2} price={'12 K'}/>

                                <Card title={'Vanilla Latte'} img={ProductImg1} price={'21 K'}/>
                                <Card  title={'Hazelnut Latte'} img={ProductImg3} price={'23 K'}/>
                               
                        </div>

                </div>
        )
}
export default Product;



const Card = ({ img, title, price }) => {
        return (
                <div className='px-8 py-12 bg-white h-full w-[30%] rounded-xl ' >
                        <img className='w-full aspect-auto rounded-md'
                                src={img}
                                alt="Vanilla Late"
                        />
                        <div className='flex justify-between'> <p className='text-3xl text-amber-900 font-semibold py-4'>{title}  </p>
                                <p className='text-3xl text-amber-900 font-semibold py-4'>{price}</p>
                        </div>
                        <div className='flex justify-between gap-10'><div className='flex justify-between gap-10'>
                                <button className=' text-xl font-semibold text-orange-400 bg-amber-900 rounded-xl py-1 px-5'>Hot</button>

                                <button className=' text-xl font-semibold text-orange-400'>Cold</button>
                        </div>

                                <CiShoppingCart size={32} className='bg-orange-400  px-1 py-1 text-white rounded-full' />
                        </div>

                </div>
        )
}

