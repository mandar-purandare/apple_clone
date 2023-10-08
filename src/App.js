import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomeBody/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
