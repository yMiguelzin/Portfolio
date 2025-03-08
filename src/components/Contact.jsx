import React, { useState } from 'react';

const Contact = () => {
  const [showForm, setShowForm] = useState(false); // Estado para controlar a exibição do formulário

  const handleClick = () => {
    setShowForm(!showForm); // Alterna a exibição do formulário
  };

  return (
    <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-16' id="contact">
        <h1 className="font-bold text-3xl sm:text-5xl md:text-[3rem] text-center">Entre em Contato
        </h1>
      <p className='text-gray-500 font-semibold text-lg text-center'>
        Quer conversar? Envie-me um e-mail através deste formulário e responderei assim que possível.
      </p>

      <button 
        onClick={handleClick} 
        className='bg-black rounded-lg px-4 py-2 text-white font-bold text-lg hover:translate-y-3 transition-all duration-300 border-2 hover:bg-white hover:border-black hover:text-black'>
        Me Contate
      </button>

      {/* Exibe o formulário apenas se showForm for verdadeiro */}
      {showForm && (
        <form action="https://formspree.io/f/xlddkvqo" method="POST" className="w-full max-w-lg mt-6">
          <div className="flex flex-col gap-4">
            {/* Campo Nome */}
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              className="border-2 border-gray-300 p-3 rounded-lg"
              required
            />
            {/* Campo Email */}
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="border-2 border-gray-300 p-3 rounded-lg"
              required
            />
            {/* Campo Telefone */}
            <input
              type="text"
              name="telefone"
              placeholder="Seu telefone"
              className="border-2 border-gray-300 p-3 rounded-lg"
              required
            />
            {/* Campo Assunto */}
            <input
              type="text"
              name="assunto"
              placeholder="Assunto"
              className="border-2 border-gray-300 p-3 rounded-lg"
              required
            />
            {/* Botão Enviar */}
            <button 
              type="submit" 
              className="bg-black text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 hover:border-black transition-all duration-300">
              Enviar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
