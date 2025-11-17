const Footer = () => {
  return (
    <footer className="mt-16 py-6 text-center border-t border-slate-200 dark:border-slate-700">
      <p className="text-slate-600 dark:text-slate-300 text-sm">
        © {new Date().getFullYear()} Coffee Ghor. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
