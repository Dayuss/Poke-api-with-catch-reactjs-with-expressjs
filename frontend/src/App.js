import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import Broke from './pages/Broke'
import Caught from './pages/Caught'
import MyPokemon from './pages/MyPokemon'
import { ToastContainer } from 'react-toastify';

import { Route, Routes } from 'react-router-dom'

if(!localStorage.getItem("sessId")) localStorage.setItem("sessId", btoa(Math.floor((Math.random() * 1000) + 1) * 100))

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/broke" element={<Broke />} />
        <Route path="/caught/:id" element={<Caught />} />
        <Route path="/mine" element={<MyPokemon />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
