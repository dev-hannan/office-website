import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";

const ThirdSection = () => {
  return (
    <>
      <div className="w-[80%]  max-[800px]:w-[100%]  px-3 max-[800px]:px-0 my-10  break-words   m-auto relative ">
        <div className="flex  gap-48 max-[1100px]:gap-20 max-[900px]:gap-0 max-[750px]:gap-5 m-auto  max-[750px]:flex-col ">
          <div className="">
            <h1 className="font-bold text-5xl pt-3 md:w-[325px] max-[800px]:w-auto max-[800px]:text-3xl max-[800px]:px-3  m-auto">
              {Content.thirdSection.title1}
              <span className="text-primary">
                {Content.thirdSection.title2}
              </span>
            </h1>
            <img
              src="DC-Icon.png"
              alt="dcicon"
              className="z-[10] absolute bottom-[-21rem] left-[-13%]  max-w-[430px] h-[285px] mb-16"
            />
          </div>
          <div className="w-[100%] max-[772px]:px-3">
            <div className="w-5 h-5 border-t border-l border-black"></div>
            <div className=" flex flex-col  pl-5 w-[60%] max-[800px]:w-[95%] gap-10 ">
              {[
                Content.thirdSection.card1,
                Content.thirdSection.card2,
                Content.thirdSection.card3,
              ].map((data, index) => {
                return (
                  <div
                    key={index}
                    className="block w-[100%] max-[800px]:w-[100%]"
                  >
                    <h5 className="mb-2 tracking-tight text-2xl font-normal ">
                      {data.title}
                    </h5>
                    <p className="font-normal text-xl break-words max-[800px]:text-lg">
                      {data.desc}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="w-5 h-5 border-b border-l border-black mb-10"></div>
            <div className="dc-icon p-12 flex flex-col justify-between w-[370px] h-[285px] max-[750px]:p-8 max-[750px]:h-[200px] max-[750px]:ml-0 max-[750px]:w-[100%] mb-8 ml-5 ">
              <h1 className="text-light font-bold text-2xl max-[750px]:text-xl">
                {Content.thirdSection.lastCard.title}
              </h1>
              <ReuseButton
                mainClass="bg-accent py-3 uppercase rounded-3xl w-[250px] px-4
                
              max-[800px]:w-[220px]
                
                "
                text={Content.thirdSection.lastCard.btn}
                textClass="font-bold text-sm pr-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
