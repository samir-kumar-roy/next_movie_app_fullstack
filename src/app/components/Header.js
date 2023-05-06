import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={'/'}><h2 className={styles.brand}>MovieNow</h2></Link>
      </div>
      <Navbar />


    </header>
  )
}

export default Header