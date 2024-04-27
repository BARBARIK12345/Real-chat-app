import React from 'react'
import { Flex, Box, Heading, Spacer, Link } from '@chakra-ui/react';


const Header = () => {
  return (
    <div>
      <Flex bg="teal" color="white" p={4}>
      <Box p="2">
        <Heading size="md">Your Logo</Heading>
      </Box>
      <Spacer />
      <Box>
        <Link mr={4} href="#">Home</Link>
        <Link mr={4} href="#">Products</Link>
        <Link mr={4} href="#">About</Link>
        <Link mr={4} href="#">Contact</Link>
      </Box>
    </Flex>
    </div>
  )
}

export default Header
