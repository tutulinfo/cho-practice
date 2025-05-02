import React from "react";
import SupervisionBG from "../../public/assets/cho-supervision-bg.jpg";
import BannerSection from "../components/Global/Banner";

const supervisionPage = () => {
  const bannerInfo = [
    {
      name: "Supervision",
      bgImage: SupervisionBG,
    },
  ];
  return (
    <div>
      <section>
        {bannerInfo.map((item, i) => {
          return <BannerSection bannerInfo={item} key={i} />;
        })}
      </section>
    </div>
  );
};

export default supervisionPage;
