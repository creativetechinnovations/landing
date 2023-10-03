import React from 'react';
import { FullLayout, Meta } from '@layouts';
import { portfolios } from '@constants/portfolio';
import PortfolioCard from '@components/PortfolioCard';
import { PortfolioBanner } from '@sections/Portfolio/PortfolioBanner';

const Index = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="portfolio-page pb-0">
          <PortfolioBanner title="Portfolio" />
          <div className="section-container py-25">
            <div className="section-content grid gird-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {portfolios.map((item) => (
                <PortfolioCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullLayout>
  );
};

export default Index;
