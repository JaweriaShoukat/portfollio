import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Navbar from "../components/navbar";
import { useState } from "react";
import ProgressBar from "../components/progress";
import Education from "../components/education";
import Partners from "../components/partners";
import Testimonial from "../components/testimonial";
import Tabs from "../components/portfolio";
import Service from "../components/service";
import Contact from "../components/contact";
import LatestNews from "../components/latest-News";

export default function Home() {

  const [handleNav, setHandleNav] = useState()

  const changenav = (data) => {
    setHandleNav(data)
  }

  console.log(handleNav)

  const imageAnimate = {
    offscreen: {
      opacity: 0,
      x: ['-100vw'],
      rotate: -120,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "ease",
        duration: 1,
        bounce: 0.3
      }
    }

  }

  return (<>
    <Navbar sendData={changenav} />


      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className={`${handleNav == undefined ? 'block' : 'hidden'} flex flex-col justify-center overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0`}>
        <motion.div id="home" className="pl-12"
          variants={imageAnimate}>
          <div>
            <h2 className="md:text-5xl font-bold mb-6 text-neutral-700">KELLY EMERSON</h2>
            <span className="line block mt-5 mb-6 h-1 bg-neutral-700 w-14"></span>

            <h3 className="text-2xl mb-14">
              <span className="text-neutral-600">Creative </span>
              <span className="font-bold text-neutral-700">Developer</span>
            </h3>
          </div>
          <div className="">
            <Link href='#'>
              <a className="px-8 py-4 bg-neutral-700 text-white border-2 border-transparent hover:bg-transparent hover:text-neutral-700 hover:border-neutral-700 text-base font-medium">Learn More</a>
            </Link>
          </div>
        </motion.div>
      </motion.div>


      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="about" className={`${handleNav == 2 ? 'block' : 'hidden'} flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24`}>
        <motion.div
          variants={imageAnimate}>
          <div className="biography mb-20">
            <div className="">
              <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">ABOUT ME</h4>
            </div>
            <div className="flex md:flex-row flex-col md:gap-20 gap-10">
              <div className="md:w-2/5 w-full">
                <p className="mb-5 text-neutral-700 text-base font-normal">Hello there! My name is <strong>Alan Walker.</strong> I am a graphic designer, and I'm very passionate and dedicated to my work.</p>
                <p className="mb-5 text-neutral-700 text-base font-normal">With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
              </div>
              <div className="md:w-2/5 w-full">
                <ul>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Name:</strong></span><span className="col-span-2">Alan Walker</span>
                  </li>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Address:</strong></span><span className="col-span-2">Ave Street, New York, USA</span>
                  </li>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Study:</strong></span><span className="col-span-2">Univercity of Oxford</span>
                  </li>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Degree:</strong></span><span className="col-span-2">Master of Science</span>
                  </li>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Mail:</strong></span><span className="col-span-2">hello@cavani.com</span>
                  </li>
                  <li className="grid grid-cols-3 mb-2 text-neutral-700 text-base font-normal">
                    <span><strong>Phone:</strong></span><span className="col-span-2">+77 022 444 05 05</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services mb-20">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">SERVICES</h4>
                <ul>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Web Development</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Graphic Design</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Landing Page</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>On-Page SEO</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Web Hosting</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">INTERESTS</h4>
                <ul>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Painting & Drawing</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Reading & Writing</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Music & Cinema</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Travel & Picnik</span>
                  </li>
                  <li className="mb-2 text-neutral-700 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                    <span>Rain & Snow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="skills mb-20">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-56 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">PROGRAMMING</h4>
                <div className="flex flex-col gap-7">
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                </div>
              </div>
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">LANGUAGE</h4>
                <div className="flex flex-col gap-7">
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                  <ProgressBar programing="HTML & CSS" Percntg="45%" />
                </div>
              </div>
            </div>
          </div>
          <div className="education mb-20">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">EDUCATION</h4>
                <ul className="before:content[''] before:bg-neutral-400 before:w-[1px] before:h-full before:absolute relative flex flex-col gap-11">
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                </ul>
              </div>
              <div className="">
                <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">EXPERIENCE</h4>
                <ul className="before:content[''] before:bg-neutral-400 before:w-[1px] before:h-full before:absolute relative flex flex-col gap-11">
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                  <Education date="2014 - 2020" uni="Oxford Univercity" degTitle="Master Degree" />
                </ul>
              </div>
            </div>
          </div>
          <div className="partners mb-20">
            <div className="">
              <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">PARTNERS</h4>
              <Partners />
            </div>
          </div>
          <div className="testimonial mb-24">
            <div className="">
              <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 after:absolute after:ml-56 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">TESTIMONIALS</h4>
              <Testimonial />
            </div>
          </div>
        </motion.div>
      </motion.div>


      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="portfolio" className={`${handleNav == 3 ? 'block' : 'hidden'} flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24`}>
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-[20rem] flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">Creative Portfolio</h4>
            <Tabs />
          </div>
        </motion.div>
      </motion.div>

    
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="services" className={`${handleNav == 4 ? 'block' : 'hidden'} flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24`}>
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">SERVICES</h4>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <Service title="3D Animation" icon="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />

              <Service title="3D Animation" icon="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />

              <Service title="3D Animation" icon="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />

              <Service title="3D Animation" icon="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />

              <Service title="3D Animation" icon="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />

              <Service title="3D Animation" icon="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                detail="Developing website involves creating your website, making it one of the most vital parts of your marketing" />
            </div>
          </div>
        </motion.div>
      </motion.div>

    
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="contact" className={`${handleNav == 5 ? 'block' : 'hidden'} flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24`}>
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-52 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">GET IN TOUCH</h4>
            <Contact />
          </div>
        </motion.div>
      </motion.div>


      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="news" className={`${handleNav == 1 ? 'block' : 'hidden'} flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24`}>
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-52 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">LATEST NEWS</h4>
            <LatestNews />
          </div>
        </motion.div>
      </motion.div>
  </>
  )
}


