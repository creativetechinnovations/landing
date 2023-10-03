import React, { FC } from 'react';
import { SectionTitle } from '@components/Common';

const data = [
  {
    image: '/assets/images/img-offer-1.jpg',
    title: 'Web Development',
    description:
      'Our expert team specializes in creating stunning, user-friendly websites that not only captivate your audience but also drive results, making your online presence a true success.',
  },
  {
    image: '/assets/images/img-offer-2.jpg',
    title: 'Mobile Development',
    description:
      "Our Mobile Development services harness the latest technology trends to craft cutting-edge mobile applications that elevate your brand's reach and engagement on smartphones and tablets.",
  },
  {
    image: '/assets/images/img-offer-3.jpg',
    title: 'AI Development',
    description:
      'Our AI Development services leverage the power of artificial intelligence to create intelligent solutions, enhance decision-making, and revolutionize your business operations.',
  },
  {
    image: '/assets/images/img-offer-4.jpg',
    title: 'VR/AR Development',
    description:
      'Our VR/AR Development expertise transforms your concepts into immersive experiences, pushing the boundaries of reality to engage and amaze your audience like never before.',
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
