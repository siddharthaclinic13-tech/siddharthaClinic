import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/responsive.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/mobile-cta.css";
import "./styles/hero.css";
import "./styles/doctors.css";
import "./styles/services.css";
import "./styles/why-choose.css";
import "./styles/gallery.css";
import "./styles/reviews.css";
import "./styles/location.css";
import "./styles/final-cta.css";
import "./styles/quote-scroller.css";
import "./styles/about-pages.css";
import "./styles/services-page.css";
import "./styles/doctors-page.css";
import "./styles/contact-page.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);