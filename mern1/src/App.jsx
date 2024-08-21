import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Collection from "./pages/Collection"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Order from "./pages/Order"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App
