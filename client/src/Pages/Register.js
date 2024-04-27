import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const handleSubmit =async (e)=>{
     e.preventDefault();
     if (formData.password !== formData.confirmPassword) {
       return alert("Please check password")
     }
     try {
        const response = await axios.post("http://localhost:7000/api/register", formData)
     } catch (error) {
        console.log("the error is ", error)
     }
  }

  const handleChange = (e)=>{
    setFormData({...formData , [e.target.name]: e.target.value})
  };

  return (
    <div>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4}>Registration</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button colorScheme="teal" type="submit">
            Register
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Register;
