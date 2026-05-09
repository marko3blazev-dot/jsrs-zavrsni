import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Footer from "./Footer";
import Donacije from "./Components/Donacije";
import Kumstvo from "./Components/Kumstvo";
import Nasilje from "./Components/Nasilje";
import Volontiranje from "./Components/Volontiranje";
import slikaKorana from './Components/Korana.jpg';
import Anđelka from './Components/Andjelka.jpg';
import Žan from './Components/Zan.jpg';
import Dante from './Components/Dante.jpg';
function App() {
  const psi = [
    { ime: "Bobi", vrsta: "Mješanac", kilaza: "8 kg", dob: "6 mjeseci" },
    { ime: "Anđelka", vrsta: "Posavski gonič", kilaza: "18 kg", dob: "10 mjeseci", link: "https://web.facebook.com/azildubrovnik/posts/pfbid0wUzfc6n3kuCvyiAZghXJ8mHH2trEhA2g2NEYg66kxrH3cmUYHwVg9hcZEfaB24uQl", slika: Anđelka },
    { ime: "Anđelka", vrsta: "Njemački ovčar", kilaza: "18 kg", dob: "10 mjeseci", link: "" },

    { ime: "Rex", vrsta: "Terijer", kilaza: "7 kg", dob: "3 godine" },
    { ime: "Korana", vrsta: "Border Collie", kilaza: "12 kg", dob: "2 godine", link: "https://web.facebook.com/azil.osijek/posts/pfbid034syGMiqX7ycKdkoBxFmra8zdmRoSWxdJsyQSdW3LnmM6vBWYDo3TGgMvcgCa5Dnwl", slika: slikaKorana },
    { ime: "Vuk", vrsta: "Haski", kilaza: "35 kg", dob: "5 godina" },

    { ime: "Kiki", vrsta: "Chihuahua", kilaza: "4 kg", dob: "10 godina" },
    { ime: "Žan", vrsta: "Koker španijel", kilaza: "18 kg", dob: "11 godina", link: "https://www.facebook.com/share/p/17NJ8ZqCQz/", slika: Žan },
    { ime: "Dante", vrsta: "Zlatni retriver", kilaza: "40 kg", dob: "12 godina", link: "https://sapica.hr/dante/", slika: Dante}
  ];
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/donacije' element={<Donacije />}></Route>
          <Route path='/volontiranje' element={<Volontiranje />}></Route>
          <Route path='/kumstvo' element={<Kumstvo psi={psi} />}></Route>
          <Route path='/nasilje' element={<Nasilje />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
