import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const MyDetails = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <ul className="flex justify-center gap-6 md:gap-8 mt-4">
        <li>
          <a
            href="https://github.com/Amanulla2022"
            target="_blank"
            rel="noreferrer"
            className="social-icons  "
          >
            <FaGithub className="icon-font" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
            target="_blank"
            rel="noreferrer"
            className="social-icons  "
          >
            <FaLinkedin className="icon-font" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/aman.mulla.90281/"
            target="_blank"
            rel="noreferrer"
            className="social-icons  "
          >
            <FaFacebook className="icon-font" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/amanulla313/"
            target="_blank"
            rel="noreferrer"
            className="social-icons  "
          >
            <FaInstagram className="icon-font" />
          </a>
        </li>
      </ul>
      <p className=" mt-4 bg-purple-800 p-2 text-white opacity-75 rounded-xl">
        Created by me,
        <a
          href="https://github.com/Amanulla2022/flurn_pokemon"
          rel="noreferrer"
          target="_blank"
          className="underline social-icons"
        >
          Amanulla Iqbal Mulla
        </a>
      </p>
    </div>
  );
};

export default MyDetails;
