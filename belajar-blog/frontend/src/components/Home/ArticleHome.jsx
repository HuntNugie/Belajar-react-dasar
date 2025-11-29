import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import ArticleCard from "../Article/ArticleCard";

export default function ArticleHome() {
    const [post, setPost] = useState([]);

    const api = import.meta.env.VITE_BACKEND_API;
    const limit = 3;
    useEffect(() => {
        const request = async () => {
            const res = await axios.get(`${api}/blog/query?limit=${limit}`);
            const data = res.data;
            setPost(data);
        };
        request();
    }, []);
    return (
        <>
            <section>
                <h2 className="text-3xl font-bold text-white mb-8">Artikel Terbaru</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Article Card 1 */}
                    {post.map((el,index) => {
                        return (
                            <>
                                <ArticleCard key={index} data={el} /> 
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
