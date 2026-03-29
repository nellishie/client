import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Consulting from './pages/Consulting.jsx';
import Industries from './pages/Industries.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
);

export default App;
