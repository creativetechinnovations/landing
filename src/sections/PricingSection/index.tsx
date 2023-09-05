import React, { FC } from 'react';

import { Button } from '@components/Common';
import { CheckIcon } from '@components/Common/icons';

export const PricingSection: FC = () => {
  return (
    <section className="section-container bg-gray">
      <div className="section-content pt-28 pb-40">
        <div className="grid grid-cols-2">
          <div className="pt-32">
            <h2 className="section-title">
              Explore Our
              <br /> Pricing Options
            </h2>
            <p className="my-8 description max-w-[400px]">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about
              you.
            </p>
            <Button>See More</Button>
          </div>
          <div className="flex justify-center">
            <div className="relative border-2 border-black rounded-lg max-w-[450px] w-full bg-black">
              <div className="flex justify-center bg-transparent -mt-4">
                <div className="px-2 py-1 text-sm font-semibold bg-yellow border border-black">
                  Best Value
                </div>
              </div>
              <div className="bg-black p-8 text-white">
                <h3 className="text-3xl">Premium</h3>
                <h4 className="text-xl font-bold flex my-4">
                  US$<span className="text-6xl font-extrabold">50</span>
                </h4>
                <p className="text-sm">Every month</p>
                <p className="text-sm mt-4 mb-8">
                  Use this area to describe one of your memberships.
                </p>
                <p className="text-sm">Valid for 12 months</p>
                <div className="flex items-center justify-center mt-6">
                  <div className="rounded-lg bg-white hover:bg-gray-dark transition-all duration-300 flex items-center justify-center cursor-pointer py-2 px-10 max-w-[300px] w-full">
                    <p className="text-lg font-semibold text-black">Get Started</p>
                  </div>
                </div>
              </div>
              <div className="bg-pink p-8 grid grid-cols-1 gap-y-4 rounded-b-lg">
                <div className="flex items-center">
                  <CheckIcon /> <span className="text-sm ml-2">I'm a benefit</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon /> <span className="text-sm ml-2">I'm a benefit</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon /> <span className="text-sm ml-2">I'm a benefit</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon /> <span className="text-sm ml-2">I'm a benefit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
