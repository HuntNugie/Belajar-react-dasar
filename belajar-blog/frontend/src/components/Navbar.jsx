import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-blue-400 hover:text-blue-300"
                        >
                            📝 MyBlog
                        </Link>
                        <div className="hidden md:flex gap-6">
                            <Link to="/"  className="text-gray-300 hover:text-white transition">
                                Home
                            </Link>
                            <Link to="/blog" className="text-gray-300 hover:text-white transition">
                                Artikel
                            </Link>
                            <Link to="/about" className="text-gray-300 hover:text-white transition">
                                Tentang
                            </Link>
                        </div>
                    </div>
                    <button className="md:hidden text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
               
            </nav>
        </>
    );
};
