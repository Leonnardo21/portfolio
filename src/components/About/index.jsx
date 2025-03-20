export default function About(){
    return(
        <section id="about" className="h-screen p-8 bg-white mx-auto flex flex-col md:flex-row items-center gap-6">
            <img src="https://placehold.co/500" alt="Foto de Leonardo" className="w-96 h-96 object-cover rounded-full shadow-lg" />
            <div className="text-left">
                <h3 className="text-3xl font-bold">Sobre Mim</h3>
                <p className="mt-2 text-lg">
                    Sou formado em Análise e Desenvolvimento de Sistemas, estou em busca de oportunidades para iniciar minha carreira profissional.
                    Atualmente, estudo C#/.Net, SQL Server, Entity Framework, desenvolvimento de APIs e tenho conhecimento em HTML, CSS e JavaScript.
                </p>
            </div>
        </section>
    );
}