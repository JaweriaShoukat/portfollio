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
      className="flex flex-col justify-center overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 ">
      <motion.div id="home" className="md:pl-12 pl-4"
        variants={FadeOut}>
        <div>
          <h2 className="md:text-5xl text-4xl font-bold mb-6 text-neutral-700 dark:text-white">Jaweria Shoukat</h2>
          <span className="line block mt-5 mb-6 h-1 bg-neutral-700 dark:bg-blue-900/70 w-14"></span>

          <h3 className="text-2xl mb-14 flex">
            <span className="">Creative </span>
            <div className="anim">
              <span className="font-bold">Designer</span>
              <span className="font-bold">Developer</span>
              <span className="font-bold">Freelancer</span>
            </div>
          </h3>
        </div>
        <div className="">
          <Link href='#'>
            <a className="px-8 py-4 bg-neutral-700 dark:bg-blue-900/30 text-white dark:text-white hover:text-neutral-700 border-2 border-transparent hover:bg-transparent dark:hover:bg-transparent hover:border-neutral-700 dark:hover:border-blue-900/30 text-base font-medium">Learn More</a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}


