import styles from '@/app/styles/navbar.module.css';

import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <nav >
            <ul className={styles.navbarList}>
                <li><Link href={'/'} className={styles.navbarItem}>Home</Link></li>
                <li><Link href={'/about'} className={styles.navbarItem}>About</Link></li>
                <li><Link href={'/movie'} className={styles.navbarItem}>Movie</Link></li>
                <li><Link href={'/contact'} className={styles.navbarItem}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;