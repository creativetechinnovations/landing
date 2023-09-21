import React, { useEffect, useState } from 'react';
import { animated, useSpring, useSpringRef, useTransition } from '@react-spring/web';

import { FullLayout, Meta } from '@layouts';

import { HomeBanner } from '@sections';
import {
  ClientsSection,
  CustomerSection,
  OurCapabilitiesSection,
  OurTeamSection,
  WhatWeOfferSection,
} from '@sections/Home';

const Index = () => {
  const [index] = useState(0);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="main-home-section pb-0">
          <HomeBanner />
          <WhatWeOfferSection />
          <OurCapabilitiesSection />
          <OurTeamSection />
          <CustomerSection />
          {/* <ClientsSection /> */}
        </div>
      </div>
    </FullLayout>
  );
};

export default Index;
