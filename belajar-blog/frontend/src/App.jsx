import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import BlogLayout from "./layouts/BlogLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BlogLayout/>}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog" element={<ArticlePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
