import React from 'react';
import './App.css';
// import Footer from './components/webProject/Footer';
// import NavbarFitness from './components/webProject/navbarFitness';
// import Programs from './components/webProject/Programs';
// import Signup from './components/webProject/Signup';
// import LoginForm from './loginForm';
// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Home from './components/FA18BCE081/pages/Home';
import Aboutus from './components/FA18BCE081/pages/Aboutus';
import Contactus from './components/FA18BCE081/pages/Contactus';
import Nopage from './components/FA18BCE081/pages/Nopage';
import Educationalvideos from './components/FA18BCE081/pages/Educationalvideos';
import Submitform from './components/FA18BCE081/webcomp/Submitform';
import Servicespage from './components/FA18BCE081/pages/Servicespage';
import FormDetail from './components/FA18BCE081/webcomp/FormDetail';
import Product from './components/FA18BCE081/pages/Product';
import Servicedetail from './components/FA18BCE081/webcomp/Servicecard/Servicedetail';
import Doctersdetail from './components/FA18BCE081/webcomp/Doctors/Doctersdetail';








// import Layout from "./components/webProject/Layout";
// import About from "./components/webProject/About";
// import Home from "./components/webProject/Home";
// import Pricing from "./components/webProject/Pricing";
// import Contactus from "./components/webProject/Contactus";
// import Register from "./components/webProject/Register";
// import NoPage from "./components/webProject/Nopage";
// import Newcomponent from './components/webProject/Newcomponent';







function App() {
  
  
  return (
    <div className="App">

{     
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/home" element={<Home/>} />
            <Route path="/product" element={<Product/>}/>
            <Route path="/Services" element={<Servicespage/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/contactus" element={<Contactus/>}/>
            <Route path="/educationalvideos" element={<Educationalvideos/>}/>
            <Route path="/appointment" element={<Submitform/>}/>
            <Route path='/FormDetail' element={<FormDetail/>}/>
            <Route path='/Services/Service-detail' element={<Servicedetail/>}/>
            <Route path='/Home/Doctor-detail' element={<Doctersdetail/>}/>
            <Route path="*" element={<Nopage/>}/>


          </Route>
        </Routes>
      </BrowserRouter>

     

      /* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About/>} />
          <Route path="contactus" element={<Contactus/>} />
          <Route path="carousel" element={<Newcomponent/>} />
          <Route path="Register" element={<Register/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}



      {/* <LoginForm/> */}
    </div>










    // <div className="App">
    //   {    
    //   /* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
