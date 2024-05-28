import { useState } from 'react'
import Header from './components/header/Header'
import Container from './components/Container'
import Footer from './components/footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div className="viewport">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Container currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <Footer />
    </div>
  )
}

export default App;
