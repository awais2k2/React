import { BiStar } from "react-icons/bi";
import { Box, Text, Icon, Image, Button, Stack } from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AvardMovies() {
  const settings = {
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <Box px="80px" w="1160px">
      <Box ml="22px" mt="50px" color="white" fontSize="22px" fontWeight="bold">
        Movies on Awards
      </Box>
      <Slider {...settings}>
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame2.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                The Great Man
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame3.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/Austria_1.png"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame3.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/frame2.jpg"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
        <Box p="15px" rounded="30px">
          <Box cursor="pointer">
            <Image
              w="970px"
              h="518px"
              rounded="20px"
              objectFit="cover"
              src="../Assets/body/Austria_1.png"
            />
            <Box mt="15px" color="white">
              <Box mb="5px" fontSize="16px" fontWeight="bold">
                <Box
                  display="inline-block"
                  px="15px"
                  py="5px"
                  bg="black"
                  fontSize="12px"
                  color="white"
                  rounded="full">
                  Series
                </Box>
              </Box>
              <Box mb="5px" fontSize="36px" fontWeight="bold">
                Spider Man 2
              </Box>
              <Box display="flex" alignItems="center" gap="4px">
                <Icon color="gold" as={BiStar}></Icon>
                <Text>4.8 |</Text>
                <Text>Action - Movie</Text>
              </Box>
              <Box>
                <Text w="380px" mt="10px">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolor id fuga ipsum maxime magnam! Quis aliquam incidunt,
                  mollitia...
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
      </Slider>
    </Box>
  );
}

export default AvardMovies;
