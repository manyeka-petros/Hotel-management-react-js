import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Contacts from "./Contacts";
import Messag from "./Messag";

import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Visito from "./Visito";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./FileUpload";
import Home from "./Home";


function App() {
  return (
    <div>
      <Router>
    <Navbar/>
      <Routes>
        <Route path="" element= {<Home/>}/>
        <Route path="/Vistor" element= {<Visito/>}/>
        <Route path="/Signup" element= {<SignUp/>}/>
        <Route path="/Addroom" element= {<FileUpload/>}/>
        <Route path="/Contact" element = {<Contacts/>}/>
        <Route path="/Message" element = {<Messag/>}/>
      </Routes>

    </Router>
    </div>
  );
}

export default App;
