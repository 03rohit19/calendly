const Trial = () => {
  return (
    <>
      <div className=" bg-slate-800 h-[300px] justify-center flex flex-col px-6 border py-10 border-red-500  mx-auto space-y-0 md:space-y-0 md:flex-row ">
        <div className="bg-slate-800">
          <h1 className="text-4xl font-bold text-center text-[#fff] mb-5">
            Easy Access for easy booking
          </h1>

          <div className="w-[700px] flex justify-center mb-5">
            <p className="text-lg text-center text-[#fff]">
              Share your Calendky link right from your browser, s you can
              schedule meetings without the back-and-forth
            </p>
          </div>
          <div className="flex flex-col h-20 justify-center">
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-[#0073FF] rounded-md text-center  text-[#fff] px-3 py-2 text-sm font-medium mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Get Started
              </button>
              <button
                type="button"
                className=" rounded-md border-2 border-[#fff] text-center text-[#fff] px-3 py-2 text-sm font-medium mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trial;
