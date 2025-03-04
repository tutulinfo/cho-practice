import Image from "next/image";
import Link from "next/link";
import React from "react";
import Courses from "./Courses";

interface CourseCard {
  imageSrc?: any;
  courseName: string;
  courseDescription: string;
  courseFee: string;
  courseCirtification: boolean;
  courseTraineer: string[];
}

interface Props {
  card: CourseCard;
  key: number;
}

const CourseCard = ({ card, key }: Props) => {
  return (
    <Link
      href="/"
      key={key}
      className="flex flex-col bg-white border border-grafiet rounded-lg"
    >
      <div className="w-full h-auto shadow-lg bg-red-500 ">
        <Image
          src={card.imageSrc}
          alt="Course Image"
          width={1000}
          //   layout="fill"objectFit="cover"
          className="object-center"
        />
      </div>
      <div className=" space-y-2 px-4 pt-4 flex-grow">
        <h3 className="text-xl font-medium text-turquoise ">
          {card.courseName}
        </h3>
        <p className="text-sm text-grafiet">
          {card.courseTraineer.map((item, index) => {
            return (
              <span className="space-x-2" key={index}>
                {item}
              </span>
            );
          })}
        </p>

        <p className="text-base text-grafiet line-clamp-5 ">
          {card.courseDescription}
        </p>
      </div>

      <div className="flex justify-between items-center px-4 py-2">
        <p className="text-burgundy text-2xl font-medium">{card.courseFee}</p>
        <span>{card.courseCirtification}</span>
      </div>
    </Link>
  );
};

export default CourseCard;
