import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="mt-8 bg-[#fff] pt-9">
        <div className="mx-auto w-full  px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[450px] border border-white">
              <p className="text-[18px] font-medium text-black">
                <h1 className="text-black font-extrabold text-4xl ">
                  <span className="text-[#162e46]">Easy</span> <br></br>
                  <span className="mt-5 text-[#0073FF]">ahead</span>
                </h1>
              </p>
              <p className="mt-[18px] text-[19px] font-normal text-black/[80%]">
                we take the work out of connecting with others so you can
                accomplish more.
              </p>
              <div className="w-full mt-4 bg-white border border-slate-200  rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className=" font-semibold text-xl text-[#162e46] px-2 py-2">
                    English
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="mt-[18px] flex gap-6">
                <a className="hover:scale-110" target="_blank" href="#">
                  <FaTwitter className="h-8 w-8" />
                </a>
                <a className="hover:scale-110" target="_blank" href="#">
                  <TiSocialFacebook className="h-8 w-8" />
                </a>
                <a className="hover:scale-110" target="_blank" href="#">
                  <FaInstagram className="h-8 w-8" />
                </a>
                <a className="hover:scale-110" target="_blank" href="#">
                  <FaLinkedinIn className="h-8 w-8" />
                </a>
                <a className="hover:scale-110" target="_blank" href="#">
                  <FiYoutube className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="md:w-[316px] border border-red-500">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] border border-pink-600"></div>
                <div className="ml-[18px] border border-orange-500">
                  <a
                    href="tel:+911800123444"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    +91 1800123444
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    help@lorem.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-[#fff]">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    Sub Nerul, Mumbia, India, 123456
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Address
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[316px] border border-red-500">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] border border-pink-600"></div>
                <div className="ml-[18px] border border-orange-500">
                  <a
                    href="tel:+911800123444"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    +91 1800123444
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    help@lorem.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-[#fff]">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    Sub Nerul, Mumbia, India, 123456
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Address
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[316px] border border-red-500">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] border border-pink-600"></div>
                <div className="ml-[18px] border border-orange-500">
                  <a
                    href="tel:+911800123444"
                    className="font-Inter text-[14px] font-medium text-white"
                  >
                    +91 1800123444
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Support Number
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    help@lorem.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-[#fff]">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]"></div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-[#fff]"
                  >
                    Sub Nerul, Mumbia, India, 123456
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-white">
                    Address
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[30px] text-white border border-blue-800" />
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8 border border-yellow-500">
            <p className="text-[10px] font-normal text-white md:text-[12px]">
              © Copyright
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
