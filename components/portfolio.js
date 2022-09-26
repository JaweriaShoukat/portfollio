import Image from "next/image";
import Link from "next/link";
import React from "react";


const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="mr-5 last:mr-0">
                            <a
                                className={
                                    "text-base font-semibold py-3 rounded block leading-normal text-neutral-700 dark:text-white" +
                                    (openTab === 1
                                        ? ""
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                All
                            </a>
                        </li>
                        <li className="mr-5 last:mr-0">
                            <a
                                className={
                                    "text-base font-semibold py-3 rounded block leading-normal text-neutral-700 dark:text-white" +
                                    (openTab === 2
                                        ? ""
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Vimeo
                            </a>
                        </li>
                        <li className="mr-5 last:mr-0">
                            <a
                                className={
                                    "text-base font-semibold py-3 rounded block leading-normal text-neutral-700 dark:text-white" +
                                    (openTab === 3
                                        ? ""
                                        : "")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Youtube
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col ">
                        <div className="py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Project />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <Project />
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <Project />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;


function Project() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <Link href='#'><a>
                <div className="relative min-h-[60vh] h-full w-full overflow-hidden  group">
                    <div className="absolute top-0 bottom-0 left-0 right-0  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/Project1.jpg)" }}></div>

                    <div className="detail bg-white dark:bg-[#182750] absolute -bottom-20 left-5 right-5 p-4 md:group-hover:-translate-y-24 group-hover:-translate-y-28 duration-500">
                        <h3 className="text-base font-bold text-neutral-700 dark:text-white">Kelly Hookin</h3>
                        <span className="text-sm font-bold text-neutral-500 dark:text-white">Vimeo</span>
                    </div>
                </div></a>
            </Link>
            <Link href='#'><a>
                <div className="relative min-h-[60vh] h-full w-full overflow-hidden  group">
                    <div className="absolute top-0 bottom-0 left-0 right-0  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/Project2.jpg)" }}></div>

                    <div className="detail bg-white dark:bg-[#182750] absolute -bottom-20 left-5 right-5 p-4 md:group-hover:-translate-y-24 group-hover:-translate-y-28 duration-500">
                        <h3 className="text-base font-bold text-neutral-700 dark:text-white">Kelly Hookin</h3>
                        <span className="text-sm font-bold text-neutral-500 dark:text-white">Vimeo</span>
                    </div>
                </div></a>
            </Link>
            <Link href='#'><a>
                <div className="relative min-h-[60vh] h-full w-full overflow-hidden  group">
                    <div className="absolute top-0 bottom-0 left-0 right-0  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/Project3.jpg)" }}></div>

                    <div className="detail bg-white dark:bg-[#182750] absolute -bottom-20 left-5 right-5 p-4 md:group-hover:-translate-y-24 group-hover:-translate-y-28 duration-500">
                        <h3 className="text-base font-bold text-neutral-700 dark:text-white">Kelly Hookin</h3>
                        <span className="text-sm font-bold text-neutral-500 dark:text-white">Vimeo</span>
                    </div>
                </div>
            </a>
            </Link>
            <Link href='#'><a>
                <div className="relative min-h-[60vh] h-full w-full overflow-hidden  group">
                    <div className="absolute top-0 bottom-0 left-0 right-0  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/Project1.jpg)" }}></div>

                    <div className="detail bg-white dark:bg-[#182750] absolute -bottom-20 left-5 right-5 p-4 md:group-hover:-translate-y-24 group-hover:-translate-y-28 duration-500">
                        <h3 className="text-base font-bold text-neutral-700 dark:text-white">Kelly Hookin</h3>
                        <span className="text-sm font-bold text-neutral-500 dark:text-white">Vimeo</span>
                    </div>
                </div>
            </a>
            </Link>
        </div>
    )
}