import React from "react";

interface FaqContent {
  question: string;
  answer: string;
}

interface Props {
  faqContent: FaqContent;
  key: number;
}

const Faq = ({ faqContent, key }: Props) => {
  return (
    <div key={key} className="pt-4 border-b pb-2">
      <div>
        <p className="text-lg font-medium text-white">{faqContent.question}</p>
        
      </div>
      <p className="text-base text-kobalt">{faqContent.answer}</p>
    </div>
  );
};

export default Faq;
