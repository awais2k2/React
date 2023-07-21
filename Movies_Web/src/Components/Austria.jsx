import { BiStar } from "react-icons/bi";
import {
  Box,
  Text,
  Icon,
  Button,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Austria() {
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
    <Box mb="30px">
      <Box overflow="hidden" position="relative" mt="50px">
        <Image
          objectFit="cover"
          h="600px"
          w="100%"
          src="../Assets/body/Austria_1.png"
        />
        <Box
          pt="70px"
          px="80px"
          color="white"
          position="absolute"
          inset="0"
          background="linear-gradient(468.93deg, #080808 0.83%, rgba(13, 12, 15, 0.85) 35.55%, rgba(13, 12, 15, 0) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #080808 103.18%)">
          <Box>
            <Box>
              <Text fontSize="32px" fontWeight="bold">
                Featured in SaintStream
              </Text>
            </Box>
            <Box mt="20px" fontSize="22px">
              <Text>Best feature for you today</Text>
            </Box>
            <Box mt="50px">
              <Button
                px="10px"
                bg="#010101"
                fontSize="14px"
                color="white"
                letterSpacing="2px"
                rounded="full">
                #1 in Austria
              </Button>
            </Box>
            <Box>
              <Text
                mt="10px"
                fontSize="45px"
                letterSpacing="0.5px"
                fontWeight="700">
                Air: Courting A Legend
              </Text>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text color="gray">2h40m . 2022 . Superhero Action</Text>
              </Box>
              <Text w="40%" mt="10px">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                id fuga ipsum maxime magnam! Quis aliquam incidunt, mollitia
                officiis tempore, nobis excepturi, odit amet voluptas modi omnis
                non beatae? Labore sit perspiciatis voluptate numquam dolor
                cumque, aliquid inventore at tenetur iste praesentium suscipit.
                Molestias reprehenderit...
              </Text>
            </Box>
            <Box mt="24px">
              <Box display="flex" justifyContent="space-between">
                <Stack direction="row" spacing="25px" alignItems="center">
                  <Button
                    fontSize="14px"
                    padding="25px 24px"
                    color="white"
                    bg="#00925D"
                    _hover={{ bg: "rgba(0, 146, 93, 0.8)" }}
                    leftIcon={<BsFillPlayFill />}>
                    Play Now
                  </Button>
                  <Button
                    _hover={{ color: "black", bg: "white" }}
                    fontSize="14px"
                    padding="22px 24px"
                    variant="outline"
                    color="white"
                    leftIcon={<BiAddToQueue />}>
                    Add Watchlist
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box px="80px" pt="60px">
        <Box ml="15px" color="white" mb="20px">
          <Heading>Best Feature for you today</Heading>
        </Box>
        <Slider {...settings}>
          <Box p="15px" rounded="20px">
            <Box cursor="pointer">
              <Image
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
                w="350px"
                h="400px"
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
    </Box>
  );
}

export default Austria;
