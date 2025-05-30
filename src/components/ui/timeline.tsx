'use client';
import { useScroll, useTransform, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-0 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-black dark:text-white">
          Garis waktu <span className="text-sky-500">perjalanan kami</span>🚀
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-md md:text-lg max-w-2xl mx-auto">
          <span className="text-neutral-500 font-bold">KITA</span> telah melakukan banyak hal yang luar biasa dalam perjalanan ini. Pada akhirnya, kita telah berhasil mencapai titik akhir
          bersama-sama. Cheers 🍻
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pb-10 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-transparent dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-sky-500 border border-sky-600 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold dark:text-neutral-500 ">{item.title}</h3>
            </div>

            <div
              tabIndex={0}
              className="relative italic rounded-lg mx-3 md:mx-auto bg-white p-2 pt-6 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 focus:border-sky-500 pl-20 pr-6 md:pt-8 md:pr-8 md:pl-8 w-full transform transition-transform duration-300 focus:scale-105 hover:scale-105 focus:border-3 focus:border-dashed"
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold dark:text-neutral-500">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute will-change-transform inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Timeline;
