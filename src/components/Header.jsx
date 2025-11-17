import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import * as Icons from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const [open, setOpen] = useState(false);

  const handleNavClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">☕ Coffee Ghor</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm hover:text-amber-600 dark:hover:text-amber-400 transition"
            >
              {link.label}
            </button>
          ))}

          {/* Favorites */}
          <div className="flex items-center gap-1">
            <Icons.Heart className="w-4 h-4 fill-amber-500/80 stroke-amber-700" />
            <span>{favoritesCount}</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="ml-2 p-2 rounded-full border border-slate-300 dark:border-slate-700"
          >
            {mode === "light" ? <Icons.Moon size={16} /> : <Icons.Sun size={16} />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <Icons.Heart className="w-4 h-4 fill-amber-500/80 stroke-amber-700" />
          <span>{favoritesCount}</span>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full border border-slate-300 dark:border-slate-700"
          >
            {mode === "light" ? <Icons.Moon size={16} /> : <Icons.Sun size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {open ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 py-3 flex flex-col gap-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm hover:text-amber-600 dark:hover:text-amber-400"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
