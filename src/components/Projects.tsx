import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dogs",
      description: "Criação da aplicação Dogs, uma rede social para cachorros.",
      image: "https://dogsapi.origamid.dev/wp-content/uploads/2020/07/charles-deluvio-Mv9hjnEUHR4-unsplash-1-1000x1000.jpg",
      technologies: ["React", "React Router", "TypeScript", "Victory"],
      githubUrl: "https://github.com/juliocsilvestre/dogs-origamid",
      liveUrl: "https://dogs-origamid-lemon.vercel.app/"
    },
    {
      title: "Task Management App",
      description: "Um aplicativo de gerenciamento de tarefas colaborativo com atualizações em tempo real, recursos de colaboração em equipe.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["React", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/juliocsilvestre/propig-list",
      liveUrl: "https://propig-list.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "Um site de portfólio responsivo que exibe princípios de design modernos e animações suaves, construído com React e Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=entropy&auto=format",
      technologies: ["React", "Tailwind CSS", "React Router Dom", "Shadcn UI"],
      githubUrl: "https://github.com/juliocsilvestre/juliocsilvestre.github.io",
      liveUrl: "https://juliocsilvestre.github.io/"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Projetos em  <span className="text-gradient">Destaque</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-gradient rounded-xl overflow-hidden hover-lift flex flex-col h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 flex items-center justify-center gap-2" onClick={() => window.open(project.githubUrl, "_blank")}>
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 flex items-center justify-center gap-2" onClick={() => window.open(project.liveUrl, "_blank")}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;