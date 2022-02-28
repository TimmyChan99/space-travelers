import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Rocket from './components/rocket/Rocket';

function App() {
  return (
    <>
      <Header />
      <div className="App" />
      <Routes>
        <Route path="my-profile" element={<Profile />} />
        <Route path="rockets" element={<Rocket />} />
      </Routes>
    </>
  );
}

export default App;
