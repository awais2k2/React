import { NavLink } from "react-router-dom";
import {
  Flex,
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Show,
  Text,
  Icon,
  Button,
  Stack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineDown,
  AiOutlineLike,
} from "react-icons/ai";
import { BsFillPlayFill, BsDownload, BsShare } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
function Navbar() {
  return (
    <Box
      overflow="hidden"
      position="relative"
      backgroundImage="url('../Assets/headerbody/headerbody.png')" // Replace with your image path
      backgroundPosition="center"
      bgSize="cover"
      width="100%"
      height="700px">
      <Box
        overflow="hidden"
        pt="30px"
        px="80px"
        color="white"
        position="absolute"
        inset="0"
        background="linear-gradient(358.93deg, #080808 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0) 48.81%, rgba(13, 12, 15, 0.284314) 70.66%, #080808 103.18%)">
        <Flex justifyContent="space-between" alignItems="center">
          <Box cursor="pointer">
            <Image src="../Assets/header/logo.png" />
          </Box>
          <Box>
            <Show mt="6px" above="lg">
              <Breadcrumb
                separator=" "
                spacing={["0px", "0px", "0px", "20px", "32px"]}>
                <BreadcrumbItem
                  transition="transform 0.5s"
                  _hover={{ transform: "scale(1.2)" }}>
                  <NavLink style={{ textDecoration: "none" }} to="/home">
                    Home
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem
                  transition="transform 0.5s"
                  _hover={{ transform: "scale(1.2)" }}>
                  <NavLink style={{ textDecoration: "none" }} to="/about">
                    Discover
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem
                  transition="transform 0.5s"
                  _hover={{ transform: "scale(1.2)" }}>
                  <NavLink style={{ textDecoration: "none" }} to="/contact">
                    Movies Release
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem
                  transition="transform 0.5s"
                  _hover={{ transform: "scale(1.2)" }}>
                  <NavLink style={{ textDecoration: "none" }} to="/login">
                    Forum
                  </NavLink>
                </BreadcrumbItem>
                <BreadcrumbItem
                  transition="transform 0.5s"
                  _hover={{ transform: "scale(1.2)" }}>
                  <NavLink style={{ textDecoration: "none" }} to="/signup">
                    About
                  </NavLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Show>
            <Show below="lg">
              <Menu>
                <MenuButton>
                  <GiHamburgerMenu size="25px" />
                </MenuButton>
                <MenuList color="black" mt="2px" w="120px">
                  <MenuItem as={NavLink} to="/home">
                    Home
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem as={NavLink} to="/about">
                    Discover
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem as={NavLink} to="/contact">
                    Movie Release
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem as={NavLink} to="/login">
                    Forum
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem as={NavLink} to="/signup">
                    About
                  </MenuItem>
                </MenuList>
              </Menu>
            </Show>
          </Box>
          <Show above="lg">
            <Box
              display="flex"
              gap={["0px", "0px", "0px", "15px", "32px"]}
              alignItems="center">
              <Icon h="18px" w="18px" as={AiOutlineSearch}></Icon>
              <Icon h="18px" w="18px" as={AiOutlineBell}></Icon>
              <Box color="white">
                <Menu>
                  <MenuButton
                    transition="all 0.2s"
                    color="white"
                    textAlign="center">
                    <Avatar
                      cursor="pointer"
                      h="35px"
                      w="35px"
                      name="Awais Khan"
                      src="../Assets/headerAvator/user.JPG">
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>

                    <Icon boxSize="24px" mt="12px" ml="5px">
                      <AiOutlineDown />
                    </Icon>
                  </MenuButton>
                  <MenuList bg="black">
                    <MenuItem bg="black">Profile</MenuItem>
                    <MenuDivider />
                    <MenuItem bg="black">About</MenuItem>
                    <MenuDivider />
                    <MenuItem bg="black">Payments</MenuItem>
                    <MenuDivider />
                    <MenuItem bg="black">Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Show>
        </Flex>
        <Box mt="380px">
          <Box>
            <Button
              w="69px"
              h="28px"
              bg="black"
              fontSize="12px"
              color="white"
              rounded="full">
              Series
            </Button>
          </Box>
          <Box>
            <Text fontSize="32px" letterSpacing="0.5px" fontWeight="700">
              The Last Of Us Season 1
            </Text>
            <Text mt="8px" fontWeight="400" color="#9CA4AB" lineHeight="22px">
              9 Episodes • 2022 • Fantasy • Actions
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
                  Continue Watching
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
              <Stack direction="row" spacing="25px" alignItems="center">
                <Button
                  _hover={{ color: "black", bg: "white" }}
                  fontSize="14px"
                  padding="22px 24px"
                  variant="outline"
                  color="white"
                  leftIcon={<BsDownload />}>
                  Download
                </Button>
                <Button
                  _hover={{ color: "black", bg: "white" }}
                  fontSize="14px"
                  padding="22px 24px"
                  variant="outline"
                  color="white"
                  leftIcon={<BsShare />}>
                  Share
                </Button>
                <Button
                  _hover={{ color: "black", bg: "white" }}
                  fontSize="14px"
                  padding="22px 24px"
                  variant="outline"
                  color="white"
                  leftIcon={<AiOutlineLike />}>
                  Like
                </Button>
              </Stack>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
