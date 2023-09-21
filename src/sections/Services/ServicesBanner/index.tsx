import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export const ServicesBanner: FC = () => {
  return (
    <div className={classnames('section-container', styles.aboutUsBanner)}>
      <div className="section-content relative">
        <h1 className="text-18 text-white font-bold uppercase text-center">Services</h1>
      </div>
    </div>
  );
};
