import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTravelPage from "./pages/CreateTravelPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/travel" element={<CreateTravelPage />} />
              <Route path="/login" element={<div>Login page</div>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
