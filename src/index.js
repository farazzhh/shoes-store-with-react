import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./providers/CartContext";
import { MobileMenuProvider } from "./providers/MobileMenuContext";
import { DataProvider } from "./providers/DataContext";
import { UserDataProvider } from "./providers/UserDataContext";
import Auth0ProviderWithHistory from "./components/Auth0/auth0Provider";
import LoadingContextProvider from "./providers/LoadingContext";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <UserDataProvider>
      <DataProvider>
        <MobileMenuProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </MobileMenuProvider>
      </DataProvider>
    </UserDataProvider>
=======
      <Auth0ProviderWithHistory>
      <UserDataProvider>
        <DataProvider>
          <MobileMenuProvider>
            <CartProvider>
              <LoadingContextProvider>
              <App />
              </LoadingContextProvider>
            </CartProvider>
          </MobileMenuProvider>
        </DataProvider>
      </UserDataProvider>
      </Auth0ProviderWithHistory>
>>>>>>> reverse-befor-netlify
  </React.StrictMode>,
  
  document.getElementById("root")
);
