import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const resumeLink = 'https://drive.google.com/uc?export=download&id=1C8NyiHBk7SoWJQrPjXK_7rlAd_e3S1tV';
    

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='font-serif font-medium mx-auto py-3 flex justify-center items-center flex-col
                        fixed z-10
                        xl:left-[15vw]
                        lg:left-[8vw]
                        xs:left-[10vw]
                        '>
            <div className={`flex justify-between items-center border-none text-white bg-neutral-700
                            xl:px-10 xl:w-[70vw]
                            lg:px-6 lg:py-1 lg:rounded-full lg:w-[84vw]
                            xs:px-6 xs:py-1 xs:w-[80vw]
                            ${isOpen ? 'xs:rounded-t-xl' : 'xs:rounded-full'}
                            `}>
                <div className='lg:text-md lg:text-bold'>
                    S_R_Rayhan
                </div>
                <div className={`lg:block
                                xs:hidden`}>
                    <ul className='lg:flex lg:space-x-5 lg:text-sm'>
                        <li className='hover:text-emerald-300'><a href='#home'>Home</a></li>
                        <li className='hover:text-emerald-300'><a href='#about'>About</a></li>
                        <li className='hover:text-emerald-300'><a href='#project'>Projects</a></li>
                        <li className='hover:text-emerald-300'><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className='bg-emerald-500 cursor-pointer
                                lg:rounded-full lg:p-2 lg:text-sm lg:block
                                xs:hidden'
                                onClick={() => window.location.href = resumeLink}>
                    <a rel="noopener noreferrer">Download CV</a>
                </div>
                <div className='lg:hidden
                                xs:block xs:text-xl'>
                    <div>
                        <FontAwesomeIcon onClick={toggleMenu} icon={faBars}/>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} border-none rounded-b-xl text-white bg-neutral-700 
                            xl:w-[70vw]
                            lg:hidden lg:w-[84vw] 
                            xs:w-[80vw] xs:py-3`}>
                <ul className='flex flex-col justify-center items-center space-y-3 text-sm'>
                    <li className='hover:text-emerald-300'><a href='#home'>Home</a></li>
                    <li className='hover:text-emerald-300'><a href='#about'>About</a></li>
                    <li className='hover:text-emerald-300'><a href='#project'>Projects</a></li>
                    <li className='hover:text-emerald-300'><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;