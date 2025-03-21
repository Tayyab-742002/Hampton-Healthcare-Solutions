"use client";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Next"
      type="button"
      className=" absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer focus:border-2 focus:border-white focus:rounded-sm "
      style={{}}
    >
      <ChevronRight size={32} />
    </button>
  );
}


function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="z-1 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer  focus:border-2 focus:border-white focus:rounded-sm "
      style={{}}
    >
      <ChevronLeft size={32} />
    </button>
  );
}

export default function DifferentSection() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {

        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-blue-950 text-white text-center py-5"
      data-aos="fade-up"
    >
      <div className="container-xl mx-auto relative">
        <h2 className="mb-5 text-2xl md:text-3xl font-bold">
          What Makes Us Different
        </h2>


        <Slider {...settings}>

          <div className="col px-2">
            <Image
              src="https://www.carecor.com/wp-content/uploads/2020/09/clock.svg"
              alt=""
              width={67}
              height={67}
              className="mb-4 mx-auto"
            />
            <div>
              Immediate access to staff ready to help at your first call.
            </div>
          </div>


          <div className="col px-2">
            <Image
              src="https://www.carecor.com/wp-content/uploads/2020/09/heart-in-shield.svg"
              alt=""
              width={61}
              height={69}
              className="mb-4 mx-auto"
            />
            <div>Consistency and quality care standards.</div>
          </div>


          <div className="col px-2">
            <Image
              src="https://www.carecor.com/wp-content/uploads/2020/09/adding-to-team.svg"
              alt=""
              width={62}
              height={62}
              className="mb-4 mx-auto"
            />
            <div>
              Uphold the same hiring standards and criteria as the facilities in
              which we serve.
            </div>
          </div>

   
          <div className="col px-2">
            <Image
              src="https://www.carecor.com/wp-content/uploads/2020/09/directing-to-cross.svg"
              alt=""
              width={66}
              height={66}
              className="mb-4 mx-auto"
            />
            <div>
              We are an innovator, adapting and responding to emerging sector
              needs.
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
