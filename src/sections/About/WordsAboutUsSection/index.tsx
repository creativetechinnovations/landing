import React, { FC } from 'react';

import { SectionTitle } from '@components/Common';

export const WordsAboutUsSection: FC = () => {
  return (
    <div className="section-container bg-white py-25">
      <div className="section-content">
        <SectionTitle>A Few Words About Us</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-gray-100 text-3.5 leading-6">
          <p>
            Appropriately benchmark bricks-and-clicks e-business before parallel communities.
            Completely synergize exceptional outsourcing with principle-centered platforms. Credibly
            unleash synergistic internal or "organic" sources without functionalized technology.
            Objectively brand granular human capital without goal-oriented e-business. Competently
            predominate multifunctional web-readiness via state of the art strategic theme areas.
          </p>
          <p>
            Completely pontificate timely metrics rather than accurate growth strategies. Seamlessly
            impact premium communities whereas real-time networks. Professionally transform
            high-payoff collaboration and idea-sharing before resource maximizing supply chains.
            Energistically evisculate timely manufactured products for resource-leveling ROI.
            Assertively create client-focused vortals whereas functional potentialities.
          </p>
        </div>
      </div>
    </div>
  );
};
