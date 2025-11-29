import { formatTanggal } from "../../../utils/date";

export default function ArticleCard({data}) {
    return (
        <>
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                
                <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-blue-500 text-white px-3 py-1 rounded-full">{data.categories.nama_category}</span>
                        <span className="text-xs bg-gray-500 text-white px-3 py-1 rounded-full">{data.author.nama}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{data.judul}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        {data.body}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatTanggal(data.created_at)}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
