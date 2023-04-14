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
import ServicesWOffer from './components/servicesWOffer/ServicesWOffer';
import ReadMoreSol from './components/readMoreSol/ReadMoreSol';
import AllPools from './components/allPools/AllPools';
import FreeQuotes from './components/freeQuotes/FreeQuotes';


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
        <Route path='services' element={<ServicesWOffer/>} />
        <Route path='/ReadMoreSol' element={<ReadMoreSol/>} />
        <Route path='/AllPools' element={<AllPools/>} />
        <Route path='/FreeQuotes' element={<FreeQuotes/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
