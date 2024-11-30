import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import ring_banner from './Components/assets/ring_banner.jpg'
import necklace_banner from './Components/assets/necklace_banner.jpg'
import earring_banner from './Components/assets/earring_banner.jpg'
import bangle_banner from './Components/assets/bangle_banner.jpg'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Ring' element={<ShopCategory banner={ring_banner} category="Ring" />}/>
        <Route path='/Necklace' element={<ShopCategory  banner={necklace_banner} category="Necklace" />}/>
        <Route path='/Earring' element={<ShopCategory  banner={earring_banner} category="Earring"/>}/>
        <Route path='/Bangle' element={<ShopCategory  banner={bangle_banner} category="Bangle"/>}/>
        <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
