import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';
import { Routes, Route } from 'react-router-dom';
import StoreBody from './StoreBody';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomeBody/>}/>
          <Route exact path='/store' element={<StoreBody/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
