// import React, { useEffect, useState } from "react";
// import Content from "../Content/Content";
// import "../App.css";
// const Navbar: React.FC = () => {
//   const [menubar, setMenuBar] = useState(false);
//   const [currentTab, setCurrentTab] = useState("");

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth <= 1000) {
//         setMenuBar(false);
//       }
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   const handleTabs = (data: string | number) => {
//     setCurrentTab(data);
//     setMenuBar(false);
//   };
//   const listclass =
//     "block py-2 text-sm rounded md:bg-transparent text-dark transition ease-linear delay-150  hover:text-accent";
//   const activeClass =
//     "block py-2 text-sm rounded md:bg-transparent text-accent transition ease-linear delay-150  hover:text-accent";
//   const responsiveListclass =
//     "block py-2 text-sm rounded md:bg-transparent text-accent transition ease-linear delay-150  hover:text-primary";
//   const responsiveActiveClass =
//     "block py-2 text-sm rounded md:bg-transparent text-primary transition ease-linear delay-150  hover:text-primary";

//   return (
//     <nav className="bg-light      fixed w-full z-20 top-0 start-0 border-b border-gray-900  ">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <a
//           href="#"
//           className="flex items-center space-x-3 rtl:space-x-reverse w-[168px] "
//         >
//           <img src="logo.png" className="h-auto object-cover" alt="Codesy" />
//         </a>
//         <div className="flex gap-10">
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="text-white bg-primary  py-13  focus:ring-4 focus:outline-none max-[1100px]:hidden focus:ring-blue-300 font-medium  text-sm px-4 py-2 text-center transition ease-linear delay-150  hover:bg-accent"
//             >
//               Start a Project
//             </button>
//             <button
//               onClick={() => setMenuBar(!menubar)}
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="hidden items-center max-[1100px]:block p-2 w-10 h-10 justify-center max-[1000px]:block text-sm text-gray-500 rounded-lg  hover:bg-gray-100 "
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 max-[1100px]:hidden"
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium max-[1100px]:hidden md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//               {Content.header.map((data, index) => {
//                 return (
//                   <li key={index}>
//                     <a
//                       onClick={() => handleTabs(data.label)}
//                       className={
//                         currentTab === data.label ? activeClass : listclass
//                       }
//                       href={data.link}
//                       aria-current="page"
//                     >
//                       {data.label}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//           {menubar && (
//             // <div className="bg-gray-600">
//             <div className="responsive fixed bg-dark top-0">
//               <button
//                 onClick={() => setMenuBar(!menubar)}
//                 data-collapse-toggle="navbar-sticky"
//                 type="button"
//                 className=" items-center max-[1100px]:block p-2 w-10 h-10 justify-center text-sm text-light rounded-lg  "
//                 aria-controls="navbar-sticky"
//                 aria-expanded="false"
//               >
//                 X
//               </button>
//               <div
//                 className="items-center justify-between  w-full md:flex md:w-auto md:order-1 text-center mt-16 "
//                 id="navbar-sticky"
//               >
//                 <ul className="flex flex-col p-4 md:p-0 w-[50%] font-medium   ">
//                   {Content.header.map((data, index: number) => {
//                     return (
//                       <li key={index}>
//                         <a
//                           href={data.link}
//                           onClick={() => handleTabs(data.label)}
//                           className={
//                             currentTab === data.label
//                               ? responsiveActiveClass
//                               : responsiveListclass
//                           }
//                           aria-current="page"
//                         >
//                           {data.label}
//                         </a>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import Content from "../Content/Content";
import "../App.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [menubar, setMenuBar] = useState(false);
  const [currentTab, setCurrentTab] = useState<string>("");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1000) {
        setMenuBar(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabs = (data: string) => {
    setCurrentTab(data);
    setMenuBar(false);
  };

  const listclass =
    "block py-2 text-sm rounded md:bg-transparent text-dark transition ease-linear delay-150  hover:text-accent";
  const activeClass =
    "block py-2 text-sm rounded md:bg-transparent text-accent transition ease-linear delay-150  hover:text-accent";
  const responsiveListclass =
    "block py-2 text-sm rounded md:bg-transparent text-accent transition ease-linear delay-150  hover:text-primary";
  const responsiveActiveClass =
    "block py-2 text-sm rounded md:bg-transparent text-primary transition ease-linear delay-150  hover:text-primary";

  return (
    <nav className="bg-light      fixed w-full z-20 top-0 start-0 border-b border-gray-900  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse w-[168px] max-[800px]:w-32"
        >
          <img src="logo.png" className="h-auto object-cover" alt="Codesy" />
        </a>
        <div className="flex gap-10">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-primary  py-13  focus:ring-4 focus:outline-none max-[1100px]:hidden focus:ring-blue-300 font-medium  text-sm px-4 py-2 text-center transition ease-linear delay-150  hover:bg-accent"
            >
              Start a Project
            </button>
            <button
              onClick={() => setMenuBar(!menubar)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="hidden items-center max-[1100px]:block p-2 w-10 h-10 justify-center max-[1000px]:block text-sm text-gray-500 rounded-lg  hover:bg-gray-100 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 max-[1100px]:hidden"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium max-[1100px]:hidden md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {Content.header.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => handleTabs(data.label)}
                      className={
                        currentTab === data.label ? activeClass : listclass
                      }
                      href={data.link}
                      aria-current="page"
                    >
                      {data.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {menubar && (
            // <div className="bg-gray-600">
            <div className="responsive fixed bg-dark top-0">
              <button
                onClick={() => setMenuBar(!menubar)}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className=" items-center max-[1100px]:block p-2 w-10 h-10 justify-center text-sm text-light rounded-lg  "
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                X
              </button>
              <div
                className="items-center justify-between  w-full md:flex md:w-auto md:order-1 text-center mt-16 "
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 md:p-0 w-[50%] font-medium   ">
                  {Content.header.map((data, index: number) => {
                    return (
                      <li key={index}>
                        <a
                          href={data.link}
                          onClick={() => handleTabs(data.label)}
                          className={
                            currentTab === data.label
                              ? responsiveActiveClass
                              : responsiveListclass
                          }
                          aria-current="page"
                        >
                          {data.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
