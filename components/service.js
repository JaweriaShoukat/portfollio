import Link from "next/link";


export default function Service(props) {
    return (
        <>
            <Link href='#'><a>
                <div className="border border-neutral-400 pt-16 px-8 pb-16 bg-transparent hover:bg-zinc-800 dark:hover:bg-blue-900/30 group duration-500">
                    <div className="grid gap-7 text-center text-neutral-700 dark:text-white group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d={props.icon} />
                        </svg>
                        <h3 className="text-2xl font-medium">{props.title}</h3>
                        <p className="text-base group-hover:text-neutral-400 dark:group-hover:text-white">{props.detail}</p>
                    </div>
                </div>
            </a></Link>
        </>
    )
}
