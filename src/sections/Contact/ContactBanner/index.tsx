import React, { FC } from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export const ContactBanner: FC = () => {
  return (
    <div className={classnames('section-container', styles.contactBanner)}>
      <div className="section-content relative">
        <h1 className="text-18 text-white font-bold uppercase text-center">Contact US</h1>
      </div>
    </div>
  );
};
