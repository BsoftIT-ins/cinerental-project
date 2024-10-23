import Sidebar from "./assets/Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import MovieList from "./assets/cine/MovieList";
import { useContext } from "react";
import { ThemeContext } from "./assets/context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>

      <Footer />
    </div>
  );
}
