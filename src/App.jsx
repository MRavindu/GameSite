import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : ''}`}>
      <Header/>
      <Home/>
    </div>
  )
}

export default App
