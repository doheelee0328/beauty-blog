import * as Pages from './pages'
import { NavBar } from './component'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/'
  return (
    <Routes>
      <Route path='/' element={isHomePage ? null : <NavBar />}>
        <Route index element={<Pages.Homepage />} />
        <Route path='/about' element={<Pages.About />} />
        <Route path='/projects' element={<Pages.Projects />} />
        <Route path='/contact' element={<Pages.Contact />} />
      </Route>
    </Routes>
  )
}

export default App
