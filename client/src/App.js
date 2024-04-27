import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer/>
    </Router>   
    </>
  );
}

export default App;
