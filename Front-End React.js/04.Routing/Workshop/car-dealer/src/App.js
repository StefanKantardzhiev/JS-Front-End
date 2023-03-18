import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalogue';



function App() {
  return (
    <div id='box'>
      <Header />
      {/* <Login />
      <Register /> */}
      <Home />
      {/* <Create /> */}
      {/* <Catalog /> */}
    </div>

  );
}

export default App;
