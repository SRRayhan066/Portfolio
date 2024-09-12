import React from 'react';
import { Timeline, ConfigProvider } from 'antd';
import c from '../assets/c.png';
import cpp from '../assets/cpp.png';
import java from '../assets/java.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import node from '../assets/nodejs.png';
import express from '../assets/express.png';
import tailwind from '../assets/tailwind.png';
import springboot from '../assets/springboot.png';
import firebase from '../assets/firebase.png';
import mongodb from '../assets/mongoDB.png';
import mysql from '../assets/mysql.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import excel from '../assets/excel.png';
import powerpoint from '../assets/powerpoint.png';
import word from '../assets/word.png';
import codeforces from '../assets/codeforce.png';
import codechef from '../assets/codechef.png';
import stopstalk from '../assets/stopstalk.png';
import leetcode from '../assets/leetcode.png';

const About = () => {
    const languages = [
        { src: c, name: 'C' },
        { src: cpp, name: 'C++' },
        { src: java, name: 'Java' },
        { src: js, name: 'JavaScript' },
    ]

    const webs = [
        { src: html, name: 'HTML' },
        { src: css, name: 'CSS' },
        { src: js, name: 'JavaScript' },
        { src: react, name: 'ReactJs' },
        { src: node, name: 'NodeJs' },
        { src: express, name: 'ExpressJs' },
        { src: tailwind, name: 'Tailwind CSS' },
        { src: springboot, name: 'Spring Boot' },
        
    ]

    const databases = [
        { src: firebase, name: 'Firebase' },
        { src: mongodb, name: 'MongoDB' },
        { src: mysql, name: 'MySQL' },
    ]

    const collaborations = [
        { src: git, name: 'Git' },
        { src: github, name: 'Github' },
    ]

    const offices = [
        { src: excel, name: 'Excel' },
        { src: word, name: 'Word' },
        { src: powerpoint, name: 'Powerpoint' },
    ]

    const codingProfiles = [
        {src : codeforces, name: 'Codeforces', link:'https://codeforces.com/profile/_ARtEm1S'},
        {src : codechef, name: 'Codechef', link:'https://www.codechef.com/users/s_r_rayhan'},
        {src : leetcode, name: 'Leetcode', link:'https://leetcode.com/u/s_r_rayhan/'},
        {src : stopstalk, name: 'Stopstalk', link:'https://www.stopstalk.com/user/profile/s_r_rayhan'}
    ]

    const degrees = [
        {
            //label: '2015-09-01',
            children: (
                <>
                    <h2 className='font-serif font-semibold text-lg'>B.Sc. in Software Engineering</h2>
                    <h3 className='font-serif text-md font-semibold'>2020 - present</h3>
                    <p className='text-md'>During my university life, I have gained a decent knowledge of competitive programming. Besides, I have completed more than seven projects and participated in one hackathon.</p>
                </>
            ),
        },
        {
            children: (
                <>
                    <h2 className='font-serif font-semibold text-lg'>Higher Secondary Certificate</h2>
                    <h3 className='font-serif text-md font-semibold'>2016 - 2019</h3>
                    <p className='text-md'>I have completed my higher secondary education at Nawabganj Govt College, Chapainawabganj. In the journey of three years, I learned to face problems, grew my thinking capabilities, etc.</p>
                </>
            ),
        },
        {
            children: (
                <>
                    <h2 className='font-serif font-semibold text-lg'>Secondary School Certificate</h2>
                    <h3 className='font-serif text-md font-semibold'>2014 - 2016</h3>
                    <p className='text-md'>My secondary school education was completed at Rajarampur Hamidullah High School. In my education life, I have participated in science fairs.</p>
                </>
            ),
        }
    ];

    return (
        <div id='about'>

            <div className='flex flex-col justify-center items-center space-y-5 px-[8vw]'>
                <div>
                    <h1 className='font-silkscreen 
                                   sm:text-5xl
                                   xs:text-4xl'>About Me</h1>
                </div>
                <div>
                    <p className='lg:text-lg lg:w-[55vw] lg:text-center
                                  md:text-xl md:w-[65vw] md:text-center
                                  xs:text-md xs:w-[70vw] xs:text-center
                                  '>
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </p>
                </div>
            </div>

            <div className='px-[8vw] gap-x-6 my-[3vh] 
                            lg:flex lg:justify-between lg:items-start lg:flex-row lg:gap-y-0
                            xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-y-6'>
                <div className='lg:w-[47vw]
                                md:w-[75vw]
                                xs:w-[70vw]'>
                    <div>
                        <div className='font-serif text-2xl font-bold'>
                            <h1>Education</h1>
                        </div> 
                        <div className='my-3'>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#10B981',
                                    },
                                }}
                            >
                                <Timeline
                                    items={degrees}
                                />
                            </ConfigProvider>
                            
                        </div>
                    </div>

                    <div className=''>
                        <div className='font-serif text-2xl font-bold'>
                            <h1>Programming Profile</h1>  
                        </div>
                        <div className='flex flex-wrap gap-y-2 my-1
                                        md:gap-x-2
                                        xs:gap-x-1'>
                            {
                                codingProfiles.map((cp,index) => (
                                    <a href={cp.link}>
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center
                                                    md:gap-x-2
                                                    xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={cp.src} alt={cp.name}></img>
                                            <div className='md:text-md xs:text-sm'>{cp.name}</div>
                                        </div>
                                    </a>
                                    
                                ))
                            }                        
                        </div>
                    </div>
                    
                </div>
                
                <div className='lg:w-[47vw]
                                md:w-[75vw]
                                xs:w-[70vw] xs:my-3'>
                    <div className='font-serif text-2xl font-bold'>
                        <h1>My Skills</h1>
                    </div>

                    <div className='space-y-3'>
                        <div>
                            <h2 className='font-serif font-semibold md:text-lg xs:text-md'>Programming Languages</h2>
                            <div className='flex flex-wrap gap-y-2 my-1
                                            md:gap-x-2
                                            xs:gap-x-1'>
                                {
                                    languages.map((language,index) => (
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center  
                                                        md:gap-x-2
                                                        xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={language.src} alt={language.name}></img>
                                            <div className='md:text-md xs:text-sm flex-grow'>{language.name}</div>
                                        </div>
                                    ))
                                }                        
                            </div>    
                        </div>

                        <div>
                            <h2 className='font-serif font-semibold md:text-lg xs:text-md'>Web Technologies</h2>
                            <div className='flex flex-wrap gap-y-2 my-1
                                            md:gap-x-2
                                            xs:gap-x-1'>
                                {
                                    webs.map((web,index) => (
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center 
                                                         md:gap-x-2
                                                         xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={web.src} alt={web.name}></img>
                                            <div className='md:text-md xs:text-sm'>{web.name}</div>
                                        </div>
                                    ))
                                }    
                            </div>
                        </div>

                        <div>
                            <h2 className='font-serif font-semibold md:text-lg xs:text-md'>Databases</h2>
                            <div className='flex flex-wrap gap-y-2 my-1
                                            md:gap-x-2
                                            xs:gap-x-1'>
                                {
                                    databases.map((database,index) => (
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center
                                                        md:gap-x-2
                                                        xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={database.src} alt={database.name}></img>
                                            <div className='md:text-md xs:text-sm'>{database.name}</div>
                                        </div>
                                    ))
                                }    
                            </div>
                        </div>

                        <div>
                            <h2 className='font-serif font-semibold md:text-lg xs:text-md'>Collaborations</h2>
                            <div className='flex flex-wrap gap-y-2 my-1
                                            md:gap-x-2
                                            xs:gap-x-1'>
                                {
                                    collaborations.map((cb,index) => (
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center
                                                        md:gap-x-2
                                                        xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={cb.src} alt={cb.name}></img>
                                            <div className='md:text-md xs:text-sm'>{cb.name}</div>
                                        </div>
                                    ))
                                }    
                            </div>
                        </div>

                        <div>
                            <h2 className='font-serif font-semibold md:text-lg xs:text-md'>MS Office</h2>
                            <div className='flex flex-wrap gap-y-2 my-1
                                            md:gap-x-2
                                            xs:gap-x-1'>
                                {
                                    offices.map((office,index) => (
                                        <div className='bg-neutral-200 p-2 rounded-md shadow-2xl flex justify-between items-center 
                                                        md:gap-x-2
                                                        xs:gap-x-1'>
                                            <img className='md:w-8 xs:w-6' src={office.src} alt={office.name}></img>
                                            <div className='md:text-md xs:text-sm'>{office.name}</div>
                                        </div>
                                    ))
                                }    
                            </div>
                        </div>

                    </div>   
                </div>

            </div>
        </div>
    );
};

export default About;