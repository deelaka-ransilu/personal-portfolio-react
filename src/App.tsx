function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 transition-colors duration-300 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-2xl p-8 transition-all bg-white border border-gray-200 shadow-xl dark:bg-gray-900 rounded-3xl dark:border-gray-800 md:p-10">
        {/* Name */}
        <h1 className="text-4xl font-bold tracking-tight text-transparent md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text">
          Deelaka Ransilu
        </h1>

        {/* Subhead */}
        <div className="mt-2 text-xl font-medium text-gray-600 border-current md:text-2xl dark:text-gray-400 border-l-3">
          Full Stack Developer
        </div>

        {/* Bio */}
        <p className="mt-6 mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I'm Deelaka Ransilu, a 3rd-year BIT student at the University of
          Moratuwa. As a developer-in-transition, I blend my technical skills
          and artistic sensibilities to craft memorable digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/deelaka-ransilu/"
            className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
