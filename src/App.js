import React from 'react'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Home from './system/Pages/Home/Home';
import Labs from './system/Pages/Labs/App';
import About from './system/Pages/About/App';
import Contact from './system/Pages/Contact/App';

// Maktab Labaratoriyalari 
// 6-sinf
// import Lab6One from './system/Labaratoriyalar/Maktab/6-sinf/ShayinliTaroziYordamidaJismMassasi/App';
// import Lab6OneInfo from './system/Labaratoriyalar/Maktab/6-sinf/ShayinliTaroziYordamidaJismMassasi/info/Info';
// import Lab6Two from './system/Labaratoriyalar/Maktab/6-sinf/QattiqJismningZichligi/App';
// import Lab6TwoInfo from './system/Labaratoriyalar/Maktab/6-sinf/QattiqJismningZichligi/info/Info';
// import Lab6Three from './system/Labaratoriyalar/Maktab/6-sinf/DinamometrYordamidaKuchlar/App';
// import Lab6ThreeInfo from './system/Labaratoriyalar/Maktab/6-sinf/DinamometrYordamidaKuchlar/info/Info';
// import Lab6Four from './system/Labaratoriyalar/Maktab/6-sinf/RichagningMuvozanatdaBo\'lishSharti/App';
// import Lab6FourInfo from './system/Labaratoriyalar/Maktab/6-sinf/RichagningMuvozanatdaBo\'lishSharti/info/Info';
// import Lab6Five from './system/Labaratoriyalar/Maktab/6-sinf/TermometrYordamidaHavoVaSuyuqlikTemperaturalari/App';
// import Lab6FiveInfo from './system/Labaratoriyalar/Maktab/6-sinf/TermometrYordamidaHavoVaSuyuqlikTemperaturalari/info/Info';
// import Lab6Six from './system/Labaratoriyalar/Maktab/6-sinf/YassiKo\'zguYordamidaYorug\'likQaytishi/App';
// import Lab6SixInfo from './system/Labaratoriyalar/Maktab/6-sinf/YassiKo\'zguYordamidaYorug\'likQaytishi/info/Info';
// import Lab6Seven from './system/Labaratoriyalar/Maktab/6-sinf/ShishaPrizmaYordamidaYorug\'likningSpektrgaAjralishi/App';
// import Lab6SevenInfo from './system/Labaratoriyalar/Maktab/6-sinf/ShishaPrizmaYordamidaYorug\'likningSpektrgaAjralishi/info/Info';
// 7-sinf
// import Lab7One from './system/Labaratoriyalar/Maktab/7-sinf/TekisTezlanuvchanHarakat/App';
// import Lab7OneInfo from './system/Labaratoriyalar/Maktab/7-sinf/TekisTezlanuvchanHarakat/info/Info';
// import Lab7Two from './system/Labaratoriyalar/Maktab/7-sinf/IshqalanishKoeffitsienti/App';
// import Lab7TwoInfo from './system/Labaratoriyalar/Maktab/7-sinf/IshqalanishKoeffitsienti/info/Info';
// import Lab7Three from './system/Labaratoriyalar/Maktab/7-sinf/KinetikEnergiya/App';
// import Lab7ThreeInfo from './system/Labaratoriyalar/Maktab/7-sinf/KinetikEnergiya/info/Info';
// import Lab7Four from './system/Labaratoriyalar/Maktab/7-sinf/MexanikIsh/App';
// import Lab7FourInfo from './system/Labaratoriyalar/Maktab/7-sinf/MexanikIsh/info/Info';
// import Lab7Five from './system/Labaratoriyalar/Maktab/7-sinf/PrujinaBikrligi/App';
// import Lab7FiveInfo from './system/Labaratoriyalar/Maktab/7-sinf/PrujinaBikrligi/info/Info';
// 8-sinf
// import Lab8One from './system/Labaratoriyalar/Maktab/8-sinf/TokKuchiVaKuchlanish/App';
// import Lab8OneInfo from './system/Labaratoriyalar/Maktab/8-sinf/TokKuchiVaKuchlanish/info/Info';
// import Lab8Two from './system/Labaratoriyalar/Maktab/8-sinf/OmQonuni/App';
// import Lab8TwoInfo from './system/Labaratoriyalar/Maktab/8-sinf/OmQonuni/info/Info';
// import Lab8Three from './system/Labaratoriyalar/Maktab/8-sinf/O\'tkazgichlarniKetma-ketVaParallelUlash/App';
// import Lab8ThreeInfo from './system/Labaratoriyalar/Maktab/8-sinf/O\'tkazgichlarniKetma-ketVaParallelUlash/info/Info';
// import Lab8Four from './system/Labaratoriyalar/Maktab/8-sinf/Iste`molchiningElektrQuvvati/App';
// import Lab8FourInfo from './system/Labaratoriyalar/Maktab/8-sinf/Iste`molchiningElektrQuvvati/info/Info';
// import Lab8Five from './system/Labaratoriyalar/Maktab/8-sinf/EngOddiyElektromagnitniYig\'ishVaUningIshlashi/App';
// import Lab8FiveInfo from './system/Labaratoriyalar/Maktab/8-sinf/EngOddiyElektromagnitniYig\'ishVaUningIshlashi/info/Info';
// 9-sinf
// 10-sinf
// 11-sinf

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Pages */}
          <Route path='/' exact component={Home} />
          <Route path='/labs' exact component={Labs} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          {/* Maktab Labaratoriyalar */}
          {/* 6-sinf */}
          {/* <Route path='/shayinlitaroziyordamidajismmassasi' exact component={Lab6One} />
          <Route path='/shayinlitaroziyordamidajismmassasi/malumot' exact component={Lab6OneInfo} />
          <Route path='/qattiqjismningzichligi' exact component={Lab6Two} />
          <Route path='/qattiqjismningzichligi/malumot' exact component={Lab6TwoInfo} />
          <Route path='/dinamometryordamidakuchlar' exact component={Lab6Three} />
          <Route path='/dinamometryordamidakuchlar/malumot' exact component={Lab6ThreeInfo} />
          <Route path='/richagningmuvozanatdabulishsharti' exact component={Lab6Four} />
          <Route path='/richagningmuvozanatdabulishsharti/malumot' exact component={Lab6FourInfo} />
          <Route path='/termometryordamidahavovasuyuqliktemperaturalari' exact component={Lab6Five} />
          <Route path='/termometryordamidahavovasuyuqliktemperaturalari/malumot' exact component={Lab6FiveInfo} />
          <Route path='/yassikuzguyordamidayoruglikqaytishi' exact component={Lab6Six} />
          <Route path='/yassikuzguyordamidayoruglikqaytishi/malumot' exact component={Lab6SixInfo} />
          <Route path='/shishaprizmayordamidayoruglikningspektrgaajralishi' exact component={Lab6Seven} />
          <Route path='/shishaprizmayordamidayoruglikningspektrgaajralishi/malumot' exact component={Lab6SevenInfo} /> */}
          {/* 7-sinf */}
          {/* <Route path='/tekistezlanuvchanharakat' exact component={Lab7One} />
          <Route path='/tekistezlanuvchanharakat/malumot' exact component={Lab7OneInfo} />
          <Route path='/ishqalanishkoeffitsienti' exact component={Lab7Two} />
          <Route path='/ishqalanishkoeffitsienti/malumot' exact component={Lab7TwoInfo} />
          <Route path='/kinetikenergiya' exact component={Lab7Three} />
          <Route path='/kinetikenergiya/malumot' exact component={Lab7ThreeInfo} />
          <Route path='/mexanikish' exact component={Lab7Four} />
          <Route path='/mexanikish/malumot' exact component={Lab7FourInfo} />
          <Route path='/prujinabikrligi' exact component={Lab7Five} />
          <Route path='/prujinabikrligi/malumot' exact component={Lab7FiveInfo} /> */}
          {/* 8-sinf */}
          {/* <Route path='/tokkuchivakuchlanish' exact component={Lab8One} />
          <Route path='/tokkuchivakuchlanish/malumot' exact component={Lab8OneInfo} />
          <Route path='/omqonuni' exact component={Lab8Two} />
          <Route path='/omqonuni/malumot' exact component={Lab8TwoInfo} />
          <Route path='/utkazgichlarniketmaketvaparallelulash' exact component={Lab8Three} />
          <Route path='/utkazgichlarniketmaketvaparallelulash/malumot' exact component={Lab8ThreeInfo} />
          <Route path='/istemolchiningelektrquvvati' exact component={Lab8Four} />
          <Route path='/istemolchiningelektrquvvati/malumot' exact component={Lab8FourInfo} />
          <Route path='/engoddiyelektromagnitniyigishvauningishlashi' exact component={Lab8Five} />
          <Route path='/engoddiyelektromagnitniyigishvauningishlashi/malumot' exact component={Lab8FiveInfo} /> */}
          {/* 9-sinf */}
          {/* 10-sinf */}
          {/* 11-sinf */}
        </Switch>
      </Router>
    </>
  );
}