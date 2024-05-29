import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
// import Container from './components/Container'
import About from './components/pages/about/About'
import Portfolio from './components/pages/portfolio/Portfolio'
import Contact from './components/pages/contact/Contact'
import Resume from './components/pages/resume/Resume'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <div className='viewport'>

      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>


  )
}

export default App;