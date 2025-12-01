export default function Search({onKeyword}) {
    var timer
    const handleSearch = (e)=>{
        clearTimeout(timer);
        let penampung;
       
        timer = setTimeout(() => {
            penampung = e.target.value
            onKeyword(penampung)
        }, 500);
    }
    return (
        <>
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Semua Artikel</h1>
                <input
                    type="text"
                    id="searchInput"
                    onChange={handleSearch}
                    placeholder="Cari artikel..."
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>
        </>
    );
}
