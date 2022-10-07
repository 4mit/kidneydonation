import Slider from "react-slick";
import { Image,Button } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";


const imgs = [
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0001.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0002.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0003.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0004.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0005.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0006.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0007.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0008.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0009.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0010.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0011.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0012.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0013.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0014.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0015.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0016.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0017.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0018.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0019.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0020.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0021.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0022.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0023.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0024.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0025.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0026.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0027.jpg",
  "https://kidneydonation.vercel.app/assets/documents/SKMBT_C22022080513030_0028.jpg",
]


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
  dots: true,
  infinite: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
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

const MultiItemCarousel = () => {
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
        onClick={previousFn}
        color="primary"
        auto
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translate(0%, -50%)",
        }}
      >
        <b>{"<<"}</b>
      </Button>
      <Slider {...settings} ref={sliderRef}>
        {imgs.map((img, i) => {
          return (
            <div key={i} style={{ padding: 15, margin:5 }}>
              <Image
                width="100%"
                height="100%"
                src={img}
                alt="Default Image"
                objectFit="contain"
              />
            </div>
          );
        })}
      </Slider>
      <Button
        color="primary"
        auto
        onClick={nextFn}
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translate(0%, -50%)",
        }}
      >
        {">>"}
      </Button>
    </div>
  );
};

export default MultiItemCarousel;
