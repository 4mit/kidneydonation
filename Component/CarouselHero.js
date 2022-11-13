import Slider from "react-slick";
import { Image, Button, Text, Link } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Card } from "@nextui-org/react";

const imgs = [
  "/imgs/pateient-17.jpeg",
  "/imgs/pateient-18.jpeg",
  "/imgs/pateient-19.jpeg",
  "/imgs/pateient-1.jpeg",
  "/imgs/pateient-2.jpeg",
  "/imgs/pateient-3.jpeg",
  "/imgs/pateient-4.jpeg",
  "/imgs/pateient-5.jpeg",
  "/imgs/pateient-6.jpeg",
  "/imgs/pateient-7.jpeg",
  "/imgs/pateient-8.jpeg",
  "/imgs/pateient-9.jpeg",
  "/imgs/pateient-10.jpeg",
  "/imgs/pateient-11.jpeg",
  "/imgs/pateient-12.jpeg",
  "/imgs/pateient-13.jpeg",
  "/imgs/pateient-14.jpeg",
  "/imgs/pateient-15.jpeg",
  "/imgs/pateient-16.jpeg",
  "/imgs/pateient-17.jpeg",
  "/imgs/pateient-18.jpeg",
  "/imgs/pateient-19.jpeg",
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "#052b52" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CarouselHero = () => {
  const sliderRef = useRef();
  const previousFn = () => {
    sliderRef?.current?.slickPrev();
  };
  const nextFn = () => {
    sliderRef?.current?.slickNext();
  };
  return (
    <div style={{ position: "relative" }}>
      <Button
        size="sm"
        shadow
        onClick={previousFn}
        color="primary"
        auto
        style={{
          position: "absolute",
          left: 0,
          zIndex: 20,
          top: "50%",
          height: 40,
          transform: "translate(0%, -50%)",
        }}
      >
        <b>{"<"}</b>
      </Button>
      <Slider {...settings} ref={sliderRef}>
        {imgs.map((img, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  padding: 15,
                  border: "1px solid #e4e4e4",
                  margin: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={img}
                  alt="Default Image"
                  style={{
                    width: "100%",
                    height: 450,
                  }}
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <Button
        size="sm"
        shadow
        color="primary"
        auto
        onClick={nextFn}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          height: 40,
          transform: "translate(0%, -50%)",
        }}
      >
        {">"}
      </Button>
    </div>
  );
};

export default CarouselHero;
