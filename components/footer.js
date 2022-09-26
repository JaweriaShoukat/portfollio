import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillSkype } from "react-icons/ai";


export default function Footer() {
  return (
    <>
    <footer className="fixed left-0 right-0 bottom-0 bg-white md:h-16 h-10 flex justify-between items-center md:px-16 px-4">
        <div>
            <p>Copyright © 2022</p>
        </div>
        <div>
            <ul className="flex gap-2 text-base">
              <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              </li>
              <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              </li>
              <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              </li>
              <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              </li>
              <li>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillSkype />
              </a>
              </li>
            </ul>
        </div>
    </footer>
    </>
  )
}
