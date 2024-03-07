// import { useEffect, useState, ChangeEvent } from "react";
// import Content from "../Content/Content";
// import ReuseButton from "../common/ReuseButton";
// import Information from "../common/contact/Information";
// import BussinessIndustry from "../common/contact/BussinessIndustry";
// import DevelopmentTeam from "../common/contact/Development";
// import CurrentStage from "../common/contact/CurrentStage";
// type Industry = string;

// const ContactUs = () => {
//   // const [errors,setErrors]=useState("")
//   const [duration, setDuration] = useState(3);
//   // const [middleDeveloperCount, setMiddleDeveloperCount] = useState(0);

//   const [industrys, setIndustry] = useState([]);
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const developers = [
//     "Middle Developer",
//     "Senior Developer",
//     "Tech Lead",
//     "PM",
//   ];
//   const marks = [
//     "1 month",
//     "6 month",
//     "1 year",
//     "1.5 years",
//     "2 years",
//     "+2 years",
//   ];

//   // const valueLabelFormat = (value) => {
//   //   let label = "";
//   //   switch (value) {
//   //     case 1:
//   //       label = "1 month";
//   //       break;
//   //     case 2:
//   //       label = "6 month";
//   //       break;
//   //     case 3:
//   //       label = "1 year";
//   //       break;
//   //     case 4:
//   //       label = "1.5 years";
//   //       break;
//   //     case 5:
//   //       label = "2 years";
//   //       break;
//   //     case 6:
//   //       label = "+2 years";
//   //       break;
//   //     default:
//   //       label = "6 month"; // Default label
//   //   }
//   //   return label;
//   // };

//   const industries = [
//     "eCommerce",
//     "Travel & Hospitality",
//     "Telecom",
//     "Media & Entertainment",
//     "Enterprise",
//     "Financial Services",
//     "Education",
//     "Insurance",
//     "Retail",
//     "Recruitment",
//     "Nonprofit",
//     "Manufacturing",
//     "Energy & Utilities",
//     "Communications",
//     "Transportation & Logistics",
//     "Other",
//   ];
//   // const handleIncrement = () => {
//   //   setMiddleDeveloperCount((prevCount) => prevCount + 1);
//   // };

//   // const handleDecrement = () => {
//   //   setMiddleDeveloperCount((prevCount) => prevCount - 1);
//   // };
//   useEffect(() => {}, [industrys]);
//   const handleData = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     //         if(userData.email.trim() === "" || userData.message.trim() === "" || userData.subject.trim() === "" ){
//     // setErrors("Enter valid data")
//     //         }

//     e.preventDefault();
//     console.log(userData, "userData");
//     console.log(userChecks, "userChecks");

//     console.log(industrys, "industy");
//     console.log(duration, "duration");

//     // setUserData({
//     //   email: "",
//     //   subject: "",
//     //   message: "",
//     // });
//   };

//   // const handleIndustry = (data) => {
//   //   setIndustry((pre) => [...pre, data]);
//   // };

//   const handleIndustry = (
//     data: Industry,
//     setIndustry: React.Dispatch<React.SetStateAction<Industry[]>>
//   ) => {
//     setIndustry((prev: Industry[]) => [...prev, data]);
//   };

//   const [userChecks, setUserChecks] = useState({
//     Prototype: "",
//     MVP: "",
//     DesignSolution: "",
//     MatureProduct: "",
//   });
//   const handleChecksData = (e) => {
//     const { name, checked } = e.target;
//     setUserChecks({ ...userChecks, [name]: checked });
//   };

//   return (
//     <div id="contact" className="py-24 p-2">
//       <h2 className="mb-4 text-5xl py-10 tracking-tight font-extrabold text-center text-gray-900 ">
//         {Content.twelvethSection.highlight}
//       </h2>
//       <div className="max-w-5xl m-auto bg-light flex flex-col gap-10">
//         <Information handleData={handleData} userData={userData} />
//         <div className="flex gap-10 max-[750px]:flex-col">

//           <div className="border border-primary p-5 rounded-3xl">
//             <div className="mb-6">
//               <p className="text-2xl font-semibold">
//                 2. REACT JS DEVELOPMENT TEAM
//               </p>
//             </div>
//             <div className=" p-6 rounded-md">
//               {developers?.map((developer, index) => {
//                 return (
//                   <DevelopmentTeam
//                     key={index}
//                     developer={developer}
//                     index={index}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//           <CurrentStage
//             handleChecksData={handleChecksData}
//             userChecks={userChecks}
//           />
//         </div>
//         <BussinessIndustry
//           handleIndustry={handleIndustry}
//           industries={industries}
//           industrys={industrys}
//         />
//         <div className=" border border-primary p-5 rounded-3xl">
//           <div className=" mb-4">
//             <p className="text-2xl font-semibold">
//               5. WHAT IS THE EXPECTED DURATION OF YOUR PROJECT ?
//             </p>
//           </div>
//           <div className="   p-6 rounded-md">
//             <div className="relative pt-1">
//               <div className="flex justify-between pb-2">
//                 {marks.map((mark, index) => (
//                   <span key={index} className="text-xs font-bold">
//                     {mark}
//                   </span>
//                 ))}
//               </div>
//               <input
//                 type="range"
//                 min="1"
//                 max="6"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="w-full h-2 border rounded-lg appearance-none cursor-pointer transition ease-in-out duration-300 bg-gradient-to-r from-blue-500 to-green-500"
//               />
//               {/* -top-10 */}
//               <div
//                 className="absolute   bg-dark rounded-full text-white text-xs font-semibold px-3 py-1 w-max"
//                 style={{ left: `${(duration - 1) * 18.48}%` }}
//               >
//                 {/* {valueLabelFormat(duration)} */}6 month
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="m-auto" onClick={handleSubmit}>
//           <ReuseButton
//             text={"Get Pricing"}
//             mainClass="  rounded-[50px] uppercase w-[220px]  border border-primary py-4 mb-10"
//             textClass=" font-bold text-primary"
//             iconClass="hidden"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";
import Information from "../common/contact/Information";
import BussinessIndustry from "../common/contact/BussinessIndustry";
import DevelopmentTeam from "../common/contact/Development";
import CurrentStage from "../common/contact/CurrentStage";

type Industry = string;

interface UserData {
  name: string;
  email: string;
  phone: string;
}

interface UserChecks {
  Prototype: boolean;
  MVP: boolean;
  DesignSolution: boolean;
  MatureProduct: boolean;
}

const ContactUs: React.FC = () => {
  const [duration, setDuration] = useState<number>(3);
  const [expectedTime, setExpectedTime] = useState<number>(3);
  const [industrys, setIndustry] = useState<Industry[]>([]);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
  });
  const [userChecks, setUserChecks] = useState<UserChecks>({
    Prototype: false,
    MVP: false,
    DesignSolution: false,
    MatureProduct: false,
  });
  const industries = [
    "eCommerce",
    "Travel & Hospitality",
    "Telecom",
    "Media & Entertainment",
    "Enterprise",
    "Financial Services",
    "Education",
    "Insurance",
    "Retail",
    "Recruitment",
    "Nonprofit",
    "Manufacturing",
    "Energy & Utilities",
    "Communications",
    "Transportation & Logistics",
    "Other",
  ];

  const developers: string[] = [
    "Middle Developer",
    "Senior Developer",
    "Tech Lead",
    "PM",
  ];
  const marks: string[] = [
    "1 month",
    "6 month",
    "1 year",
    "1.5 years",
    "2 years",
    "+2 years",
  ];
  const expectedDuration: string[] = [
    "",
    "1 month",
    "6 month",
    "1 year",
    "1.5 years",
    "2 years",
    "+2 years",
  ];

  useEffect(() => {}, [industrys, expectedTime, setExpectedTime]);

  // const handleDuration = (e) => {
  // const handleDuration = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setDuration(Number(e.target.value));
  //   let data = e.target.value;
  //   data = expectedDuration[data];
  //   setExpectedTime(data);

  //   console.log(expectedTime);
  // };

  const handleData = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(userData, "userData");
    console.log(userChecks, "userChecks");
    console.log(industrys, "industy");
    console.log(duration, "duration");
  };

  const handleIndustry = (data: Industry): void => {
    setIndustry((prev: Industry[]) => [...prev, data]);
  };

  const handleChecksData = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;
    setUserChecks({ ...userChecks, [name]: checked });
  };

  return (
    <div id="contact" className="py-24 p-2">
      <h2 className="mb-4 text-5xl py-10 tracking-tight font-extrabold text-center text-gray-900 ">
        {Content.twelvethSection.highlight}
      </h2>
      <div className="max-w-5xl m-auto bg-light flex flex-col gap-10">
        <Information handleData={handleData} userData={userData} />
        <div className="flex gap-10 max-[750px]:flex-col">
          <div className="border border-primary p-5 rounded-3xl">
            <div className="mb-6">
              <p className="text-2xl font-semibold">
                2. REACT JS DEVELOPMENT TEAM
              </p>
            </div>
            <div className=" p-6 rounded-md">
              {developers?.map((developer, index) => {
                return (
                  <DevelopmentTeam
                    key={index}
                    developer={developer}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
          <CurrentStage
            handleChecksData={handleChecksData}
            userChecks={userChecks}
          />
        </div>
        <BussinessIndustry
          handleIndustry={handleIndustry}
          industries={industries}
          industrys={industrys}
        />
        <div className=" border border-primary p-5 rounded-3xl">
          <div className=" mb-4">
            <p className="text-2xl font-semibold">
              5. WHAT IS THE EXPECTED DURATION OF YOUR PROJECT ?
            </p>
          </div>
          <div className="   p-6 rounded-md">
            <div className="relative pt-1">
              <div className="flex justify-between pb-2">
                {marks.map((mark, index) => (
                  <span key={index} className="text-xs font-bold">
                    {mark}
                  </span>
                ))}
              </div>
              <input
                type="range"
                min="1"
                max="6"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                // onChange={(e) => handleDuration(e)}
                // onChange={(e) => setDuration(expectedDuration[Number(e.target.value)])}
                className="w-full h-2 border rounded-lg appearance-none cursor-pointer transition ease-in-out duration-300 bg-gradient-to-r from-blue-500 to-green-500"
              />
              <div
                className="absolute   bg-dark rounded-full text-white text-xs font-semibold px-3 py-1 w-max"
                style={{ left: `${(duration - 1) * 18.48}%` }}
              >
                {/* 6 month */}
                {/* {duration} */}
                {expectedDuration[duration]}
              </div>
            </div>
          </div>
        </div>
        <button className="m-auto" onClick={handleSubmit}>
          <ReuseButton
            text={"Get Pricing"}
            mainClass="  rounded-[50px] uppercase w-[220px]  border border-primary py-4 mb-10"
            textClass=" font-bold text-primary"
            iconClass="hidden"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
