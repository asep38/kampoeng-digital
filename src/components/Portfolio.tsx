import Image from "next/image";
import Portfolio1 from "../../public/img/portfolio/image-1.jpg";
import Portfolio2 from "../../public/img/portfolio/image-2.jpg";
import Portfolio3 from "../../public/img/portfolio/image-3.jpg";
import Portfolio4 from "../../public/img/portfolio/image-4.jpg";

const images = [Portfolio1, Portfolio2, Portfolio3, Portfolio4];

const Portfolio = () => {
  return (
    <>
      <div className="container mx-auto text-center mt-10 mb-10">
        <h1 className="font-bold text-4xl uppercase">Portofolio</h1>
        <p>
          Selama bertahun-tahun, kami telah membantu ratusan klien yang ingin
          memulai bisnis di dunia digital. Lihat beberapa karya terbaik kami.
        </p>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                className="h-18 sm:h-auto w-full rounded-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                src={image}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg cursor-pointer">
                <p className="text-white text-lg font-bold">Detail</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
