import {useEffect} from "react";
import ArticleCard from "../components/Article/ArticleCard";
import Search from "../components/Article/Search";
import {useState} from "react";
import axios from "axios";
export default function ArticlePage() {
    const [post, setPost] = useState([]);
    const api = import.meta.env.VITE_BACKEND_API;
    useEffect(() => {
        const request = async () => {
            const res = await axios.get(`${api}/blog/all`);
            const data = res.data;
            setPost(data);
        };
        request();
    }, []);
    return (
        <div id="articles-page" className="space-y-8">
            <Search />
            {/* Articles Grid */}
            <div id="articlesGrid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {post.map((el) => (
                    <>
                        <ArticleCard data={el} />
                    </>
                ))}
            </div>
        </div>
    );
}
