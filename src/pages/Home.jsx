
import AboutUs from "../components/AboutUsCom";
import Education from "../components/EducationCom";
import Experience from "../components/ExperienceCom";
import Hero from "../components/HeroCom";
import TechnicalSkills from "../components/TechnicalSkills";
import ThemeToggle from "../components/ThemeToggle";
import ContactForm from "../components/FormCom";
import Projects from "../components/ProjectsCom";

export default function Home() {
    return (
        <div className="min-h-screen bg-primary bg-gradient-to-b from-primary-700 via-button to-orange-1200 overflow-x-hidden">
            
        {/* Hero Section */}
        <Hero />
        
        {/* About  */}
        <AboutUs />

        {/* Education @ Qualification  */}
        <Education />

        {/* Tehnical Skills */}
        <TechnicalSkills />

        {/* Experiences  */}
        <Experience />

        {/* Projects  */}
        <Projects />

        {/* Contact Form */}
        <ContactForm />
        {/* Footer  */}
        </div>
    );
}