import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    Heading,
  } from '@chakra-ui/react'
import axios from "axios";



const Login = () => {

    const [loginData, setloginData] = useState({
        email: '',
        password: '',
      });
   
   const handleSubmit= async(e)=>{
         e.preventDefault();
         if (!loginData.email || !loginData.password) {
            alert('Email and password are required');
            return;
          }
        try {
            const response = axios.post("http://localhost:7000/api/register", loginData)
        } catch (error) {
            console.log("Error messsage is ", error)
        }  
   }

   const handleChange=(e)=>{
     setloginData({...loginData , [e.target.name] : e.target.value})
   }

  return (
    <>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
