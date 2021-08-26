import Navbar from "./components/NavBar";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/cart" component={Cart}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
