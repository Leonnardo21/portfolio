export default function Projects(){
    return(
        <section id="projects" className="p-8 bg-white max-w-5xl mx-auto shadow-lg rounded-lg mt-8">
            <h3 className="text-3xl font-bold">Projetos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[{
                title: "ConsultApp Landing Page",
                description: "Demonstração de um aplicativo para agendamento de consultas.",
                technologies: "HTML, CSS"
            }, {
                title: "Consulta Clima",
                description: "App para mostrar dados sobre o clima.",
                technologies: "React, TailwindCSS, Axios e Vite"
            }, {
                title: "Calculadora de Datas",
                description: "Calcula a diferença entre duas datas.",
                technologies: "React, TailwindCSS e Vite"
            }, {
                title: "Calculadora do IMC",
                description: "Calcula o índice de massa corporal.",
                technologies: "React, TailwindCSS e Vite"
            }].map((project, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="mt-2">{project.description}</p>
                <p className="text-sm text-gray-600 mt-2">Tecnologias: {project.technologies}</p>
                </div>
            ))}
            </div>
      </section>
    );
}