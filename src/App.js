import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" exact />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
