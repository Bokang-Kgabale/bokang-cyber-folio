import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MapPin, GraduationCap, Award, Briefcase, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import bokangImage from "../assets/DSC00909.jpg";
import resumePdf from "../assets/Bokang_Kgabale_Resume.pdf";

const Home = () => {
  const skills = [
    "Flutter", "React", "TypeScript", "Python", "FastAPI", "Node.js",
    "Django", "Dart", "Docker", "GitHub Actions", "Firebase", "Redis",
    "C#", "JavaScript", "HTML", "CSS", "Tailwind CSS", "AGILE (SCRUM)",
    "CI/CD", "MVVM", "MVC", "REST APIs", "Google Cloud", "DeepSeek AI"
  ];

  const languages = [
    { name: "English", level: "Excellent" },
    { name: "Setswana", level: "Excellent" },
    { name: "Sesotho", level: "Excellent" }
  ];

  const education = [
    {
      year: "2025",
      degree: "Diploma in Information Technology",
      institution: "Central University of Technology",
      location: "Bloemfontein, Free State",
      note: "Graduated September 2025"
    },
    {
      year: "2022",
      degree: "Higher Certificate in Information Technology",
      institution: "Central University of Technology",
      location: "Bloemfontein, Free State",
      note: "Graduated Cum Laude — 8/10 Distinctions"
    },
    {
      year: "2020",
      degree: "National Senior Certificate (Matric)",
      institution: "Kopanong Secondary School",
      location: "Bloemfontein, Free State",
      note: "Graduated"
    }
  ];

  const experience = [
    {
      position: "Full-Stack Software Engineer",
      company: "NexMotion Technologies",
      period: "Dec 2024 – Present",
      location: "Remote",
      type: "Full-time",
      highlights: "Shipped Pampiri (AI receipt scanner, live on Google Play). Contributed to 10+ live client websites across legal, hospitality, construction and nonprofit sectors."
    },
    {
      position: "IT Intern",
      company: "Kinetix Engineering Solutions (Funded by GISA)",
      period: "Nov 2024 – Nov 2025",
      location: "Bloemfontein, Free State (Hybrid)",
      type: "Internship",
      highlights: "Built full-stack Telehealth platform with WebRTC video conferencing and OCR vital sign capture. Added features to Flutter matric exam-prep app on Google Play."
    }
  ];

  const certificates = [
    { name: "Higher Certificate in IT — Cum Laude", issuer: "CUT", year: "2022" },
    { name: "Diploma in Information Technology", issuer: "CUT", year: "2025" },
    { name: "Full Stack Development", issuer: "FNB App Academy", year: "2025" },
    { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2024" },
    { name: "Certificate of Service — IT Intern", issuer: "GISA / MICT-SETA", year: "2025" },
    { name: "Computer Literacy", issuer: "CUT", year: "2022" },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-primary neon-text glitch">
                  BOKANG
                  <span className="block text-secondary">KGABALE</span>
                </h1>
                <div className="text-xl text-accent font-mono">
                  &gt; Full-Stack Engineer_
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I build and ship production-grade software — from AI-powered Flutter apps on Google Play
                to real-time telehealth platforms and client websites serving real businesses.
                Diploma in IT from CUT. Based in South Africa. Open to work.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
                  <a href="mailto:bokangkgabale33889@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent/10">
                  <a href={resumePdf} download="Bokang_Kgabale_Resume.pdf" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                  <a href="https://www.linkedin.com/in/bokang-kgabale-4a7a4b324" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary/10">
                  <a href="https://github.com/Bokang-Kgabale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
              <img
                src={bokangImage}
                alt="Bokang Kgabale - Full-Stack Engineer"
                className="relative rounded-lg w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover object-top border border-primary/30 neon-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-4 sm:px-6 cyber-grid">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "2+", label: "Years Building" },
              { value: "5+", label: "Projects Shipped" },
              { value: "10+", label: "Client Websites" },
              { value: "2", label: "Apps on Play Store" },
            ].map((stat, i) => (
              <Card key={i} className="p-4 bg-card/50 border-primary/30 backdrop-blur-sm text-center hover:border-primary/60 transition-all">
                <p className="text-3xl font-bold text-primary neon-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About / Location */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary neon-text">
            &lt;ABOUT_ME/&gt;
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-card/50 border-secondary/30 backdrop-blur-sm hover:border-secondary/60 transition-all text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-secondary">Location</span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Bloemfontein, Free State</p>
                <p>South Africa</p>
                <p className="text-primary mt-2">✓ Open to relocate &amp; remote</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Languages</span>
              </div>
              <div className="space-y-2 text-sm">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{lang.name}</span>
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary neon-text">
            &lt;TECH_STACK/&gt;
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary neon-text">
            &lt;EXPERIENCE/&gt;
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs">{exp.type}</Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <p className="text-sm text-secondary mt-1">{exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{exp.highlights}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20 cyber-grid">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-accent neon-text">
            &lt;EDUCATION/&gt;
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card/50 border-accent/30 backdrop-blur-sm hover:border-accent/60 transition-all text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/50">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <Badge variant="outline" className="border-accent/50 text-accent">{edu.year}</Badge>
                    </div>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-sm text-primary mt-1">{edu.note}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary neon-text">
            &lt;CERTIFICATES/&gt;
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-5 bg-card/50 border-secondary/30 backdrop-blur-sm hover:border-secondary/60 transition-all">
                <Award className="w-7 h-7 text-secondary mb-3" />
                <p className="text-sm text-foreground font-medium leading-snug">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-2">{cert.issuer} · {cert.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 cyber-grid">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary neon-text">
            Let's Build Something Real
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm open to full-time, contract, or freelance engineering roles — on-site, hybrid, or remote.
            If you're building something that matters, let's talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
              <a href="mailto:bokangkgabale33889@gmail.com">
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary/10">
              <a href="/projects">
                View My Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
