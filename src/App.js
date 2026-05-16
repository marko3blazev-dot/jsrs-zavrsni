import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Footer from "./Footer";
import Donacije from "./Components/Donacije";
import Kumstvo from "./Components/Kumstvo";
import Nasilje from "./Components/Nasilje";
import Volontiranje from "./Components/Volontiranje";
import Korana from './Components/Korana.jpg';
import Poppi from './Components/Poppi.png';
import Žan from './Components/Zan.jpg';
import Dante from './Components/Dante.jpg';
import Ferdinand from './Components/Ferdinand.jpg';
import Proton from './Components/Proton.png';
import Mendi from './Components/Mendi.jpg';
import Eric from './Components/Eric.jpg';
import Opi from './Components/Opi.jpg';
function App() {
  const psi = [
    { ime: "Proton", vrsta: "Križanac (u tipu hrvatskog ovčara)", kilaza: "Nepoznato", dob: "2 mjeseca", link: "https://www.noina-arka.hr/udomi-psa/proton/", slika: Proton },
    { ime: "Poppi", vrsta: "Mali minsterlander", kilaza: "11 kg", dob: "5 mjeseci", link: "https://www.noina-arka.hr/udomi-psa/poppi/", slika: Poppi },
    { ime: "Opi", vrsta: "Mješanac njemačkog ovčara i kangala", kilaza: "Nepoznato", dob: "4 mjeseci", link: "https://web.facebook.com/zz.rijeka/posts/pfbid02rv3yCUJofRG4AKMJiNw47VZRGfBucEwrB8AfDqQAnKBfPrEQrH6WLyvNS2X77LHYl", slika: Opi},
    { ime: "Eric", vrsta: "Križanac manjeg rasta", kilaza: "Nepoznato", dob: "3 godine", link: "https://www.noina-arka.hr/udomi-psa/eric/", slika: Eric },
    { ime: "Korana", vrsta: "Border Collie", kilaza: "12 kg", dob: "2 godine", link: "https://web.facebook.com/azil.osijek/posts/pfbid034syGMiqX7ycKdkoBxFmra8zdmRoSWxdJsyQSdW3LnmM6vBWYDo3TGgMvcgCa5Dnwl", slika: Korana },
    { ime: "Ferdinand", vrsta: "Kangal", kilaza: "Nepoznato", dob: "7 godina", link:"https://sapica.hr/ferdinand/#", slika: Ferdinand },
    { ime: "Mendi", vrsta: "Križanac manjeg rasta", kilaza: "Nepoznato", dob: "13 godina", link:"https://www.noina-arka.hr/udomi-psa/mendi/", slika: Mendi },
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
