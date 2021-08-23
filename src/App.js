import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
