import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function JustRelease() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: "60px",
  };

  return (
    <Box mt="80px" px="80px">
      <Box ml="25px" mt="50px" color="white" fontSize="30px" fontWeight="bold">
        Popular of the week
      </Box>
      <Box mt="15px">
        <Slider {...settings}>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  1
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  2
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame2.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  3
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame3.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  4
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame2.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  5
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame3.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  6
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  7
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box p="15px" rounded="20px">
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              gap="15px"
              mr="35px">
              <Box>
                <Text color="white" fontSize="70px" fontWeight="bold">
                  8
                </Text>
              </Box>
              <Image
                w="130px"
                h="150px"
                rounded="20px"
                objectFit="cover"
                src="../Assets/body/frame.jpg"
              />
              <Box
                h="150px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                mt="15px"
                color="white"
                p="5px">
                <Box
                  color="gray"
                  w="55px"
                  mb="5px"
                  rounded="10px"
                  fontSize="16px"
                  fontWeight="bold"
                  borderColor="gray"
                  borderWidth="1px">
                  PG-13
                </Box>
                <Box mb="5px" fontSize="16px" fontWeight="bold">
                  Spider Man 2
                </Box>
                <Box mb="5px" fontSize="16px" color="gray">
                  Horror + Thriller
                </Box>
                <Box display="flex" alignItems="center" gap="4px">
                  <Icon color="gold" as={BiStar}></Icon>
                  <Text>4.8 |</Text>
                  <Text color="gray">Movie</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default JustRelease;
