import Link from 'next/link';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}><Link href="/">_gallery</Link></h1>
    </header>
  )
}
