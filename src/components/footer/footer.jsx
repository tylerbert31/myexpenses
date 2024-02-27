import React from "react";
import github from "../../../public/images/github-mark.png";
import instagram from "../../../public/images/instagram.png";
import linkedin from "../../../public/images/linkedin.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-gray-200 text-base-content mt-16">
      <aside className="items-center grid-flow-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>

        <p>Tyler Bert - 2024</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://github.com/tylerbert31" target="_blank">
          <img src={github.src} alt="Github - Tyler" className="h-7" />
        </Link>
        <Link href="https://www.instagram.com/tylerbert31/" target="_blank">
          <img src={instagram.src} alt="Instagram - Tyler" className="h-7" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/tyler-bert-baring-156464270/"
          target="_blank"
        >
          <img
            src={linkedin.src}
            alt="LinkedIn - Tyler"
            className="h-7 saturate-0 contrast-[300]"
          />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
