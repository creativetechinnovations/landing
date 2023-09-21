import React from 'react';

import { FullLayout, Meta } from '@layouts';
import { ServicesBanner, SolutionsSection } from '@sections/Services';
import { HowWeWorkSection } from '@sections/Services/HowWeWorkSection';

const Services = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <ServicesBanner />
          <SolutionsSection />
          <HowWeWorkSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default Services;
