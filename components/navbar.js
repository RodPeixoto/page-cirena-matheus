import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
  // "Cursos",
    //"Features",
   // "Pricing",
   // "Company",
   // "Blog",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-red-700 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logocm.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                        
                      />
                    </span>
                    <span>Cirena & Matheus</span>
                  </span>
                </Link>

                

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-red-700 focus:text-red-700 focus:bg-red-200 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-red-500 focus:text-red-500 focus:bg-red-200 dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                      </Link>
                    ))}
                   
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div>
        </div>

        <div className="hidden mr-0 space-x-0 lg:flex nav__item">
          <Link href="" className="px-0 py-0 text-white bg-red-700 rounded-md md:ml-5">
              
          </Link>

          <ThemeChanger />
        </div>
      </nav>
      
    </div>
    
  );
}

export default Navbar;
