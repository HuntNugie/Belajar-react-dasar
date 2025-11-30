import { Form } from "../components/AddBlog/Form";

export default function AddBlogPage() {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Tambah Blog Baru</h2>
                <Form/>
            </div>
        </div>
    );
}
