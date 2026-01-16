import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Code2,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Globe,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Technical Support Executive",
      company: "myPOS Software Solutions (Pvt) Ltd",
      location: "Nugegoda, Western Province",
      period: "July 2025 - January 2026",
      highlights: [
        "Managed Windows Servers on Microsoft Azure for POS and ERP systems",
        "Configured Nginx web servers for load balancing and SSL/SSH certificates",
        "Performed SQL Server troubleshooting and query optimization",
        "Executed system migrations and deployed software patches to live environments",
        "Diagnosed critical downtime incidents as bridge between dev team and clients",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Social Media Manager",
      company: "Skin & Sapphire Hair Transplant",
      location: "Battaramulla, Western Province",
      period: "September 2023 - December 2023",
      highlights: [
        "Managed social media presence and content strategy",
        "Created engaging content for brand awareness",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const projects = [
    {
      title: "Weather App",
      description:
        "Real-time weather forecasting with 3-day predictions and integrated Poya calendar for Sri Lankan users",
      tech: ["React", "API Integration", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Student Management System",
      description:
        "Command-line application for managing student records and academic performance tracking",
      tech: ["Java", "CLI", "Data Structures"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio showcasing projects and skills with smooth animations",
      tech: ["React", "Tailwind CSS", "shadcn/ui"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Arduino OLED Animations",
      description:
        'Interactive eye animations on 0.96" OLED display with expressive movement patterns',
      tech: ["Arduino", "C++", "Hardware"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const skills = {
    "Backend & Database": [
      "Microsoft SQL Server",
      "Java",
      "Spring Boot",
      ".NET",
    ],
    Frontend: ["React", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    Infrastructure: ["Windows Server", "Azure", "Nginx", "System Monitoring"],
    "Tools & Others": [
      "Git",
      "SSL/SSH Certificates",
      "Arduino",
      "UI/UX Design",
    ],
  };

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "University of Moratuwa",
      period: "October 2023 - October 2026",
      status: "In Progress",
    },
    {
      degree: "Certificate In Applied Information Technology (CAIT)",
      institution: "Sri Lanka Telecom",
      period: "January 2020 - July 2020",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Deelaka.dev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-blue-400 font-semibold"
                      : "text-slate-400 hover:text-blue-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-slate-800/50 rounded-lg p-4">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "projects",
                "education",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
            👋 Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hi, I'm Deelaka Ransilu
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            BIT Undergraduate at University of Moratuwa
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            I blend code, design & creativity to build things that work. Always
            building. Always learning.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Code2 className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-slate-700 hover:bg-slate-800 hover:text-slate-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Piliyandala, Sri Lanka</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code2 className="text-blue-400" />
                </div>
                <h3 className="font-bold mb-2 text-slate-100">Developer</h3>
                <p className="text-slate-400 text-sm">
                  Building full-stack applications with modern technologies
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-purple-400" />
                </div>
                <h3 className="font-bold mb-2 text-slate-100">Tech Support</h3>
                <p className="text-slate-400 text-sm">
                  Managing cloud infrastructure and solving complex technical
                  issues
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-pink-400" />
                </div>
                <h3 className="font-bold mb-2 text-slate-100">Learner</h3>
                <p className="text-slate-400 text-sm">
                  Constantly exploring new technologies and best practices
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-slate-300 mt-8 text-lg max-w-2xl mx-auto">
            Currently pursuing a Bachelor of Information Technology at the
            University of Moratuwa, I combine my technical expertise in cloud
            infrastructure and databases with a passion for creating elegant,
            functional solutions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all"
              >
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-slate-400 text-sm">{exp.location}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-slate-600 text-slate-300 mt-2 md:mt-0"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-slate-300 text-sm flex items-start"
                      >
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="bg-slate-800/50 border-slate-700 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-slate-100">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-3 py-1 bg-slate-700/50 text-slate-200 border border-slate-600 hover:bg-slate-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 hover:bg-slate-700/50 group/btn"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400">{edu.institution}</p>
                      <p className="text-slate-400 text-sm">{edu.period}</p>
                    </div>
                    <Badge
                      className={`mt-2 md:mt-0 ${
                        edu.status === "In Progress"
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                          : "bg-green-500/10 border-green-500/30 text-green-400"
                      }`}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-100 mb-4">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-slate-800/30 border-slate-700">
                <CardContent className="p-4">
                  <p className="text-slate-300 text-sm">
                    Introduction to Web Design and Development
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700">
                <CardContent className="p-4">
                  <p className="text-slate-300 text-sm">
                    Learning Functional Programming with JavaScript ES6+
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:ransilu.deelaka@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
                >
                  <Mail className="text-blue-400" />
                  <span className="font-medium text-slate-200">
                    ransilu.deelaka@gmail.com
                  </span>
                </a>
                <a
                  href="tel:+94712026132"
                  className="flex items-center justify-center gap-3 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors border border-slate-600"
                >
                  <Phone className="text-purple-400" />
                  <span className="font-medium text-slate-200">
                    +94 71 202 6132
                  </span>
                </a>
                <div className="flex gap-4 justify-center mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:border-blue-500/50"
                  >
                    <a
                      href="https://github.com/deelaka-24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:border-blue-500/50"
                  >
                    <a
                      href="https://www.linkedin.com/in/deelaka-ransilu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="border-slate-700 hover:bg-slate-700 hover:text-slate-100 hover:border-purple-500/50"
                  >
                    <a
                      href="https://deelaka-24.github.io/personalportfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2026 Deelaka Ransilu. Built with React, shadcn/ui & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
