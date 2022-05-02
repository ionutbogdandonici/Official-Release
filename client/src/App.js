import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from './pages/ForgotPassword';
import UserHomePage from "./pages/User/UserHomePage";
import NotFound from "./pages/Errors/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/login/forgotPassword" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/users/:id" element={<UserHomePage />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
}

export default App;
