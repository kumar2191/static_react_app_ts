import React from 'react';
import './App.css';
// import Slider from './components/slider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderMegaMenu } from './components/nav/index'
import Home from './pages/Home/index'
import Footer from './components/Footer/index'
import ProductView from './components/productview/index'
import About from './components/about/index'
import ConstructionEquipments from './pages/ConstructionEquipments/index'
import BlockMaking from './pages/BlockMaking/index'
import BlockMechine from './pages/BlockMechine/index'
import Concretemixer from './pages/Concretemixer/index'
import Designertiles from './pages/Designertiles/index'
import WheelBarrow from './pages/WheelBarrow/index'

function App() {
  return (
    <div >
      {/* <Slider /> */}
      <BrowserRouter>
        <HeaderMegaMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductView />} />
          <Route path='/about' element={<About />} />
          <Route path='/ConstructionEquipments' element={<ConstructionEquipments />} />
          <Route path='/BlockMaking' element={<BlockMaking />} />
          <Route path='/BlockMachine' element={<BlockMechine />} />
          <Route path='/Concretemixer' element={<Concretemixer />} />
          <Route path='/Designertiles' element={<Designertiles />} />
          <Route path='/WheelBarrow' element={<WheelBarrow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
