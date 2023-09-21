import React, { FC } from 'react';
import { SectionTitle } from '@components/Common';

const clients = [
  '/assets/images/logo-client-1.jpg',
  '/assets/images/logo-client-2.jpg',
  '/assets/images/logo-client-3.jpg',
  '/assets/images/logo-client-4.jpg',
  '/assets/images/logo-client-5.jpg',
  '/assets/images/logo-client-6.jpg',
];

export const ClientsSection: FC = () => {
  return (
    <section className="section-container bg-white py-25">
      <div className="section-content flex flex-col">
        <SectionTitle>Our Clients</SectionTitle>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {clients.map((src, i) => (
            <div
              key={i}
              className="flex justify-center cursor-pointer opacity-50 hover:opacity-100 transition-all duration-700"
            >
              <img src={src} className="" alt={`Client ${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
