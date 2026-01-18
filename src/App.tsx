import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Register from './pages/Register';
import Schedule from './pages/Schedule';
import Results from './pages/Results';
import Judges from './pages/Judges';
import About from './pages/About';
import Rules from './pages/Rules';
import Contact from './pages/Contact';


import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/results" element={<Results />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
