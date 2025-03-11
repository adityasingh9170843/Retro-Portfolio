import {Routes , Route } from 'react-router-dom'
import Main from './components/Main'
import InitializingPage from './components/InitializingPage'
function App() {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/InitializingPage" element={<InitializingPage/>} />
      </Routes>
    </div>
  )
}

export default App
