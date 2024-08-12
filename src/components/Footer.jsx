import React from "react";
import { FaTiktok, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <>
      <div className="mt-8 bg-slate-50 pt-9 pb-5">
        <div className="mx-auto w-full max-w-[1366px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 ">
            <div className="md:w-[316px] mb-6">
              <h1 className=" font-extrabold text-xl">
                <span className="text-red-800">YOUR</span>LOGO
              </h1>
              <p className="mt-[12px] text-[18px] font-normal /[80%] text-start ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                fugit non. Incidunt dolorum adipisci, tempore asperiores nemo
                odio facere officiis enim animi placeat eaque nesciunt alias
                beatae id, at dicta.
              </p>
              <div className="mt-[18px] flex gap-4">
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.tiktok.com/@nexasleads?_t=8ohqnvX8Muk&_r=1"
                >
                  <FaTiktok className="text-red-800 text-[25px]" />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.instagram.com/nexasleads?igsh=MWtkcWxpejFwb2czZA%3D%3D&utm_source=qr"
                >
                  <FaInstagramSquare className="text-red-800 text-[25px]" />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://x.com/nexasleads?s=11&t=2CKAr5hvASnivULMlxv86g"
                >
                  <BsTwitterX className="text-red-800 text-[25px]" />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.linkedin.com/company/nexasleads/"
                >
                  <FaLinkedin className="text-red-800 text-[25px]" />
                </a>
              </div>
            </div>
            <div className="md:w-[316px] flex md:justify-center">
              <div>
                <h4 className="font-extrabold text-[16px] text-red-800 ">
                  Pages
                </h4>
                <ul className="mt-[18px] flex flex-col gap-4">
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home1
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home2
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home3
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home4
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home5
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Home6
                    </a>
                  </li>
                  <li className="text-[18px] font-normal/[80%] hover:text-red-800">
                    <a className="hover:scale-110" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-[316px] ">
              <div className="mt-[23px] flex md:justify-center">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <IoCall className="text-[20px] text-red-800" />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="tel:+21246456644"
                    className="font-Inter text-[14px] font-medium "
                  >
                    +212 46456644
                  </a>
                  <p className="font-Inter text-[12px] font-medium ">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex md:justify-center">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <MdEmail className="text-[20px] text-red-800" />
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:info@contact.com"
                    className="font-Inter text-[14px] font-medium "
                  >
                    info@contact.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium ">
                    Support Email
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[316px]">
              <h4 className="mt-[23px] text-[18px] text-red-800 font-extrabold ">
                NEWSLETTER
              </h4>
              <p className="mt-[10px] text-left text-[13px] font-medium /[90%]">
                Subscribe to our weekly Newsletter and receive updates via
                email.
              </p>
              <div className="relative mt-[20px] h-[43px] w-full max-w-[290px]">
                <input
                  placeholder="Your email address"
                  className="h-full w-full rounded-[10px] border border-[#666666] bg-transparent pl-4 pr-[90px] font-Inter text-[12px] font-normal  outline-none transition duration-300 focus:border-white"
                />
                <button className="absolute right-0 top-0 mt-1 mr-1 flex h-[35px] w-[84px] items-center justify-center rounded-[8px] text-white bg-red-800 text-center font-Inter text-[12px] font-semibold  hover:bg-white  hover:text-red-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className=" py-4">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col-reverse justify-between sm:px-[18px] md:flex-row md:px-10">
            <div>
              <p className="mt-[14px] text-[15px] font-normal ">
                Copyright © 2023 . All Rights Reserved.
              </p>
            </div>
            <div>
              <ul className="mb-[14px] flex items-center gap-4">
                <li>
                  <a
                    href="/"
                    className="font-Inter text-[14px] font-medium  transition hover:text-rose-600"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-Inter text-[14px] font-medium  transition hover:text-rose-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="font-Inter text-[14px] font-medium  transition hover:text-rose-600"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
