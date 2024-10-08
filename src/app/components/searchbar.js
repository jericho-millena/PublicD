// components/Navbar.js

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="max-w-4xl mx-auto flex justify-center">
        <form className="relative w-full max-w-xl flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 text-gray-600 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="sr-only">Filter</span>
            </button>
          </div>
          {/* Add space between search bar and filter dropdown */}
          <div className="ml-4">
            <select className="p-2 border border-black text-white rounded-lg text-sm bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
