import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Footer from "./Footer";
import Donacije from "./Components/Donacije";
import Kumstvo from "./Components/Kumstvo";
import Nasilje from "./Components/Nasilje";
import Volontiranje from "./Components/Volontiranje";
function App() {
  const psi = [
    // ŠTENCI (< 1 god)
    { id: 1, ime: "Bobi", vrsta: "Mješanac", kilaza: 8, godine: 0.5 },    // Mali
    { id: 2, ime: "Lili", vrsta: "Pudla", kilaza: 15, godine: 0.7 },    // Srednji
    { id: 3, ime: "Aron", vrsta: "Njemački ovčar", kilaza: 30, godine: 0.8 }, // Veliki

    // ODRASLI (1-7 god)
    { id: 4, ime: "Rex", vrsta: "Terijer", kilaza: 7, godine: 3 },      // Mali
    { id: 5, ime: "Luna", vrsta: "Zlatni retriver", kilaza: 22, godine: 4 }, // Srednji
    { id: 6, ime: "Vuk", vrsta: "Haski", kilaza: 35, godine: 5 },       // Veliki

    // SENIORI (8+ god)
    { id: 7, ime: "Kiki", vrsta: "Chihuahua", kilaza: 4, godine: 10 },   // Mali
    { id: 8, ime: "Zagi", vrsta: "Španijel", kilaza: 18, godine: 12 },   // Srednji
    { id: 9, ime: "Medo", vrsta: "Bernardinac", kilaza: 45, godine: 9 }
  ];
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content/>}></Route>
          <Route path='/donacije' element={<Donacije/>}></Route>
          <Route path='/volontiranje' element={<Volontiranje/>}></Route>
          <Route path='/kumstvo' element={<Kumstvo psi={psi}/>}></Route>
          <Route path='/nasilje' element={<Nasilje/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
