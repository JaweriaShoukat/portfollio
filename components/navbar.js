import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"


function NavLink({ to, children }) {
    return <a href={to} className={``}>
        {children}
    </a>
}

export default function Navbar(props) {

    const [open, setOpen] = useState(false);
    const [navID, setNavID] = useState(1);


    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const handleClick = (id) => {
        setNavID(id)
        props.sendData(navID)
    }



    return (

        <nav className="fixed top-0 left-0 right-0 flex bg-white dark:bg-[#182750] px-4 py-4 h-16 items-center md:px-16 custom-z-ind">

            {/* mobile Menu Starts */}

            <div className={`md:hidden absolute top-[63px] right-0 h-screen w-[50vw] z-50 bg-white dark:bg-[#182750] transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out  `}>
                <div className="flex items-center justify-center mx-auto bg-white dark:bg-[#182750] h-24" onClick={() => setOpen(false)}> {/*logo container*/}
                    <Link href="/">
                        <a className="text-xl font-semibold flex justify-center items-center">
                            {/* <Image src={WhiteLogo} alt=''></Image> */}
                        </a></Link>
                </div>
                <div className="flex flex-col gap-5 text-right text-black dark:text-white text-[15px] ">
                    <div onClick={() => handleClick(1)}>
                        <NavLink>
                            Home
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(2)}>
                        <NavLink>
                            About
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(3)}>
                        <NavLink>
                            Portfolio
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(4)}>
                        <NavLink>
                            Services
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(5)}>
                        <NavLink>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* mobile Menu End*/}


            <div className="w-6/12 flex items-center">
                <Link href="/"><a className="md:text-xl font-medium" >JV WebCreation</a></Link>
            </div>
            <div className="w-6/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    {!open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    )}
                </div>

                <div className="hidden md:flex">
                    <div onClick={() => handleClick(1)} className="hdr">
                        <NavLink>
                            Home
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(2)} className="hdr">
                        <NavLink>
                            About
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(3)} className="hdr">
                        <NavLink>
                            Portfolio
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(4)} className="hdr">
                        <NavLink>
                            Services
                        </NavLink>
                    </div>
                    <div onClick={() => handleClick(5)} className="hdr">
                        <NavLink>
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div>
                    <button className="bg-black text-white dark:bg-white dark:text-black px-2 py-2 ml-3 rounded"
                        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </nav>
    )
}