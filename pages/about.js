import Progress from "../components/progress";

export default function About() {
    return (
        <div id="about" className="flex flex-col h-full overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0">
            <div className="biography px-5 pt-24 ">
                <div className="mb-12">
                    <h4 className="font-bold text-neutral-700 after:content-[''] md:after:w-3/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40  flex items-center tracking-[7px]">ABOUT ME</h4>
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

            <div className="services px-5 pt-24 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
                    <div className="">
                        <h4 className="overflow-hidden mb-12 font-bold text-neutral-700 after:content-[''] md:after:w-1/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40  flex items-center tracking-[7px]">SERVICES</h4>
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
                        <h4 className="overflow-hidden mb-12 font-bold text-neutral-700 after:content-[''] md:after:w-1/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40  flex items-center tracking-[7px]">INTERESTS</h4>
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
            <div className="skills px-5 pt-24 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
                    <div className="">
                        <h4 className="overflow-hidden mb-12 font-bold text-neutral-700 after:content-[''] md:after:w-1/5 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-52  flex items-center tracking-[7px]">PROGRAMMING</h4>
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
                        <h4 className="overflow-hidden mb-12 font-bold text-neutral-700 after:content-[''] md:after:w-1/4 after:w-2/4 after:h-[1px] after:bg-neutral-400 after:absolute after:ml-40  flex items-center tracking-[7px]">LANGUAGE</h4>
                        <Progress value={90}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
