import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/Routs/About/About";
import Contact from "./Pages/Routs/Contact/Contact";
import Login from "./Pages/Routs/Login/Login";
import Service from "./Pages/Routs/Service/Service";
import Hearder from "./Sheared/Header/Hearder";

function App() {
  return (
    <div>
      <Hearder>
        <Routes> 
          <Route path="/home"element={<Home></Home>}/>
          <Route path="/about"element={<About></About>}/>
          <Route path="service" element={<Service></Service>}/>
          <Route path="/contact"element={<Contact></Contact>}/>
          <Route path="/login"element={<Login></Login>}/>
        </Routes>
      </Hearder>
    </div>
  );
}

export default App;
