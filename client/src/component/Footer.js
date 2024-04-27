import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react';


const Footer = () => {
  return (
    <div>
       <Flex bg="teal" color="white" p={4}  position="fixed" bottom="0" left="0" width={"100%"}>
      <Box p="2" >
        <Text>© 2024 Your Company</Text>
      </Box>
      <Box ml="auto">
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
      </Box>
    </Flex>
    </div>
  )
}

export default Footer
