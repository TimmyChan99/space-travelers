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
        <Route path="my-profile" element={<Profile />} />
        <Route path="/" element={<RokectsList />} />
        <Route path="missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;
