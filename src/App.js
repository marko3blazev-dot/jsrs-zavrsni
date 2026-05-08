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
    // ŠTENCI (< 1 god): indeks 0, 1, 2
    { ime: "Bobi", vrsta: "Mješanac", kilaza: "8 kg", dob: "6 mjeseci" },   // Mali
    { ime: "Lili", vrsta: "Pudla", kilaza: "15 kg", dob: "8 mjeseci" },    // Srednji
    { ime: "Aron", vrsta: "Njemački ovčar", kilaza: "30 kg", dob: "10 mjeseci" }, // Veliki

    // ODRASLI (1 - 7 god): indeks 3, 4, 5
    { ime: "Rex", vrsta: "Terijer", kilaza: "7 kg", dob: "3 godine" },     // Mali
    { ime: "Luna", vrsta: "Zlatni retriver", kilaza: "22 kg", dob: "4 godine" }, // Srednji
    { ime: "Vuk", vrsta: "Haski", kilaza: "35 kg", dob: "5 godina" },      // Veliki

    // SENIORI (8+ god): indeks 6, 7, 8
    { ime: "Kiki", vrsta: "Chihuahua", kilaza: "4 kg", dob: "10 godina" },  // Mali
    { ime: "Žan", vrsta: "Španijel", kilaza: "18 kg", dob: "11 godina", link: "https://www.facebook.com/share/p/17NJ8ZqCQz/" },  // Srednji
    { ime: "Medo", vrsta: "Bernardinac", kilaza: "45 kg", dob: "9 godina" }   // Veliki
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
