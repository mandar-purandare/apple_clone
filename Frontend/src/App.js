import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';
import { Routes, Route } from 'react-router-dom';
import StoreBody from './StoreBody';
import SignIn from './SignIn';
import Register from './Register';
import Iphone15Pro from './Iphone15Pro';
import Cart from './Cart';
import ShopIphone from './ShopIphone';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
        <Routes>
          <Route exact path='/' element={<HomeBody/>}/>
          <Route exact path='/store' element={<StoreBody/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/iphone15pro' element={<Iphone15Pro/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/shopiphone' element={<ShopIphone/>}/>
        </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
