import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mb-10'>
                <div className="border border-neutral-300 pt-5 px-3 pb-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mx-auto mb-2 text-neutral-500 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="text-base text-neutral-500 dark:text-white">AHS, Lahore, Pakistan</span>
                </div>
                <div className="border border-neutral-300 pt-5 px-3 pb-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mx-auto mb-2 text-neutral-500 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span className="text-base text-neutral-500 dark:text-white"><Link href="mailto:jaweeriashoukat@gmail.com" rel="noreferrer">jaweeriashoukat@gmail.com</Link></span>
                </div>
                <div className="border border-neutral-300 pt-5 px-3 pb-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mx-auto mb-2 text-neutral-500 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <span className="text-base text-neutral-500 dark:text-white"><Link href="tel:+923000000000" rel="noreferrer">+92 3000000000</Link></span>
                </div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                <div className='contact-form'>
                    <form>
                        <div className='grid gap-10'>
                            <input type="text" className="form-control w-full p-2.5 tracking-[2px] text-sm text-neutral-400 border border-neutral-300 transition ease-in-out
                                     focus:text-neutral-700 focus:border-neutral-400 focus:outline-none bg-transparent" id="name" placeholder="Name" />
                            <input type="email" className="form-control w-full p-2.5 tracking-[2px] text-sm text-neutral-400 border border-neutral-300 transition ease-in-out
                                     focus:text-neutral-700 focus:border-neutral-400 focus:outline-none bg-transparent" id="email" placeholder="E-mail" />
                            <textarea className="form-control w-full p-2.5 tracking-[2px] text-sm text-neutral-400 border border-neutral-300 transition ease-in-out
                                     focus:text-neutral-700 focus:border-neutral-400 focus:outline-none bg-transparent"
                                type='text' id="message" rows="4" placeholder="Message"></textarea>
                        </div>
                        <button className="px-8 py-4 bg-neutral-700 dark:bg-blue-900/30 text-white hover:text-neutral-700 dark:text-white border-2 border-transparent hover:bg-transparent dark:hover:bg-transparent hover:border-neutral-700 dark:hover:border-blue-900/30 text-base font-medium mt-12">
                            Send Message</button>
                    </form>
                </div>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.2043271486205!2d74.24599881459461!3d31.491067055740512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903561071f3d1%3A0xde4852557e8f19c3!2sJv%20Web%20Creation!5e0!3m2!1sen!2s!4v1663935510697!5m2!1sen!2s" width="100%" height="375" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}
