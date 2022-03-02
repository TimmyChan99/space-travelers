import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Missions from './components/missions/Missions';
import RokectsList from './components/rocketList/RocketsList';

function App() {
  return (
    <>
      <Header />
      <div className="App" />
      <Routes>
        <Route path="/space-travelers/my-profile" element={<Profile />} />
        <Route path="/space-travelers/" element={<RokectsList />} />
        <Route path="/space-travelers/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
