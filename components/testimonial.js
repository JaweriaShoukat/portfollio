import Image from 'next/image';
import Review1 from '../public/images/1.jpg';

export default function Testimonial() {
    return (
        <div>
            <div className='text p-8 mb-7 border border-neutral-400'>
                <p>Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.</p>
            </div>
            <div className='detail flex gap-5'>
                <div className='img w-14 h-14 rounded-full'>
                    <Image src={Review1} alt='' className='rounded-full'></Image>
                </div>
                <div className='info'>
                    <h3 className="text-base font-semibold">Alexander Walker</h3>
                    <span className="text-sm text-neutral-700">Graphics Designer</span>
                </div>
            </div>
        </div>
    )
}
