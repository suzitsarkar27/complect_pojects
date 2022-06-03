import "./App.css";
import About from "./Pages/Routs/About/About";
import Contact from "./Pages/Routs/Contact/Contact";
import Login from "./Pages/Routs/Login/Login";
import Service from "./Pages/Routs/Service/Service";
import Hearder from "./Sheared/Header/Hearder";

function App() {
  return (
    <div>
      <Hearder>
        <About />
        <Service />
        <Contact />
        <Login />
      </Hearder>
    </div>
  );
}

export default App;
