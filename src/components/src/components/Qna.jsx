import { FaPlus } from "react-icons/fa6";

const Qna = () => {
  return (
    <>
      <div className="mt-14 bg-slate-50 flex flex-col px-6 py-20  mx-auto space-y-0 md:space-y-0 md:flex-row md:mt-20">
        <div className="flex h-80 w-[30%] font-semibold md:ml-16 ">
          <h1 className="text-5xl text-[#162e46]">Frequently Asked Qestions</h1>
        </div>

        <div className=" w-[80%] md:mr-20">
          <div className=" w-full ">
            <div className="mt-3 justify-between w-[600px]">
              <div className=" w-full bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    What happens at the end of my trial
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="h-14 w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    Can we try Calendly with multiple users?
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="h-14 w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    What does the renewal process look like?
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    What happens at the end of my trial
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    How do I upgrade or downgrade?
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="h-20 w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg t">
                <div className="flex justify-between ">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    We are a non profit oraganisation , is there special pricing
                    available?
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="h-14 w-full mt-4 bg-white border border-slate-200 ml-[34px] mr-[34px] rounded-lg text-center">
                <div className="flex justify-between text-center">
                  <h1 className="px-5 py-3 font-semibold text-xl text-[#162e46]">
                    What payment methods do you accept?
                  </h1>
                  <span className="px-5 py-4 font-semibold text-xl text-[#162e46]">
                    <FaPlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qna;
