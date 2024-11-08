import { useState, useEffect } from "react";
import JobCardList from "./components/JobCardList";
import { FaArrowUp, FaSun, FaMoon } from "react-icons/fa"; // Icons for dark mode
import "./index.css";
import Footer from "./components/Footer";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center p-4">
        <h1
          className="text-4xl font-bold cursor-pointer"
          onClick={() => window.location.reload()}>
          1800+ HR databases and Company details 🧑‍💻
        </h1>

        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <JobCardList />
      {showButton && (
        <button
          className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
      <Footer />
    </div>
  );
}

export default App;
