import { Routes, Route } from 'react-router-dom'
import Navbar from './components/shared/Navbar';
import SignUp from './components/auth/SignUp';
import Home from './components/shared/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    </>
  );
}

export default App;
