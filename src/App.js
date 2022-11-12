
import Productlist from "./page/Productlist";
import ProductPage from "./page/ProductPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Productlist/>}/>
        <Route path='/product' element={<ProductPage/>}/>

      </Routes>
   {/* <Productlist/> */}
   {/* <ProductPage/> */}
    </>

  );
}

export default App;
