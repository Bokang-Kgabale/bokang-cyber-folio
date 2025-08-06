import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin, Calendar, User, GraduationCap, Award, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const skills = [
    "C#", "Python", "JavaScript", "Dart", "Flutter", "React", ".NET", "Django",
    "HTML", "CSS", "Microsoft Office", "AGILE (SCRUM)", "CI/CD", "Github Actions",
    "MVVM", "MVC", "Computer Literacy", "Leadership", "Communication"
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
      status: "Graduating September 2025"
    },
    {
      year: "2022",
      degree: "Higher Certificate in Information Technology",
      institution: "Central University of Technology",
      location: "Bloemfontein, Free State",
      status: "Graduated"
    },
    {
      year: "2020",
      degree: "Matriculation",
      institution: "Kopanong Secondary School",
      location: "Bloemfontein, Free State",
      status: "Completed"
    }
  ];

  const experience = [
    {
      position: "Backend Lead",
      company: "NexMotion Technologies",
      period: "April 2025 - Present",
      location: "Tzaneen, Limpopo, South Africa (Remote)",
      type: "Full-time"
    },
    {
      position: "Junior Software Engineer Intern",
      company: "Kinetix Engineering Solutions PTY(LTD)",
      period: "Feb 2025 - Present",
      location: "Bloemfontein, Free State, South Africa (Hybrid)",
      type: "Internship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
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
                Resourceful, reliable software engineer with excellent time management and team-oriented skills. 
                Passionate about cross-platform development, fullstack engineering, and AI exploration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
                  <a href="mailto:bokangkgabale33889@gmail.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Me
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
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1502085671122-2d218cd434e6?auto=format&fit=crop&w=800&q=80" 
                alt="silhouette-of-man-standing-on-the-ground-by-Adam Neumann"
                className="relative rounded-lg w-full h-[400px] object-cover border border-primary/30 neon-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 px-6 cyber-grid">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary neon-text">
            &lt;PERSONAL_INFO/&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Identity</span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Born: 28 December 2002</p>
                <p>ID: 0212285544087</p>
                <p>Nationality: South African</p>
                <p>Gender: Male</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-secondary/30 backdrop-blur-sm hover:border-secondary/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-semibold text-secondary">Location</span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>33889 Toka Street</p>
                <p>Turflaagte, Bloemfontein</p>
                <p>Free State, 9323</p>
                <p>South Africa</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-accent/30 backdrop-blur-sm hover:border-accent/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-semibold text-accent">Contact</span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>082 543 4422</p>
                <p>067 993 4275</p>
                <p>bokangkgabale33889@gmail.com</p>
                <p>Learners' License</p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Languages</span>
              </div>
              <div className="space-y-1 text-sm">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{lang.name}:</span>
                    <Badge variant="outline" className="text-xs border-primary/50">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary neon-text">
            &lt;TECH_STACK/&gt;
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-sm py-2 px-4 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-accent neon-text">
            &lt;EDUCATION/&gt;
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card/50 border-accent/30 backdrop-blur-sm hover:border-accent/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/50">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <Badge variant="outline" className="border-accent/50 text-accent">{edu.year}</Badge>
                    </div>
                    <p className="text-accent font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-sm text-primary mt-1">{edu.status}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary neon-text">
            &lt;EXPERIENCE/&gt;
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.position}</h3>
                      <Badge variant="outline" className="border-primary/50 text-primary">{exp.type}</Badge>
                    </div>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                    <p className="text-sm text-secondary mt-1">{exp.period}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary neon-text">
            &lt;CERTIFICATES/&gt;
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Higher Certificate in Information Technology",
              "Computer Literacy",
              "Cisco Networking Academy Introduction to Cybersecurity"
            ].map((cert, index) => (
              <Card key={index} className="p-6 bg-card/50 border-secondary/30 backdrop-blur-sm hover:border-secondary/60 transition-all text-center">
                <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm text-foreground font-medium">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary neon-text">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to collaborate on ML/AI projects, full-stack initiatives, or open-source contributions? 
            Let's connect and create the future of technology.
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
