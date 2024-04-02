import Image from "next/image";
import React from "react";
import Bg1 from "../../public/img/bg-1.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 text-white ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center max-w-screen-xl">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Selogan Anda di Sini
          </h1>
          <p className="text-lg mb-6">Deskripsi Anda di Sini</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            CTA Anda
          </button>
        </div>
        <div className="lg:w-1/2 lg:ml-6">
          <Image
            src={Bg1}
            alt="Hero"
            className="rounded-lg shadow-lg"
            width={800} // Menambahkan perkiraan lebar gambar
            height={600} // Menambahkan perkiraan tinggi gambar
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
