import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
          <Route element={<Home />} path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
