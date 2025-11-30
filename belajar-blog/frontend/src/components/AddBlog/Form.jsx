export const Form = () => {
    return (
        <>
            <form className="space-y-5">
                {/* Nama Author */}
                <div>
                    <label className="block text-gray-300 mb-1">Nama Author</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Misalnya: Nugie"
                    />
                </div>
                {/* Judul Post */}
                <div>
                    <label className="block text-gray-300 mb-1">Judul Post</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Masukkan judul posts"
                    />
                </div>
                {/* Category Dropdown */}
                <div>
                    <label className="block text-gray-300 mb-1">Kategori</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white appearance-none focus:ring-2 focus:ring-blue-500 outline-none">
                        <option value="">Pilih kategori</option>
                        <option value="teknologi">Teknologi</option>
                        <option value="pendidikan">Pendidikan</option>
                        <option value="hiburan">Hiburan</option>
                    </select>
                </div>
                {/* Body Post */}
                <div>
                    <label className="block text-gray-300 mb-1">Body Posts</label>
                    <textarea
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                        placeholder="Tulis isi postingan di sini…"
                        defaultValue={""}
                    />
                </div>
                {/* Tombol Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Simpan Postingan
                </button>
            </form>
        </>
    );
};
