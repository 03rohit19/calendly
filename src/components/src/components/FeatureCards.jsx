const FeatureCards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 ">
        <div className="md:w-[250px]  mt-20 ">
          <h1 className="text-xl font-bold text-[#162e46]">FEATURE</h1>
          <p className="text-3xl font-bold py-4 text-[#162e46]">
            Feature by plans
          </p>
          <p className="text-[#162e46] ">
            Find the subscription that makes more sense for you or your team{" "}
          </p>
        </div>

        <div className="rounded-xl mt-20 bg-gray-50 lg:w-[185px] h-[200px] ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1 justify-center text-center">
            <h1 className="font-semibold text-[#162e46]  text-xl">BASIC</h1>
            <p className="mt-6 flex text-center ml-8">
              <span className="text-2xl font-bold text-[#162e46] ">Free</span>
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#162e46]  border-2 border-[#162e46]"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="rounded-xl  w-[185px] h-[200px] mt-20 bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-[#162e46] text-xl">ESSENTIALS</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight ml-8 text-[#162e46]">
                $8
              </span>
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#162e46] border-2 border-[#162e46] "
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="rounded-xl  w-[185px] h-[200px] mt-20 bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-[#162e46] text-xl">
              PROFESSIONAL
            </h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight ml-8 text-[#162e46]">
                $12
              </span>
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#0073FF] px-3 py-2 text-center text-sm font-semibold text-[#fff] "
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="rounded-xl  w-[185px] h-[200px] mt-20 bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-[#162e46] text-xl">TEAMS</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight ml-8 text-[#162e46]">
                $8
              </span>
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#162e46] border-2 border-[#162e46] "
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="rounded-xl  w-[185px] h-[200px] mt-20 bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-[#162e46] text-xl">ENTERPRISE</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight ml-8 text-[#162e46]">
                -
              </span>
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#162e46] border-2 border-[#162e46] "
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCards;
