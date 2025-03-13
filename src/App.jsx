import {Routes , Route } from 'react-router-dom'
import Main from './components/Main'
import InitializingPage from './components/InitializingPage'
import LevelOne from './components/LevelOne'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/InitializingPage" element={<InitializingPage/>} />
        <Route path="/LevelOne" element={<LevelOne/>} />
      </Routes>
    </div>
  )
}

export default App
