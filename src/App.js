import Navbar from './components/navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ICS4U0 from './pages/ICS4U0' 
import Projects from './pages/Projects'
import Concepts from './pages/Concepts'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ICS4U0" element={<ICS4U0 />}/>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Concepts" element={<Concepts />} />
      </Routes>
    </div>
  );
}

export default App;