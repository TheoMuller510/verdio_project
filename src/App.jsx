import './App.css'
import "./assets/styles/mockup.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
import { Challenges } from './components/pages/Challenges'
import { Profile } from './components/pages/Profile'
import { Articles } from './components/pages/Articles'

function App() {
 
  return (
    <>
    <div className='app'>
        <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/challenges' element={<Challenges />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/articles' element={<Articles />} />
            </Routes>
          </main>
        <Footer />
    </div>
    </>
  )
}

export default App
