import React from 'react';

import { FullLayout, Meta } from '@layouts';
import { ContactBanner, ContactSection } from '@sections/Contact';

const Contact = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="about-page pb-0">
          <ContactBanner />
          <ContactSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default Contact;
