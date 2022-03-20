import React from 'react';
import Link from 'next/link';

import styles from './navbar.module.scss';
const { main, navItem } = styles;

const Navbar = () => {
  const navItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Skills',
      href: '/skills',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ];

  return (
    <main className={main}>
      {navItems.map(item => {
        const { name, href } = item;
        return (
          <Link href={href} key={name}>
            <a className={navItem}>{name}</a>
          </Link>
        );
      })}
    </main>
  );
};

export default Navbar;
