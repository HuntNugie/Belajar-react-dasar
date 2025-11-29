import {useEffect} from "react";
import ArticleCard from "../components/Article/ArticleCard";
import Search from "../components/Article/Search";
import {useState} from "react";
import axios from "axios";
import { LoadingArticleCard } from "../components/LoadingArticleCard";
export default function ArticlePage() {
    const [post, setPost] = useState([]);
    const [loading,setLoading] = useState(true);
    const api = import.meta.env.VITE_BACKEND_API;
    useEffect(() => {
        const request = async () => {
            const res = await axios.get(`${api}/blog/all`);
            const data = res.data;
            setPost(data);
            setLoading(false)
        };
        request();
    }, []);
    return (
        <div id="articles-page" className="space-y-8">
            <Search />
            {/* Articles Grid */}
            <div id="articlesGrid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (<LoadingArticleCard/>) : post.map((el) => (
                    <>
                        <ArticleCard data={el} />
                    </>
                ))}
            </div>
        </div>
    );
}
