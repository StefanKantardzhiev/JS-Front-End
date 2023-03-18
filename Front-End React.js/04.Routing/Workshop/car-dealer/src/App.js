import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalogue';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div id='box'>
      <Header />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/create' element={<Create />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>

      {/* <Login />
      <Register /> */}

      {/* <Create /> */}
      {/* <Catalog /> */}
    </div>

  );
}

export default App;
