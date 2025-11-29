export default function ArticlePage() {
    return (
        <div id="articles-page" className="space-y-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Semua Artikel</h1>
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Cari artikel..."
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>
            {/* Articles Grid */}
            <div id="articlesGrid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <span className="text-3xl">🚀</span>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">Teknologi</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Memulai dengan Next.js 15</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Pelajari fitur-fitur terbaru di Next.js 15 dan bagaimana menggunakannya untuk membangun
                            aplikasi web yang lebih cepat dan efisien.
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>15 Nov 2025</span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
                {/* Article 2 */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                        <span className="text-3xl">💡</span>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-purple-500 text-white px-3 py-1 rounded-full">Tips</span>
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
                </div>
                {/* Article 3 */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <span className="text-3xl">🎨</span>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">Design</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Tailwind CSS Patterns</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Pelajari pola-pola desain yang berguna menggunakan Tailwind CSS untuk membuat interface yang
                            indah dan responsive.
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>10 Nov 2025</span>
                            <span>6 min read</span>
                        </div>
                    </div>
                </div>
                {/* Article 4 */}
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-3xl">⚡</span>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs bg-red-500 text-white px-3 py-1 rounded-full">Performance</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Optimasi Web Performance</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Strategi efektif untuk meningkatkan performa website Anda dan memberikan pengalaman pengguna
                            yang lebih baik.
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>8 Nov 2025</span>
                            <span>8 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
