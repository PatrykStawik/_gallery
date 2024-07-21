"use client";
import { Loader } from 'r3dy';

import { useScreenSize } from '@/hooks/use-screen-size';
import { Canvas } from '@react-three/fiber';

import styles from './page.module.scss';

export default function Home() {
  const { height, width } = useScreenSize();
  
  return (
    <main className={styles.main}>
      <Canvas shadows style={{ height, width }}>
        <Loader theme="dark" model={3} scale={(width / height) * 0.6} />
      </Canvas>
    </main>
  );
}
