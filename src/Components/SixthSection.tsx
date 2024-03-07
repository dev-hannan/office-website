import Content from "../Content/Content";
import Marquee from "react-fast-marquee";

const SixthSection = () => {
  return (
    <div className="mt-20 mb-10 text-7xl max-[1100px]:text-[55px] max-[800px]:text-[32px] ">
      <Marquee className="font-light overflow-hidden" direction="left">
        {Content.SixthSection.Title}
        {Content.SixthSection.Title}
        {Content.SixthSection.Title}
      </Marquee>
      <Marquee className="font-light overflow-hidden" direction="right">
        {Content.SixthSection.Title}
        {Content.SixthSection.Title}
        {Content.SixthSection.Title}
      </Marquee>
    </div>
  );
};

export default SixthSection;
