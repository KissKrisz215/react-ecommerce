import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
