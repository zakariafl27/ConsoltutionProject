import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team';
import Nav from './layouts/Nav';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Nav />} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="team" element={<Team />} />
    </Route>  

    </Routes>
        
    </BrowserRouter>
  );
}

