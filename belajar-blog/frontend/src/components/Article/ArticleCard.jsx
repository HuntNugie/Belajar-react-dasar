export default function ArticleCard() {
    return (
        <>
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
                        Pelajari fitur-fitur terbaru di Next.js 15 dan bagaimana menggunakannya untuk membangun aplikasi
                        web yang lebih cepat dan efisien.
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>15 Nov 2025</span>
                        <span>5 min read</span>
                    </div>
                </div>
            </div>
        </>
    );
}
