import React from "react";
import { ExternalLink } from "lucide-react"; // Ícone de redirecionamento
import image1 from "../../public/education-1.png/";
import image2 from "../../public/education-2.png/";

const Education = () => {
  return (
    <div className="space-y-3" id="education">
      <h2 className="text-xl font-bold">Educação</h2>

      {/* Primeira instituição */}
      <div className="flex items-center gap-5">
        <img src={image1} alt="" className="w-14 border rounded-full" />

        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold flex items-center gap-2">
              Etec - Ferrucio Humberto Gazzetta
              <a
                href="https://www.cps.sp.gov.br/etec/" // Link real
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <ExternalLink size={18} />
              </a>
            </h3>
            <span className="font-medium text-gray-500 text-sm">
              Técnico em Desenvolvimento de Sistemas
            </span>
          </div>

          <div className="text-gray-400">2021 - 2023</div>
        </div>
      </div>

      {/* Segunda instituição */}
      <div className="flex items-center gap-5">
        <img src={image2} alt="" className="w-14 border rounded-full" />

        <div className="flex items-center justify-between flex-1">
          <div className="flex flex-col">
            <h3 className="font-semibold flex items-center gap-2">
              Uninter - Centro Universitário Internacional
              <a
                href="https://www.uninter.com/" // Link real
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <ExternalLink size={18} />
              </a>
            </h3>
            <span className="font-medium text-gray-500 text-sm">
              Graduação em Análise e Desenvolvimento de Sistemas
            </span>
          </div>

          <div className="text-gray-400">2024 - 2027</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
