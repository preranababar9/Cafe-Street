import React from 'react';
import d1 from "../image/d1.png";
import d2 from "../image/d2.png";
import d3 from "../image/d3.png";

const Delivery = () => {
  return (
    <div>
        <div className='px-32 py-24 font-bold text-4xl'>
        How to use Delivery <span className='underline decoration-orange-400 '>Service</span>
        </div>
        
        <div className='flex justify-evenly h-full w-full'>
        <img  className='h-48 w-48'
        src={d1}
        alt="coffee cup"
        />


<img   className='h-48 w-48'
        src={d2}
        alt="food truck"
        />

<img  className='h-48 w-48'
        src={d3}
        alt="coffee "
        />
        </div>
<div className='flex justify-evenly py-6 pr-4 pb-24 '>
        <div className='text-xl '>

                <p className='text-center font-bold text-2xl'>choose your coffee</p>
                <p>there are 20+ coffees for you</p>
        </div>
        <div className='text-xl '>
                <p className='text-center font-bold text-2xl'>We deliver it to you</p>
                <p>Choose Delivery Service</p>
        </div>
        <div className='text-xl '>
                <p className='text-center font-bold text-2xl'>Enjoy your coffee</p>
                
                <p>Choose Delivery Service</p>

        </div>
        </div>
    </div>
  )
}

export default Delivery