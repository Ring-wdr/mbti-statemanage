import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Main } from './pages/Main';
import { Question } from './pages/Question';
import { Result } from './pages/result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/question' element={<Question />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
