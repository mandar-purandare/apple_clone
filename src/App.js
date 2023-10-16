import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';
import { Routes, Route } from 'react-router-dom';
import StoreBody from './StoreBody';
import SignIn from './SignIn';
import Register from './Register';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
        <Routes>
          <Route exact path='/' element={<HomeBody/>}/>
          <Route exact path='/store' element={<StoreBody/>}/>
          <Route exact path='/signin' element={<SignIn/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
