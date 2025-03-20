export default function Navbar(){
    return(
        <nav className="bg-gray-700 text-white p-4 flex justify-between shadow-lg">
        <h1 className="text-xl font-bold">Leonardo de Souza Rodrigues</h1>
        <ul className="flex gap-4">
          <li><a href="#about" className="hover:underline">Sobre</a></li>
          <li><a href="#services" className="hover:underline">Serviços</a></li>
          <li><a href="#projects" className="hover:underline">Projetos</a></li>
          <li><a href="#contact" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    );
}