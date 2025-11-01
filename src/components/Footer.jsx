import { Github, Linkedin, Heart, ArrowUp, Mail, Code, Coffee } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/Leonnardo21",
            color: "hover:text-gray-300",
            hoverBg: "hover:bg-gray-800"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/leonardo-rodrigues-07a169172/",
            color: "hover:text-blue-400",
            hoverBg: "hover:bg-blue-900/20"
        },
        {
            name: "Email",
            icon: Mail,
            href: "mailto:leosouza1392@hotmail.com",
            color: "hover:text-red-400",
            hoverBg: "hover:bg-red-900/20"
        }
    ];

    const quickLinks = [
        { name: "Sobre", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projetos", id: "projects" },
        { name: "Contato", id: "contact" }
    ];

    return (
        <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Linha divisória */}
                <div className="border-t border-gray-700/50"></div>
                
                {/* Conteúdo principal */}
                <div className="max-w-6xl mx-auto px-4 pt-12 pb-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Coluna 1 - Sobre */}
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                                Leonardo Souza Rodrigues
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e 
                                experiências digitais memoráveis. Sempre em busca de novos desafios 
                                e oportunidades de crescimento.
                            </p>
                            <div className="flex items-center text-gray-400 text-sm">
                                <span>Feito com</span>
                                <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
                                <span>e muito</span>
                                <Coffee size={16} className="ml-2 text-amber-500" />
                            </div>
                        </div>

                        {/* Coluna 2 - Links Rápidos */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => scrollToSection(link.id)}
                                            className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block text-left cursor-pointer"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Coluna 3 - Redes Sociais */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Conecte-se</h4>
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center text-gray-400 ${social.color} transition-all duration-300 group`}
                                        >
                                            <div className={`p-2 rounded-lg mr-3 ${social.hoverBg} transition-all group-hover:scale-110`}>
                                                <IconComponent size={18} />
                                            </div>
                                            <span className="group-hover:translate-x-1 transform transition-transform">
                                                {social.name}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Linha divisória */}
                    <div className="border-t border-gray-700/50 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Copyright */}
                            <div className="flex flex-col md:flex-row items-center text-gray-400 text-sm mb-4 md:mb-0">
                                <p className="flex items-center">
                                    © 2025 Leonardo de Souza Rodrigues. Todos os direitos reservados.
                                </p>
                                <span className="hidden md:block mx-2">•</span>
                                <p className="flex items-center mt-2 md:mt-0">
                                    <Code size={14} className="mr-1" />
                                    Desenvolvido com React & Tailwind CSS
                                </p>
                            </div>

                            {/* Botão Voltar ao Topo */}
                            <button
                                onClick={scrollToTop}
                                className="group bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                aria-label="Voltar ao topo"
                            >
                                <ArrowUp size={20} className="group-hover:animate-bounce" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Barra de status/indicador */}
                <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 h-1">
                    <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
            </div>
        </footer>
    );
}