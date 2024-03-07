import { useEffect, useRef, useState } from "react";
import Content from "../Content/Content";
import ReuseButton from "../common/ReuseButton";
import CountUp from "react-countup";

const FourthSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);
  return (
    <div className="flex flex-col bg-dark text-light h-auto z-[5]  pt-40 ">
      <div className="w-[78%] m-auto max-[800px]:w-[90%]">
        <div className="text-5xl font-medium py-16">
          <h1 className="text-light font-bold  md:w-[690px] max-[800px]:w-auto max-[800px]:text-[32px]  ">
            We are building
            <span className="text-primary"> solutions </span>
            that solves your business challenges
          </h1>
        </div>
        <>
          <div className="w-5 h-5 border-t border-l border-light max-[750px]:hidden"></div>

          <div className="flex flex-row pl-8 max-w-[1140px] justify-between gap-60 max-[750px]:pl-0 max-[750px]:flex-col max-[750px]:gap-5">
            <>
              <div className="w-5 h-5 border-t border-l border-light hidden max-[750px]:block"></div>

              <div className="flex flex-col gap-10 max-[750px]:text-center">
                <div>
                  <h1 className="text-7xl font-bold">
                    {/* {Content.fourthSection.Count1} */}
                    <div ref={sectionRef}>
                      {isVisible && (
                        <CountUp
                          start={0}
                          end={262}
                          duration={1}
                          separator=","
                        />
                      )}
                      +
                    </div>
                  </h1>
                  <p className="font-normal w-max m-auto">
                    {Content.fourthSection.Count1_desc}
                  </p>
                </div>
                <div>
                  <h1 className="text-7xl font-bold">
                    {/* {Content.fourthSection.Count2} */}
                    <div ref={sectionRef}>
                      {isVisible && (
                        <CountUp
                          start={0}
                          end={100}
                          duration={1}
                          separator=","
                        />
                      )}
                      %
                    </div>
                  </h1>
                  <p className="font-normal">
                    {Content.fourthSection.Count2_desc}
                  </p>
                </div>
              </div>
              <div className="w-5 h-5 border-b border-l border-light mb-10 hidden max-[750px]:block"></div>
            </>
            <div className="flex flex-col gap-10 ">
              <h1 className="font-normal text-2xl break-words w-[60%] max-[800px]:w-[100%] max-[800px]:text-1xl">
                {/* min-w-[350px]  */}
                {Content.fourthSection.desc}
              </h1>
              <ReuseButton
                text={Content.fourthSection.btn}
                mainClass="  rounded-[50px] uppercase w-[220px] bg-primary py-4
              
              transition ease-linear delay-150  hover:bg-light hover:text-dark mb-10 "
                textClass="pr-7 font-bold"
              />
            </div>
          </div>
          <div className="w-5 h-5 border-b border-l border-light mb-10 max-[750px]:hidden"></div>
        </>
      </div>
    </div>
  );
};

export default FourthSection;
