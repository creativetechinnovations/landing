import React, { FC } from 'react';
import classNames from 'classnames';

import { SectionTitle } from '@components/Common';

const skillItems = [
  {
    title: 'Solution',
    value: 80,
  },
  {
    title: 'Creativity',
    value: 90,
  },
  {
    title: 'Finance',
    value: 75,
  },
  {
    title: 'Brand',
    value: 43,
  },
  {
    title: 'Efficiency',
    value: 82,
  },
];

interface ISkillProgressBar {
  title: string;
  value: number;
}

const SkillProgressBar = ({ title, value }: ISkillProgressBar) => {
  return (
    <div className="flex items-center w-full">
      <p className="w-25 text-3.5 text-gray-100">{title}</p>
      <div className="relative h-2 rounded-full overflow-hidden flex-1">
        <div className="bg-blue-100 h-full" style={{ width: `${value}%` }}></div>
      </div>
      <p className="w-13 text-3.5 text-gray-100 text-right">{value}%</p>
    </div>
  );
};

export const ProfessionalSkillsSection: FC = () => {
  return (
    <div className="section-container bg-gray-light py-25">
      <div className="section-content">
        <SectionTitle>Our Professional Skills</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h4 className="text-5 mb-4 text-black-light">
              Completely reconceptualize leading-edge
            </h4>
            <p className="text-gray-100 text-3.5 leading-6">
              Energistically expedite frictionless infrastructures without user friendly quality
              vectors. Distinctively communicate customer directed content for leading-edge
              web-readiness. Professionally fabricate technically sound mindshare before emerging
              paradigms. Efficiently e-enable vertical benefits after intermandated vortals.
              <br />
              <br />
              Enthusiastically innovate one-to-one technology through user-centric architectures.
              Dynamically whiteboard global processes with compelling interfaces. Globally empower
              ubiquitous growth strategies vis-a-vis cross-unit alignments. Collaboratively
              evisculate client-focused niches with impactful alignments.
            </p>
          </div>
          <div className="border border-gray-50 h-fit">
            {skillItems.map((skill, i) => (
              <div
                key={skill.title}
                className={classNames(
                  'px-5 py-3.5 border-b border-gray-50',
                  i === skillItems.length - 1 && 'border-b-0'
                )}
              >
                <SkillProgressBar {...skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
