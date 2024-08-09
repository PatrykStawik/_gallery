"use client";
import {
  useEffect,
  useState,
} from 'react';

import { Loader } from 'r3dy';

import { useScreenSize } from '@/hooks/use-screen-size';
import { Canvas } from '@react-three/fiber';

import styles from './page.module.scss';

type IAxis = "z" | "x" | "y";

export default function Home() {
  const { height, width } = useScreenSize();
  const [axisIndex, setAxisIndex] = useState<number>(0);
  const axes: IAxis[] = ["x", "y", "z"];
  const axis = axes[axisIndex];

  const setScale = () => {
    if (width > height) {
      return (width / height) * 0.6;
    } else {
      return (width / height) * 2;
    }
  };
  
  useEffect(() => {
    const id = setInterval(() => {
      setAxisIndex((prevIndex) => (prevIndex + 1) % axes.length);
    }, 5000);

    return () => clearInterval(id);
  }, [axes.length]);

  return (
    <main className={styles.main}>
      <Canvas shadows style={{ height, width }}>
        <Loader
          theme="dark"
          model={3}
          scale={setScale()}
          rotationAxis={axis}
        />
      </Canvas>
    </main>
  );
}
