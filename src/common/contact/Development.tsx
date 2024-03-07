import React, { useState } from "react";

interface DevelopmentTeamProps {
  index: number;
  developer: string;
}

const DevelopmentTeam: React.FC<DevelopmentTeamProps> = ({
  index,
  developer,
}) => {
  const [middleDeveloperCount, setMiddleDeveloperCount] = useState(0);
  // const [devs, setDevs] = useState<{
  //   "Middle Developer": number;
  //   "Senior Developer": number;
  //   "Tech Lead": number;
  //   PM: number;
  // }>({
  //   "Middle Developer": 0,
  //   "Senior Developer": 0,
  //   "Tech Lead": 0,
  //   PM: 0,
  // });

  const handleIncrement = (developers: string) => {
    setMiddleDeveloperCount((prevCount) => prevCount + 1);

    console.log(developers);
  };
  const handleDecrement = (developers: string) => {
    if (middleDeveloperCount == 0) return null;
    setMiddleDeveloperCount((prevCount) => prevCount - 1);

    console.log(developers);
  };

  return (
    <div
      className="flex items-center justify-between mb-4 max-[450px]:flex-col-reverse max-[450px]:gap-2"
      key={index}
    >
      <div className="flex items-center gap-2 ">
        <button
          className="bg-primary text-light  font-bold py-2 px-4 rounded-[50%]"
          onClick={() => handleDecrement(developer)}
        >
          -
        </button>
        <span className="border border-primary rounded-3xl  py-2 px-6 max-[450px]:px-20">
          {middleDeveloperCount}
        </span>
        <button
          className="bg-dark  font-bold py-2 px-4 text-light rounded-[50%]"
          onClick={() => handleIncrement(developer)}
        >
          +
        </button>
      </div>
      <span className="">{developer}</span>
    </div>
  );
};

export default DevelopmentTeam;
