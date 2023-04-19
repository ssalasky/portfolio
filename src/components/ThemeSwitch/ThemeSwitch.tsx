const ThemeSwitch = () => {
  const toggleMode = () => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemDarkMode = darkMediaQuery.matches;
    const isDarkMode = document.documentElement.classList.toggle('dark');

    isDarkMode === systemDarkMode
      ? delete window.localStorage.isDarkMode
      : (window.localStorage.isDarkMode = isDarkMode);
  };

  return (
    <button
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      Dark Mode
    </button>
  );
};

export default ThemeSwitch;
