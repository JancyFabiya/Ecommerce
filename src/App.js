
import Productlist from "./page/Productlist";
import ProductPage from "./page/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Wishlist from "./page/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Productlist/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>

      </Routes>
   {/* <Productlist/> */}
   {/* <ProductPage/> */}
    </>

  );
}

export default App;
