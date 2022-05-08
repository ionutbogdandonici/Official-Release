import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/User/HomePage";
import NotFound from "./pages/Errors/NotFound";
import Post from "./pages/Components/Post";
import CreatePost from "./pages/User/CreatePost";
import Profile from "./pages/User/Profile";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/forgotPassword" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/:id" element={<HomePage />}>
                    <Route path="createPost" element={<CreatePost />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
                <Route path="/test/prototype" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
