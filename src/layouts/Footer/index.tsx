import Link from 'next/link';
import React from 'react';

import { FacebookIcon } from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';
import { GooglePlusIcon } from '@components/Common/icons/GooglePlus';
import { DribbleIcon } from '@components/Common/icons/Dribble';

export const Footer = () => {
  return (
    <>
      <section className="footer section-container my-0 bg-black-light">
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 text-gray-100">
            <div className="py-10 lg:py-20 flex flex-col items-center lg:border-r border-gray-300">
              <img className="mb-6" src={'/assets/images/logo.png'} alt="X-Corporation" />
              <p className="max-w-68 text-center text-sm leading-6">
                Continually matrix cross functional opportunities whereas ethical information.
                Compellingly streamline enabled human capital before resource-leveling internal or
                "organic".
              </p>
            </div>
            <div className="py-10 lg:py-20 flex flex-col items-center lg:border-r border-gray-300">
              <h4 className="text-white text-lg mb-4">We work for your profit</h4>
              <p className="max-w-68 text-center text-sm leading-6">
                Distinctively expedite viral materials rather than out-of-the-box solutions.
                Credibly empower revolutionary ROI rather than unique products. Collaboratively
                maximize principle-centered ideas before highly efficient data. Phosfluorescently.
              </p>
            </div>
            <div className="py-10 lg:py-20 flex flex-col items-center">
              <h4 className="text-white text-lg mb-4">Contact Us Today</h4>
              <p className="max-w-62 text-center text-sm leading-6">
                Call Us +6282216866725 <br /> Send an Email on{' '}
                <a className="text-blue-100" href="#">
                  contact@kreativetechinnovations.com
                </a>
                <br />
                Jalan Akipadma 001/006, Babakan, Babakan Ciparay, Kota Bandung, Indonesia
              </p>
              {/* <div className="flex gap-3 mt-10">
                <a
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full bg-gray-400 text-gray-600 hover:bg-blue-100 hover:text-white"
                  href="#"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full bg-gray-400 text-gray-600 hover:bg-blue-100 hover:text-white"
                  href="#"
                >
                  <TwitterIcon />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full bg-gray-400 text-gray-600 hover:bg-blue-100 hover:text-white"
                  href="#"
                >
                  <GooglePlusIcon />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full bg-gray-400 text-gray-600 hover:bg-blue-100 hover:text-white"
                  href="#"
                >
                  <DribbleIcon />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section-container bg-black-dark">
        <div className="section-content w-full flex flex-wrap justify-between text-gray-600 py-5">
          <p className="font-[600] text-sm">
            COPYRIGHT © 2023 |{' '}
            <a href="#" className="text-blue-100">
              KREATIVE INTELLITECH INNOVATIONS
            </a>{' '}
            {/* DESIGNED AND DEVELOPED BY:{' '}
            <a className="text-blue-100" href="#">
              UICOOKIES.COM
            </a> */}
          </p>
          <div className="flex gap-5">
            <Link href="/" className="text-[14px] text-white">
              Home
            </Link>
            <Link href="/about" className="text-[14px]">
              About
            </Link>
            <Link href="/services" className="text-[14px]">
              Services
            </Link>
            {/* <a href="/" className="text-[14px]">
              Portfolio
            </a>
            <a href="/" className="text-[14px]">
              Blog
            </a> */}
            <Link href="/contact" className="text-[14px]">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
