import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LogingSignup from "./Pages/LogingSignup";
import Fotter from "./Components/Fotter";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category='men'/>} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category='women'/>} />
          <Route path="/kid" element={<ShopCategory banner={kid_banner} category='kid'/>} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}/>
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LogingSignup/>} />
        </Routes>
        <Fotter />
      </BrowserRouter>
        
    </div>
  );
}

export default App;
