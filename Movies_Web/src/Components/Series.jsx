import { BiStar } from "react-icons/bi";
import { Box, Text, Icon, Image } from "@chakra-ui/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Series() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <Box px="80px">
      <Box ml="22px" mt="50px" color="white" fontSize="22px" fontWeight="bold">
        Series
      </Box>
      <Slider {...settings}>
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame2.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame3.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/Austria_1.png"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame3.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame2.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p="15px" rounded="20px">
          <Box cursor="pointer">
            <Image
              w="380px"
              h="200px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/Austria_1.png"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default Series;
