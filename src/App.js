import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";

import Messag from "./Messag";

import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Visito from "./Visito";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./FileUpload";
import Home from "./Home";
import Admin from "./Admin";
import ContactUs from "./ContactUs";
import SignIn from "./SignIn";


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/Vistor" element= {<Visito/>}/>
        <Route path="/Home" element= {<Home/>}/>
        <Route path="/Signin" element= {<SignIn/>}/>
        <Route path="/addroom" element= {<FileUpload/>}/>
        <Route path="/contact" element = {<ContactUs/>}/>
        <Route path="/message" element = {<Messag/>}/>
      </Routes>
      

    </Router>
    </div>
  );
}

export default App;
