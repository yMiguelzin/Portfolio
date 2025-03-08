import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../public/projeto-1.mp4";
import project2 from "../../public/projeto-2.mp4";
import project3 from "../../public/projeto-3.mp4"; // Adicionado o vídeo do Projeto 3
import project4 from "../../public/projeto-4.mp4"; // Adicionado o vídeo do Projeto 4

const Projects = () => {
  return (
    <div className="space-y-5 pt-10" id="projects">
      <h1 className="font-bold text-3xl sm:text-5xl md:text-[3rem] text-center">
        Confira meus trabalhos
      </h1>

      <h3 className="font-semibold text-gray-500 text-lg text-center">
        Trabalhei em diversos projetos, desde sites simples até aplicações web
        complexas. Veja alguns dos meus favoritos.
      </h3>

      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          {/* PROJETO 1 */}
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] rounded-md"
            >
              <source src={project1} type="video/mp4" />
            </video>
            <h3 className="text-base font-bold">Diário Online</h3>
            <span className="text-xs text-gray-500 font-semibold">
              Jan 2024 - Fev 2024
            </span>
            <p className="text-xs text-gray-400 font-medium max-w-64">
              Este projeto foi desenvolvido para gerenciar um diário online
              utilizando Python e Django. Ele permite que os usuários registrem
              suas atividades diárias, criem, editem e excluam entradas, além de
              visualizar o histórico. Utiliza Django como framework principal e
              oferece uma interface simples e intuitiva.
            </p>

            <div className="flex flex-wrap gap-1 text-[10px]">
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Python
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Django
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Pillow
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                SQLite
              </div>
            </div>

            <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit mt-3">
              <FaGithub size={14} />
              <a
                href="https://github.com/yMiguelzin/diario-online"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>

          {/* PROJETO 2 */}
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] rounded-md"
            >
              <source src={project2} type="video/mp4" />
            </video>
            <h3 className="text-base font-bold">Manager Jiu Jitsu</h3>
            <span className="text-xs text-gray-500 font-semibold">
              Jan 2024 - Fev 2024
            </span>
            <p className="text-xs text-gray-400 font-medium max-w-64">
              Este projeto foi desenvolvido para gerenciar uma academia de
              jiu-jitsu utilizando Python, Django e Flet. Ele permite que os
              professores registrem alunos, criem, editem, listem e excluam
              aulas, além de monitorar o progresso dos alunos. Utiliza
              Django-Ninja para o back-end e Flet para uma interface
              multiplataforma simples e intuitiva.
            </p>

            <div className="flex flex-wrap gap-1 text-[10px]">
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Python
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Django
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Django-Ninja
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Pillow
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Flet
              </div>
            </div>

            <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit mt-3">
              <FaGithub size={14} />
              <a
                href="https://github.com/yMiguelzin/manager-jiu-jitsu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>

        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          {/* PROJETO 3 */}
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] rounded-md"
            >
              <source src={project3} type="video/mp4" />
            </video>
            <h3 className="text-base font-bold">Manager Psicólogo</h3>
            <span className="text-xs text-gray-500 font-semibold">
              Mar 2024 - Abr 2024
            </span>
            <p className="text-xs text-gray-400 font-medium max-w-64">
              Psicólogo Manager é um sistema desenvolvido em Python para
              auxiliar psicólogos na gestão de seus pacientes. O sistema permite
              o cadastro e consulta de pacientes, o registro detalhado das
              consultas realizadas e a anexação de vídeos para monitoramento da
              evolução do paciente. Além disso, gera um link personalizado para
              que o paciente possa acessar seu progresso, incluindo vídeos e
              gráficos que mostram a quantidade de sessões realizadas.
            </p>

            <div className="flex flex-wrap gap-1 text-[10px]">
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Python
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Django
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                Pillow
              </div>
            </div>

            <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit mt-3">
              <FaGithub size={14} />
              <a
                href="https://github.com/usuario/projeto-psicologo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>

          {/* PROJETO 4 */}
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] rounded-md"
            >
              <source src={project4} type="video/mp4" />
            </video>
            <h3 className="text-base font-bold">Restaurante Web</h3>
            <span className="text-xs text-gray-500 font-semibold">
              Jan 2024 - Fev 2024
            </span>
            <p className="text-xs text-gray-400 font-medium max-w-64">
              Este projeto é uma aplicação simples de um restaurante, com seções
              de home, pratos, galeria do local e contato. Foi desenvolvido
              utilizando HTML, CSS e JavaScript puro, ideal para quem busca uma
              solução simples para um site de restaurante.
            </p>

            <div className="flex flex-wrap gap-1 text-[10px]">
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                HTML
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                CSS
              </div>
              <div className="py-1 px-2 bg-gray-200 text-gray-700 font-semibold rounded-md">
                JavaScript
              </div>
            </div>

            <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit mt-3">
              <FaGithub size={14} />
              <a
                href="https://github.com/usuario/restaurante-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
