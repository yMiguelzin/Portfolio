import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaCuttlefish, FaDatabase, FaDocker, FaFigma, FaNetworkWired, FaCloud } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='font-bold text-xl'>Habilidades</h2>
      
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaHtml5 size={16} /> HTML
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaCss3Alt size={16} /> CSS
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaJsSquare size={16} /> JavaScript
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaJava size={16} /> Java
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaPython size={16} /> Python
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaCuttlefish size={16} /> C#
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaDatabase size={16} /> SQL
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaDocker size={16} /> MySQL
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaDatabase size={16} /> NoSQL
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaCloud size={16} /> APIs REST
        </div>
        <div className="flex items-center gap-1 py-1 px-2 border border-gray-800 text-white text-xs font-semibold rounded-lg bg-black hover:bg-gray-800 transition-all w-fit">
          <FaFigma size={16} /> Figma
        </div>
      </div>
    </div>
  );
};

export default Skills;
