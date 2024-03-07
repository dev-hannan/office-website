const Footer = () => {
  return (
    // <footer className="bg-dark text-center text-light  lg:text-left transition ease-in-out duration-300 bg-gradient-to-r from-dark to-primary">
    //   <div className="mx-6 py-10 text-center md:text-left">
    //     {/* <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> */}
    //     <div className="flex justify-evenly flex-wrap">
    //       <div className="w-[25%]">
    //         <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
    //           Connect
    //         </h6>
    //         <p>
    //           Feel free to reach out if you want to collaborate with us, or
    //           simply have a chat.
    //         </p>
    //         <div>
    //           <h6 className="">BECOME A CLIENT</h6>
    //           <button>=</button>
    //         </div>
    //         <p>Don’t like the forms? Drop us a line via email.</p>
    //         <a href="">codesyconsulting@gmail.com</a>
    //       </div>
    //       <div className="w-[15%]">
    //         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
    //           OUR ADDRESS
    //         </h6>

    //         <p>2222 W Grand River ave, Ste A okemos, MI 48864</p>
    //         <p>+123456789</p>
    //       </div>
    //       <div className="">
    //         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
    //           COMPANY
    //         </h6>
    //         <p className="mb-4">
    //           <a href="#!" className="text-neutral-600 dark:text-neutral-200">
    //             Work
    //           </a>
    //         </p>
    //         <p className="mb-4">
    //           <a href="#!" className="text-neutral-600 dark:text-neutral-200">
    //             Contact
    //           </a>
    //         </p>
    //       </div>
    //       <div>
    //         <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
    //           FOLLOW US
    //         </h6>
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <a href="">Facebook</a>
    //         </p>
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <a href="">Linkedin</a>
    //         </p>{" "}
    //         <p className="mb-4 flex items-center justify-center md:justify-start">
    //           <a href="">Instagram</a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className=" ">
    //     <div className="max-w-[82%]  m-auto">
    //       <span>© Codesy {new Date().getFullYear()} </span>
    //       <a
    //         className="font-semibold text-neutral-600 dark:text-neutral-400"
    //         // href="https://tw-elements.com/"
    //       >
    //         All rights reserved
    //       </a>
    //     </div>
    //   </div>
    // </footer>

    <footer
      // style={{ boxShadow: "#8711c1 -2px -26px 43px" }}
      className="p-6 transition break-words ease-in-out duration-300 bg-gradient-to-b from-dark to-primary  text-light "
    >
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4 ">
          <h2 className="font-light text-2xl max-[800px]:text-lg">CONNECT</h2>
          <div className="flex flex-col space-y-2 font-light text-base pr-4 max-[800px]:text-sm">
            <p className="">
              Feel free to reach out if you want to collaborate with us, or
              simply have a chat.
            </p>

            <p>Don’t like the forms? Drop us a line via email.</p>
            <a href="" className="text-accent font-bold text-sm">
              codesyconsulting@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-light text-2xl max-[800px]:text-lg">
            OUR ADDRESS
          </h2>
          <div className="flex flex-col space-y-2 text-sm pr-4 font-light text-accent max-[800px]:text-sm">
            <p>2222 W Grand River ave, Ste A okemos, MI 48864</p>
            <p>+123456789</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-light text-2xl max-[800px]:text-lg">COMPANY</h2>
          <div className="flex flex-col space-y-2 text-base font-light max-[800px]:text-sm">
            <p className="">
              <a href="#!" className="">
                Work
              </a>
            </p>
            <p className="">
              <a href="#!" className="">
                Contact
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-light text-2xl max-[800px]:text-lg">FOLLOW US</h2>
          <div className="flex flex-col space-y-2 text-base font-light max-[800px]:text-sm">
            <a rel="noopener noreferrer" href="#">
              Facebook
            </a>
            <a rel="noopener noreferrer" href="#">
              Linkedin
            </a>
            <a rel="noopener noreferrer" href="#">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="flex  px-1 pt-12 pb-8 text-sm font-bold max-[800px]:justify-center">
        <span className="">
          © CODESY CONSULTING {new Date().getFullYear()}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
