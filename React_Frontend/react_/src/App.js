
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignIn from './Pages/SignIn'
import Login from './Pages/Login';
import ViewProducts from './Pages/ViewProducts';
import AddProduct from './Pages/AddProducts';
import ModifyProducts from './Pages/ModifyProducts';
import Profile from './Pages/Profile';
import Inventory from './Pages/Inventory';
import ProductDetail from './Pages/ProductDetailView';
import AddRecord from './Pages/AddRecord';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/products" element={<ViewProducts />}></Route>
            <Route path="/modifyProduct" element={<ModifyProducts />}></Route>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/addProducts" element={<AddProduct />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/inventory' element={<Inventory />}></Route>
            <Route path='/addRecord' element={<AddRecord />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
