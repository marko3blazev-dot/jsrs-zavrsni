import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Footer from "./Footer";
import Donacije from "./Components/Donacije";
import Kumstvo from "./Components/Kumstvo";
import Nasilje from "./Components/Nasilje";
import Volontiranje from "./Components/Volontiranje";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/donacije' element={<Donacije/>}></Route>
          <Route path='/volontiranje' element={<Volontiranje/>}></Route>
          <Route path='/kumstvo' element={<Kumstvo/>}></Route>
          <Route path='/nasilje' element={<Nasilje/>}></Route>
        </Routes>
      </Router>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
