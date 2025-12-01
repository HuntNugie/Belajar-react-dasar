import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
export const Form = () => {
    const [form, setForm] = useState({
        author: "",
        title: "",
        category_id: "",
        body: "",
    });
    const [category, setCategory] = useState([]);

    const api = import.meta.env.VITE_BACKEND_API;

    useEffect(() => {
        // mengambil data category
        const request = async () => {
            const res = await axios.get(`${api}/category/all`);
            const data = res.data;
            setCategory(data);
        };
        request();
    }, []);
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
                        {category.map((el)=>{
                            return <option value={el.id} key={el.id}>{el.nama_category}</option>
                        })}
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
