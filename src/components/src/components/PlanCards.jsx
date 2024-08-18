const PlanCards = () => {
  return (
    <div className="flex flex-wrap justify-center  ">
      <div className="mt-20 p-2 w-full md:w-auto lg:w-[250px] lg:flex-shrink-0 h-96 ">
        <div className="rounded-xl h-full bg-gray-50 ring-1 ring-inset border  ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-gray-600 text-xl">BASIC</h1>
            <p className="mt-6 flex">
              <span className="text-2xl font-bold  text-gray-900 text-center">
                Always Free
              </span>
            </p>
            <p className="mt-2 text-lg leading-5 text-gray-500">
              When you just want the basics
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#0073FF] border-2 border-[#0073FF]"
            >
              Get access
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 p-2 w-full md:w-auto lg:w-[250px] lg:flex-shrink-0 ">
        <div className="rounded-xl h-full bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-gray-600 text-xl">ESSENTIALS</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                $8 <span className="text-lg">/seat/mo</span>
              </span>
            </p>
            <p className="mt-2 text-lg leading-5 text-gray-600 w-full">
              When you need powerful scheduling.
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#0073FF] border-2 border-[#0073FF]"
            >
              Get access
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 p-2 w-full md:w-auto lg:w-[250px] lg:flex-shrink-0 ">
        <div className="rounded-xl h-full bg-[#fff] ring-1 ring-inset border  ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-gray-600 text-xl">ESSENTIALS</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                $8 <span className="text-lg">/seat/mo</span>
              </span>
            </p>
            <p className="mt-2 text-lg leading-5 text-gray-600">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#0073FF] px-3 py-2 text-center text-sm font-semibold text-[#fff] border-2 border-[#0073FF]"
            >
              Start Professional
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 p-2 w-full md:w-auto lg:w-[250px] lg:flex-shrink-0  ">
        <div className="rounded-xl h-full bg-gray-50 ring-1 ring-inset border ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-gray-600 text-xl">ESSENTIALS</h1>
            <p className="mt-6 flex gap-x-2">
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                $8 <span className="text-lg">/seat/mo</span>
              </span>
            </p>
            <p className="mt-2 text-lg leading-5 text-gray-600 w-full">
              When you need powerful scheduling.
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-[#fff] px-3 py-2 text-center text-sm font-semibold text-[#0073FF] border-2 border-[#0073FF]"
            >
              Get access
            </a>
          </div>
        </div>
      </div>
      <div className="mt-20 p-2 w-full md:w-auto lg:w-[250px] lg:flex-shrink-0 ">
        <div className="rounded-xl h-full bg-gray-800 ring-1 ring-inset border  ring-gray-900/5 lg:flex lg:flex-col lg:py-5">
          <div className="px-8 flex-1">
            <h1 className="font-semibold text-[#fff] text-xl ">BASIC</h1>
            <p className="mt-6 flex">
              <span className="text-2xl font-bold text-[#fff]">
                Always Free
              </span>
            </p>
            <p className="mt-2 text-lg leading-5 text-[#fff]">
              When you just want the basics
            </p>
          </div>
          <div className="mt-auto px-8 py-5">
            <a
              href="#"
              className="block w-full rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-[#fff] border-2 border-[#fff]"
            >
              Start Professional
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCards;
