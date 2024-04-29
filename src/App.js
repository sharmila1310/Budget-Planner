import { useEffect } from "react";
import AppRoutes from "./routes";

function App() {
  useEffect(() => {
    const themeChangeValue = localStorage.getItem("theme-mode");
    if (themeChangeValue === "dark-theme") {
      document.getElementsByTagName("body")[0].classList.add("dark-theme");
      document.getElementsByTagName("body")[0].classList.remove("light-theme");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("dark-theme");
      document.getElementsByTagName("body")[0].classList.add("light-theme");
    }
  
  }, []);
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
