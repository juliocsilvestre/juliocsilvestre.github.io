import { Code, Smartphone, Database, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      level: "Intermediário"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"],
      level: "Intermediário"
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "API Development", "RESTful Services"],
      level: "Em desenvolvimento"
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      level: "Em desenvolvimento"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary";
      case "Intermediário": return "bg-primary/80";
      case "Em desenvolvimento": return "bg-primary/60";
      default: return "bg-primary/40";
    }
  };

  return (
    <section id="skills" className="section-alt">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meus <span className="text-gradient">Conhecimentos</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover-lift flex flex-col min-h-[350px] justify-between"
              >
                {/* Parte de cima (ícone, título, selo) */}
                <div className="text-center mb-6 flex-shrink-0 h-[180px] flex flex-col justify-between">
                  <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-primary-foreground ${getLevelColor(
                      category.level
                    )}`}
                  >
                    {category.level}
                  </span>
                </div>
                
                <div className="space-y-2 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;