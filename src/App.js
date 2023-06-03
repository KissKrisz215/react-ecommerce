import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomePage } from './pages/HomePage';
import {ProductDetails} from './pages/ProductDetailsPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
