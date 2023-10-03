import React, { FC } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';

import { Button, SectionTitle } from '@components/Common';
import { portfolios } from '@constants/portfolio';
import PortfolioCard from '@components/PortfolioCard';

import styles from './styles.module.css';

export const PortfolioSection: FC = () => {
  const router = useRouter();

  return (
    <section className={classnames('section-container py-25', styles.portfolioSection)}>
      <div className="section-content">
        <SectionTitle className="text-white">Portfolio</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolios.slice(0, 4).map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-14">
          <Button onClick={() => router.push('/portfolio')} className="border-transparent">
            Show All
          </Button>
        </div>
      </div>
    </section>
  );
};
