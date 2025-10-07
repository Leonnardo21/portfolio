import { ExternalLink, Globe, Server, Github } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "ProdManager API",
            description: "API robusta para gerenciamento completo de estoque com autenticação JWT, controle de usuários e relatórios avançados.",
            technologies: ['C#', ".NET Core", "SQL Server", "JWT"],
            repo: "https://github.com/Leonnardo21/ProdManagerAPI",
            demo: "#",
            icon: Server,
            category: "Backend",
            status: "Concluído"
        },
        {
            title: "Café Dourado LP",
            description: "Landing page moderna e responsiva para cafeteria com animações suaves, formulário de contato e integração com redes sociais.",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            repo: "https://github.com/Leonnardo21/cafe-dourado-landing-page",
            demo: "https://cafe-dourado-landing-page.vercel.app/",
            icon: Globe,
            category: "Frontend",
            status: "Ativo"
        },
        {
            title: "Busca CEP",
            description: "Aplicação React para consulta de CEP com histórico de pesquisas, interface intuitiva e validação em tempo real.",
            technologies: ['React', "Vite", "Tailwind CSS"],
            repo: "https://github.com/Leonnardo21/busca-cep",
            demo: "https://busca-cep-jade.vercel.app/",
            icon: Globe,
            category: "Web App",
            status: "Ativo"
        },
        {
            title: "Consulta Clima",
            description: "Este é um aplicativo de consulta de clima desenvolvido em React. Ele permite que os usuários busquem informações meteorológicas de diferentes cidades utilizando a API do WeatherAPI.",
            technologies: ['React', "Vite", "Tailwind CSS"],
            repo: "https://github.com/Leonnardo21/Weather-App",
            demo: "https://weather-app-three-pied-tjjh1vl8vg.vercel.app/",
            icon: Globe,
            category: "Web App",
            status: "Ativo"
        },
        {
            title: "EC Assessoria Acadêmica",
            description: "Landing Page para um empresa de Assessoria Acadêmica",
            technologies: ['React', "Vite", "Tailwind CSS"],
            repo: "https://github.com/Leonnardo21/ec-assessoria-academica-lp",
            demo: "https://ecassessoriaacademica.com.br/",
            icon: Globe,
            category: "Frontend",
            status: "Ativo"
        },
        {
            title: "Checklist App",
            description: "É uma aplicação simples e intuitiva para gerenciamento de tarefas, com autenticação, persistência de dados em tempo real e uma interface moderna.",
            technologies: ['React', "Vite", "Tailwind CSS"],
            repo: "https://github.com/Leonnardo21/todo-firebase",
            demo: "#",
            icon: Globe,
            category: "Web App",
            status: "Concluído"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Em produção":
                return "bg-green-500";
            case "Concluído":
                return "bg-blue-500";
            case "Ativo":
                return "bg-purple-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
                        Meus Projetos
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Uma seleção dos meus trabalhos mais recentes, desenvolvidos com tecnologias modernas e foco na experiência do usuário.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <div 
                                key={index} 
                                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/20"
                            >
                                {/* Status badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`${getStatusColor(project.status)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Ícone e categoria */}
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-500/20 p-3 rounded-lg mr-3 group-hover:bg-red-500/30 transition-colors">
                                        <IconComponent size={24} className="text-red-400" />
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium">{project.category}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex} 
                                            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-medium hover:from-red-500 hover:to-red-600 transition-all cursor-default shadow-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Links */}
                                <div className="flex space-x-4">
                                    <a 
                                        href={project.repo} 
                                        target="_blank"
                                        className="group/link flex items-center text-gray-300 hover:text-white transition-colors bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg"
                                    >
                                        <Github size={18} className="mr-2 group-hover/link:rotate-12 transition-transform" />
                                        <span className="font-medium">Código</span>
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        target="_blank"
                                        className="group/link flex items-center text-gray-300 hover:text-white transition-colors bg-red-600/20 hover:bg-red-600/30 px-4 py-2 rounded-lg border border-red-600/30"
                                    >
                                        <ExternalLink size={18} className="mr-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        <span className="font-medium">Demo</span>
                                    </a>
                                </div>

                                {/* Efeito de hover decorativo */}
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}