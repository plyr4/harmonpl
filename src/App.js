import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BubbyBed from './pages/BubbyBed';
import Colorado from './pages/Colorado';
import DunkPool from './pages/DunkPool';
import EvilPowerMaster from './pages/EvilPowerMaster';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projector from './pages/Projector';
import RecordPlayer from './pages/RecordPlayer';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projector" element={<Projector />} />
          <Route exact path="/evilpowermaster" element={<EvilPowerMaster />} />
          <Route exact path="/tunes" element={<RecordPlayer />} />
          <Route exact path="/dunkpool" element={<DunkPool />} />
          <Route exact path="/bubbybed" element={<BubbyBed />} />
          <Route exact path="/colorado" element={<Colorado />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
