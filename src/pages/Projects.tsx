import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Zap, Database, Smartphone, Brain, Home, Layout } from "lucide-react";
import Navbar from "@/components/Navbar";

const Projects = () => {
  interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    links?: {
      demo?: string;
      github?: string;
      playstore?: string;
    };
    status: string;
    type: string;
    icon: any;
    note?: string;
    highlight?: boolean;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Pampiri — AI-Powered Receipt Scanner",
      description: "Enterprise-grade Intelligent Document Processing platform that turns physical receipts and invoices into structured, exportable digital data within seconds. Built for accountants, small businesses, and fleet managers who need to ditch manual data entry.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Dart", "FastAPI", "Python", "Firebase", "Redis", "Docker", "DeepSeek AI", "Google Cloud OCR", "GitHub Actions", "PayFast"],
      features: [
        "AI-powered 21-field data extraction (VAT, merchant, line items)",
        "Batch scanning — process a month of receipts in one session",
        "Export to Excel, CSV, Word and JSON",
        "PayFast subscription with tokenized recurring billing",
        "POPIA compliant — data on secure servers with access controls",
        "CI/CD pipeline via GitHub Actions"
      ],
      links: {
        demo: "https://mypampiri.co.za",
        playstore: "https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri"
      },
      status: "Live on Google Play",
      type: "Mobile + SaaS",
      icon: Brain,
      highlight: true
    },
    {
      id: 2,
      title: "Umoja Students Lease Management System",
      description: "Full-featured digital lease management platform for Umoja Student Accommodation. Students apply, sign, and submit lease agreements online. Admins manage applications, documents, and communicate via automated email — all with role-based access control.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Firestore", "Node.js", "Express", "Nodemailer"],
      features: [
        "Online lease application and digital signing",
        "Document upload and management portal",
        "Admin dashboard — approve, reject, communicate",
        "Automated email notifications via Nodemailer",
        "Role-based access control (student vs admin)",
        "Real-time application status tracking"
      ],
      links: {
        demo: "https://leasing.umojastudents.co.za"
      },
      status: "Live Client Site",
      type: "Web Application",
      icon: Home,
      highlight: true
    },
    {
      id: 3,
      title: "Telehealth Online Medical Consultation",
      description: "Remote medical consultation platform with integrated WebRTC video conferencing and automated vital sign capture. Patients photograph temperature and weight readings via webcam — OCR processes the data and stores it for doctors to review before the call.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "Django", "React", "HTML", "CSS", "JavaScript", "OCR", "WebRTC", "Firebase", "FastAPI"],
      features: [
        "WebRTC video conferencing integration",
        "OCR-based vital signs capture from webcam",
        "Automated medical data processing and storage",
        "Real-time doctor-patient communication",
        "Secure data transmission and storage"
      ],
      links: {
        demo: "https://fir-rtc-521a2.web.app/",
        github: "https://github.com/Bokang-Kgabale/Telehealth-Application"
      },
      status: "Deployed",
      type: "Web Application",
      icon: Globe,
      note: "Built during internship at Kinetix Engineering Solutions"
    },
    {
      id: 4,
      title: "NexMotion Technologies — Client Portfolio",
      description: "Frontend development and UX contributions across 10+ live production websites for clients in legal, hospitality, construction, education and nonprofit sectors — as part of the core NexMotion engineering team.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS", "WordPress", "Firebase", "Hostinger"],
      features: [
        "lesibagroup.co.za — government procurement company",
        "10+ live production sites across multiple sectors",
        "Responsive, mobile-first design across all projects",
        "Client-facing delivery and technical support",
        "Branding, UI/UX and full website development"
      ],
      links: {
        demo: "https://nexmotiontechnologies.co.za/projects.html"
      },
      status: "10+ Live Sites",
      type: "Web Development",
      icon: Layout
    },
    {
      id: 5,
      title: "WebRTC Video Call Application",
      description: "Standalone WebRTC video call application with FastAPI signaling backend, Node.js Express server for TURN credentials, and Firebase Firestore for real-time connection management. Embedded into the Telehealth platform above.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Python", "FastAPI", "WebRTC", "Firebase", "HTML", "CSS", "JavaScript"],
      features: [
        "Real-time peer-to-peer video communication",
        "FastAPI signaling server",
        "TURN server credentials management",
        "Firebase Firestore for connection state",
        "Cross-platform compatibility"
      ],
      links: {
        github: "https://github.com/Bokang-Kgabale/video-conferencing-app"
      },
      status: "Deployed on Render",
      type: "Web Service",
      icon: Zap
    },
    {
      id: 6,
      title: "Past Question Paper Mobile App",
      description: "Matric exam-prep app on Google Play. Provides South African matric students with subject-specific multiple-choice quizzes from past exam papers, organised by year and topic. Added new question types, revamped Firebase database architecture, and improved frontend UI during internship.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      technologies: ["Flutter", "Dart", "Firebase", "Google Play Store"],
      features: [
        "Subject-specific quiz categories by year and topic",
        "Multiple question type support",
        "Firebase backend with revamped database architecture",
        "Real-time progress tracking",
        "Published on Google Play Store"
      ],
      status: "Published on Google Play",
      type: "Mobile Application",
      icon: Smartphone,
      note: "Repository is private — Kinetix Engineering Solutions client project"
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Python": "border-accent/50 text-accent",
      "Django": "border-primary/50 text-primary",
      "React": "border-secondary/50 text-secondary",
      "React 18": "border-secondary/50 text-secondary",
      "TypeScript": "border-secondary/50 text-secondary",
      "JavaScript": "border-accent/50 text-accent",
      "Node.js": "border-primary/50 text-primary",
      "Flutter": "border-secondary/50 text-secondary",
      "Dart": "border-secondary/50 text-secondary",
      "Firebase": "border-accent/50 text-accent",
      "Firestore": "border-accent/50 text-accent",
      "WebRTC": "border-primary/50 text-primary",
      "FastAPI": "border-primary/50 text-primary",
      "HTML": "border-secondary/50 text-secondary",
      "CSS": "border-secondary/50 text-secondary",
      "OCR": "border-accent/50 text-accent",
      "Docker": "border-primary/50 text-primary",
      "Redis": "border-accent/50 text-accent",
      "DeepSeek AI": "border-primary/50 text-primary",
      "Tailwind CSS": "border-secondary/50 text-secondary",
      "GitHub Actions": "border-muted/50 text-muted-foreground",
    };
    return colors[tech] || "border-muted/50 text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-primary neon-text mb-6 glitch">
            &lt;PROJECTS/&gt;
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-grade applications, deployed products, and client work.
            Everything here is live, real, and built by me.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Text side */}
                  <div className={`space-y-5 animate-fade-in text-center lg:text-left ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                      <div className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                        {project.type}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${project.highlight ? 'border-accent text-accent' : 'border-secondary/50 text-secondary'}`}>
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground neon-text">
                      {project.title}
                    </h3>

                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 flex flex-col items-center lg:items-start">
                      <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider">Key Features</h4>
                      <ul className="space-y-1.5 text-left inline-block">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-accent uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className={`text-xs ${getTechColor(tech)} hover:bg-current/10 transition-all`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                      {project.links?.demo && (
                        <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            Live Site
                          </a>
                        </Button>
                      )}
                      {project.links?.playstore && (
                        <Button asChild className="bg-gradient-to-r from-accent/80 to-primary hover:opacity-80">
                          <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Smartphone className="w-4 h-4" />
                            Google Play
                          </a>
                        </Button>
                      )}
                      {project.links?.github && (
                        <Button variant="outline" asChild className="border-secondary text-secondary hover:bg-secondary/10">
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      )}
                      {project.note && (
                        <span className="text-xs text-muted-foreground italic flex items-center gap-2 self-center">
                          <Database className="w-3 h-3 flex-shrink-0" />
                          {project.note}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Image side */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative rounded-lg w-full h-[280px] sm:h-[360px] object-cover border border-primary/30 neon-border hover:border-primary/60 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20 cyber-grid">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary neon-text">
            &lt;TECHNOLOGY_ARSENAL/&gt;
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Globe, color: "primary", title: "Frontend", desc: "React, TypeScript, Tailwind CSS, HTML, CSS, JavaScript" },
              { icon: Database, color: "secondary", title: "Backend", desc: "Python, FastAPI, Django, Node.js/Express, Redis, Docker" },
              { icon: Smartphone, color: "accent", title: "Mobile", desc: "Flutter, Dart — deployed to Google Play Store" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className={`p-6 bg-card/50 border-${item.color}/30 backdrop-blur-sm hover:border-${item.color}/60 transition-all`}>
                  <div className="text-center space-y-4">
                    <div className={`w-14 h-14 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto border border-${item.color}/50`}>
                      <Icon className={`w-7 h-7 text-${item.color}`} />
                    </div>
                    <h3 className={`text-xl font-bold text-${item.color}`}>{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary neon-text">
            Interested in My Work?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can collaborate on your next project. I'm always excited
            to work on innovative solutions and cutting-edge technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-80 neon-border">
              <a href="mailto:bokangkgabale33889@gmail.com">
                Start a Conversation
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-secondary text-secondary hover:bg-secondary/10">
              <a href="https://github.com/Bokang-Kgabale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
