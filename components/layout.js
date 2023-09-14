import Image from "next/image";
import Banner from '../public/images/banner.jpg';
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className=" md:block hidden w-16 fixed top-0 bottom-0 left-0 z-10"></div>
            <div className=" md:block hidden w-16 fixed top-0 bottom-0 right-0 z-50 "></div>
            <div className="main-Part fixed md:top-16 top-16 md:bottom-16 bottom-0 md:left-16 left-0 md:right-16 right-0 flex ">
                <div className="md:w-[35%] h-full absolute top-0 bottom-0 left-0 ">
                    <figure className="relative h-screen w-full">
                        <Image src={Banner} layout="fill" alt='' priority='true' className="" />
                    </figure>
                </div>
                <div className="content-Side md:w-[65%] w-full bg-teal-50/70 dark:bg-[#151e36] absolute top-0 bottom-0 right-0 flex items-center overflow-hidden">
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    )
}
