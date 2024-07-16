import "./App.css";
import "./styles/NavBar.css";
import "./styles/ItemListContainer.css";
import "./styles/CartWidget.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CategoryProduct from "./components/CategoryProduct";
import Contact from "./components/Contact";
import CartContainer from "./components/CartContainer";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/CartContainer" element={<CartContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
            <Route path="/ItemListContainer/:category"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/CategoryProduct" element={<CategoryProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
