import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRout = ({ children }) => {
  
    // const Navigate=useNavigate()
   
       if (localStorage.getItem("token")) {
         return children;
       } else {
        return <Navigate to="/login" />;
        }
   
  
}

export default ProtectedRout
