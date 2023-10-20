import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import PokemonGenPage from './Pages/PokemonGenPage';
import PokemonVersionsPage from './Pages/PokemonVersionsPage';


function App() {
  return (
    <div>
      <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/generation/:generation'} element={<PokemonGenPage />} />
        <Route path={'/versions/:versions'} element={<PokemonVersionsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;
