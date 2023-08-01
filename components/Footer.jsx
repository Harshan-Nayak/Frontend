import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white bg-black body-font ">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <Link
            href="/"
            className="flex items-center justify-center font-medium text-white-900 title-font md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">HireTalnet</span>
          </Link>
          <p className="mt-2 text-sm text-white-500">
           # No.1 place to hire talents
          </p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 title-font">
              categories
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Hire
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                   Recruiter 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Join  
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Leads 
                </Link>
              </li>
            </nav>
          </div>
          {/* Repeated three more times */}
          {/* ... */}
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 title-font">
              partners
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Tophire 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Angellist 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Internshala 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Talent 
                </Link>
              </li>
            </nav>
          </div>
          {/* Repeated three more times */}
          {/* ... */}
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 title-font">
              support
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  HelpDesk 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Contact 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Email 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Advice 
                </Link>
              </li>
            </nav>
          </div>
          {/* Repeated three more times */}
          {/* ... */}
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-white-900 title-font">
              services
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Interns 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Recruiters 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  companys 
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white-600 hover:text-white-800">
                  Affiliate 
                </Link>
              </li>
            </nav>
          </div>
          {/* Repeated three more times */}
          {/* ... */}
        </div>
      </div>
      <div className="bg-white-100">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-white-500 sm:text-left">
            © 2020 HireTalent —
            <Link
              href="/"
              rel="noopener noreferrer"
              className="ml-1 text-white-600"
              target="_blank"
            >
              @knyttneve
            </Link>
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <Link href="/" className="text-white-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-white-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-white-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href="/" className="ml-3 text-white-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
