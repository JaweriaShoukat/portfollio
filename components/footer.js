import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillSkype } from "react-icons/ai";
import Link from "next/link";


export default function Footer() {
  return (
    <>
    <footer className="fixed left-0 right-0 bottom-0 bg-white dark:bg-[#182750] md:h-16 h-10 flex justify-between items-center md:px-16 px-4">
        <div>
            <p>Copyright © 2022</p>
        </div>
        <div>
            <ul className="flex gap-2 text-base">
              <li>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </Link>
              </li>
              <li>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </Link>
              </li>
              <li>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </Link>
              </li>
              <li>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </Link>
              </li>
              <li>
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillSkype />
              </Link>
              </li>
            </ul>
        </div>
    </footer>
    </>
  )
}
