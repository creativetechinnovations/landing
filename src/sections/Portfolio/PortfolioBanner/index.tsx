import React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

interface BannerProps {
  title: string;
}

export const PortfolioBanner = ({ title }: BannerProps) => {
  return (
    <div className={classnames('section-container', styles.portfolioBanner)}>
      <div className="section-content relative">
        <h1 className="text-18 text-white font-bold uppercase text-center">{title}</h1>
      </div>
    </div>
  );
};
