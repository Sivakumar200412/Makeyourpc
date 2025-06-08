import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Build from "./pages/Build";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<Build />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
