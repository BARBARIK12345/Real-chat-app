import React, { useEffect, useState } from 'react'
import {
    FormControl,
    Button,
    Input,
    Flex, 
    Box,
    Text,
    Container,
  } from "@chakra-ui/react";
  import io from 'socket.io-client';
import axios from 'axios';

const Chat = () => {
    
    const [user, setUser] = useState('');
    const [chat , setChat] = useState([]);
    const [inputmsg , setInputmsg] = useState("");
    const [reply , setReply] = useState([]);
   
   


    // useEffect(() => {
    //   const userName = prompt('Enter your name:');
    //   setUser(userName);
    //   socket.on('message', (message) => {
    //     setMessages((prevMessages) => [...prevMessages, message]);
    //   });
    // }, [])

    const handlesubmit= async(e)=>{
         e.preventDefault();
        //  console.log(...input)
      
      //  let senderchat = {message : input , issuer : true}
      //  let recieverchat = {message : reciver}

        setChat({...chat , sender : inputmsg})
          console.log(chat)
      const response = await axios.post( "http://localhost:7000/api/user/chat", chat)
    }

  return (
    <div>
       <Flex
        // justify="center"
        align="center"
        m="1rem"
        flexWrap="wrap"
        h="90vh"
        w="90vw"
        minW="360px"
        minH="400px"
        // borderWidth="2px"
        // borderColor="grey.500"
        flexDirection="column"
      >
        <Container
          height="75%"
          minH="100px"
          width="100%"
          minW="160px"
          // borderWidth="2px"
          // borderColor="grey.500"
          justify="center"
          align="center"
          flexWrap="wrap"
          overflowY="scroll"
        >
          {/* {chat.map((newchats, index) => ( */}
            <>
            <Box
              m="0.8rem"
              borderWidth="1px"
              borderColor="red"
              backgroundColor="lightgrey"
              justifyItems="flex-end"
              w="auto"
              ml="70%"
            >
              <Text fontSize="smaller" fontFamily="sans-serif" color="blue">
                {chat.message}
              </Text>
            </Box>
             
             {/* <Box
             m="0.8rem"
             borderWidth="1px"
             borderColor="red"
             backgroundColor="lightgreen"
             justifyItems="flex-start"
             w="auto"
             mr="70%"
           >
             <Text fontSize="smaller" fontFamily="sans-serif" color="blue">
               bot {newchats.messages}
             </Text>
           </Box> */}
           </>
          {/* ))} */}
        </Container>

        <Container
        // mt="0.5rem"
          // borderWidth="1px"
          // borderColor="red"
          h="18%"
          w="70%"
          justify="center"
          align="center"
          flexWrap="wrap"
        >
          <form 
          onSubmit={handlesubmit}
          >
            <FormControl mb="5px">
              {/* <FormLabel>Chat</FormLabel> */}
              <Input
                // w="20rem"
                h="2rem"
                type="text"
                name="msg"
                value={inputmsg}
                onChange={(e) => setInputmsg(e.target.value)}
              />
               <Button m="0.3rem" h="2rem" type="submit">Send</Button>
            </FormControl>
          </form>
        </Container>
      </Flex>
    </div>
  )
}

export default Chat
