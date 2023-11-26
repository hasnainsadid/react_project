import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Topbar from './Components/Topbar';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import ServicesPage from './Pages/Services';
import Package from './Pages/Package';

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/service' element={<ServicesPage />} />
          <Route path='/package' element={<Package />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
