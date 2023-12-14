import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Whats from './components/whats/Whats'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Whats/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
