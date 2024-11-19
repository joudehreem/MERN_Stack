import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Dashboard from './components/Dashboard'
import Number from './components/Number'
import Word from './components/Word'
import Content from './components/Content'
import Style from './components/Style'
import Nav from './Nav'
import Profile from './components/Profile'
import Settings from './components/Settings'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/home' element={<Home />} >
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='/number/:num' element={<Number />} />
          <Route path='/word/:word' element={<Word />} />
          <Route path='/:content' element={<Content />} />
          <Route path='/:text/:textColor/:bgColor' element={<Style/>} />
          <Route path='*' element={<Error/>} />
          <Route path='/dashboard' element={<Dashboard/> } />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
