import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col justify-center overflow-hidden overflow-y-scroll absolute top-0 bottom-0 left-0 right-0">
      <div id="home" className="pl-12">
        <div>
          <h2 className="md:text-5xl font-bold mb-6 text-neutral-700">KELLY EMERSON</h2>
          <span className="line block mt-5 mb-6 h-1 bg-neutral-700 w-14"></span>

          <h3 className="text-2xl mb-14">
            <span className="text-neutral-600">Creative </span>
            <span className="font-bold text-neutral-700">Developer</span>
          </h3>
        </div>
        <div className="">
          <Link href='#'>
            <a className="px-8 py-4 bg-neutral-700 text-white border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black text-base font-medium">Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}


