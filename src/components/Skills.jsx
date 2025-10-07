import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  Zap, 
  Layout,
  Cpu,
  FileCode,
  Layers
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      color: "from-blue-500 to-blue-700",
      skills: [
        { name: "C#", icon: FileCode, level: 90, description: "Linguagem principal para desenvolvimento" },
        { name: ".NET Core", icon: Server, level: 85, description: "Framework para APIs robustas" },
        { name: "SQL Server", icon: Database, level: 80, description: "Banco de dados relacional" },
      ]
    },
    {
      title: "Frontend",
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "HTML5", icon: Globe, level: 95, description: "Estruturação semântica" },
        { name: "CSS3", icon: Palette, level: 95, description: "Estilização avançada" },
        { name: "JavaScript", icon: Zap, level: 70, description: "Interatividade e lógica" },
        { name: "React", icon: Cpu, level: 70, description: "Biblioteca para interfaces" },
      ]
    },
    {
      title: "Ferramentas",
      color: "from-green-500 to-green-700",
      skills: [
        { name: "Tailwind CSS", icon: Layout, level: 70, description: "Framework CSS utilitário" },
        { name: "Git", icon: Code, level: 75, description: "Controle de versão" },
      ]
    }
  ];

  const getLevelColor = (level) => {
    if (level >= 90) return "bg-gradient-to-r from-green-400 to-green-600";
    if (level >= 80) return "bg-gradient-to-r from-blue-400 to-blue-600";
    if (level >= 70) return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    return "bg-gradient-to-r from-red-400 to-red-600";
  };

  const getLevelText = (level) => {
    if (level >= 90) return "Avançado";
    if (level >= 80) return "Intermediário+";
    if (level >= 70) return "Intermediário";
    return "Básico";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <Layers size={400} className="absolute top-1/4 left-1/4 text-white animate-pulse" />
          <Code size={300} className="absolute bottom-1/4 right-1/4 text-white animate-pulse delay-1000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            Minhas Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e inovadoras
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-8">
                <div className={`bg-gradient-to-r ${category.color} w-1 h-8 rounded-full mr-4`}></div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex} 
                      className="group bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/30 hover:border-gray-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-gray-200 transition-colors">
                              {skill.name}
                            </h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(skill.level)} text-white font-medium`}>
                              {getLevelText(skill.level)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Sempre aprendendo e evoluindo com as tecnologias mais recentes
          </p>
          <div className="flex justify-center space-x-4">
            <span className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white px-4 py-2 rounded-full border border-blue-500/30">
              <Zap size={16} className="mr-2" />
              Em constante evolução
            </span>
            <span className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 text-white px-4 py-2 rounded-full border border-green-500/30">
              <Code size={16} className="mr-2" />
              Focado em qualidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}