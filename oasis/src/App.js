import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BestSellers from './components/BestSellers/BestSellers'
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Mobiles from './components/Home/Home';
import CustomService from './components/CustomService/CustomService';
import TodaysDeals from './components/TodaysDeals/TodaysDeals';
import Electronic from './components/Electronic/Electronic';
import Fashion from './components/Fashion/Fashion';
import Prime from './components/Prime/Prime';


function App() {
  return (
    <Router>

      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/bestSellers" Component={BestSellers} />
          <Route path="/book" Component={Book} />
          <Route path="/mobiles" Component={Mobiles} />
          <Route path="/customService" Component={CustomService} />
          <Route path="/todaysDeals" Component={TodaysDeals} />
          <Route path="/elec" Component={Electronic} />
          <Route path="/home" Component={Home} />?
          <Route path="/fashion" Component={Fashion} />
          <Route path="/prime" Component={Prime} />

        </Routes>
        

      </div>
    
    </Router>
  )
}

export default App;

// TODO: Take the routes below and incorporate them into the <Routes> bubble
//  <Routes>
//    <Route exact path="/bestSellers" Component={BestSellers} />
//    <Route path="/book" Component={Book} />
//    <Route path="/mobiles" Component={Mobiles} />
//    <Route path="/customService" Component={CustomService} />
//    <Route path="/todaysDeals" Component={TodaysDeals} />
//    <Route path="/elec" Component={Electronic} />
//    <Route path="/home" Component={Home} />?
//    <Route path="/fashion" Component={Fashion} />
//    <Route path="/prime" Component={Prime} />
//   </Routes>;