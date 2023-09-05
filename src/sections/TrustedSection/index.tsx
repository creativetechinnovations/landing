import React, { FC } from 'react';

export const TrustedSection: FC = () => {
  return (
    <section className="section-container bg-pink relative">
      <img className="absolute w-full top-0 -translate-y-full" src="/assets/images/pink-border.png" alt="Pink Top BG" />
      <div className="section-content py-32">
        <h2 className="section-title">Trusted Among Industry Leaders</h2>
        <div className="pr-20 max-w-[560px] flex items-center pt-10">
          <p className="leading-normal">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
            “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          <div className="flex justify-center">
            <img
              className="w-[120px] h-[120px]"
              src="/assets/images/meta_definer.png"
              alt="Meta Definer"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[120px] h-[120px]"
              src="/assets/images/delta_tech.png"
              alt="Delta Tech"
            />
          </div>
          <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src="/assets/images/tech_med.png" alt="Tech Med" />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[120px] h-[120px]"
              src="/assets/images/power_core.png"
              alt="Power Core"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[120px] h-[120px]"
              src="/assets/images/strongest_link.png"
              alt="Strongest Link"
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-[120px] h-[120px]"
              src="/assets/images/cog_industry.png"
              alt="Cog Industry"
            />
          </div>
          <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src="/assets/images/motion.png" alt="Motion" />
          </div>
          <div className="flex justify-center">
            <img className="w-[120px] h-[120px]" src="/assets/images/bond.png" alt="Bond" />
          </div>
        </div>
      </div>
    </section>
  );
};
