import React, { FC } from 'react';
import { SectionTitle } from '@components/Common';

const data = [
  {
    image: '/assets/images/Team_Indra_Wijaya.png',
    name: 'Indra Wijaya',
    job: 'COO',
  },
  {
    image: '/assets/images/Team_Vincentius_Dwi_Prasetyo.png',
    name: 'Vincentius Dwi Prasetyo',
    job: 'CEO',
  },
  {
    image: '/assets/images/Team_Kevin_Martin.png',
    name: 'Kevin Martin',
    job: 'CFO',
  },
  {
    image: '/assets/images/Team_Harry_Senjaya.png',
    name: 'Harry Senjaya',
    job: 'Director',
  },
  {
    image: '/assets/images/Team_Jan_Alexander.png',
    name: 'Jan Alexander',
    job: 'CTO',
  },
  {
    image: '/assets/images/Team_Muhammad_Rizky_Alwan.png',
    name: 'Nuhammad Rizky Alwan',
    job: 'Marketing',
  },
];

export const OurTeamSection: FC = () => {
  return (
    <section className="section-container bg-gray-light py-25">
      <div className="section-content flex flex-col">
        <SectionTitle>Our Team</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col bg-white">
              <img src={item.image} className="max-w-1/2 h-fit" alt={item.name} />
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <h5 className="font-semibold">{item.name}</h5>
                <span className="mx-1 text-[10px]">-</span>
                <p className="text-[11px] leading-1 uppercase text-gray-100 mt-0.5">{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
