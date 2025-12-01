import {useEffect} from "react";
import ArticleCard from "../components/Article/ArticleCard";
import Search from "../components/Article/Search";
import {useState} from "react";
import axios from "axios";
import { LoadingArticleCard } from "../components/LoadingArticleCard";

export default function ArticlePage() {
    const [post, setPost] = useState([]);
    const [keyword,setKeyword] = useState("");
    const [loading,setLoading] = useState(true);
    const [ada,setAda] = useState(false);

    const api = import.meta.env.VITE_BACKEND_API;
    const handleKeyword = (value)=>{
        setKeyword(value)
        console.log(value)
    }
    useEffect(() => {
        const request = async () => {
            const res = await axios.get(`${api}/blog/all`);
            const data = res.data;
            setPost(data);
            setLoading(false)
        };
        request();
    }, []);

    useEffect(()=>{
        const request = async()=>{
            try {
            const res = await axios.get(`${api}/blog/search?s=${keyword}`)
            const data = res.data;
            setPost(data)
            setAda(false)
            } catch (error) {
                console.log(error)
                console.log(post)
                setAda(true);
            }
        }
        request();
    },[keyword])
    return (
        <div id="articles-page" className="space-y-8">
            <Search onKeyword={handleKeyword}/>
            <small>keyword : {keyword}</small>
            {/* Articles Grid */}
            <div id="articlesGrid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (<LoadingArticleCard/>) : ada ? (<h1>tidak ada data dengan keyword {keyword}</h1>) : post.map((el) => (
                    <>
                        <ArticleCard data={el} />
                    </>
                ))}
            </div>
        </div>
    );
}
