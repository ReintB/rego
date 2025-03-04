import {Routes, Route} from "react-router-dom"

import NavbarComponents from "./components/NavbarComponents.jsx";
import FooterComponents from "./components/FooterComponents.jsx";

import HomePage from "./pages/HomePage.jsx";
import ProdukPage from "./pages/ProdukPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";
import TentangPage from "./pages/TentangPage";
import FaqPage from "./pages/FaqPage.jsx";
import Page404 from "./pages/404Page.jsx";

function App() {
  return <div>
    <NavbarComponents />

    <Routes>
      <Route path="/" Component={ HomePage }/>
      <Route path="/produk" Component={ ProdukPage }/>
      <Route path="/testimonial" Component={ TestimonialPage }/>
      <Route path="/faq" Component={ FaqPage }/>
      <Route path="/tentang" Component={ TentangPage }/>
      <Route path="/error" Component={ Page404 }/>
    </Routes>

    <FooterComponents />

  </div>;
}

export default App;