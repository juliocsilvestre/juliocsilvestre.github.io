import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || 'Contato via Portfolio');
    const body = encodeURIComponent(
      `Olá Julio,\n\nMeu nome é ${formData.name}.\n\n${formData.message}\n\nAtenciosamente,\n${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoLink = `mailto:jcss.silvestre@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    alert('Abrindo seu cliente de email... Se não abrir automaticamente, copie este email: jcss.silvestre@gmail.com');
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Vamos discutir seu projeto e ver como podemos trabalhar juntos para dar vida às suas ideias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-gradient rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Me mande uma mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seuemail@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Consulta sobre projeto"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Enviar mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-gradient rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Vamos nos conectar</h3>
              <p className="text-muted-foreground mb-8">
                Estou sempre interessado em novas oportunidades e colaborações.
                Sinta-se à vontade para entrar em contato através de qualquer um desses canais.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:jcss.silvestre@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">jcss.silvestre@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/juliocsilvestre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">Conecte-se comigo</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/juliocsilvestre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-muted-foreground">Veja meu código</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;