import { FC } from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

type TeamCardProps = {
  name: string;
  text: string;
  image: string;
};

const TeamCard: FC<TeamCardProps> = ({ name, text, image }) => {
  return (
    <div
      tabIndex={0}
      className="relative group bg-white rounded-xl p-4 w-full max-w-md border-2 border-gray-300 hover:border-blue-400 focus:border-blue-400 transition-all duration-300 text-gray-800"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Ikon Quote di atas tengah */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500 group-hover:animate-spin group-focus:animate-spin z-15"
            style={{ animationDuration: '10s' }}
          />
          <Quote className="w-12 h-12 text-blue-500 bg-blue-100 rounded-full p-3 z-10" />
        </div>
      </div>

      {/* Isi kartu */}
      <div className="flex items-start gap-4 mt-4">
        {/* Gambar 3x4 */}
        <div className="w-24 h-32 rounded-lg overflow-hidden flex-shrink-0 relative">
          <Image
            src={image}
            alt={name}
            width={96}     // 24 * 4
            height={128}   // 32 * 4
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Kutipan */}
        <div className="flex-1 max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <p className="italic text-sm text-gray-700">&quot;{text}&quot;</p>
        </div>
      </div>

      {/* Nama bawah */}
      <div className="flex items-center justify-between mt-4 w-full border-t-2 pt-2 px-2">
        <p className="font-semibold text-sm">{name}</p>
      </div>
    </div>
  );
};

export default TeamCard;
