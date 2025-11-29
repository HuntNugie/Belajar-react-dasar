import ArticleHome from "../components/Home/ArticleHome";
import Hero from "../components/Home/Hero";

export default function HomePage() {
    return (
        <>
            {/* Home Page */}
            <div id="home-page" className="space-y-12">
                {/* Hero Section */}
                <Hero/>
                {/* Featured Articles */}
                <ArticleHome/>
            </div>
        </>
    );
}
