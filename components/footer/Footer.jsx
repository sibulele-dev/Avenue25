import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <h1 className="" Name="text-5xl font-semibold mt-0">
              Avenue
              <span className="" Name="text-blue-600">
                25
              </span>
            </h1>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.privacypolicygenerator.info/live.php?token=12iOD4uvO9CzSBaPHgWuzBsDbZjQlIWE"
                className="mr-4 text-lg hover:underline md:mr-6 "
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className=" text-lg hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Avenue25
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
