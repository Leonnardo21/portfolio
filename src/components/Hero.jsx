/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { ChevronDown, MessageCircle, Briefcase } from 'lucide-react';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentWord, setCurrentWord] = useState(0);
    
    // Palavras para o efeito de digitação
    const words = ["Desenvolvedor", "Programador", "Problem Solver", "Tech Enthusiast"];
    
    // Animação de entrada
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Efeito de digitação para as palavras
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    // Função para scroll suave para seções
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Função para download de CV (exemplo)
    const downloadCV = () => {
        // Aqui você pode implementar o download do CV
        alert('Função de download do CV - adicione seu arquivo aqui!');
    };

    return (
        <section 
            id="home" 
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden"
        >
            {/* Efeito de partículas/pontos de fundo */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full animate-ping delay-500"></div>
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-red-400 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-300"></div>
            </div>

            {/* Gradiente overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Conteúdo principal */}
            <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
                {/* Saudação animada */}
                <div className="mb-4">
                    <span className="inline-block text-red-400 text-lg md:text-xl font-medium animate-bounce">
                        👋 Olá, eu sou
                    </span>
                </div>

                {/* Nome principal */}
                <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold py-5 mb-4 bg-gradient-to-r from-white via-gray-100 to-red-200 bg-clip-text text-transparent">
                    Leonardo de Souza Rodrigues
                </h1>

                {/* Efeito de digitação */}
                <div className="mb-6 h-12 md:h-16 flex items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-semibold text-red-400">
                        <span className="inline-block min-w-0">
                            {words[currentWord]}
                            <span className="animate-pulse">|</span>
                        </span>
                    </h2>
                </div>

                {/* Descrição */}
                <p className={`text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    Transformando <span className="text-red-400 font-semibold">ideias</span> em código e 
                    código em <span className="text-red-400 font-semibold">soluções</span> inovadoras
                </p>

                {/* Botões de ação */}
                <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                    <button 
                        onClick={() => scrollToSection('projects')}
                        className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-600/25 flex items-center justify-center gap-2 font-semibold"
                    >
                        <Briefcase size={20} />
                        Ver Projetos
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <button 
                        onClick={() => scrollToSection('contact')}
                        className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 font-semibold"
                    >
                        <MessageCircle size={20} />
                        Entre em Contato
                    </button>

                    {/* <button 
                        onClick={downloadCV}
                        className="group border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-400/25 flex items-center justify-center gap-2 font-semibold"
                    >
                        <Download size={20} />
                        Download CV
                    </button> */}
                </div>                
            </div>

            {/* Indicador de scroll */}
            <button
                onClick={() => scrollToSection('about')}
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-red-400 transition-all duration-300 animate-bounce ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Scroll para baixo</span>
                    <ChevronDown size={24} />
                </div>
            </button>
        </section>
    );
}