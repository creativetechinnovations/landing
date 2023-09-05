import React, { FC } from 'react';

export const IntroduceSection: FC = () => {
  return (
    <section className="section-container bg-yellow relative">
      <img className="absolute w-full top-0 -translate-y-full" src="/assets/images/yellow-border-top.png" alt="Yellow Top BG" />
      <div className="section-content py-40">
        <div className="grid grid-cols-2">
          <h2 className="section-title">
            With the Right<br/> Software, Great<br/> Things Can Happen
          </h2>
          <div className="pr-20 max-w-[560px] flex items-center">
            <p className="leading-normal">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
