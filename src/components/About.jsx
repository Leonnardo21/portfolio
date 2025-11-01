/* eslint-disable no-unused-vars */
import { Github, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Profile from "../assets/profile.png";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const sectionRef = useRef(null);

    // Intersection Observer para animações
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="about" 
            className="py-20 lg:py-32 bg-gray-800 relative overflow-hidden"
        >
            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-400 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Título da seção */}
                <div className={`text-center mb-16 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Sobre <span className="text-red-400">Mim</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-400 mx-auto rounded-full"></div>
                </div>

                {/* Conteúdo principal */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Coluna de texto */}
                    <div className={`space-y-6 transition-all duration-1000 delay-200 text-center lg:text-left ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        {/* Introdução */}
                        <div className="space-y-4">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Olá! Sou um <span className="text-red-400 font-semibold">desenvolvedor apaixonado por tecnologia</span>, 
                                com foco em criar soluções inovadoras e eficientes. Tenho experiência no 
                                <span className="text-white font-medium"> desenvolvimento full-stack</span>, trabalhando com 
                                tecnologias modernas como React, .NET Core e SQL Server.
                            </p>
                            
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Sempre busco aprimorar minhas habilidades e me manter atualizado com as últimas 
                                tendências do mercado. Acredito que a programação é uma 
                                <span className="text-red-400 font-semibold"> forma de arte</span> que permite 
                                transformar ideias complexas em soluções simples e elegantes.
                            </p>
                        </div>

                        {/* Links sociais e ações */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com/leonnardo21" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar meu perfil no GitHub"
                                    className="group p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <Github size={24} className="text-white group-hover:text-red-400 transition-colors" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/leonardo-rodrigues-07a169172/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar meu perfil no LinkedIn"
                                    className="group p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <Linkedin size={24} className="text-white group-hover:text-red-400 transition-colors" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/leonnardo.dev21/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visitar meu perfil no Instagram"
                                    className="group p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    <Instagram size={24} className="text-white group-hover:text-red-400 transition-colors" />
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    {/* Coluna da imagem */}
                    <div className={`flex justify-center transition-all duration-1000 delay-400 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
                        <div className="relative group">
                            {/* Container da imagem com efeitos */}
                            <div 
                                className={`relative w-80 h-80 rounded-2xl overflow-hidden transition-all duration-500 ${
                                    isImageHovered ? 'transform scale-105' : ''
                                }`}
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                            >
                                {/* Gradiente de fundo */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-gray-800"></div>
                                
                                {/* Overlay com padrão */}
                                <div className="absolute inset-0 bg-black/20"></div>
                                
                                {/* Placeholder da imagem */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    {/* <User size={120} className="text-white/80" /> */}
                                    <img src={Profile}/>
                                </div>

                                {/* Overlay hover */}
                                <div className={`absolute inset-0 bg-red-600/20 transition-opacity duration-300 ${
                                    isImageHovered ? 'opacity-100' : 'opacity-0'
                                }`}></div>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-red-400 rounded-2xl -z-10 group-hover:border-red-300 transition-colors"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-600/20 rounded-2xl -z-10 group-hover:bg-red-600/30 transition-colors"></div>
                            
                            {/* Badge flutuante */}
                            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                                👨‍💻 Dev
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}