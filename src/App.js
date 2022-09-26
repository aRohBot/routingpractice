import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/home'
import Word from './components/word'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/:word" element={<Word/>} />
      <Route path="/:word/:color/:bgcolor" element={<Word/>} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
