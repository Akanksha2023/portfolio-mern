import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './components/ProjectList/ProjectList.jsx'
import Footer from './components/Footer/footer.jsx'
import Hero from './sections/Hero.jsx'

function App() {
 

  return (
    <div>
      <h1 className='text-3xl underline'>My Portfolio</h1>
      <ProjectList />
      <Hero />
      <Footer />
    </div>
  );
}

export default App
