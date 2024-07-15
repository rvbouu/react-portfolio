// imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import About from './components/pages/about/About'
import Portfolio from './components/pages/portfolio/Portfolio'
import Contact from './components/pages/contact/Contact'
import Resume from './components/pages/resume/Resume'
import Footer from './components/footer/Footer'
import Loading from './components/pages/loading/Loading'

// exports
export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4500)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='viewport'>
      {/* setting up routing for pages/components */}
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