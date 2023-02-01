import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element ={<Home/>} >
            </Route>
            <Route path="/cart" element={<Cart/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App