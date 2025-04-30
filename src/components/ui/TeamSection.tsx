// components/TeamSection.tsx
"use client"

import { useState } from 'react';
import TeamCard from '@/components/ui/TeamCard';

const teamMembers = [
  {
    name: 'Nama Lengkap 1',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 2',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 3',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 4',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 5',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 6',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 7',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 8',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
  {
    name: 'Nama Lengkap 9',
    role: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor est ab unde, dolorem libero quidem.',
    image: '/photo.jpg',
  },
];

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 6);

  return (
    <div className="py-10 px-4 bg-gray-50 relative">
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {visibleMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>

        {/* Gradient overlay saat belum show all */}
        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Tombol toggle */}
      {teamMembers.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 bg-sky-500 text-white text-sm rounded hover:bg-sky-600 transition"
          >
            {showAll ? 'Tutup' : 'Lihat Lainnya'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
