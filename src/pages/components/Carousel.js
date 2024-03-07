import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image } from "@chakra-ui/react";

function Carousel(props){
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }
  
  return(
    <Box overflow='hidden'>
      <Slider {...settings}>
        {props.urls.map((url, key) => (
          <Image alt="Room Carousel Item Picure" key={key} borderRadius='4px' height={{base: '300px', lg: props.custom_height}} objectFit='cover' src={url} />
        ))}
      </Slider>
    </Box>
  )
}

export default Carousel;