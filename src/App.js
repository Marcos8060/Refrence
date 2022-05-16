import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={ < Home />}></Route>
          <Route exact path='/cart' element={ < Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
