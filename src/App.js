import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
    <>
      <Header />
      <div className="App" />
      <Routes>
        <Route path="my-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
