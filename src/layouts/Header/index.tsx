import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { CloseIcon, MenuIcon } from '@components/Common/icons';
import { Drawer } from '@components/Common';

import styles from './styles.module.css';
import useScroll from '@hooks/useScroll';

const menuList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
  {
    link: '/services',
    label: 'Services',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
];

export const Header = () => {
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const scroll = useScroll();
  console.log(scroll);
  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'fixed top-0 w-full py-7',
        'transition-all duration-500 z-[1030]',
        styles.siteHeader,
        scroll > 100 && 'bg-gray-dark !py-4'
      )}
    >
      <div className="section-content h-full flex items-center w-full justify-between">
        <div className="z-20 inline-flex justify-center items-center">
          <Link href="/" passHref className="text-sm text-primary uppercase h-10 w-50">
            <img
              className="kii-logo"
              src="/assets/images/logo.png"
              alt="Kreative Intellitech Innovations"
            />
          </Link>
        </div>
        <div className="hidden w-full md:flex justify-end items-center space-x-5">
          {menuList.map((menu) => (
            <a
              key={menu.label}
              href={menu.link}
              className="text-white text-sm transition-all flex items-center px-4 py-2 border-2 border-transparent font-semibold hover:border-white uppercase"
            >
              {menu.label}
            </a>
          ))}
        </div>
        <div className="flex md:hidden justify-end items-center h-16">
          <i
            className={classnames('cursor-pointer hover:text-white z-[60] header-link')}
            onClick={handleClick}
          >
            {showLinkDrawer ? <CloseIcon size={30} /> : <MenuIcon size={30} color="white" />}
          </i>
        </div>
        <Drawer open={showLinkDrawer} isFullWidth handleClose={handleClose} hideCloseButton={true}>
          <div className="section-content">
            <div className="main-menu pt-[120px] sm:pt-[100px] flex flex-col items-start text-primary text-right">
              {menuList.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={classnames(
                    'py-2 text-2xl font-bold transition-all duration-300 leading-tight',
                    'hover:text-red'
                  )}
                  onClick={() => setShowLinkDrawer(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};
