import { Github, Linkedin, Mail, Heart, Bug, BugOff } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-alt border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:jcss.silvestre@gmail.com"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover-lift group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juliocsilvestre/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover-lift group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/juliocsilvestre"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover-lift group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <BugOff className="w-4 h-4 text-primary animate-pulse hidden sm:inline-block" />
            <span>by Julio Silvestre Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;