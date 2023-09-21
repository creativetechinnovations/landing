import React from 'react';
import { FullLayout, Meta } from '@layouts';

import { ClientsSection, CustomerSection } from '@sections/Home';
import { AboutUsBanner, ProfessionalSkillsSection, WordsAboutUsSection } from '@sections/About';

const About = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <AboutUsBanner />
          <WordsAboutUsSection />
          <ProfessionalSkillsSection />
          <CustomerSection />
          {/* <ClientsSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default About;
