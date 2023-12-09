import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
      <h1
        className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
       md:w-2/5"
      >
        <span className="text-teal-400">Free</span> until you're ready to
        launch
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter Your ph.no"
          className="text-gray-800
         sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
        />
        <button
          className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
         rounded-md text-white md:w-auto w-full"
        >
          Request Code
        </button>
      </div>
    </div>
    <ItemsContainer />
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-gray-400 text-sm pb-8"
    >
      <span>© 2023 Appy. All rights reserved.</span>
      <span>Terms · Privacy Policy</span>
      <SocialIcons Icons={Icons} />
    </div>
  </footer>

    // <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
    //         <div className="relative z-10 mx-auto max-w-7xl px-4">
    //             <div className="-m-6 flex flex-wrap">
    //                 <div className="w-full p-6 md:w-1/2 lg:w-5/12">
    //                     <div className="flex h-full flex-col justify-between">
    //                         <div className="mb-4 inline-flex items-center">
    //                             <Logo width="100px" />
    //                         </div>
    //                         <div>
    //                             <p className="text-sm text-gray-600">
    //                                 &copy; Copyright 2023. All Rights Reserved by anilpiparaiya.
    //                             </p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Company
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Features
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Pricing
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Affiliate Program
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Press Kit
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-2/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Support
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Account
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Help
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Contact Us
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Customer Support
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //                 <div className="w-full p-6 md:w-1/2 lg:w-3/12">
    //                     <div className="h-full">
    //                         <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
    //                             Legals
    //                         </h3>
    //                         <ul>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Terms &amp; Conditions
    //                                 </Link>
    //                             </li>
    //                             <li className="mb-4">
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Privacy Policy
    //                                 </Link>
    //                             </li>
    //                             <li>
    //                                 <Link
    //                                     className=" text-base font-medium text-gray-900 hover:text-gray-700"
    //                                     to="/"
    //                                 >
    //                                     Licensing
    //                                 </Link>
    //                             </li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
  )
}

export default Footer