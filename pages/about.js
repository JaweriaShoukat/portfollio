
import { motion, Variants } from "framer-motion";

import ProgressBar from "../components/progress";
import Education from "../components/education";
import Partners from "../components/partners";
import Testimonial from "../components/testimonial";
import Link from "next/link";
export default function About() {
    const FadeOut = {
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
      
    return (
        <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="about" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
      <motion.div
        variants={FadeOut}>
        <div className="biography mb-20">
          <div className="">
            <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400  dark:after:bg-white after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">ABOUT ME</h4>
          </div>
          <div className="flex md:flex-row flex-col md:gap-20 gap-10">
            <div className="md:w-2/5 w-full">
              <p className="mb-5 text-base font-normal">Hello there! My name is <strong>Jaweria.</strong> I am a Front-end developer, and I'm very passionate and dedicated to my work.</p>
              <p className="mb-5 text-base font-normal">With 3 years experience as a professional a Front-end developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
            </div>
            <div className="md:w-2/5 w-full">
              <ul>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Name:</strong></span><span className="col-span-2">Jaweria Shoukat</span>
                </li>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Address:</strong></span><span className="col-span-2">AHS, Lahore, Pakistan</span>
                </li>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Study:</strong></span><span className="col-span-2">Shaheed Benazir Bhutto University SBA</span>
                </li>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Degree:</strong></span><span className="col-span-2">BCS</span>
                </li>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Mail:</strong></span><span className="col-span-2"><Link href="mailto:jaweeriashoukat@gmail.com" rel="noreferrer">jaweeriashoukat@gmail.com</Link></span>
                </li>
                <li className="grid grid-cols-3 mb-2 text-base font-normal">
                  <span><strong>Phone:</strong></span><span className="col-span-2"><Link href="tel:+923000000000" rel="noreferrer">+92 3000000000</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services mb-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">SERVICES</h4>
              <ul>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Figma to Tailwind</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Web Development</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Landing Page</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>On-Page SEO</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Web Hosting</span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">INTERESTS</h4>
              <ul>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Rain & Snow</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Music & Cinema</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Reading & Writing</span>
                </li>
                <li className="mb-2 text-base font-normal before:content-[_'\2023'] before:w-7 before:h-7 before:text-4xl before:leading-5 flex items-center">
                  <span>Travel & Picnik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills mb-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-56 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">PROGRAMMING</h4>
              <div className="flex flex-col gap-7">
                <ProgressBar programing="Javascript" Percntg="50" />
                <ProgressBar programing="WordPress" Percntg="70" />
                <ProgressBar programing="Theme Customization" Percntg="50" />
              </div>
            </div>
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">LANGUAGE</h4>
              <div className="flex flex-col gap-7">
                <ProgressBar programing="Figma to Tailwind" Percntg="70" />
                <ProgressBar programing="HTML5 & CSS3" Percntg="75" />
                <ProgressBar programing="Tailwind + Nextjs" Percntg="65" />
              </div>
            </div>
          </div>
        </div>
        <div className="education mb-20">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">EDUCATION</h4>
              <ul className="before:content[''] before:bg-neutral-400 before:w-[1px] before:h-full before:absolute relative flex flex-col gap-11">
                <Education date="2018 - 2020" org="SBB University SBA" title="BCSc Degree" />
                <Education date="2016 - 1018" org="Girls Degree College SBA" title="ICSc" />
              </ul>
            </div>
            <div className="">
              <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">EXPERIENCE</h4>
              <ul className="before:content[''] before:bg-neutral-400 before:w-[1px] before:h-full before:absolute relative flex flex-col gap-11">
                <Education date="2020 - running" org="SoftsGens" title="Front-end Developer" />
                <Education date="2020 - running" org="SoftsGens" title="Front-end Developer" />
              </ul>
            </div>
          </div>
        </div>
        <div className="partners mb-20">
          <div className="">
            <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">PARTNERS</h4>
            <Partners />
          </div>
        </div>
        <div className="testimonial mb-20">
          <div className="">
            <h4 className="mb-12 font-bold uppercase after:content-[''] after:w-full after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-56 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">TESTIMONIALS</h4>
            <Testimonial />
          </div>
        </div>
      </motion.div>
    </motion.div>
    )
}
