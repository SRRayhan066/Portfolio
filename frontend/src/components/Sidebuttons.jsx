import React from 'react';
import facebookIcon from '../assets/facebook.png';
import githubIcon from '../assets/github.png';
import instagramIcon from '../assets/instagram.png';
import linkedIcon from '../assets/linkedin.png';

const Sidebuttons = () => {
    const facebookLink = 'https://www.facebook.com/srrayhan066/';
    const linkedInLink = 'https://www.linkedin.com/in/s-r-rayhan066/';
    const instaLink = 'https://www.instagram.com/s_r_rayhan66';
    const githubLink = 'https://github.com/SRRayhan066';
    return (
        <div>
            <div className='fixed space-y-2  top-1/2 transform -translate-y-1/2 shadow-2xl bg-white border-2 border-zinc-300 p-1 rounded-md
                            xl:w-[3vw]
                            lg:w-[4vw]
                            md:w-[6vw] md: left-10
                            sm:w-[6vw] sm:left-7
                            xs:w-[9vw] xs:left-5'>
                <div className='cursor-pointer'>
                    <img src={linkedIcon} alt='linkedIn' onClick={() => window.open(linkedInLink, '_blank', 'noopener noreferrer')}></img>
                </div>

                <div className='cursor-pointer'>
                    <img src={facebookIcon} alt='facebook' onClick={() => window.open(facebookLink, '_blank', 'noopener noreferrer')}></img>
                </div>
                
                <div className='cursor-pointer'>
                    <img src={githubIcon} alt='github' onClick={() => window.open(githubLink, '_blank', 'noopener noreferrer')}></img>
                </div>
                
                <div className='cursor-pointer'>
                    <img src={instagramIcon} alt='instagram' onClick={() => window.open(instaLink, '_blank', 'noopener noreferrer')}></img>
                </div>
                
                
            </div>
        </div>
    );
};

export default Sidebuttons;