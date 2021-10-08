import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./providers/CartContext";
import { MobileMenuProvider } from "./providers/MobileMenuContext";
import { DataProvider } from "./providers/DataContext";
import Auth0ProviderWithHistory from "./components/Auth0/auth0Provider";
import LoadingContextProvider from "./providers/LoadingContext";

ReactDOM.render(
  <React.StrictMode>
      <Auth0ProviderWithHistory>
        <DataProvider>
          <MobileMenuProvider>
            <CartProvider>
              <LoadingContextProvider>
              <App />
              </LoadingContextProvider>
            </CartProvider>
          </MobileMenuProvider>
        </DataProvider>
      </Auth0ProviderWithHistory>
  </React.StrictMode>,
  
  document.getElementById("root")
);
