export default function Hero() {
    return (
        <>
            <section className="text-center py-20">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Selamat Datang di Blog Saya</h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Tempat berbagi insights, tips, dan cerita menarik tentang teknologi dan pengembangan web modern.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition">
                    Baca Artikel
                </button>
            </section>
        </>
    );
}
