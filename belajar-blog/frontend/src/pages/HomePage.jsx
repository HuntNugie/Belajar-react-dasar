export default function HomePage() {
    return (
        <>
            {/* Home Page */}
            <div id="home-page" className="space-y-12">
                {/* Hero Section */}
                <section className="text-center py-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Selamat Datang di Blog Saya</h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Tempat berbagi insights, tips, dan cerita menarik tentang teknologi dan pengembangan web modern.
                    </p>
                    <button
                      
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition"
                    >
                        Baca Artikel
                    </button>
                </section>
                {/* Featured Articles */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">Artikel Terbaru</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Article Card 1 */}
                        <article
                            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer"
                          
                        >
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">
                                        Teknologi
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Memulai dengan Next.js 15</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Pelajari fitur-fitur terbaru di Next.js 15 dan bagaimana menggunakannya untuk
                                    membangun aplikasi web yang lebih cepat dan efisien.
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>15 Nov 2025</span>
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </article>
                        {/* Article Card 2 */}
                        <article
                            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer"
                           
                        >
                            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                                <span className="text-4xl">💡</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs bg-purple-500 text-white px-3 py-1 rounded-full">
                                        Tips
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Best Practices React Hooks</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Discover practical tips and tricks untuk menggunakan React Hooks dengan benar dan
                                    menghindari common pitfalls.
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>12 Nov 2025</span>
                                    <span>7 min read</span>
                                </div>
                            </div>
                        </article>
                        {/* Article Card 3 */}
                        <article
                            className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer"
                          
                        >
                            <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                <span className="text-4xl">🎨</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">
                                        Design
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Tailwind CSS Patterns</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Pelajari pola-pola desain yang berguna menggunakan Tailwind CSS untuk membuat
                                    interface yang indah dan responsive.
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>10 Nov 2025</span>
                                    <span>6 min read</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </>
    );
}
