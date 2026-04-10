import { useState, useEffect } from "react";
import { 
  Github, Linkedin, Sun, Moon, 
  Code2, Sparkles, Music, Palette, 
  Rocket, Brain, Wrench, GraduationCap,
  Film, Guitar, Database, Server
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
    <div className="relative min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 overflow-x-hidden">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 dark:opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Dark mode toggle */}
      <div className="fixed z-50 top-5 right-5">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setDarkMode(!darkMode)}
          className="transition-transform rounded-full shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
        </Button>
      </div>

      <main className="container max-w-4xl px-6 py-16 mx-auto md:py-20">
        <div className="space-y-20">
          
          {/* ===== HERO SECTION ===== */}
          <section className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Developer in Transition</span>
            </div>
            <h1 className="text-5xl font-bold md:text-7xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Deelaka Ransilu
            </h1>
            <p className="text-xl font-medium md:text-2xl text-slate-700 dark:text-slate-300">
              Full‑Stack Developer · Creative Technologist
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">🚀 React · Next.js · Angular</span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">☕ Spring Boot · .NET · PHP</span>
              <span className="px-3 py-1 rounded-full bg-white/50 dark:bg-slate-800/50">🎨 Graphic Design · Video Editing</span>
            </div>
          </section>

          {/* ===== EDUCATION & DIRECTION ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <Card className="overflow-hidden transition-all duration-300 shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">🎓 Education & Direction</h2>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                      3rd‑year BIT (External) student at <span className="font-semibold">University of Moratuwa</span>
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      Learning by building, not memorizing. Structured visual notes (Obsidian/Notion).
                    </p>
                    <p className="mt-2 text-amber-600 dark:text-amber-400 text-sm">
                      📌 Currently preparing for IELTS · Transition phase → building final year project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* ===== TECH STATUS (REALITY) ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Card className="shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">💻 Tech Status (Current Reality)</h2>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  <span className="font-semibold">Not currently working</span> (recently resigned from 24x7 Retail Software Solutions)
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                    <p className="font-medium">Frontend</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">React · Angular · Next.js</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-700/50">
                    <p className="font-medium">Backend</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Spring Boot · .NET · PHP</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Real‑world exposure: APIs, Flutter apps, reporting systems. This is a <span className="text-amber-500 font-semibold">transition phase</span>, not a weakness.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* ===== CURRENT FOCUS ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Card className="shadow-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 border-indigo-200 dark:border-indigo-800">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-indigo-500" />
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">🚀 Current Focus</h2>
                </div>
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                  <li className="flex gap-2">✨ Learning: <span className="font-semibold">AI + data concepts, software engineering fundamentals</span></li>
                  <li className="flex gap-2">🔨 Building: <span className="font-semibold">Final Year Project</span> → Spring Boot + Next.js + REST API</li>
                  <li className="flex gap-2">📢 Personal brand + content: <span className="text-amber-500">Not started yet → big opportunity</span></li>
                </ul>
                <div className="mt-4 h-2 w-full bg-indigo-200 dark:bg-indigo-800 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse"></div>
                </div>
                <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">Transition phase: building public proof</p>
              </CardContent>
            </Card>
          </section>

          {/* ===== CREATIVE SIDE (UNTAPPED) ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
            <Card className="shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Palette className="w-6 h-6 text-pink-500" />
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">🎨 Creative Side (High Potential)</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20">
                    <p className="font-semibold">Experience</p>
                    <p className="text-sm">Graphic design · Social media management</p>
                  </div>
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20">
                    <p className="font-semibold">Currently managing</p>
                    <p className="text-sm">FB, IG, LinkedIn, TikTok</p>
                  </div>
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20">
                    <p className="font-semibold">Interests</p>
                    <p className="text-sm">Video editing · Tech content creation</p>
                  </div>
                  <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20">
                    <p className="font-semibold">Music</p>
                    <p className="text-sm">Guitar (sing & play) · Violin · Ukulele · Keyboard</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-amber-600 dark:text-amber-400">
                  ⚡ You already have the skills – just not activated strategically. This is your biggest opportunity.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* ===== BUILDER MINDSET ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Card className="shadow-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-6 h-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">🔧 Builder Mindset</h2>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Weather App V2</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Arduino OLED animations</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">Spring Boot + Next.js project</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Strong interest in mixing <span className="font-semibold">tech + creativity</span> – Arduino animations are unique.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* ===== CONNECT & SOCIAL ===== */}
          <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-600">
            <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400 bg-clip-text">
              Connect with Me
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <a href="https://github.com/deelaka-ransilu" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="transition-all duration-300 transform shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-full bg-slate-800 group-hover:bg-slate-700 dark:bg-slate-700">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">GitHub</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">/deelaka-ransilu</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
              <a href="https://www.linkedin.com/in/deelaka-ransilu/" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="transition-all duration-300 transform shadow-lg bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-3 rounded-full bg-blue-600 group-hover:bg-blue-700">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">LinkedIn</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">in/deelaka-ransilu</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="pt-12 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} Deelaka Ransilu — Built with React, Tailwind, shadcn/ui
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;