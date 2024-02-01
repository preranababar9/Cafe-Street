import React from 'react'
import sandwich from "../image/sandwich.jpg";
import milk from "../image/milk.jpg";
import cap from "../image/cap.jpg";
import mocca from "../image/mocca.jpg";
import waffle from "../image/waffle.jpg";
import icecream from "../image/icecream.jpg";
import { CiShoppingCart } from "react-icons/ci";

export const Menu = () => {
        return (
                <div className=' flex py-10 flex-col h-full w-full bg-[#F9D9AA] '>
                        <div className='py-16 px-20 text-amber-900   '>
                                <h1 className='text-4xl font-bold'>Special Menu <span className='underline  decoration-orange-400'>for you</span> </h1>
                        </div>

                        <div className='flex
                     flex-wrap items-center justify-center gap-6 '> 
                      <Card  title={'Sandwich'} img={sandwich} price={'12 K'}/> 

                                <Card title={'Hot milk'} img={milk} price={'12 K'}/>
                                <Card  title={'Cappacino'} img={cap} price={'12 K'}/>

                                <Card  title={'Moccacino'} img={mocca} price={'12 K'}/>
                                <Card  title={'Waffles ice cream'} img={waffle} price={'12 K'}/>
                                <Card  title={'Coffee icecream'} img={icecream} price={'12 K'}/>
                               
                        </div>

                </div>
        )
}
export default Menu;



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

