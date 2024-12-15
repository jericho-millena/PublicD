const Card = ({ user }) => {
  const { name, campus, image } = user;

  return (
    <a
      href="/pages/centers/CenterMain"
      className="items-center bg-white hover:bg-gray-100 relative rounded-lg shadow-md cursor-pointer transition-all"
    >
      <div className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="group flex flex-col md:flex-row items-center p-5">
          {/* Image */}
          <img
            className="h-40 w-55 object-cover mb-4 md:mb-0 md:mr-5"
            src="/PublicD/socials/kist.png"
            alt={name}
          />
          {/* Text content */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.075 6 13 6 13s6-8.925 6-13c0-3.314-2.686-6-6-6zM12 10a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              {campus}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
