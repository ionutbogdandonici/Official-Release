import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NavigationBar from "./pages/User/NavigationBar";
import NotFound from "./pages/Errors/NotFound";
import Post from "./pages/Components/Post";
import PostPage from "./pages/User/PostPage";
import CreatePost from "./pages/User/CreatePost";
import Profile from "./pages/User/Profile";
import UserContent from "./pages/User/UserContent";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/forgotPassword" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user/:id" element={<NavigationBar />}>
                    <Route path="createPost" element={<CreatePost />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="home" element={<UserContent />} />
                    <Route path="post/:id" element={<PostPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
