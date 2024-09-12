"use client"

import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {

    const stats = [
        {
            num: 8,
            title: 'Years of Experience',
        },
        {
            num: 800,
            title: 'Number of Students',
        },
        {
            num: 15,
            title: 'Technologies',
        },
        {
            num: 8,
            title: 'Rating',
        },
    ];

    return (
        <div className='flex gap-20 p-3 justify-evenly x-sm:gap-0 lg:gap-6'>
            {stats.map((item, index) => (
                <div key={index} className="mx-4 text-center">
                    <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className='font-bold text-black sm:text-3xl x-sm:text-2xl'
                    />
                    <p className=" text-lg font-bold text-slate-600 x-sm:text-[8px] sm:text-[1rem] md:text-xl lg:text-2xl">{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Stats;
