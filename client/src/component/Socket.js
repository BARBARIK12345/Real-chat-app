import React, { useState, useEffect, useMemo } from "react";
import io from "socket.io-client";
import {
  FormControl,
  Button,
  Input,
  Flex,
  Box,
  Text,
  Container,
} from "@chakra-ui/react";
import axios from "axios";

function Socket() {
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState([]);
  const [room , setRoom]= useState("")

  const socket = io("http://localhost:7000")
//   const socket = useMemo(() => io("http://localhost:7000"));

  useEffect(() => {
    socket.on("connect", () => {
      // setSocketId(socket.id);
      console.log("connected", socket.id);
    });
    // Listen for incoming messages
    socket.on("recieved-message", (mssg) => {
      console.log("Received:", mssg);
    });

    // Clean up on unmount
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setSender([...sender, message]);
    socket.emit("newMessage", {message, room });
    console.log("Sent:", message);
    // const response= axios.post("http://localhost:7000", sender)
    // console.log(sender)
    // setMessage('');
  };

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
          {sender.map((newchats, index) => (
            <>
              <Box
              key={index}
                m="0.8rem"
                borderWidth="1px"
                borderColor="red"
                backgroundColor="lightgrey"
                justifyItems="flex-end"
                w="auto"
                ml="70%"
              >
                <Text fontSize="smaller" fontFamily="sans-serif" color="blue">
                  {newchats}
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
          ))}
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
          onSubmit={sendMessage}
          >
            <FormControl mb="5px">
              {/* <FormLabel>Chat</FormLabel> */}
              <Input
                // w="20rem"
                h="2rem"
                type="text"
                name="msg"
                placeholder="type here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
               <Input
                // w="20rem"
                h="2rem"
                type="text"
                name="msg"
                placeholder="room"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
              />
               <Button m="0.3rem" h="2rem" type="submit">Send</Button>
            </FormControl>
          </form>

         
        </Container>
      </Flex>

      {/* <form onSubmit={sendMessage}>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form> */}
    </div>
  );
}

export default Socket;
