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


function App() {
  return (
    <div>
      <Router>
        <Navbar>
          
          <Route path="" element= {<Home/>}/>
          <Route path="/Signup" element= {<SignUp/>}/>
          

        </Navbar>
    
    <Admin>
      <Routes>
        
        <Route path="/Vistor" element= {<Visito/>}/>
        
        <Route path="/addroom" element= {<FileUpload/>}/>
        <Route path="/contact" element = {<ContactUs/>}/>
        <Route path="/message" element = {<Messag/>}/>
      </Routes>
      </Admin>

    </Router>
    </div>
  );
}

export default App;
