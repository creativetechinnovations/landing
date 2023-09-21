import React, { FC } from 'react';
import { SectionTitle } from '@components/Common';
import classnames from 'classnames';

import styles from './styles.module.css';
import Image from 'next/image';
import Carousel from '@components/Common/Carousel/Carousel';

const data = [
  {
    image: '/assets/images/img-testimonial-1.jpg',
    name: 'JUSTUS KÜHN',
    blog:
      "I can't thank Kreative Intellitech Innovations enough for their exceptional service. They went above and\n" +
      "beyond to meet our needs and deliver outstanding results. Their team's expertise and\n" +
      'dedication made a real difference in our business. Highly recommended!',
  },
  {
    image: '/assets/images/img-testimonial-2.jpg',
    name: 'RENNOX ARNOLD',
    blog:
      'Working with Kreative Intellitech Innovations has been a true partnership. Their professionalism,\n' +
      "attention to detail, and commitment to excellence are unmatched. Together, we've achieved\n" +
      'great success, and I look forward to many more years of collaboration.',
  },
  {
    image: '/assets/images/img-testimonial-3.jpg',
    name: 'PAULINA BERGER',
    blog:
      'Joining the Kreative Intellitech Innovations team has been a game-changer for my career. Their\n' +
      'commitment to employee growth, a positive work environment, and meaningful projects is\n' +
      "truly commendable. I'm proud to be part of this organization.",
  },
];

export const CustomerSection: FC = () => {
  return (
    <section
      className={classnames('section-container bg-gray-light py-25', styles.customerSection)}
    >
      <div className="section-content flex flex-col">
        <SectionTitle className="text-white">Satisfied Customer</SectionTitle>
        <Carousel loop showDots={false}>
          {data.map((customer, i) => {
            return (
              <div className="relative h-75 flex-[0_0_100%]" key={i}>
                <div className="flex flex-col items-center max-w-[700px] mx-auto">
                  <img className="w-15 h-15 rounded-1" src={customer.image} alt={customer.name} />
                  <p className="text-[12px] text-white opacity-50 mt-2">{customer.name}</p>
                  <p className="text-white text-[20px] text-center leading-9 mt-6">
                    {customer.blog}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};
