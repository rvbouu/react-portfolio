// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import About from './components/pages/about/About'
import Portfolio from './components/pages/portfolio/Portfolio'
import Contact from './components/pages/contact/Contact'
import Resume from './components/pages/resume/Resume'
import Footer from './components/footer/Footer'
import Loading from './components/pages/loading/Loading'

// exports
export default function App() {
  return (
    <Loading />
    // <div className='viewport'>
    //   {/* setting up routing for pages/components */}
    //   <BrowserRouter basename='/'>
    //     <Header />
    //     <Routes>
    //       <Route path='/' element={<About />} />
    //       <Route path='/portfolio' element={<Portfolio />} />
    //       <Route path='/contact' element={<Contact />} />
    //       <Route path='/resume' element={<Resume />} />
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>

    // </div>


  )
}