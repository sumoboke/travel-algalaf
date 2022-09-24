import React from "react";

const FooterAlgalaf = () => {
  return (
    <footer className="w-full py-2 sm:py-1 px-4 bg-gradient-to-b from-orange-700/90 via-amber-600/80 to-yellow-500/70">
      {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-2 sm:mt-0 px-5 flex flex-col justify-center items-center text-white">
          {/* ::Site name */}
          <h1 className="font-title text-4xl text-center font-semibold mt-auto font-signature">
            ALGALAF
          </h1>
          {/* ::Social & copyright */}
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* Facebook */}
              {/* Twitter */}
              <a href="#link" className="ml-3 text-white/90">
                <span className="sr-only">Twitter</span>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#link" className="ml-3 text-white/90">
                <span className="sr-only">Instagram</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              {/* Linkedin */}
            </span>
            {/* :::Copyright */}
            <span className="py-1 text-xs">
              &copy;2022, PT. ALGALAF All Rights Reserved.
            </span>
          </div>
          {/* ::Mobile separator line */}
          <span
            className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-white/90 transform -translate-x-1/2"
            aria-hidden="true"
          />
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-white/90">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-1 text-center sm:text-left text-xl text-white font-bold tracking-wide">
              Navigation
            </h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li>
                <a href="#link" className="hover:text-white/90">
                  Home
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-white/90">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-white/90">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#link" className="hover:text-white/90">
                  About
                </a>
              </li>
            </nav>
          </div>
          {/* ::Address */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-1 text-xl text-white font-bold tracking-wide">
              Address
            </h3>
            <p className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">
              101 Paradise Road, 97460 Fancy Island REUNION
            </p>
          </div>
          {/* ::Email */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-1 text-xl text-white font-bold tracking-wide">
              Algalaf Tours Company
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-white/90 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">algalaf@paradise.com</a>
            </p>
          </div>
          {/* ::Phone */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-1 text-xl text-white font-bold tracking-wide">
              Phone contact
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-white/90 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>209-217-2459</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAlgalaf;
