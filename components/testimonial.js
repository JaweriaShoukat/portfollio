import Image from 'next/image';
import Review1 from '../public/images/1.jpg';
import {FaQuoteLeft} from 'react-icons/fa';

import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
    render(name, position) {
        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            centerMode: false,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: false,
            autoplay:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: false,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 0,
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <Single_tes />
                    <Single_tes />
                    <Single_tes />
                    <Single_tes />
                </Slider>
            </div>
        );
    }
}
function Single_tes(){
    return(
        <div>
            <div className='text p-8 mb-7 border-2 border-neutral-400 relative before:content-[""] before:absolute before:h-0 before:w-0 before:border-t-[18px] before:border-r-[18px] before:border-t-neutral-400 before:border-transparent before:top-full before:left-12
             after:content-[""] after:absolute after:h-0 after:w-0 after:border-t-[14px] after:border-r-[13px] after:border-t-teal-50 after:border-transparent after:top-full after:left-12 after:ml-[2px]'>
                <FaQuoteLeft size={26} className="absolute -top-4 text-neutral-400 dark:text-white"/>
                <p>Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.</p>
            </div>
            <div className='detail pl-5 flex gap-5 items-center'>
                <div className='img w-14 h-14 rounded-full'>
                    <Image src={Review1} alt='' className='rounded-full'></Image>
                </div>
                <div className='info'>
                    <h3 className="text-base font-semibold">Alexander Walker</h3>
                    <span className="text-sm text-neutral-500 dark:text-white">Graphics Designer</span>
                </div>
            </div>
        </div>
    )
}