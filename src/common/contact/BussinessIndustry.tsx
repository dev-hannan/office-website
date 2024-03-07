// const BussinessIndustry = ({ industries, industrys, handleIndustry }) => {
//   const industryListClass =
//     "border border-primary cursor-pointer  text-primary  rounded-3xl  py-2 px-6 text-center transition ease-linear delay-150  hover:bg-primary hover:text-light";
//   const activeindustryListClass =
//     "border border-primary  text-light cursor-pointer bg-primary  rounded-3xl  py-2 px-6 text-center transition ease-linear delay-150  hover:bg-primary hover:text-light";

//   return (
//     <div className="border border-primary p-5 rounded-3xl">
//       <div className=" mb-6">
//         <p className="text-2xl font-semibold">4. BUSINESS INDUSTRY</p>
//       </div>
//       <div className=" rounded-md">
//         <div className="flex flex-wrap gap-2">
//           {industries.map((industry, index) => (
//             <div
//               key={index}
//               className={
//                 industrys.includes(industry)
//                   ? activeindustryListClass
//                   : industryListClass
//               }
//               onClick={() => handleIndustry(industry)}
//             >
//               {industry}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BussinessIndustry;

import React from "react";

interface BussinessIndustryProps {
  industries: string[];
  industrys: string[]; // Assuming this is a list of selected industries
  handleIndustry: (industry: string) => void;
}

const BussinessIndustry: React.FC<BussinessIndustryProps> = ({
  industries,
  industrys,
  handleIndustry,
}) => {
  const industryListClass =
    "border border-primary cursor-pointer text-primary rounded-3xl py-2 px-6 text-center transition ease-linear delay-150 hover:bg-primary hover:text-light";
  const activeindustryListClass =
    "border border-primary text-light cursor-pointer bg-primary rounded-3xl py-2 px-6 text-center transition ease-linear delay-150 hover:bg-primary hover:text-light";

  return (
    <div className="border border-primary p-5 rounded-3xl">
      <div className=" mb-6">
        <p className="text-2xl font-semibold">4. BUSINESS INDUSTRY</p>
      </div>
      <div className=" rounded-md">
        <div className="flex flex-wrap gap-2">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={
                industrys.includes(industry)
                  ? activeindustryListClass
                  : industryListClass
              }
              onClick={() => handleIndustry(industry)}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BussinessIndustry;
