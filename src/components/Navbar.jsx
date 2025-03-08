import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importando os ícones do React Icons

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      {/* Barra de navegação fixa */}
      <div
        className={`fixed bottom-5 right-1/2 translate-x-1/2 flex border py-1.5 px-3 rounded-full z-10 transition-all duration-500 
        ${darkMode ? 'bg-gradient-to-r from-[#101113] to-[#08090b]' : 'bg-transparent'} 
        backdrop-blur-md shadow-md`}
      >
        <ul className="flex gap-3 text-sm items-center justify-center">
          {/* Ícone do Home */}
          <li className="rounded-full p-2 hover:scale-110 transition-all duration-500">
            <a href="#home" target="_self" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7l2-2-10-6-10 6z"
                />
              </svg>
            </a>
          </li>

          {/* Ícone do LinkedIn */}
          <li className="rounded-full p-2 hover:scale-110 transition-all duration-500">
            <a href="https://www.linkedin.com/in/miguel-henrique-m" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.98 3.5C3.56 3.5 2.39 4.68 2.39 6.08c0 1.4 1.17 2.58 2.59 2.58 1.42 0 2.59-1.18 2.59-2.58-.01-1.4-1.17-2.58-2.59-2.58zM3.64 8.79h2.67v12H3.64V8.79zM10.24 8.79h2.67v6.36h.03c.37-.69 1.27-1.42 2.52-1.42 2.69 0 3.18 1.75 3.18 4.03v5.24h-2.67v-4.97c0-1.18-.44-2.02-1.56-2.02-.85 0-1.36.58-1.58 1.15v5.84h-2.67V8.79z"
                />
              </svg>
            </a>
          </li>

          {/* Ícone do GitHub */}
          <li className="rounded-full p-2 hover:scale-110 transition-all duration-500">
            <a href="https://github.com/yMiguelzin" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2.25c-5.437 0-9.75 4.313-9.75 9.75 0 4.312 2.812 8.063 6.687 9.375.488.09.687-.211.687-.444v-1.586c-2.69.547-3.23-1.295-3.23-1.295-.47-1.188-1.15-1.507-1.15-1.507-.939-.643.073-.629.073-.629 1.04.073 1.59 1.07 1.59 1.07.922 1.573 2.424 1.118 3.006.855.093-.67.361-1.117.655-1.372-2.31-.262-4.736-1.155-4.736-5.137 0-1.134.402-2.062 1.06-2.785-.107-.263-.46-1.322.099-2.754 0 0 .87-.281 2.85 1.062 0 0 .845-.236 2.758-.236 1.914 0 2.758.236 2.758.236 1.98-1.343 2.849-1.062 2.849-1.062.558 1.433.208 2.491.099 2.754.66.723 1.061 1.651 1.061 2.785 0 3.994-2.43 4.875-4.736 5.137.302.443.596 1.318.596 2.655v3.156c0 .232.198.537.688.444 3.876-1.312 6.687-5.063 6.687-9.375 0-5.437-4.313-9.75-9.75-9.75z"
                />
              </svg>
            </a>
          </li>

          {/* Ícone do Email */}
          <li className="rounded-full p-2 hover:scale-110 transition-all duration-500">
            <a href="mailto:miguelhclpimoveis@gmail.com" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </a>
          </li>

          {/* Botão Dark Mode */}
          <li className="rounded-full p-2 hover:scale-110 transition-all duration-500" onClick={toggleDarkMode}>
            <button>
              {darkMode ? (
                <FaMoon className="w-5 h-5" /> // Tamanho reduzido do ícone de lua (modo escuro)
              ) : (
                <FaSun className="w-5 h-5" /> // Tamanho reduzido do ícone de sol (modo claro)
              )}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
