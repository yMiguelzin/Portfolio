import image from "../../public/image.png"

const Header = () => {
  return <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-3 md:gap-8" id="home">
      <div className="flex flex-col gap-3">
      <h1 className="font-bold text-6xl sm:text1-5xl md:text-5xl text-nowrap tracking-tighter">Olá, eu sou Miguel👋</h1>
        <p className="max-w-[500px] text-lg md:text-xl">
          Desenvolvedor Full Stack & Suporte Técnico. 
          Estou sempre buscando maneiras de ajudar pessoas 
          por meio da tecnologia.</p>
        </div>

      <img src={image} alt="" className="w-32" />
    </div>
};

export default Header;
