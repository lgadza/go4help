import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ServicesSection from './pages/ServicesSection';
import History from './pages/History';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<ServicesSection/>} path='/about-us'/>
          <Route element={<History/>} path='/our-history'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
