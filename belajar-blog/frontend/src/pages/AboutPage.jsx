export default function AboutPage() {
    return (
        <div id="about-page" className="max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl">
                    👨‍💻
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">Tentang Saya</h1>
                <p className="text-gray-400 text-lg">Full-Stack Developer | Tech Enthusiast | Content Creator</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Siapa Saya?</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Saya adalah seorang developer berpengalaman yang passionate tentang membangun aplikasi web
                        modern dan berbagi pengetahuan dengan komunitas. Melalui blog ini, saya ingin membantu developer
                        lain belajar dan berkembang dalam bidang teknologi web.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Keahlian</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">React</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">Next.js</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">TypeScript</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">Tailwind CSS</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">Node.js</p>
                        </div>
                        <div className="bg-gray-700 p-4 rounded-lg text-center">
                            <p className="text-blue-400 font-bold">Database</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Kontak</h2>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="#"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            GitHub
                        </a>
                        <a
                            href="#"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
