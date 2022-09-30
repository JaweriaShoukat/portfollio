import { motion, Variants } from "framer-motion"

export default function ProgressBar(props) {

  const Progress = {
    offscreen: {
      opacity: 0,
      width: 0,
    },
    onscreen: {
      opacity: 1,
      width: "auto",
      transition: {
        type: "ease",
        duration: 1,
        bounce: 0.3
      }
    }

  }

  return (
    <div className="skillBar">
      <div className="flex justify-between mb-2">
        <span>{props.programing}</span><span>{props.Percntg}</span>
      </div>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}

        className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          variants={Progress}

          className={'bg-blue-600 h-1 text-xs font-medium text-neutral-700 text-right p-0.5 leading-none rounded-full ' + props.layout}
        ></motion.div>
      </motion.div>
    </div>

  )
}
