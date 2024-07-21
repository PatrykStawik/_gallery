import Link from 'next/link';

import { getClient } from '@/lib/client';
import { moviesTitles } from '@/queries/movies';

import styles from './sidebar.module.scss';

export const Sidebar = async () => {
  const { data } = await getClient().query({ query: moviesTitles });

  return (
    <li className={styles.sidebar}>
      {data.page.edges.map(({node}) => <ul key={node.id}><Link href={node.title.replace( /\s/g, '_')}>{node.title}</Link></ul>)}
    </li>
  )
}
