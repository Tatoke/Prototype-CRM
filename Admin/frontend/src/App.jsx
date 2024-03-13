// main file of the frontend application that renders the components.
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // !Put any other imports below so that CSS from your components takes precedence over default styles.
import "./App.css"; //styles for the WHOLE project

import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing pages:
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import Clients from "./pages/Clients/Clients";
import Services from "./pages/Services/Services";
import Finances from "./pages/Finances/Finances";
import Profile from "./pages/Profile/Profile";
import Roles from "./pages/Roles/Roles"; // page to manage RBAC
import Login from "./pages/Login/Login";
import AuthRoute from "./AuthRouter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <AuthRoute>
              <Header />
            </AuthRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="orderDetails/:orderId" element={<OrderDetails />} />

          {/* userTyoe can be either "employee" or "client" */}
          <Route path="profile/:userType/:userId" element={<Profile />} />

          <Route path="clients" element={<Clients />} />
          <Route path="services" element={<Services />} />
          <Route path="finances" element={<Finances />} />

          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="roles" element={<Roles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
