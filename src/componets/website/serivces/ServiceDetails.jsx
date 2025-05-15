import React from "react";
import { allServices } from "../../../constant";
import Testimonials from "../../common/Testimonials";

const ServiceDetails = ({ service }) => {
  console.log(service, "asdfasdfsfd");
  const details = allServices[service - 1];
  const splitIntoParagraphs = (text, numParagraphs = 3) => {
    const sentences = text.split(". ").map((sentence) => sentence + ".");
    const chunkSize = Math.ceil(sentences.length / numParagraphs);
    const paragraphs = [];

    for (let i = 0; i < sentences.length; i += chunkSize) {
      paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
    }

    return paragraphs;
  };
  return (
    <div className="flex flex-col gap-10">
      <img
        data-aos="fade-up"
        src={details.image}
        loading="lazy"
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="web development"
      />
      <div className="flex flex-col gap-4 md:px-5">
        {/* Service Title */}
        <h2 data-aos="fade-up" className="text-3xl font-semibold">
          {details.title}
        </h2>

        {/* Service Description */}
        <p data-aos="fade-up" className="description">
          {/* {splitIntoParagraphs(details.detailContent).map(
            (paragraph, index) => (
              <p key={index} className="py-2">
                {paragraph}
              </p>
            )
          )} */}
          {details.detailContent}
        </p>
        <div>
          <h1 data-aos="fade-up" className="text-3xl font-semibold pt-[1rem]">
            {details.subTitle}
          </h1>
          <p data-aos="fade-up" className="description pt-[1rem] pb-[2rem]">
            {details.subDesc}
          </p>
          <ul className="pl-3">
            {details.services.map((obj) => (
              <li key={obj} className="list-disc">
                {obj}
              </li>
            ))}
          </ul>
        </div>

        <Testimonials />
      </div>
    </div>
  );
};

export default ServiceDetails;
