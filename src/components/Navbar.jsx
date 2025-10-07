import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectar scroll para alterar aparência do navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detectar seção ativa baseada no scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fechar menu mobile quando clicar em um link
    const handleLinkClick = (sectionId) => {
        setIsMenuOpen(false);
        setActiveSection(sectionId);
        
        // Scroll suave para a seção
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Fechar menu mobile quando clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('header')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Links de navegação
    const navLinks = [
        { id: 'home', label: 'Início' },
        { id: 'about', label: 'Sobre' },
        { id: 'projects', label: 'Projetos' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'contact', label: 'Contato' }
    ];

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'backdrop-blur-lg bg-black/30 shadow-lg' 
                    : 'backdrop-blur-md bg-white/10'
            } border-b border-white/20`}
        >
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <button
                        onClick={() => handleLinkClick('home')}
                        className="text-2xl font-bold text-white hover:text-red-400 transition-colors cursor-pointer"
                    >
                        Leonardo | Portfólio
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`relative text-white transition-all duration-300 hover:text-red-400 cursor-pointer ${
                                    activeSection === link.id ? 'text-red-400' : ''
                                }`}
                            >
                                {link.label}
                                {/* Indicador de seção ativa */}
                                {activeSection === link.id && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-400 rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Menu Mobile Button */}
                    <button 
                        className="md:hidden text-white hover:text-red-400 transition-colors p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <nav className="pt-4 pb-2 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleLinkClick(link.id)}
                                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                    activeSection === link.id 
                                        ? 'text-red-400 bg-white/10' 
                                        : 'text-white hover:text-red-400 hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}