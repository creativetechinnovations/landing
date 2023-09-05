import React, { FC } from 'react';

import { data } from './data';
import { Button } from '@components/Common';

export const WhatWeOfferSection: FC = () => {
  return (
    <section className="section-container">
      <div className="section-content py-32">
        <h2 className="section-title mb-7">What We Offer</h2>
        <p className="description max-w-[500px]">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit
          Text” or double click me to add your own content and make changes to the font.
        </p>
        <div className="grid grid-cols-4 gap-2 mt-16">
          {data.map((item) => (
            <div key={item.title} className="w-[230px]">
              <img
                className="h-[300px] border-2 border-black rounded-lg"
                src={item.imagePath}
                alt={item.title}
              />
              <h3 className="font-bold text-2xl my-8">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-28">
          <div className="">
            <img className="w-[80%]" src="/assets/images/creative.png" alt="Creative" />
          </div>
          <div className="flex justify-end items-center">
            <div className="pt-20 max-w-[500px] ml-auto">
              <h2 className="section-title">
                Built for Creatives,
                <br />
                by Creatives
              </h2>
              <p className="my-8 description">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                “Edit Text” or double click me to add your own content and make changes to the font.
                I’m a great place for you to tell a story and let your users know a little more
                about you.
              </p>
              <div className="grid grid-cols-3 gap-10 w-fit mt-20">
                <div className="flex">
                  <img
                    className="w-8 h-8"
                    src="/assets/icons/all_in_one_toolkit.svg"
                    alt="all in one toolkit"
                  />
                  <p className="text-[14px] ml-2">
                    All-In-One
                    <br />
                    Toolkit
                  </p>
                </div>
                <div className="flex">
                  <img
                    className="w-8 h-8"
                    src="/assets/icons/integrated_file_sharing.svg"
                    alt="integrated file sharing"
                  />
                  <p className="text-[14px] ml-2">
                    Integrated
                    <br />
                    File Sharing
                  </p>
                </div>
                <div className="flex">
                  <img
                    className="w-8 h-8"
                    src="/assets/icons/total_design_freedom.svg"
                    alt="total design freedom"
                  />
                  <p className="text-[14px] ml-2">
                    Total Design
                    <br />
                    Freedom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
