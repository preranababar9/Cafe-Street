import React from 'react';
import about from "../image/about.jpg";

const About = () => {
        return (
                <div className='h-[80vh] bg-orange-100 flex py-10  justify-evenly '>
                        <div className='px-32 '>
                                <img src={about}  className='h-[90%] aspect-auto rounded-lg '
                                        alt="about coffee"
                                />
                        </div>

                        <div className='py-14'>
                        <h1 className='font-bold text-6xl'>About us</h1>
<br/><br/>
                        <h2 className='font-bold text-2xl'>We provide quality coffee,</h2>
                        <h2 className='font-bold text-2xl'>and ready to deliver.</h2>
<br/>
                        <p className='text-lg'>We are a company that makes and distributes<br/>
                         delicious drinks. our main product is made with a<br/>
                          secret recipe and available in stores worldwide.</p>
<br/><br/>
                          <button className='text-xl font-semibold bg-amber-900 text-orange-200 rounded-full px-4 py-4
                          hover:text-orange-400 '>
                                Get your coffee
                          </button>
                        </div>
                </div>
        )
}

export default About