import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserHomePage from "./pages/User/UserHomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users/:id" element={<UserHomePage />} />
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
        </Router>
    );
}

export default App;
