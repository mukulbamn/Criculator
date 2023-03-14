/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Navbar from "./navbar";
import Create from "./input";
import Home from './home';
import Score from './scorecard_ovr';
import Bat from './scorecard_bat';
import Bowl from './scorecard_bowl';
import Footer from './footer';
import Info from './team';
import About from './about';


function App() {
	return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/score" element={<Score/>} />
      <Route path="/bat" element={<Bat/>} />
      <Route path="bowl" element={<Bowl/>} />
      </Routes>
      <Footer/>
    </Router>

	);
}

export default App;
