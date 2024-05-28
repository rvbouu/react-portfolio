import { useState } from 'react'
// import Header from './components/header/Header'
// import Container from './components/Container'
import Footer from './components/footer/Footer'
import Portfolio from './components/pages/portfolio/Portfolio'
import './App.css'

function App() {
  // const [currentPage, setCurrentPage] = useState('About');

  return (
    <>
            {/* <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Container currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;
