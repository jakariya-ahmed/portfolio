import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    
const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
    } else {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
    }
    }, []);

    const handleToggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    }

    return <button onClick={handleToggle}>
        {""}
        {isDarkMode ? (
         <Sun className="w-6 h-6 text-yellow-300"/>
        ) : (
            <Moon className="w-6 h-6 text-blue-900"/>
        )}
    
    </button> 


}

