import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Button from 'react-bootstrap/Button';




function App() {
  return (
    <div>
      <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;
