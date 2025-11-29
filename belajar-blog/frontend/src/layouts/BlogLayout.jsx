import {Outlet} from "react-router-dom";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
export default function BlogLayout() {
    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-12">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
