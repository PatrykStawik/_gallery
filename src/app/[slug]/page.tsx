"use client";
import 'swiper/css';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { EffectCreative } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { movieByTitle } from '@/queries/movies';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import styles from './page.module.scss';

export default function GalleryItem() {
  const pathname = usePathname();

  const { data } = useSuspenseQuery(movieByTitle, {
    variables: { title: pathname.substring(1).split("_").join(" ") },
  });

  return (
    <main className={styles.main}>
      <div className={styles.main__sliderWrapper}>
      {data ? (
        <Swiper
        autoplay={{delay: 200}}
        grabCursor={true}
        effect='creative'
        modules={[EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        >
          {data.movies?.images.map((i) => (
            <SwiperSlide key={i.id} className={styles.main__sliderSlide}>
              <Image
                objectFit='contain'
                fill
                src={i.url}
                alt={data.movies?.title ?? ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
      </div>
    </main>
  );
}
