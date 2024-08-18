// import { IoToggleOutline } from "react-icons/io5";
import { FaToggleOn } from "react-icons/fa";

const HeaderPage = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center text-center mt-20">
        <h1 className="md:text-[65px] md:ml-8  font-bold tracking-tight text-[#162e46] ">
          Scheduling should be easy.
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center text-center ">
        <h1 className="md:text-[65px] md:ml-8  font-bold tracking-tight text-[#0073FF]">
          Start free
        </h1>
      </div>
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none flex justify-center">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-500 sm:grid-cols-2 md:flex lg:gap-x-2">
          <a href="#" className="px-3 py-2">
            Billed monthly
          </a>
          <a href="#" className="flex gap-4 text-[#0073FF] px-3 py-2 font-bold">
            <span className="text-3xl text-[#0073FF]">
              <FaToggleOn />
            </span>{" "}
            Billed annually
          </a>

          <a
            href="#"
            className="text-[#162e46] px-3 py-2 bg-slate-100 rounded-lg font-bold"
          >
            Save 20% with annual plans
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
