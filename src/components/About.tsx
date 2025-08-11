const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-center lg:text-left">
              Sou um desenvolvedor Frontend, com uma base sólida em tecnologias web modernas e uma crescente especialização em desenvolvimento mobile. 
              Atualmente, estou ampliando meus conhecimentos em tecnologias backend e gerenciamento de bancos de dados para me tornar um desenvolvedor full-stack completo.
          </p>
          
          <p className="text-center lg:text-left">
            Com um olhar atento para design e experiência do usuário, acredito em criar aplicações que não sejam apenas funcionais, mas também bonitas e intuitivas.
             Estou sempre aprendendo novas tecnologias e melhores práticas para entregar soluções inovadoras e alinhadas às necessidades de cada projeto.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">5+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projetos</h3>
              <p className="text-muted-foreground">Concluídos com sucesso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Anos</h3>
              <p className="text-muted-foreground">De experiência</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">∞</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprendizado</h3>
              <p className="text-muted-foreground">Nunca para</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;