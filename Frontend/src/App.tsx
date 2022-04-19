import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

function App(){
  return (
    <div className="app">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/profile" element={ <Profile />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
