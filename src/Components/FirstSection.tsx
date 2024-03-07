import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";

const FirstSection = () => {
  return (
    <div className="pt-24 max-[800px]:pt-12">
      <div className="firstSection py-10 px-9 max-[800px]:px-3">
        <div className="w-[82%] m-auto max-[800px]:w-auto">
          <h1 className="font-bold text-5xl pt-3 max-[800px]:w-auto max-[800px]:text-4xl  max-[800px]:pt-0   text-primary">
            {Content.firstSection.title}
          </h1>
          <h3 className=" text-xl pt-3  max-[800px]:w-auto text-black max-[800px]:text-lg">
            {Content.firstSection.description}
          </h3>
          <div className="flex flex-wrap my-3 ">
            <ReuseButton
              mainClass="bg-dark text-light 
              uppercase
              py-4 rounded-[50px]  w-[270px] px-5 max-[800px]:w-[240px]
              transition ease-linear delay-150  hover:bg-primary  hover:text-dark"
              text={Content.firstSection.first_btn}
              textClass="font-bold text-sm pr-4"
            />
            <ReuseButton
              mainClass="py-3 rounded-3xl uppercase w-[270px] px-5 transition ease-linear delay-150   hover:text-primary
              max-[800px]:w-[240px]
              "
              text={Content.firstSection.second_btn}
              textClass="font-bold text-sm pr-4 max-[800px]:pr-0"
              iconClass="text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
