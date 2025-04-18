import './Global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            {<Route path='/' element = {<Signup/>}/>}
        </Routes>
    </BrowserRouter>
  
  )
}

export default App
