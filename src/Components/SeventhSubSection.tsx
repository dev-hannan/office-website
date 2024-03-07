import ReuseButton from "../common/ReuseButton";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const SeventhSubSection = () => {
  // bg-white border border-gray-200 rounded-lg
  const cardsList = [1, 2, 3, 4, 5];
  return (
    <div className=" flex flex-wrap  my-10  ">
      <Swiper
        spaceBetween={50}
        // direction="horizontal"
        breakpoints={{
          1150: {
            slidesPerView: 3,
          },
          760: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 3,
            // centeredSlides: false,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        // effect="coverflow"
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="pb-10 px-10"
      >
        {cardsList.map((_cards, index) => {
          return (
            <SwiperSlide
              className="w-[490px]  min-w-[290px] m-auto rounded-[18px] bg-[#F2F2F2]  hover:bg-accent   visit-section "
              key={index}
            >
              <div className="p-4 rounded-[18px] ">
                <div className=" ">
                  {/* <h1 className="px-3 text-end">Blockchain</h1> */}
                  <div className="flex flex-row items-center justify-between px-6 py-3">
                    <h1 className="">PeakDefi</h1>
                    <ReuseButton
                      text="Blockchain"
                      mainClass="border text-[#A08901] rounded-[50px] border-[#A08901] w-[120px] flex-row-reverse items-center py-2 px-16"
                      textClass=" font-bold text-sm"
                      iconClass="hidden"
                    />
                  </div>
                </div>
                <img
                  src="daniil.jpg"
                  width="800"
                  height="35"
                  alt="cards"
                  className="object-cover h-[250px] "
                />
                <div className="py-4">
                  <h5 className="mb-3 font-normal text-sm uppercase">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </h5>
                  <a href="#">
                    <ReuseButton
                      text="visit website"
                      mainClass="border uppercase rounded-[50px] border-dark w-[220px] max-[650px]:w-[180px] py-3 flex-row-reverse items-center visit-button"
                      textClass="pl-3 font-bold visit-button"
                      iconClass="visit-button"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SeventhSubSection;
