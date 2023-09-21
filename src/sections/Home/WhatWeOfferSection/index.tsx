import React, { FC } from 'react';
import { SectionTitle } from '@components/Common';

const data = [
  {
    image: '/assets/images/img-offer-1.jpg',
    title: 'Investment',
    description:
      'Our investment solutions are designed to help you achieve your financial goals with a diverse range of opportunities and expert guidance.',
  },
  {
    image: '/assets/images/img-offer-2.jpg',
    title: 'Planning',
    description:
      'Discover our comprehensive planning services tailored to your unique financial needs, ensuring a secure and prosperous future for you and your family.',
  },
  {
    image: '/assets/images/img-offer-3.jpg',
    title: 'Analysis',
    description:
      "Our in-depth analysis tools and expertise empower you to make informed decisions, turning data into actionable insights for your business's success.",
  },
  {
    image: '/assets/images/img-offer-4.jpg',
    title: 'Banking',
    description:
      'We provide modern banking solutions, ensuring seamless transactions, robust security, and unparalleled customer support for all your financial needs.',
  },
];

export const WhatWeOfferSection: FC = () => {
  return (
    <section className="section-container bg-gray-light py-25">
      <div className="section-content flex flex-col">
        <SectionTitle>What We Offer</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {data.map((item) => (
            <div
              key={item.title}
              className="flex flex-col lg:flex-row border border-gray-50 bg-white"
            >
              <img src={item.image} className="max-w-1/2 h-fit" alt={item.title} />
              <div className="bg-white p-6">
                <h5 className="font-semibold mb-2">{item.title}</h5>
                <p className="text-sm leading-6 text-gray-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
