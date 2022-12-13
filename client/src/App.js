import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ServicesHome from "./pages/services/ServicesHome";
import ProductsHome from "./pages/products/ProductsHome";
import BlogsHome from "./pages/Blogs/BlogsHome";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/services" component={ServicesHome} />
      <Route exact path="/products" component={ProductsHome} />
      <Route exact path="/blogs" component={BlogsHome} />
    </Switch>
  );
}

export default App;
