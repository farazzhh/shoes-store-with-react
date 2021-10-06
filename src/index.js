import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./providers/CartContext";
import { MobileMenuProvider } from "./providers/MobileMenuContext";
import { DataProvider } from "./providers/DataContext";
import { UserDataProvider } from "./providers/UserDataContext";

ReactDOM.render(
  <React.StrictMode>
    <UserDataProvider>
      <DataProvider>
        <MobileMenuProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MobileMenuProvider>
      </DataProvider>
    </UserDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
