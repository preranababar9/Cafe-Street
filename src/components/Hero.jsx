import React from 'react'
import HeroImg from "../image/hero.jpg";

const Hero = () => {
        return (
                <div className='h-[90vh] bg-orange-100 flex'>
                        <div className=' flex flex-col  justify-center items-center w-1/2 h-full gap-16'>
                                <div className='flex flex-col gap-5'>
                                        <h1 className='font-bold  text-6xl text-[#2F2105] leading-normal '>Enjoy your <span className='text-orange-400'>Coffee</span><br></br>
                                                before your activity</h1>

                                        <p className='text-2xl text-gray-700' >Boost your productivity and build your<br></br>
                                                mood with a glass of coffee in the morning
                                        </p>
                                </div>
                                <div className='flex gap-16'>
                                        <button className='px-10 py-4 text-lg font-semibold text-white rounded-full bg-[#2F2105]'>Order Now</button>
                                        <button className='px-10 py-4 text-lg font-semibold text-orange-400 rounded-full'>More Menu</button>
                                </div>
                        </div>
                        <div className='w-1/2 h-full flex justify-center items-center relative'>
                                <img className='h-[80%] aspect-square rounded-full '
                                        src={HeroImg}
                                />
                                <p className='px-20 py-4 bg-white rounded-full font-semibold shadow-xl text-2xl absolute  left-20 top-32' >Cappucino</p>
                                <p className='px-20 py-4 bg-white rounded-full font-semibold shadow-xl text-2xl absolute bottom-36 left-20' >18k</p>
                                <p className='px-20 py-4 bg-white rounded-full font-semibold shadow-xl text-2xl absolute top-32 right-20' >4.8⭐</p>
                        </div>
                </div>


        )
}

export default Hero