import React from 'react';

import { SectionTitle } from '@components/Common';
import { EyeIcon, ShoppingCartIcon, StarIcon, ThumbsUpIcon } from '@components/Common/icons';

const solutionItems = [
  {
    icon: <EyeIcon size={30} />,
    title: 'Management Consulting',
    description:
      'Empower your business with expert guidance for strategic growth and operational excellence.',
  },
  {
    icon: <ThumbsUpIcon size={30} />,
    title: 'Finance & Grants  ',
    description: "Unlock financial opportunities and grants to fuel your business's success.",
  },
  {
    icon: <StarIcon size={30} />,
    title: 'Scientific & Risk Assessment',
    description: 'Mitigate risks and enhance decision-making with our scientific assessments.',
  },
  {
    icon: <ShoppingCartIcon size={30} />,
    title: 'Corporate Finance',
    description:
      'Optimize your corporate finance strategy for sustainable growth and profitability.',
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
