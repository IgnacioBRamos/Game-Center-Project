
import Cart from "./components/Cart.jsx"
import Footer from "./components/Footer.jsx"
import FormCart from "./components/FormCart.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
 
  return (
    <BrowserRouter>
        <Navbar/>
        <section className="principal-container">
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:category" element={<ItemListContainer/>}/>
              <Route path="/items/:id" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/form" element={<FormCart/>}/>
          </Routes>
        </section>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
