import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Plum from './components/Plum';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Plum></Plum>
      </BrowserRouter>
    </div>
  );
}

export default App;
