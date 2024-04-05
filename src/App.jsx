import {} from 'react';
import './routes/Home.jsx';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App