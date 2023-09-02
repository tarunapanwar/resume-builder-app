
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { ResumeBuilder } from './Components/ResumeBuilder';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeBuilder />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
