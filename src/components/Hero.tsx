import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Curriculo_Julio_Silvestre.pdf';
    link.download = 'Curriculo_Julio_Silvestre.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative pt-20 lg:pt-0">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4">
        {/* Profile Photo */}
        <div className="animate-bounce-in">
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src={profilePhoto} 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Frontend{" "}
            <span className="text-gradient">Developer</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
             Desenvolvo soluções digitais inovadoras e eficientes, com foco em experiências mobile e web intuitivas e funcionais.  
              Sou movido pela busca constante por aprendizado e pela entrega de resultados de alta qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="w-5 h-5" />
              Vamos conversar
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="gap-2"
              onClick={downloadCV}
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;