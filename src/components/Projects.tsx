
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const headingRef = useScrollAnimation();
  const otherProjectsRef = useScrollAnimation({ threshold: 0.2 });
  
  const projects = [
  {
    title: "FriendO - Social Media Web",
    description:
      "FriendO is a dynamic social media platform designed to enhance user connectivity and engagement. With a seamless infinite scrolling experience, interactive features, and real-time communication, FriendO enables users to share, connect, and engage like never before. It's more than just a platform – it's a space to interact, express, and stay connected effortlessly! 🚀",
    tech: ["HTML", "CSS", "Django", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Anshum25/FriendO-",
    demo: "#", // Replace with actual demo URL if available
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Skiply - smart queue management platform :  (currrently in development)",
    description:
      "Skiply is a web app designed to help users save time by remotely booking spots in queues at service-based businesses such as banks, hospitals, restaurants, salons, and government offices. It provides real-time queue information based on user location and category preferences, allowing users to join queues virtually and receive notifications when their turn is approaching.",
    tech: ["Frontend: React, Tailwind CSS, React Router Backend: Node.js, Express.js Database: MongoDB Real-time: WebSockets for live queue updatesAuthentication: JWT-based user login/signup,"],
    github: "https://github.com/Anshum25/skiply",
    demo: "#", // Replace with actual demo URL if available
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "ChronoX - Luxury Watch E-commerce",
    description:
      "ChronoX is a premium e-commerce platform designed for showcasing and selling high-end luxury watches. The platform delivers a refined digital shopping experience, blending elegant aesthetics with advanced e-commerce functionality tailored to luxury branding.",
    tech: ["html", "CSS", "Javascript", "Bootstrap"],
    github: "https://github.com/Anshum25/ChronoX", // Add actual GitHub URL
    demo: "#",   // Add actual demo URL
    image:
      "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];


  const otherProjects = [
    {
      title: "Courier Management System",
      description: "A web application for managing courier services, tracking shipments, and generating reports.",
      tech: ["Python"]
    },
    {
      title: "Hotel Management System",
      description: "A desktop application for managing hotel bookings, customer information, and room availability.",
      tech: ["Python"]
    },
    {
      title: "Philo-Video Chat app",
      description: "A video chat application built with WebRTC for real-time communication.",
      tech: ["React", "WebRTC", "Node.js"]
    },
    {
      title: "Timeshare",
      description: " Time exchange platform for busy people.hire a person who can work whateveruser command",
      tech: ["React", "Node.js", "Express", "MongoDB"]
    }
  ];

  return (
    <section id="projects">
  <h2
    className="numbered-heading section-heading text-2xl sm:text-3xl font-bold mb-10 animated-slide-right"
    ref={headingRef as React.RefObject<HTMLHeadingElement>}
  >
    Things I've Built
  </h2>

  <div className="space-y-32 mb-20">
    {projects.map((project, index) => {
      const projectRef = useScrollAnimation({ threshold: 0.2 });
      return (
        <div
          key={index}
          className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : ''}`}
          ref={projectRef as React.RefObject<HTMLDivElement>}
        >
          <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6 md:row-start-1' : ''} animated-fade-in`}>
            <div className="relative h-72 md:h-96 rounded-md overflow-hidden group">
              <div className="absolute inset-0 bg-highlight/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-500"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 scale-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>

          <div className={`md:col-span-6 md:z-10 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 animated-slide-right' : 'md:col-start-6 animated-slide-left'}`}>
            <Card className={`glass-card ${index % 2 === 1 ? 'md:-ml-16' : 'md:-mr-16'} shadow-xl`}>
              <CardContent className="p-6">
                <p className="text-highlight font-mono mb-2"> Project</p>
                <h3 className="text-2xl font-semibold text-slate-light mb-4 hover:text-highlight transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate mb-6">{project.description}</p>

                <div className={`flex flex-wrap mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''} stagger`}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-3 mb-2 text-sm font-mono text-slate animated-fade-in"
                      style={{ transitionDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-light hover:text-highlight animated-slide-up"
                        style={{ transitionDelay: '200ms' }}
                      >
                        <Github size={20} />
                      </Button>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-light hover:text-highlight animated-slide-up"
                        style={{ transitionDelay: '300ms' }}
                      >
                        <ExternalLink size={20} />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      );
    })}
  </div>

  <h3
    className="text-2xl font-semibold text-slate-light mb-8 animated-slide-right"
    ref={otherProjectsRef as React.RefObject<HTMLHeadingElement>}
  >
    Other Noteworthy Projects
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
    {otherProjects.map((project, index) => {
      const cardRef = useScrollAnimation({ threshold: 0.1, rootMargin: '30px' });
      return (
        <div
          key={index}
          className="project-card hover:-translate-y-2 transition-transform duration-300 gradient-border animated-scale"
          ref={cardRef as React.RefObject<HTMLDivElement>}
        >
          <div className="flex justify-between items-start mb-5">
            <div className="p-2 rounded-full bg-navy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-highlight"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate hover:text-highlight w-8 h-8"
                  >
                    <Github size={18} />
                  </Button>
                </a>
              )}
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate hover:text-highlight w-8 h-8"
                  >
                    <ExternalLink size={18} />
                  </Button>
                </a>
              )}
            </div>
          </div>
          <h4 className="text-xl font-semibold text-slate-light mb-2 hover:text-highlight transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-slate text-sm mb-6">{project.description}</p>
          <div className="mt-auto stagger">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="tech-tag animated-fade-in"
                style={{ transitionDelay: `${techIndex * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      );
    })}
  </div>
</section>

  );
};

export default Projects;
