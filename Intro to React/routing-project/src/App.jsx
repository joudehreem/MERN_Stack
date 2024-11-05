import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import Content from './components/Content'
import Style from './components/Style'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/number/:num' element={<Number />} />
          <Route path='/word/:word' element={<Word />} />
          <Route path='/:content' element={<Content />} />
          <Route path='/:text/:textColor/:bgColor' element={<Style/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
