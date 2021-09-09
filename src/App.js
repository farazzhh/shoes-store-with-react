import React, { useContext } from "react";
import "./App.css";
import "animate.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./components/Footer/Footer";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";
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
import { BadUrl } from "./components/PublicComponents/BadUrl";
import Loading from "./components/Loading/Loading";
import useFetch from "./components/useFetch/useFetch";
import { ProductsContext } from "./providers/ProductsContext";
function App(props) {
   const [data] =
     useContext(ProductsContext);
  const isPending = useFetch("http://localhost:8000/database");
  return (
    <HashRouter>
      {isPending && <Loading />}
      {data.items && (
        <div className="App">
          <SideBar />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home">
              <Redirect to="/" />
            </Route>
            <Route exact path="/ShoesStore">
              <Redirect to="/" />
            </Route>
            <Route exact path="/Products" component={Products} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/Signin" component={SignIn} />
            <Route exact path="/Products/:category" component={ProductsApp} />
            <Route
              exact
              path="/Products/:category/:id"
              component={ProductsItemsApp}
            ></Route>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Cart">
              <Redirect to="/cart" />
            </Route>
            <Route path="*">
              <BadUrl />
            </Route>
          </Switch>

          <Footer />
        </div>
      )}
    </HashRouter>
  );
}

export default App;
