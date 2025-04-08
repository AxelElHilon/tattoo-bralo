// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';
import Shop from "./pages/Shop";
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-serif">
        <Navbar />
        <div >
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <About />
                <Gallery />
                <Footer />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

