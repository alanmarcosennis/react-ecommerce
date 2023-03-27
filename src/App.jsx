import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/CartWidget/CartWidget';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <CartProvider value={{}}>
         <Navbar />
          <Routes>
           <Route path='/' element={<ItemListContainer />}/>
           <Route path='/category/:categoryId' element={<ItemListContainer />}/>
           <Route path='/cart' element={<Cart />}/>
           <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
          </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
  );
}


export default App;
