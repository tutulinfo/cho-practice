import React from "react";
import CourseCard from "./CourseCard";
import CardImageOne from "../../../public/assets/unsplash_Hb6uWq0i4MI.png";
import CardImageTwo from "../../../public/assets/unsplash_F8t2VGnI47I.png";
import CardImageThree from "../../../public/assets/unsplash_WE_Kv_ZB1l0.png";
import CardImageFour from "../../../public/assets/unsplash_s86WhGhp25Y.png";

const Courses = () => {
  const courses = [
    {
      imageSrc: CardImageOne,
      courseName: "P2 Specimen Exam Paper",
      courseDescription:
        "Lorem ipsum dolor sit amet consectetur. Consectetur ac nisi mi nisl auctor faucibus ullamcorper vitae.",
      courseFee: "$ 100",
      courseCirtification: false,
      courseTraineer: ["Masja Juffermans", "Nicole Muller"],
    },
    {
      imageSrc: CardImageTwo,
      courseName: "P2 Specimen Exam Paper",
      courseDescription:
        "Lorem ipsum dolor sit amet consectetur. Consectetur ac nisi mi nisl auctor faucibus ullamcorper vitae. Lorem ipsum dolor sit amet consectetur. Consectetur ac nisi mi nisl auctor faucibus ullamcorper vitae.",
      courseFee: "$ 100",
      courseCirtification: false,
      courseTraineer: ["Masja Juffermans", "Nicole Muller"],
    },
    {
      imageSrc: CardImageThree,
      courseName: "P2 Specimen Exam Paper",
      courseDescription:
        "Lorem ipsum dolor sit amet consectetur. Consectetur ac nisi mi nisl auctor faucibus ullamcorper vitae.",
      courseFee: "$ 100",
      courseCirtification: true,
      courseTraineer: ["Masja Juffermans", "Nicole Muller"],
    },
    {
      imageSrc: CardImageFour,
      courseName: "P2 Specimen Exam Paper",
      courseDescription:
        "Lorem ipsum dolor sit amet consectetur. Consectetur ac nisi mi nisl auctor faucibus ullamcorper vitae.",
      courseFee: "$ 100",
      courseCirtification: true,
      courseTraineer: ["Masja Juffermans", "Nicole Muller"],
    },
  ];
  return (
    <div className="space-y-1">
      <h2 className="text-4xl font-medium text-burgundy text-center">
        Our Cources
      </h2>
      <p className="text-kobalt text-xl font-medium text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
        nihil.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {courses.map((item, index) => {
          return <CourseCard card={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
