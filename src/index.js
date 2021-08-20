import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./providers/CartContext";
import { MobileMenuProvider } from "./providers/MobileMenuContext";
import { ProductsProvider } from "./providers/ProductsContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <MobileMenuProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </MobileMenuProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
