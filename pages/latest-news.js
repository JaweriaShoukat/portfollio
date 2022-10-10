import { motion, Variants } from "framer-motion";
import Latest from '../components/latestNews'

export default function latestNews() {
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
    id="news" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
    <motion.div
      variants={FadeOut}>

      <div className="mb-24">
        <h4 className="mb-12 font-bold uppercase after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-52 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">LATEST NEWS</h4>
        <Latest />
      </div>
    </motion.div>
  </motion.div>
  )
}
