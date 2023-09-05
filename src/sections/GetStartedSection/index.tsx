import React, { FC } from 'react';
import { Button } from '@components/Common';

export const GetStartedSection: FC = () => {
  return (
    <section className="section-container relative">
      <img className="absolute top-0 -translate-y-full w-full" src="/assets/images/white-border.png" alt="White Top BG" />
      <div className="section-content pt-32 -mb-[80px]">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8 max-w-3xl">
            Get Ready to Maximize Your Productivity With Our Workflow Solutions
          </h2>
          <Button className="w-fit">Get Started</Button>
          <img className="w-full -my-32" src="/assets/icons/get_ready.svg" alt="Get Ready" />
        </div>
      </div>
    </section>
  );
};
