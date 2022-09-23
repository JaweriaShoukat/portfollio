import Image from 'next/image';
import Review1 from '../public/images/1.jpg';
import {FaQuoteLeft} from 'react-icons/fa';

export default function Testimonial() {
    return (
        <div>
            <div className='text p-8 mb-7 border-2 border-neutral-400 relative before:content-[""] before:absolute before:h-0 before:w-0 before:border-t-[18px] before:border-r-[18px] before:border-t-neutral-400 before:border-transparent before:top-full before:left-12
             after:content-[""] after:absolute after:h-0 after:w-0 after:border-t-[14px] after:border-r-[13px] after:border-t-teal-50 after:border-transparent after:top-full after:left-12 after:ml-[2px]'>
                <FaQuoteLeft size={26} className="absolute -top-4 text-neutral-400"/>
                <p>Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.</p>
            </div>
            <div className='detail pl-5 flex gap-5 items-center'>
                <div className='img w-14 h-14 rounded-full'>
                    <Image src={Review1} alt='' className='rounded-full'></Image>
                </div>
                <div className='info'>
                    <h3 className="text-base font-semibold">Alexander Walker</h3>
                    <span className="text-sm text-neutral-500">Graphics Designer</span>
                </div>
            </div>
        </div>
    )
}
