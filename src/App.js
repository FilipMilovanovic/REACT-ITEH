import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NovaTuraPage from './strane/NovaTuraPage'
import SpisakTuraPage from './strane/SpisakTuraPage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path="/" element={<NovaTuraPage />} />
        <Route path="/spisak" element={<SpisakTuraPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
