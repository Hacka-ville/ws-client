import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import LoginPage from "./pages/LoginPage";
=======
import CreateTravelPage from "./pages/CreateTravelPage";
>>>>>>> 5a1a6012e2742f42f9a3749165cfb3a707d1b127

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
=======
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/travel" element={<CreateTravelPage />} />
              <Route path="/login" element={<div>Login page</div>} />
          </Routes>
      </BrowserRouter>
>>>>>>> 5a1a6012e2742f42f9a3749165cfb3a707d1b127
  </React.StrictMode>
);
