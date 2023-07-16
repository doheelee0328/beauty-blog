import * as Pages from './pages'
import { NavBar } from './component'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<NavBar />} />
      <Route path='/' element={<Pages.Homepage />} />
      <Route path='/about' element={<Pages.About />} />
      <Route path='/projects' element={<Pages.Projects />} />
      <Route path='/contact' element={<Pages.Contact />} />
    </Routes>
  )
}

export default App
