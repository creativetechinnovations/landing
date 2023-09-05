import React, { MouseEventHandler, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { CloseIcon, MenuIcon } from '@components/Common/icons';
import { Button, Drawer } from '@components/Common';

import styles from './styles.module.css';

const menuList = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/product',
    label: 'Product',
  },
  {
    link: '/pricing-plans',
    label: 'Pricing Plans',
  },
  {
    link: '/contact',
    label: 'Contact',
  },
  {
    link: '/login',
    label: 'Login',
  },
];

export const Header = () => {
  const [showLinkDrawer, setShowLinkDrawer] = useState(false);

  const handleClick = () => {
    setShowLinkDrawer((prevState) => !prevState);
  };

  const handleClose = () => setShowLinkDrawer(false);

  return (
    <header
      className={classnames(
        'w-full py-8',
        'transition-all duration-500',
        styles.siteHeader
      )}
    >
      <div className="h-full flex items-center w-full justify-between">
        <div className="z-20 inline-flex justify-center items-center ml-6 md:ml-12 py-2 px-3 bg-white">
          <Link href="/" passHref className="text-sm text-primary uppercase">
            <div className="flex">
              <img className="w-12" src="/assets/icons/logo.svg" alt="KII" />
              <div className="ml-2">
                <h5 className="text-xl font-bold">WeDu</h5>
                <span className="whitespace-nowrap">Communicate. Collaborate. Create.</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden w-full md:flex justify-end items-center h-16 pr-10">
          {menuList.map((menu) => (
            <a
              key={menu.label}
              href={menu.link}
              className="text-black transition-all flex items-center md:ml-5 lg:ml-10"
            >
              { menu.label === 'Login' && <img className="w-8 mr-4" src="/assets/icons/user_avatar.svg" alt="Login" />}
              {menu.label}
            </a>
          ))}
          <Button color="secondary" className="ml-10">Get Started</Button>
        </div>
        <div className="flex md:hidden justify-end items-center h-16 pr-10">
          <i
            className={classnames('cursor-pointer hover:text-primary z-[60] header-link')}
            onClick={handleClick}
          >
            {showLinkDrawer ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
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
