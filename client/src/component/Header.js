import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link,  useNavigate } from "react-router-dom"
import axios from "axios";

const Header = () => {
  const navigate= useNavigate();

  const handleLogout = async()=>{
    const {data} = await axios.post('http://localhost:7000/api/user/logout')
    console.log(data)
    if (data.success) {
      console.log("logout done")
      
      navigate("/login");
      }
      else{
        console.log("not logout");
        navigate("/login");
      }
    localStorage.removeItem("token");
    // localStorage.clear()
    navigate('/login')
  }

  return (
    <>
      <Box bg="green.500" p={6} color="white" minH={"5rem"}>
        <HStack spacing={4} mt={"-1rem"}>
          <Link to="/">
            <Text fontSize={"5xl"} fontFamily={"cursive"}>
              <b>Chatapp</b>
            </Text>
          </Link>
          <Link to="/">
            <Text
              fontSize={"2xl"}
              ml={"2rem"}
              display={{ base: "none", md: "block" }}
            >
              Home
            </Text>
          </Link>
          <Link to="/chat">
            <Text
              fontSize={"2xl"}
              ml={"2rem"}
              display={{ base: "none", md: "block" }}
            >
             chat
            </Text>
          </Link>
          <Link to="/login">
            <Text
              fontSize={"2xl"}
              ml={"2rem"}
              display={{ base: "none", md: "block" }}
            >
             Login
            </Text>
          </Link>
          <Link to="/register">
            <Text
              fontSize={"2xl"}
              ml={"2rem"}
              display={{ base: "none", md: "block" }}
            >
             signup
            </Text>
          </Link>

          {localStorage.getItem("token") ? (
            <Link to="/login">
              <Text
                fontSize={"2xl"}
                ml={"1rem"}
                display={{ base: "none", md: "block" }}
                onClick={handleLogout}
              >
                Logout
              </Text>
            </Link>
          ) : (
            ""
          )}

          {/* <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={{ lg: "none", xl: "none", md: "none" }}
              ml={"6rem"}
            />

            <MenuList
              color={"black"}
              h={"50vh"}
              w={"50vh"}
              minW={"360px"}
              display={{ lg: "none", xl: "none", md: "none" }}
            >
              <Link to="/">
                <MenuItem
                  icon={<ExternalLinkIcon />}
                  fontSize={"xl"}
                  textAlign={"center"}
                >
                  Home
                </MenuItem>
              </Link>


              {!localStorage.getItem("token") ? (
                <>
                  <Link to="/login">
                    <MenuItem
                      icon={<AddIcon />}
                      fontSize={"xl"}
                      textAlign={"center"}
                    >
                      Login
                    </MenuItem>
                  </Link>
                  <Link to="/createuser">
                    <MenuItem
                      icon={<AddIcon />}
                      fontSize={"xl"}
                      textAlign={"center"}
                    >
                      Sign up
                    </MenuItem>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <MenuItem
                      icon={<AddIcon />}
                      fontSize={"xl"}
                      textAlign={"center"}
                      onClick={handleLogout}
                    >
                      LogOut
                    </MenuItem>
                  </Link>
                </>
              )}
            </MenuList>
          </Menu> */}
        </HStack>
      </Box>
    </>
  );
};

export default Header;
