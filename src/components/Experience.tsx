import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Grupo Moura.",
      location: "Recife - PE",
      period: "2025 - Presente",
      description: `Sou responsável pelo desenvolvimento front-end, criando novas telas e funcionalidades utilizando tecnologias como HTML, JavaScript, Django, React e TypeScript. 
      
      Implemento testes end-to-end para garantir a qualidade das entregas e realizo otimizações para melhorar o desempenho das aplicações. 
      
      Além disso, ofereço suporte técnico, solucionando chamados relacionados às aplicações da empresa. Participo ativamente das reuniões diárias para alinhamento das atividades com o time e apresento os resultados das sprints, evidenciando o progresso alcançado e os próximos passos. 
      
      Também realizo ajustes e consultas em bancos de dados PostgreSQL para apoiar as necessidades das aplicações.`,
      achievements: [
        "Melhoria no desempenhos das aplicações",
        "Liderança em decisões de arquitetura de frontend",
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "INIT1",
      location: "Remoto",
      period: "2022 - Presente",
      description: `Atuo na criação de layouts e protótipos de alta fidelidade, garantindo uma experiência do usuário moderna e intuitiva. Desenvolvo interfaces responsivas utilizando React e TypeScript, sempre seguindo as melhores práticas de desenvolvimento front-end. Sou responsável pela escrita e manutenção de testes automatizados end-to-end (E2E), assegurando a qualidade e estabilidade das entregas.  
      
      Faço o acompanhamento contínuo das entregas para garantir o cumprimento dos prazos e dos padrões de qualidade estabelecidos. 
      
      Participo ativamente das reuniões diárias, colaborando no alinhamento das atividades, identificação de bloqueios e definição de prioridades. Também possuo experiência em manipulação e consultas em banco de dados para suportar as necessidades das aplicações.`,
      achievements: [
        "Contribuiu para mais de 4 projetos de clientes",
        "Aprendeu fluxos de trabalho de desenvolvimento modernos",
        "Construiu uma base sólida em tecnologias web"
      ]
    },
    {
      title: "Front end & Mobile App Developer",
      company: "SafeCompany",
      location: "Remoto",
      period: "2023 - 2025",
      description: `Atuei no desenvolvimento de aplicações web e mobile (iOS e Android), sendo responsável pela publicação dos aplicativos em ambas as lojas.
      
      Contribuí para a criação de novas funcionalidades utilizando React para interfaces web responsivas e React Native no desenvolvimento mobile. Atuei de forma eficiente na resolução de bugs front-end, assegurando a estabilidade e alta performance das aplicações.
      
      Participei ativamente das reuniões diárias para alinhamento das atividades e do progresso do time, além de apresentar os resultados das sprints, evidenciando entregas e desafios superados.
      
      Trabalhei em colaboração direta com a equipe por meio de sessões de pair programming para garantir maior qualidade e eficiência no código.`,
      achievements: [
        "Entrega de 2 aplicativos mobile ( iOS & Android ) para produção",
        "Implementação de funções Offline",
        "Melhoria na performance das aplicações"
      ]
    }
  ];

  return (
    <section id="experience" className="section-alt">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Minha <span className="text-gradient">Experiência</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card-gradient rounded-xl p-6 hover-lift">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;