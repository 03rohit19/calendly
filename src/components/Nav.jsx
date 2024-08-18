import { RiArrowDropDownLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="bg-[#fff]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <img
            className="h-14 w-auto "
            src="https://logowik.com/content/uploads/images/calendly3400.logowik.com.webp"
            alt="Calendly Logo"
          />
          <h1 className="text-[#0073FF] font-semibold text-4xl">Calendly</h1>
        </div>

        <div className="hidden sm:flex sm:ml-6 flex-1 justify-center">
          <div className="flex space-x-4 ">
            {/* Current: "bg-gray-900 text-white", D700 hover:text-white" */}
            <a
              href="#"
              className="text-black font-bold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg "
            >
              Individuals
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold"
            >
              Teams
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold"
            >
              Enterprise
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-700 flex hover:text-white rounded-md px-3 py-2 text-lg font-bold"
            >
              Product
              <i className="items-center text-2xl mt-1">
                <RiArrowDropDownLine />
              </i>
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-bold"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-black hover:bg-gray-700 flex hover:text-white rounded-md px-3 py-2 text-lg font-bold"
            >
              Resources
              <i className="items-center text-2xl mt-1">
                <RiArrowDropDownLine />
              </i>
            </a>
          </div>
        </div>
        <div className="flex items-center ">
          <button
            type="button"
            className="bg-[#fff] text-black rounded-md px-3 py-2 text-lg font-bold mr-2"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-[#0073FF] rounded-md text-[#fff] px-3 py-2 text-sm font-medium mr-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
