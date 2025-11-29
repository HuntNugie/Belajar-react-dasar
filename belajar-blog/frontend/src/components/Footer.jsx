import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-800 border-t border-gray-700 mt-20">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">About</h3>
                            <p className="text-gray-400">
                                Blog tentang teknologi web, development tips, dan inspirasi coding.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Navigasi</h3>
                            <div className="space-y-2">
                                <Link to="/"  className="block text-gray-400 hover:text-white">
                                    Home
                                </Link>
                                <Link to="/blog" className="block text-gray-400 hover:text-white">
                                    Artikel
                                </Link>
                                <Link to="/about" className="block text-gray-400 hover:text-white">
                                    Tentang
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-4">Ikuti</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Twitter
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    GitHub
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
                        <p>© 2025 MyBlog. Semua hak dilindungi.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
