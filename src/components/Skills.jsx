import { Code2, Database, Globe, Server, Smartphone, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend",
      skills: ["Node.js", ".NET Core", "REST API"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "SQL Server", "MySQL", "Firestore"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Web",
      skills: ["SEO", "Performance", "Acessibilidade", "Responsive"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native", "Expo", "iOS", "Android", "Cross-platform"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Figma", "UI/UX", "Prototipação", "Design System", "Wireframes"],
      color: "from-pink-500 to-rose-500"
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border p-6 card-glow hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`relative px-3 py-1 text-sm bg-secondary rounded-full text-foreground transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:scale-105 hover:text-white overflow-hidden group/badge`}
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300`}></span><span className="relative z-10">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
