import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Sun,
  Moon,
  GraduationCap,
  Wrench,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-slate-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute bg-purple-300 rounded-full top-20 -left-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob"></div>
        <div className="absolute bg-yellow-300 rounded-full top-40 -right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-pink-300 rounded-full bottom-20 left-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute rounded-full bottom-40 right-20 w-72 h-72 bg-cyan-300 mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Dark mode toggle */}
      <div className="fixed z-50 top-5 right-5">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="transition-transform rounded-full shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </Button>
      </div>

      <main className="container max-w-4xl px-6 py-16 mx-auto md:py-20">
        <div className="space-y-20">
          {/* ===== HERO SECTION ===== */}
          <section className="space-y-6 text-center duration-700 animate-in fade-in slide-in-from-bottom-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-pink-200 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 dark:from-pink-500/20 dark:to-purple-500/20 backdrop-blur-sm dark:border-pink-800">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-600 dark:text-pink-400">
                DevOps Portfolio
              </span>
            </div>
            <h1 className="text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text animate-gradient">
              Deelaka Ransilu
            </h1>
            <p className="text-xl font-medium md:text-2xl text-slate-700 dark:text-slate-300">
              Aspiring DevOps Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">
                🐧 Linux
              </span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">
                🐳 Docker
              </span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">
                🔄 CI/CD
              </span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">
                ☁️ AWS
              </span>
            </div>
          </section>

          {/* ===== EDUCATION SECTION ===== */}
          <section className="duration-700 delay-100 animate-in fade-in slide-in-from-bottom-8">
            <Card className="overflow-hidden transition-all duration-300 shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 shadow-md rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      Education
                    </h2>
                    <p className="mt-2 text-lg text-slate-700 dark:text-slate-300">
                      BSc in Information Technology
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      University of Moratuwa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== STATUS / UNDER CONSTRUCTION SECTION ===== */}
          <section className="duration-700 delay-200 animate-in fade-in slide-in-from-bottom-8">
            <Card className="relative overflow-hidden shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900/50">
                      <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300">
                        🚧 Under construction
                      </h3>
                      <p className="text-amber-700 dark:text-amber-400">
                        More sections & projects coming soon
                      </p>
                    </div>
                  </div>
                  {/* Playful progress bar */}
                  <div className="w-full max-w-xs">
                    <div className="h-2 overflow-hidden rounded-full bg-amber-200 dark:bg-amber-800">
                      <div className="w-2/3 h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse"></div>
                    </div>
                    <p className="mt-1 text-xs text-amber-600 dark:text-amber-500">
                      Building in progress... 66%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== CONNECT SECTION ===== */}
          <section className="duration-700 delay-300 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400 bg-clip-text">
              Connect with Me
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* GitHub Card */}
              <a
                href="https://github.com/deelaka-ransilu"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="transition-all duration-300 transform shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 transition-colors rounded-full bg-slate-800 group-hover:bg-slate-700 dark:bg-slate-700">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                        GitHub
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        /deelaka-ransilu
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/deelaka-ransilu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="transition-all duration-300 transform shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 transition-colors bg-blue-600 rounded-full group-hover:bg-blue-700">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                        LinkedIn
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        in/deelaka-ransilu
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="pt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} Deelaka Ransilu — Built with React,
              Tailwind, shadcn/ui
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
