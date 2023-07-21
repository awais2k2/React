import {
  Box,
  Text,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitterSquare,
  FaGoogle,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <Box bg="gray" mb="80px" mt="70px" borderTop="1px"></Box>
      <Box
        bg="#080808"
        color="white"
        px="80px"
        pb="30px"
        display="flex"
        justifyContent="space-between">
        <Box display="flex" flexDirection="column" gap="50px">
          <Box>
            <Text w="364px" fontSize="32px" fontWeight="bold">
              Our plateform is trusted by million & features best updated movies
              all around the world
            </Text>
          </Box>
          <Box display="flex" gap="20px" color="gray">
            <Link>Privacy policy</Link>
            <Link>Term of services</Link>
            <Link>Language</Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between">
          <Box>
            <Breadcrumb separator="/" spacing="20px">
              <BreadcrumbItem>
                <NavLink style={{ textDecoration: "none" }} to="/home">
                  Home
                </NavLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <NavLink style={{ textDecoration: "none" }} to="/about">
                  Discover
                </NavLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <NavLink style={{ textDecoration: "none" }} to="/contact">
                  Influence
                </NavLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Release
                </NavLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
          <Box display="flex" gap="20px" justifyContent="end">
            <Icon boxSize="35px" as={FaInstagram}></Icon>
            <Icon boxSize="35px" as={FaFacebookF}></Icon>
            <Icon boxSize="35px" as={FaTwitterSquare}></Icon>
            <Icon boxSize="35px" as={FaGoogle}></Icon>
          </Box>
          <Box textAlign="end">
            <Text color="gray">@2023</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
