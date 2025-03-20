export default function Contact(){
    return(
        <section id="contact" className="p-8 bg-gray-100 max-w-4xl mx-auto shadow-lg rounded-lg mt-8">
        <h3 className="text-3xl font-bold">Contato</h3>
        <p className="mt-2">Entre em contato comigo através dos seguintes canais:</p>
        <ul className="mt-4 space-y-2">
          <li>LinkedIn: <a href="https://www.linkedin.com/in/leonardo-rodrigues-07a169172/" className="text-blue-600 hover:underline">Leonardo De Souza</a></li>
          <li>GitHub: <a href="https://github.com/Leonnardo21" className="text-blue-600 hover:underline">Leonnardo21</a></li>
          <li>Telefone: (85) 99806-7348</li>
          <li>Email: <a href="mailto:leosouza1392@gmail.com" className="text-blue-600 hover:underline">leosouza1392@gmail.com</a></li>
        </ul>
      </section>
    );
}