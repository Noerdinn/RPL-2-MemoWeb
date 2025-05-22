// components/YearContent.tsx
import React from "react";
import Image from "next/image";

interface YearContentProps {
  images: { src: string; alt: string }[];
  quote: string;
}

export default function YearContent({ images, quote }: YearContentProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {images.map((img, i) => (
          <Image
            loading="lazy"
            key={i}
            src={img.src}
            alt={img.alt}
            width={500}
            height={500}
            data-aos="fade-up"
            data-aos-delay="200"
            className="h-auto w-full object-cover shadow-[...your_shadow_class]"
          />
        ))}
      </div>
      <br />
      <blockquote
        data-aos="zoom-in"
        data-aos-delay="300"
        className="mb-4 text-md font-normal text-neutral-600 md:text-lg dark:text-neutral-200"
      >
        {quote}
      </blockquote>
    </div>
  );
}
