import AboutCard from "../components/About/AboutCard";
import ProfileCard from "../components/About/ProfileCard";

export default function AboutPage() {
    return (
        <div id="about-page" className="max-w-3xl mx-auto">
            <ProfileCard />
            <AboutCard />
        </div>
    );
}
