import React from "react";
import BannerSection from "../components/Global/Banner";
import IncompanyBG from "../../public/assets/cho-ot-bg.jpg";

const incompanyCoursesPage = () => {
  const bannerInfo = [
    { name: "In-company & Customized ", bgImage: IncompanyBG },
  ];
  return (
    <div>
      <section>
        {bannerInfo.map((item, i) => {
          return <BannerSection bannerInfo={item} key={i} />;
        })}
      </section>
      <div>
        <section>
          <p>test</p>
        </section>
      </div>
    </div>
  );
};

export default incompanyCoursesPage;
