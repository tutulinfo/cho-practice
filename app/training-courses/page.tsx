import React from "react";
import TrainingCoursesBG from "../../public/assets/cho-tc-bg.jpg";
import BannerSection from "../components/Global/Banner";
import Courses from "../components/Global/Courses";
import Faq from "../components/Global/Faq";

const trainingCoursesPage = () => {
  const bannerInfo = [
    {
      name: "Tranining Courses",
      bgImage: TrainingCoursesBG,
    },
  ];

  const faqContent = [
    {
      question: "How do I register for a course?",
      answer:
        "You do this online. Click on the registration button for the course you want to follow. You will then be redirected to a registration form. You will receive an automatic confirmation email when you have sent your registration and will receive an invoice by email. We will then check whether you meet the conditions for participation. The registration is final when you meet the conditions and have paid the invoice. Approximately six weeks before the start date of the course you will hear whether the course will definitely go ahead.",
    },
    {
      question: "Where can I report tips or a complaint?",
      answer:
        "We love to learn, also from you! Have you heard, seen, experienced something around one of our courses that could be improved? This is our complaints procedure .",
    },
  ];
  return (
    <div>
      <section>
        {bannerInfo.map((item, i) => {
          return <BannerSection bannerInfo={item} key={i} />;
        })}
      </section>

      {/* all courses section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 py-8 space-y-4 md:space-y-0 md:space-x-16">
        <Courses />
      </section>

      {/* Faq section */}
      <section className="bg-matBlauw">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-8 md:space-y-0 ">
          <h2 className="text-4xl font-medium text-white text-left pb-2 border-b ">
            Frequently Asked Questions
          </h2>
          {faqContent.map((item, index) => {
            return <Faq faqContent={item} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default trainingCoursesPage;
