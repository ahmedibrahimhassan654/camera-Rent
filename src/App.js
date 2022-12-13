import { Route, Switch } from "react-router-dom";
import "./App.css";
import Loging from "./pages/auth/Loging";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Loging} />
    </Switch>
  );
}

export default App;
