import React, { FC } from 'react';
import Image from 'next/image';

import { SectionTitle } from '@components/Common';
import { CalculatorIcon, LifeRingIcon, LineChartIcon } from '@components/Common/icons';

const data = [
  {
    icon: <LineChartIcon />,
    title: 'Innovative Technology Solutions',
    description:
      "We leverage cutting-edge technology and expertise to deliver innovative solutions that drive efficiency, foster growth, and keep your business ahead in today's fast-paced digital landscape.",
  },
  {
    icon: <LifeRingIcon />,
    title: 'End-to-End Project Management',
    description:
      'Our comprehensive approach to end-to-end project management ensures seamless execution from conception to completion, delivering exceptional results on time and within budget.',
  },
  {
    icon: <CalculatorIcon />,
    title: 'Sustainable Business Practices',
    description:
      'We are committed to sustainable business practices, integrating eco-friendly solutions, ethical sourcing, and responsible management to help your organization thrive while minimizing its environmental footprint.',
  },
];

export const OurCapabilitiesSection: FC = () => {
  return (
    <section className="section-container bg-blue-light py-25">
      <div className="section-content flex flex-col">
        <SectionTitle className="text-white">Our Capabilities</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-10">
          <img src="/assets/images/img-about.png" alt="Capabilities" />
          <div className="flex flex-col gap-10">
            {data.map((item) => (
              <div key={item.title} className="flex gap-6 text-blue-50">
                {item.icon}
                <div>
                  <h5 className="text-white font-bold mb-5">{item.title}</h5>
                  <p className="text-sm text-blue-50">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
