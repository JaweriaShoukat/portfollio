import Image from "next/image";
import Link from "next/link";
import News1 from '../public/images/news1.jpg';

export default function LatestNews() {
  return (
    <div>
        <ul>
            <News num="01" title="Reasons Why People Use Discord"/>
            <News num="02" title="Why We Should Read Fewer Books"/>
            <News num="03" title="A Final Farewell to the iPod"/>
            <News num="04" title="Dealing with Spring Allergy Symptoms"/>
            <News num="05" title="How to Take a Break from Yourself"/>
        </ul>
    </div>
  )
}


function News(props){
    return(
        <li className="flex py-7 relative group">
                <span className="md:block hidden bg-zinc-400 min-w-[50px] w-[50px] h-[50px] text-neutral-700 text-center items-center text-base leading-[50px] rounded-full font-semibold">{props.num}</span>
                <div className="detail grid gap-2 md:ml-7 md:pl-7 relative md:before:block before:hidden before:content-[''] before:w-[2px] before:bg-zinc-400 before:absolute before:left-0 before:top-[-17px] before:bottom-[-22px] transform before:rotate-[8deg]">
                    <div className="extra_metas">
                        <ul className="flex flex-wrap md:gap-3">
                            <li>
                                <span className="text-base text-neutral-500">August 9, 2021</span>
                            </li>
                            <li className="before:content-['/'] before:text-neutral-500 relative">
                                <span className="text-base text-neutral-500 pl-3"><Link href='#'><a>Branding</a></Link></span>
                            </li>
                            <li className="before:content-['/'] before:text-neutral-500 relative">
                                <span className="text-base text-neutral-500 pl-3"><Link href='#'><a>0 Comments</a></Link></span>
                            </li>
                        </ul>
                    </div>
                    <div className="post_title">
                        <h3 className="md:text-2xl text-xl font-semibold hover:underline underline-offset-4"><Link href='#'><a>{props.title}</a></Link></h3>
                    </div>
                </div>
                <div className="absolute md:w-2/6 md:left-1/2 top-0 -z-10 opacity-0 group-hover:opacity-100 duration-500">
                    <Image src={News1} alt=''></Image>
                </div>
            </li>
    )
}