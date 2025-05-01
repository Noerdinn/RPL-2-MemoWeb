// components/YearContent.tsx
import React from "react";

interface YearContentProps {
  images: { src: string; alt: string }[];
  quote: string;
}

export default function YearContent({ images, quote }: YearContentProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            data-aos="fade-up"
            data-aos-delay="200"
            src={img.src}
            alt={img.alt}
            width={500}
            height={500}
            className="h-auto w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
