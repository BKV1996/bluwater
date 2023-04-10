import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Vision_Mission from './components/vision_Mission/Vision_Mission';
import ProjectMC from './components/projectMC/ProjectMC';
import TPoolConst from './components/tPoolConst/TPoolConst';
import WaterTMng from './components/waterTMng/WaterTMng';
import WaterProofing from './components/waterProofing/WaterProofing';
import GlassMTiles from './components/glassMTiles/GlassMTiles';
import WaterFeatureSpa from './components/waterFeatureSpa/WaterFeatureSpa';
import Gallery from './components/gallery/Gallery';
import Enquiry from './components/enquiry/Enquiry';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/visionMission' element={<Vision_Mission/>} />
        <Route path='/pmc' element={<ProjectMC/>} />
        <Route path='/TPoolConst' element={<TPoolConst/>} />
        <Route path='/WaterTMng' element={<WaterTMng/>} />
        <Route path='/WaterProofing' element={<WaterProofing/>} />
        <Route path='/GlassMTiles' element={<GlassMTiles/>} />
        <Route path='/WaterFeatureSpa' element={<WaterFeatureSpa/>} />
        <Route path='/Gallery' element={<Gallery/>} />
        <Route path='/Enquiry' element={<Enquiry/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
