import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  // const [count, setCount] = useState(0);
  // Dark mode state
  const [theme, setTheme] = useState("light");

  // Update the <html> class based on the theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : ""
        } min-h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
