import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/ui/NavigationBar';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <NavigationBar/>
   <Routes>
   
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
