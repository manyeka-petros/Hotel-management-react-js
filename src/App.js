import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";

import Messag from "./Messag";

import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Visito from "./Visito";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Home";
import Admin from "./Admin";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";
import Uplod from "./Uplod";
import Downlo from "./Downlo";
import BookRoom from "./BookRoom";


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/Vistor" element= {<Visito/>}/>
        <Route path="/bookroom" element= {<BookRoom/>}/>
        <Route path="/Home" element= {<Home/>}/>
        <Route path="/Signin" element= {<SignIn/>}/>
        <Route path="/addroom" element= {<Uplod/>}/>
        <Route path="/contact" element = {<ContactUs/>}/>
        <Route path="/message" element = {<Messag/>}/>
        <Route path="/available" element = {<Downlo/>}/>
      </Routes>
      

    </Router>
    </div>
  );
}

export default App;
