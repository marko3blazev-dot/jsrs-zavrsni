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
    { ime: "Bobi", vrsta: "Mješanac", kilaza: "8 kg", dob: "6 mjeseci" },
    { ime: "Lili", vrsta: "Pudla", kilaza: "15 kg", dob: "8 mjeseci" },
    { ime: "Aron", vrsta: "Njemački ovčar", kilaza: "30 kg", dob: "10 mjeseci" },

    { ime: "Rex", vrsta: "Terijer", kilaza: "7 kg", dob: "3 godine" },
    { ime: "Luna", vrsta: "Zlatni retriver", kilaza: "22 kg", dob: "4 godine" },
    { ime: "Vuk", vrsta: "Haski", kilaza: "35 kg", dob: "5 godina" },

    { ime: "Kiki", vrsta: "Chihuahua", kilaza: "4 kg", dob: "10 godina" },
    { ime: "Žan", vrsta: "Koker španijel", kilaza: "18 kg", dob: "11 godina", link: "https://www.facebook.com/share/p/17NJ8ZqCQz/" }, 
    { ime: "Medo", vrsta: "Bernardinac", kilaza: "45 kg", dob: "9 godina" }
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
