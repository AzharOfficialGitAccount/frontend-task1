import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode: React.FC = () => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";

    const [theme, setTheme] = React.useState(initialTheme);
    const element = document.documentElement;

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    }, [theme, element]);

    return (
        <>
            {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
            ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
            )}
        </>
    );
};

export default DarkMode;
