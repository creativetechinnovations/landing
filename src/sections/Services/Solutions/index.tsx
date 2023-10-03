import React from 'react';

import { SectionTitle } from '@components/Common';
import { EyeIcon, ShoppingCartIcon, StarIcon, ThumbsUpIcon } from '@components/Common/icons';

const solutionItems = [
  {
    icon: <EyeIcon size={30} />,
    title: 'Custom Software Development',
    description:
      'Experience tailored excellence with our Custom Software Development solutions, meticulously crafted to meet your unique business needs and drive your business success.',
  },
  {
    icon: <ThumbsUpIcon size={30} />,
    title: 'Cybersecurity Services',
    description:
      "Elevate your digital defenses with our comprehensive Cybersecurity Services, safeguarding your business against evolving threats in today's interconnected world.",
  },
  {
    icon: <StarIcon size={30} />,
    title: 'Data Backup and Recovery',
    description:
      'Protect your critical data and ensure business continuity with our Data Backup and Recovery solutions, designed to keep your information safe and accessible at all times.',
  },
  {
    icon: <ShoppingCartIcon size={30} />,
    title: 'IT Infrastructure Consulting',
    description:
      'Empower your business with our IT Infrastructure Consulting services, optimizing your technology backbone to enhance efficiency, scalability, and overall performance.',
  },
];

export const SolutionsSection = () => {
  return (
    <div className="section-container py-25 bg-white">
      <div className="section-content">
        <SectionTitle>Solutions For Your Business!</SectionTitle>
        <div className="flex gap-4">
          {solutionItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center group">
              <div className="h-20 w-19 flex items-center justify-center border-2 border-gray-200 group-hover:bg-blue-100 group-hover:border-blue-100 text-gray-200 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h5 className="text-center mt-12 mb-6">{item.title}</h5>
              <p className="text-3.5 text-gray-100 leading-6 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
