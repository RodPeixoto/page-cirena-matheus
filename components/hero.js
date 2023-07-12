import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/imgA.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-20">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Olá, Seja bem-vindo! Somos músicos por paixão! 
            </h1>
            <p className="py-10 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Artistas apaixonados pela música brasileira em todas as suas formas.
              Conheça a combinação perfeita de vozes e instrumentos que trazem vida aos mais diversos gêneros musicais do Brasil.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://api.whatsapp.com/send?phone=5512988410108"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-red-700 rounded-md ">
                Contato
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center ">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Nossos Parceiros, <span className="text-red-700">Venha fazer a diferença também!</span>{" "}
            Nos apoie!
          </div>
</div>
<div className="container p-8 mx-auto xl:px-0 flex w-full flex-col mt- items-center justify-center text-center">
      <div className="pt-14 text-gray-400 dark:text-gray-400">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="w-40 h-48">
            <Image src="/img/volvera.png" alt="Imagem 1" layout="responsive" width={90} height={40} />
          </div>
          <div className="w-40 h-48">
            <Image src="/img/lt advocacia.png" alt="Imagem 2" layout="responsive" width={100} height={200} />
          </div>
        
        </div>
      </div>
    </div>
      </Container>
    </>
  );
}


export default Hero;


