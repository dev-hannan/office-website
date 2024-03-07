import Content from "../Content/Content";
import SeventhSubSection from "./SeventhSubSection";

const SeventhSection = () => {
  return (
    <div className=" seven-sub h-[550px] py-10" id="work">
      <div className="flex flex-col gap-10 w-[80%] m-auto px-4 py-20 max-[800px]:w-full">
        <h1 className="text-5xl font-bold text-light max-[800px]:text-4xl">
          {Content.SeventhSection.Title}
        </h1>
        <h4 className="font-normal text-2xl text-light w-[670px] max-[800px]:w-full max-[800px]:text-1xl">
          {Content.SeventhSection.desc}
        </h4>
      </div>
      <div className="relative bottom-[30px]">
        <SeventhSubSection />
      </div>
    </div>
  );
};

export default SeventhSection;
