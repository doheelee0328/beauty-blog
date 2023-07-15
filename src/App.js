import * as Pages from './pages'
import { NavBar } from './component'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<NavBar />} />{' '}
      <Route index element={<Pages.Homepage />} />{' '}
    </Routes>
  )
}

export default App
