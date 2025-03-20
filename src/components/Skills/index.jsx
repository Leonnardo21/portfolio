export default function Skills(){
    return(
        <section id="skills" className="h-screen p-8 bg-gray-100 mx-auto mt-5">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Minhas habilidades</h3>
          <p className="mt-2">Tecnologias com que trabalho</p>
        </div>
        <div className="flex justify-around mt-12 ">
          <img alt="Csharp" height="128" width="128" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" />
          <img alt="TailwindCSS" height="128" width="128" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" />
          <img alt="Sql Server" height="128" width="128" src="https://badgelist.s3.amazonaws.com/u/group/569d488d0499d6a7b700000d/csc191_logo_medium.png" />
        </div>
        <div className="flex justify-around mt-12 ">
          <img alt="HTML5" height="128" width="128" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
          <img alt="CSS3" height="128" width="128" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
          <img alt="JavaScript" height="128" width="128" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
          <img alt="ReactJS" height="128" width="128" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
          
        </div>
      </section>
    );
}