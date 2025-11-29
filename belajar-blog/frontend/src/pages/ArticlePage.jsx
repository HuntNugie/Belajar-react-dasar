import ArticleCard from "../components/Article/ArticleCard";
import Search from "../components/Article/Search";

export default function ArticlePage() {
    return (
        <div id="articles-page" className="space-y-8">
            <Search />
            {/* Articles Grid */}
            <div id="articlesGrid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Article 1 */}
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    );
}
