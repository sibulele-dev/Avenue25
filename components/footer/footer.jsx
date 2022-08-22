import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function footer() {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <h1 className="text-5xl font-semibold mt-0">
            Avenue<span className="text-blue-600">25</span>
          </h1>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            
            
            <li>
              <a href="https://www.privacypolicygenerator.info/live.php?token=12iOD4uvO9CzSBaPHgWuzBsDbZjQlIWE" class="mr-4 text-lg hover:underline md:mr-6 ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" class=" text-lg hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="/" class="hover:underline">
            Avenue25
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default footer;
