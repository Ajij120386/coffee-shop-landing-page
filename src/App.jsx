import { useEffect } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [mode]);

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-4">
        <section id="hero"><Hero /></section>
        <section id="menu" className="py-16"><MenuSection /></section>
        <section id="about" className="py-16"><About /></section>
        <section id="testimonials" className="py-16"><Testimonials /></section>
        <section id="contact" className="py-16"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
