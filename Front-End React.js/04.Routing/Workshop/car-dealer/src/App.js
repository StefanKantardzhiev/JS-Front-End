import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react'
import * as gameService from './services/gameService'



import { Header } from './components/Header';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Create } from './components/Create';
import { Catalog } from './components/Catalog/Catalogue';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Details } from './components/Catalog/Details';


function App() {
  const navigate = useNavigate()
  const [games, setGames] = useState([]);
  const [currentGame,setCurrentGame]= useState([])
  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result)
      })
  }, [])

  const onCreateGameSubmit = async (data) => {
    const newGame = await gameService.create(data)
    // return newGame
    navigate('/catalog')
  }



  return (
    <div id='box'>
      <Header />
      <main id='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/catalog/:gameId/' element={<Details />} />
          <Route path='/create' element={<Create onCreateGameSubmit={onCreateGameSubmit} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
