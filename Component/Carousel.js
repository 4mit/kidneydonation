import Slider from "react-slick";
import { Image, Button, Text, Link } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { Card } from "@nextui-org/react";

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
  dots: false,
  infinite: false,
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
            <div key={i} style={{ padding: 15, margin: 15 }}>
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
                  width="100%"
                  height="100%"
                  src={img}
                  alt="Default Image"
                  objectFit="contain"
                />
                <br />
                <Button size="sm" bordered color="primary" auto>
                  <Link href={img} target="_blank">
                    <img
                      height="20"
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48Zz48cG9seWdvbiBwb2ludHM9IjI4OCwxNDQgMjg4LDE2MCA0MDAsMTYwIDQwMCw0MzIgMTEyLDQzMiAxMTIsMTYwIDIyNCwxNjAgMjI0LDE0NCA5NiwxNDQgOTYsNDQ4IDQxNiw0NDggNDE2LDE0NCAgICIvPjwvZz48Zz48cG9seWdvbiBwb2ludHM9IjE5My4xLDI1Mi4zIDE4MS41LDI2My45IDI1NiwzMzguNCAzMzAuNSwyNjMuOSAzMTguOSwyNTIuMyAyNjQuMiwzMDcgMjY0LjIsNjQgMjQ3LjgsNjQgMjQ3LjgsMzA3ICAgIi8+PC9nPjwvZz48L3N2Zz4="
                    ></img>
                    report -{i + 1}
                  </Link>
                </Button>

                {/* <Text
                    h6
                    css={{
                      textAlign: "center",
                    }}
                  >
                    Document - {i + 1}
                  </Text> */}
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

export default MultiItemCarousel;
