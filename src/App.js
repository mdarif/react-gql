import { Route, Routes } from 'react-router-dom'
import './App.css'
import Character from './pages/Character'
import CharactersList from './pages/CharactersList'
import Search from './pages/Search'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<CharactersList />}></Route>
        <Route path='/:id' element={<Character />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
  )
}

export default App
