import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <Router />
  </BrowserRouter>
)