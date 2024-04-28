import React from 'react'
import { io } from 'socket.io-client';

const Socket = () => {

    const socket = useMemo(() => io("http://localhost:7000"), [])

    useEffect(() => {
        socket.on("connect", () => {
          setSocketId(socket.id);
          console.log("connected", socket.id);
        });
        socket.on("welcome", (msg) => {
          //// Please check same event name from backend here= "welcome" as event inside with callback function with argument from backend
          console.log(msg);
        });
        socket.on("recieved-message", (data) => {
          /// Recieved mssg is imp event to recieved mssages
          console.log(data);
          setAllmsg((allmsg) => [...allmsg, data]);
        });
    
        return () => {
          socket.disconnect(); /// return function disconnected invoked in return clear in useeffect
        };
      }, [])
  return (
    <div>
      
    </div>
  )
}

export default Socket
