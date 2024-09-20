import React from 'react';
import myImage from '../assets/image.png';


const Hero = () => {
    const resumeLink = 'https://drive.google.com/uc?export=download&id=1C8NyiHBk7SoWJQrPjXK_7rlAd_e3S1tV';
    return (
        <div id='home' className='flex
                        lg:flex-row lg:justify-center lg:items-center lg:px-0
                        sm:h-[100vh]
                        xs:flex-col xs:justify-center xs:items-center xs:px-[10vw] xs:h-[80vh]'>
            <div className='xl:space-x-10
                            lg:space-x-5 lg:space-y-0 lg:flex lg:justify-center lg:items-center lg:flex-row
                            xs:space-y-10'>
                <div className='lg:w-[50vw]'>
                    <h1 className='font-serif font-semibold
                                   
                                   sm:text-3xl
                                   xs:text-2xl'>Md Shafikul Rahman</h1>
                    <p className='lg:text-lg
                                  md:text-xl
                                  sm:text-xl
                                  xs:text-md'>Software Engineering Student | Competetive Programmer | Full Stack Developer | Passionate Learner</p>
                    
                    <div className='grid gap-x-1
                                    lg:grid-cols-6
                                    md:grid-cols-6
                                    xs:grid-cols-2'>
                        <div className='my-3 bg-emerald-500  flex justify-center items-center rounded-lg font-serif p-2 text-white cursor-pointer
                                        lg:text-lg lg:hidden
                                        md:text-xl md:col-span-2 md:col-start-1
                                        sm:text-lg 
                                        xs:text-sm'
                                        onClick={() => window.location.href = resumeLink}>
                            <a rel="noopener noreferrer">Download CV</a>
                        </div>

                        <div onClick={() => window.location.href = '#contact'} className='my-3 bg-emerald-500  flex justify-center items-center rounded-lg font-serif p-2 text-white cursor-pointer
                                        lg:text-lg lg:col-span-2 lg:col-start-1
                                        md:text-xl md:col-span-2 md:col-start-3
                                        sm:text-lg 
                                        xs:text-sm '>
                            Hire me
                        </div>
                        
                    </div>
                    
                </div>
                <div className='flex items-center
                                xs:justify-center'>
                    <img className='lg:w-[30vw]
                                    md:w-[45vw]
                                    xs:w-[55vw]' src={myImage}></img>
                </div>
            </div>
        </div>
    );
};

export default Hero;