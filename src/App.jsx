import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import TvList from './pages/TvList'
import MovieList from './pages/MovieList'
import NoPage from './pages/noPage'
import Celebs from './pages/Celebs'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MovieList />} />
          <Route path='/tv' element={<TvList />} />
          <Route path='/celebs' element={<Celebs />} />
          <Route path='*' element={<NoPage />} />

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
