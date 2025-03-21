import {Routes , Route } from 'react-router-dom'
import Main from './components/Main'
import InitializingPage from './components/InitializingPage'
import LevelOne from './components/LevelOne'
import AboutMe from './components/AboutMe'
import LevelTwo from './components/LevelTwo'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/InitializingPage" element={<InitializingPage/>} />
        <Route path="/LevelOne" element={<LevelOne/>} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path="/LevelTwo" element={<LevelTwo/>} />
      </Routes>
    </div>
  )
}

export default App
