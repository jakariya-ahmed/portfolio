import AboutUs from "../components/AboutUsCom";
import Education from "../components/EducationCom";
import Hero from "../components/HeroCom";
import TechnicalSkills from "../components/TechnicalSkills";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
    return (
        <div className="min-h-screen bg-primary bg-gradient-to-t from-primary-700 via-button to-orange-1200 overflow-x-hidden">
            
        {/* Hero Section */}
        <Hero />
        {/* About  */}

        <AboutUs />

        {/* Education @ Qualification  */}
        <Education />
        {/* Tehnical Skills */}
        <TechnicalSkills />

        {/* Footer  */}
        </div>
    );
}