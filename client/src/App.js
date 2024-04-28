import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import Chat from './Pages/Chat';
import Socket from './component/Socket';
import ProtectedRout from './component/ProtectedRout';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element=
        { <ProtectedRout>
        <Homepage />
        </ProtectedRout>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/chat' element=
        {<ProtectedRout>
          <Chat/>
        </ProtectedRout>}/>
        <Route path='/socket' element={
        <ProtectedRout>
          <Socket/>
        </ProtectedRout>}/>

      </Routes>
      {/* <Footer/> */}
    </Router>   
    </>
  );
}

export default App;
