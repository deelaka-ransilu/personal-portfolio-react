import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Award, Moon, Sun } from "lucide-react";
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
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      {/* Dark mode toggle button */}
      <div className="fixed z-50 top-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </Button>
      </div>

      {/* Main content */}
      <main className="container max-w-4xl px-4 py-12 mx-auto md:py-20">
        <div className="space-y-10 duration-700 animate-in fade-in slide-in-from-bottom-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden transition-transform duration-300 rounded-full shadow-xl w-36 h-36 md:w-44 md:h-44 ring-4 ring-white dark:ring-slate-700 hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Deelaka Ransilu"
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Deelaka+Ransilu&background=0D8F81&color=fff&size=200";
                }}
              />
            </div>
          </div>

          {/* Name & Titles */}
          <div className="space-y-3 text-center">
            <h1 className="text-4xl font-bold text-transparent duration-700 md:text-5xl bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text animate-in fade-in slide-in-from-bottom-4">
              Deelaka Ransilu
            </h1>
            <div className="space-y-1">
              <p className="text-lg font-medium md:text-xl text-slate-700 dark:text-slate-300">
                Aspiring DevOps Engineer | Linux · Docker · CI/CD · AWS
              </p>
              <p className="text-base text-slate-600 dark:text-slate-400">
                BSc in Information Technology (University of Moratuwa) | AWS
                Certified Cloud Practitioner
              </p>
            </div>
          </div>

          {/* Short Bio */}
          <Card className="duration-700 delay-100 shadow-lg bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-8">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-center text-slate-700 dark:text-slate-300">
                Former Technical Support Executive with experience in cloud
                infrastructure and SQL Server optimization. Passionate about
                automation, CI/CD pipelines, and Linux administration. Currently
                expanding my DevOps skills while seeking Junior DevOps or Cloud
                Support Engineer roles.
              </p>
            </CardContent>
          </Card>

          {/* Key Links & Portfolio Awards */}
          <div className="grid grid-cols-1 gap-4 duration-700 delay-200 sm:grid-cols-2 animate-in fade-in slide-in-from-bottom-8">
            <Card className="transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl">
              <CardContent className="p-4">
                <h3 className="flex items-center gap-2 mb-3 font-semibold text-slate-800 dark:text-slate-200">
                  <Award className="w-5 h-5 text-amber-500" />
                  Portfolio & Awards
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://deelaka-ransilu.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm transition-colors text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  >
                    🏆 Live Portfolio →
                  </a>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ✨ AWS Cloud Practitioner Essentials
                    <br />
                    ✨ DevOps Foundations Certified
                    <br />✨ Linux Command Line Certified
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-xl">
              <CardContent className="p-4">
                <h3 className="mb-3 font-semibold text-slate-800 dark:text-slate-200">
                  Connect with Me
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a
                      href="https://github.com/deelaka-24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/deelaka-ransilu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a href="mailto:ransilu.deelaka@gmail.com">
                      <Mail className="w-4 h-4" /> Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="pt-8 text-sm text-center duration-700 delay-300 text-slate-500 dark:text-slate-500 animate-in fade-in">
            © {new Date().getFullYear()} Deelaka Ransilu — Built with React,
            Tailwind CSS & shadcn/ui
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
