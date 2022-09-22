import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Navbar from "../components/navbar";
import { useState } from "react";
import ProgressBar from "../components/progress";
import Education from "../components/education";
import Partners from "../components/partners";
import Testimonial from "../components/testimonial";
import Tabs from "../components/portfolio";

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


    <div className={handleNav == 1 ? 'block' : 'hidden'}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="flex flex-col justify-center overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0">
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
              <a className="px-8 py-4 bg-neutral-700 text-white border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black text-base font-medium">Learn More</a>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>


    <div className={handleNav == 2 ? 'block' : 'hidden'}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="about" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
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
    </div>


    <div className={handleNav == 3 ? 'block' : 'hidden'}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="portfolio" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-[20rem] flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">Creative Portfolio</h4>
            <Tabs />
          </div>
        </motion.div>
      </motion.div>
    </div>

    <div className={handleNav == 4 ? 'block' : 'hidden'}>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        id="portfolio" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
        <motion.div
          variants={imageAnimate}>

          <div className="mb-24">
            <h4 className="mb-12 font-bold uppercase text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">SERVICES</h4>
            
          </div>
        </motion.div>
      </motion.div>
    </div>
  </>
  )
}


