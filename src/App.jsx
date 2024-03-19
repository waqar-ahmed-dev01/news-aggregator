import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {pages} from './config/config'

import Navbar from './components/Navbar'
import News from './components/News'
import Search from './components/Search'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {pages.map((page) => (
            <Route key={page.category} path={page.path} element={<News key={page.category} category={page.category} />} />
          ))}
          <Route path="search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
