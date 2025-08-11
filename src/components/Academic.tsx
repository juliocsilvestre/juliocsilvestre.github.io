import { Calendar, MapPin } from "lucide-react";

const Academic = () => {
  const university = [
    {
      "title": "Ciências da Computação",
      "university": "UNINASSAU",
      "location": "Remoto",
      "period": "2023 - Presente",
      "description": `Estou cursando Ciência da Computação, desenvolvendo competências técnicas em desenvolvimento de software, design de interfaces e garantia de qualidade.

      Participo da criação de layouts e protótipos de alta fidelidade, aplicando conceitos de usabilidade para proporcionar uma experiência de usuário moderna e intuitiva.

      Desenvolvo interfaces responsivas utilizando React e TypeScript, aplicando melhores práticas de programação front-end e mantendo a qualidade com testes automatizados end-to-end (E2E).

      Realizo acompanhamento das entregas para assegurar prazos e qualidade, além de colaborar em reuniões diárias para alinhamento do time, resolução de bloqueios e priorização de tarefas.

      Também adquiri experiência prática em manipulação e consulta de bancos de dados para atender às demandas das aplicações.`,
        "achievements": [
          "Participação em mais de 4 projetos práticos de desenvolvimento",
          "Aprendizado aprofundado em fluxos de trabalho modernos de desenvolvimento",
          "Construção de base sólida em tecnologias web e práticas de qualidade"
        ]
      },
    {
      title: "Administração de Empresas",
      university: "Centro Universitário UNIFAFIRE",
      location: "Recife-PE",
      period: "2015 - 2019",
      description: `Durante a graduação, adquiri conhecimentos sólidos em gestão empresarial, planejamento estratégico, finanças, marketing e recursos humanos.

      Realizei estudos de casos práticos e participei de projetos acadêmicos voltados para a análise e melhoria de processos organizacionais.

      Desenvolvi habilidades em análise de dados e tomada de decisão para suportar o crescimento sustentável das empresas.

      Participei de atividades extracurriculares e grupos de estudos focados em liderança e inovação empresarial, além de desenvolver capacidade para trabalho em equipe e comunicação eficaz.`,
        "achievements": [
          "Elaboração de plano de negócios para projeto acadêmico",
          "Análise financeira e projeções para empresa júnior",
          "Participação ativa em seminários e workshops sobre gestão e empreendedorismo"
        ]
    }
  ];

  return (
    <section id="academic" className="section-alt">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Formação <span className="text-gradient">Acadêmica </span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
          
          <div className="space-y-12">
            {university.map((exp, index) => (
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
                      <span className="font-medium">{exp.university}</span>
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

export default Academic;