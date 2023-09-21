import React, { FC } from 'react';
import Image from 'next/image';

import Carousel from '@components/Common/Carousel/Carousel';

const data = [
  {
    image: '/assets/images/hero-slide-1.jpg',
    title: 'IT′S SIMPLE, SMART AND OCCASIONALLY MAGICAL.',
    description:
      'Intrinsicly negotiate corporate synergy rather than user-centric web services. Synergistically transition emerging schemas and.',
  },
  {
    image: '/assets/images/hero-slide-2.jpg',
    title: 'IT′S PROFITABLE AND SUCCESSFUL!',
    description:
      'Synergistically enhance low-risk high-yield testing procedures with clicks-and-mortar architectures. Compellingly revolutionize future-proof interfaces and.',
  },
  {
    image: '/assets/images/hero-slide-3.jpg',
    title: 'GOOD SOLUTIONS FOR YOUR BUSINESS!',
    description:
      'Monotonectally envisioneer 24/7 bandwidth with reliable imperatives. Continually unleash unique niches after go forward.',
  },
];

export const HomeBanner: FC = () => {
  return (
    <section className="h-195">
      <Carousel loop>
        {data.map((item, i) => {
          return (
            <div className="relative h-195 flex-[0_0_100%]" key={i}>
              <Image src={item.image} fill className="object-cover" alt="alt" />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
                <div className="max-w-[930px]">
                  <h1 className="text-[60px] text-white font-bold text-center leading-1 mb-4">
                    {item.title}
                  </h1>
                  <p className="text-[20px] text-white text-center">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};
