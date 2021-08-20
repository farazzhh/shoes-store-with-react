import React, { useEffect, useContext } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import SignIn from "./pages/Sign/SignIn";
import Products from "./pages/Products/Products";
import SideBar from "./components/MobileMenuSideBar/MobileMenuSideBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/Contact";
import ProductsApp from "./pages/Products/ProductsItemsPage/ProductsApp";
import ProductsItemsApp from "./pages/Products/ProductsItemsPage/ProductItem/ProductsItemsApp.jsx";
import Cart from "./pages/Cart/Cart";
import { ProductsContext } from "./providers/ProductsContext";
function App(props) {

  const [data, dataHandler, requestData, requestDataHandler] =
  useContext(ProductsContext);
    
  useEffect(() => {
    import("./data.json").then((res) => dataHandler(res.default));
    
  },);
  
  return (
    <Router>
      {data.items && (
        <div className="App">
          <SideBar />
          <Nav />
          <Switch>
            <Route exact path="/ShoesStore" component={Home} />
            <Route exact path="/Home">
              <Redirect to="/ShoesStore" />
            </Route>
            <Route exact path="/">
              <Redirect to="/ShoesStore" />
            </Route>
            <Route exact path="/products" component={Products} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/Signin" component={SignIn} />
            <Route exact path="/products/:category" component={ProductsApp} />
            <Route
              exact
              path="/products/:category/:id"
              component={ProductsItemsApp}
            ></Route>
            <Route exact path="/cart" component={Cart} />
          </Switch>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
