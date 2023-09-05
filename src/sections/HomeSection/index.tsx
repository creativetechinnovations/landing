import React, { FC } from 'react';

import { Button } from '@components/Common';
import { CheckIcon } from '@components/Common/icons';

export const HomeSection: FC = () => {
  return (
    <section className="section-container pt-20 pb-28">
      <div className="section-content">
        <div className="grid grid-cols-2">
          <div className="pt-20">
            <h2 className="text-4xl">
              Communicate.
              <br />
              Collaborate. Create.
            </h2>
            <p className="my-8 text-lg">
              WeDu provides an effective and powerful way
              <br /> to manage your projects
            </p>
            <Button>Get Started</Button>
            <div className="grid grid-cols-3 gap-20 w-fit mt-20">
              <div className="flex">
                <img
                  className="w-8 h-8"
                  src="/assets/icons/speed_security.svg"
                  alt="speed & security"
                />
                <p className="text-[14px] ml-2">
                  Speed &<br /> Security
                </p>
              </div>
              <div className="flex">
                <img
                  className="w-8 h-8"
                  src="/assets/icons/flexability_scalability.svg"
                  alt="Flexibility & Scalability"
                />
                <p className="text-[14px] ml-2">
                  Flexibility &<br/> Scalability
                </p>
              </div>
              <div className="flex">
                <img
                  className="w-8 h-8"
                  src="/assets/icons/better_collaboration.svg"
                  alt="Better Collaboration"
                />
                <p className="text-[14px] ml-2">
                  Better<br/> Collaboration
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <img className="h-full w-[80%]" src="/assets/icons/home.svg" alt="Home" />
          </div>
        </div>
      </div>
    </section>
  );
};
