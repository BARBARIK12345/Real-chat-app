import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer/>
    </Router>   
    </>
  );
}

export default App;
