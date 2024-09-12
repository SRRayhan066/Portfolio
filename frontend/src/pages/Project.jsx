import React, { useState } from 'react';

import javaGame from '../assets/javagame.png';
import dncc from '../assets/dncc.png';
import ironMan from '../assets/ironman.bmp';
import tictactoe from '../assets/tictac.jpg';
import officeroom from '../assets/officeroom.png';
import database from '../assets/database.png';
import port from '../assets/portfolioo.png';
import ftms from '../assets/ftms.png';
import gameConsol from '../assets/console.png';
import android from '../assets/android.png';
import databaseStorage from '../assets/database-storage.png';
import all from '../assets/select.png';
import internet from '../assets/internet.png';

const Project = () => {

    const options = [
        {
            label: 'All',
            value: 'All',
            icon: all
        },
        {
            label: 'Game',
            value: 'Game',
            icon: gameConsol
        },
        {
            label: 'Android',
            value: 'Android',
            icon: android
        },
        {
            label: 'Database',
            value: 'Database',
            icon: databaseStorage
        },
        {
            label: 'Web-Tech',
            value: 'Web-Tech',
            icon: internet
        },
    ]

    const projects = [
        {
            type: 'Game',
            title: 'Iron Man',
            description: 'This is a 2D one vs one figting game with three levels. Where the main character\'s task is to defeat all the villains.',
            tech: ['Language: C++','Framework: igraphics.h','Environment: visual studio 2013'],
            link: 'https://github.com/SRRayhan066/Iron_Man',
            image: ironMan
        },
        {
            type: 'Game',
            title: 'Link\'s Adventure: A Lone Warrior',
            description: 'This is a 2D game where a warrior is assigned to save the queen of his kingdom.',
            tech: ['Language: Java','Framework: LibGDX','Environment: Intellij'],
            link: 'https://github.com/SRRayhan066/LINK-S-ADVENTURE-A-LONE-WARRIOR-',
            image: javaGame
        },
        {
            type: 'Game',
            title: 'Tic Tac Toe',
            description: 'This is an AI based brain game.',
            tech: ['Language: C++','Algorithm: MiniMax','Environment: VS Code'],
            link: 'https://github.com/SRRayhan066/Artifiial-Intelligence/blob/master/TIC_TAC_TOE.cpp',
            image: tictactoe
        },
        {
            type: 'Android',
            title: 'Office Room',
            description: 'An android application for exploring virtual office.',
            tech: ['Language: Java','Database: Firebase','Environment: Android Studio'],
            link: 'https://github.com/SRRayhan066/Project-Office-Room',
            image: officeroom
        },
        {
            type: 'Database',
            title: 'SUST Football Tournament Management System Database',
            description: 'A relationship among multiple data for football tournaments that arranged in SUST.',
            tech: ['Database Type: MySQL'],
            link: 'https://github.com/SRRayhan066/Sust-Football-Tournament-Management-System/tree/main',
            image: database
        },
        {
            type: 'Web-Tech',
            title: 'Portfolio',
            description: 'My personal portfolio where I showed my projects,skills etc.',
            tech: ['Frontend: ReactJs & Tailwind CSS'],
            link: 'https://github.com/SRRayhan066/Portfolio',
            image: port
        },
        {
            type: 'Web-Tech',
            title: 'SUST Football Tournament Management System',
            description: 'An web application to manage all the information about SUST football tournament.',
            tech: ['Frontend: ReactJs','Backend: NodeJs','Database: MySQL'],
            link: 'https://github.com/SRRayhan066/SUST-Football-Tournament-Management-System-Application',
            image: ftms
        },
        {
            type: 'Web-Tech',
            title: 'DNCC Waste Management',
            description: 'Administrative control over waste management of Dhaka North City',
            tech: ['Frontend: ReactJs','Backend: NodeJs','Database: MySQL'],
            link: 'https://github.com/SRRayhan066/DNCC-Waste-Management',
            image: dncc
        },
    ]

    const [items,setItems] = useState('All');

    const changedItem = (item) =>{
        setItems(item);
    }

    const filteredProjects = projects.filter((project) => {
        if (items === 'All') return true; 
        return project.type === items; 
    });

    return (
        <div className='my-[5vh] h-[auto] z-0' id='project'>

            <div className='flex flex-col justify-center items-center space-y-5 px-[8vw]'>
                <div>
                    <h1 className='font-silkscreen
                                  sm:text-5xl
                                  xs:text-4xl'>Projects</h1>
                </div>
                <div>
                    <p className='lg:text-lg lg:w-[55vw] lg:text-center
                                  md:text-xl md:w-[65vw] md:text-center
                                  xs:text-md xs:w-[70vw] xs:text-center
                                  '>
                        Here you will find all the project's information and corresponding link that I have done during my academic life.
                    </p>
                </div>
            </div>

            <div className='flex justify-center items-center my-[5vh]'>    
                <ul className='flex justify-center items-center  font-serif border-2  rounded-md bg-neutral-200
                               xl:gap-x-2 xl:text-lg
                               lg:gap-x-1 lg:text-lg
                               md:gap-x-4 md:text-lg
                               xs:gap-x-1 xs:text-xs '>
                    {
                        options.map((op,index) => (
                            <li key={index} value={op.value} onClick={()=>changedItem(op.value)} className={`${items===op.value ? 'bg-white' : 'bg-none'} rounded-md cursor-pointer
                                lg:px-4 lg:py-0
                                xs:px-0 xs:py-0`}>
                                <div className='flex justify-center items-center 
                                                md:p-1 md:gap-x-2
                                                xs:p-2 '>
                                    <div className='md:block xs:hidden'>
                                        <img className='w-4' src={op.icon}></img>
                                    </div>
                                    <div>{op.label}</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            
            
            <div className='py-[2vh] grid  auto-rows-fr gap-x-8 gap-y-4
                            xl:px-[15vw]
                            lg:px-[12vw] lg:grid-cols-3
                            md:px-[12vw] md:grid-cols-2
                            xs:px-[18vw] grid-cols-1'>
                {
                    filteredProjects.map((project,index)=>(
                        <div className='flex flex-col justify-center items-center rounded-lg border-2 border-neutral-300 '>
                        <div className='h-[25vh] rounded-lg'>
                            <img className='w-[100%] h-[100%] rounded-t-lg' src={project.image}></img>
                        </div>
                        <div className='flex flex-col items-center text-center p-2 font-serif gap-y-3'>
                            <h2 className='font-serif text-lg font-semibold'>{project.title}</h2>
                            <p className='text-sm'>{project.description}</p>
                            <ul className='text-xs'>
                                {
                                    project.tech.map((tc,indx)=>(
                                        <li>{tc}</li>
                                    ))
                                }
                                
                            </ul>
                            
                        </div>
                        <div className='mt-auto mb-[1vh] bg-emerald-500 p-2 rounded-md text-white cursor-pointer' onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}>
                            See Details
                        </div>
                    </div>
                    ))    
                }    
            </div>

        </div>
    );
};

export default Project;