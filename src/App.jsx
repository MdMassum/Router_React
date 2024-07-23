// import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Github from './Components/Github'
import User from './Components/User'

function App() {


  return (
    <>
    <BrowserRouter>

    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/github' element={<Github/>}/>
      <Route path='/user/:userid' element={<User/>}/>

    </Routes>
    <Footer/>

    </BrowserRouter>
  
    </>
  )
}

export default App
