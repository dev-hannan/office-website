import Content from "../Content/Content";

import ReuseTile from "../common/ReuseTile";

const FifthSection = () => {
  return (
    <div id="services" className="py-5">
      <div className="m-auto ">
        <h1 className="text-primary text-5xl font-medium md:w-[600px] my-20 max-[800px]:w-[95%] max-[772px]:text-3xl text-center m-auto ">
          {Content.fifthSection.title}
        </h1>
        <div className="flex flex-wrap justify-center w-[85%] m-auto gap-3 max-[1100px]:w-[95%] max-[750px]:flex-col ">
          {Content.fifthSection.tiles.map((tile, index: number) => {
            return <ReuseTile text={tile} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
