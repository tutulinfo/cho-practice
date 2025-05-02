import Image from "next/image";

interface BannerInfo {
  name: string;
  bgImage: any;
}

interface Props {
  bannerInfo: BannerInfo;
  key: number;
}

const BannerSection = ({ bannerInfo, key }: Props) => {
  return (
    <section key={key} className="relative w-full h-96 flex items-center">
      {/* Container for image and overlay */}
      <div className="absolute inset-0">
        <Image
          src={bannerInfo.bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay with a Tailwind CSS gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-[#ffffff10]"></div>
      </div>

      {/* Content container, placed above overlay using relative z-index */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 relative z-10">
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-left">
          <h1 className="text-5xl text-kobalt">{bannerInfo.name}</h1>
          <div className="w-32 h-1 bg-turquoise my-4"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
