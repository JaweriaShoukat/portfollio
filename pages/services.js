import { motion } from 'framer-motion';
import Service from '../components/service';

export default function Services() {
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
      id="services" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0 px-5 pt-24">
      <motion.div
        variants={FadeOut}>

        <div className="mb-24">
          <h4 className="mb-12 font-bold uppercase after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 dark:after:bg-white  after:absolute after:ml-40 flex items-center md:tracking-[7px] tracking-[4px] relative overflow-hidden">SERVICES</h4>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <Service
              title="Responsive Web Design"
              icon="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              detail="
              Transforming ideas into visually stunning and mobile-friendly websites that adapt seamlessly to various devices, ensuring an exceptional user experience." />

            <Service
              title="UI/UX Optimization"
              icon="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              detail="Elevating user interfaces through intuitive design and seamless navigation, creating engaging and user-friendly digital experiences." />

            <Service
              title="HTML/CSS Mastery"
              icon="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              detail="Crafting clean, efficient, and standards-compliant HTML/CSS code to structure and style websites for optimal performance and compatibility." />

            <Service
              title="CMS Integration"
              icon="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
              detail="Seamlessly integrating websites with popular content management systems like WordPress for efficient content updates and management." />

            <Service
              title="JavaScript Magic"
              icon="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              detail="Adding interactivity and functionality to websites with JavaScript, creating dynamic features that captivate users and enhance engagement." />

            <Service
              title="SEO Integration"
              icon="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              detail="Seamlessly integrating websites with popular content management systems like WordPress for efficient content updates and management." />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
