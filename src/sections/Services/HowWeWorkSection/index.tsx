import React from 'react';

import { Accordion } from '@components/Common/Accordion';
import { Tab } from '@components/Common';

const howWeWorkItems = [
  {
    id: 1,
    title: 'Seamlessly empower',
    content:
      'Seamlessly empower your operations with our dynamic, results-driven collaborative approach.',
  },
  {
    id: 2,
    title: 'Initiatives',
    content:
      'Through strategic initiatives, we drive positive change and innovation for your success.',
  },
  {
    id: 3,
    title: 'Objectively maintain',
    content:
      'Objectively maintain a high standard of excellence through rigorous assessments and evaluations.',
  },
];

const serviceItems = [
  {
    id: 1,
    name: 'Stratgic Plan',
    content:
      'Selecting our services ensures access to a well-crafted strategic plan, informed by extensive industry knowledge, tailored precisely to your business goals, providing comprehensive analysis, actionable insights, and a roadmap for sustained success.',
  },
  {
    id: 2,
    name: 'Annual Budget Plan',
    content:
      'Opt for our services and gain the advantage of an annual budget plan that combines meticulous financial analysis, cost-effective resource allocation, and a forward-thinking approach, delivering a robust framework to drive financial stability and strategic growth for your organization.',
  },
  {
    id: 3,
    name: 'Include Professional Details',
    content:
      'By choosing our services, you ensure that professional details, from qualifications to certifications and affiliations, are thoughtfully incorporated, enhancing your credibility and trustworthiness in your industry, positioning you as a leader in your field.',
  },
];

export const HowWeWorkSection = () => {
  return (
    <div className="section-container bg-gray-light py-25">
      <div className="section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h4 className="text-5 mb-4">How we work</h4>
            <Accordion data={howWeWorkItems} />
          </div>
          <div>
            <h4 className="text-5 mb-4">Why choose our services</h4>
            <Tab data={serviceItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
