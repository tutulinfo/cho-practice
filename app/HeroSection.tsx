import Image from "next/image";
import HeroBg from "../public/assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className="relative h-[700px] w-full">
      <Image
        src={HeroBg}
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="w-full h-full"
      />
      <div className="max-w-6xl mx-auto">
        <div className="absolute bg-matGroen p-4 space-y-4 w-1/3 h-auto top-1/2 left-800 transform -translate-y-1/2">
          <h1 className="text-3xl text-kobalt font-medium">
            Advance Your Carer with our Coprehensive Courses
          </h1>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            aut esse nostrum magni laboriosam. Repellat, illo praesentium? Culpa
            ipsa quibusdam quod deserunt facilis sequi beatae unde atque, fuga
            iusto amet eligendi doloribus nostrum esse excepturi similique sit
            dolore officiis labore? Dolorum laboriosam inventore exercitationem
            eligendi, ipsam officiis. Facilis, molestias laboriosam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
