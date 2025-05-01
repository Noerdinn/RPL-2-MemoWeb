// components/TeamSection.tsx
"use client"

import { useState } from 'react';
import TeamCard from '@/components/ui/TeamCard';

const teamMembers = [
  {
    name: 'Thomas Adi Nugroho (Wali Kelas)',
    text: 'Mantap abis 🔥',
    image: '/assets/pasfoto/0.jpg',
  },
  {
    name: 'Aditya Pratama',
    text: 'jaw jaw jaw jaw jaw',
    image: '/assets/pasfoto/1.jpg',
  },
  {
    name: 'Alka Duta Arunaya',
    text: 'masa depan mu dibentuk oleh apa yang kamu lakukan hari ini, bukan besok, anjayyy',
    image: '/assets/pasfoto/2.jpg',
  },
  {
    name: 'Andini Suci Ayu Trisna',
    text: '-',
    image: '/assets/pasfoto/3.jpg',
  },
  {
    name: 'Ardita',
    text: 'Segera Hijrah karena Kiamat udah Deket',
    image: '/assets/pasfoto/4.jpg',
  },
  {
    name: 'Chalista Listiawati Putri Alamsyah',
    text: '-',
    image: '/assets/pasfoto/5.jpg',
  },
  {
    name: 'Dhian Siti Fadhilah',
    text: '-',
    image: '/assets/pasfoto/6.jpg',
  },
  {
    name: 'Dimas Prayoga',
    text: '-',
    image: '/assets/pasfoto/7.jpg',
  },
  {
    name: 'Erni Zavira Jalianti',
    text: 'akan ku hadapi semuanya,tapi bentar mau tidur dulu',
    image: '/assets/pasfoto/8.jpg',
  },
  {
    name: 'Farell Maulidzan Latansyah',
    text: 'Das Leben ist zu kurz, also tu, was du magst.',
    image: '/assets/pasfoto/9.jpg',
  },
  {
    name: 'Galih Noor Arief Wicaksono',
    text: '-',
    image: '/assets/pasfoto/10.jpg',
  },
  {
    name: 'Laila Novianti',
    text: 'hidup akan terus berjalan tanpa bertanya kita sanggup atau tidak',
    image: '/assets/pasfoto/11.jpg',
  },
  {
    name: 'Marcell Fia Dinata',
    text: 'Selalu belajar untuk menggapai impian.',
    image: '/assets/pasfoto/12.jpg',
  },
  {
    name: 'Melda Apriyanti',
    text: '-',
    image: '/assets/pasfoto/13.jpg',
  },
  {
    name: 'Muhammad Dias Arasya',
    text: 'pelajaran terbaik adalah kegagalan dan ilmu terbaik adalah pengalaman',
    image: '/assets/pasfoto/14.jpg',
  },
  {
    name: 'Muhammad Rizki Fadillah',
    text: '-',
    image: '/assets/pasfoto/15.jpg',
  },
  {
    name: 'Nahla Resiyanti',
    text: 'semangat marcel nurdin radit sukses ya projeknyaa',
    image: '/assets/pasfoto/16.jpg',
  },
  {
    name: 'Nayla Zahra Jauhany',
    text: '-',
    image: '/assets/pasfoto/17.jpg',
  },
  {
    name: 'Nurdiansah',
    text: '-',
    image: '/assets/pasfoto/18.jpg',
  },
  {
    name: 'Putri Juwita Ramdhani',
    text: 'selalu berusaha dan tidak mudah pantang menyerah untuk sesuatu yg ingin kita raih (berkata dengan nada bernadya)',
    image: '/assets/pasfoto/19.jpg',
  },
  {
    name: 'Radithya Mahesa Syabil',
    text: '-',
    image: '/assets/pasfoto/20.jpg',
  },
  {
    name: 'Reva Nur Malasari',
    text: '-',
    image: '/assets/pasfoto/21.jpg',
  },
  {
    name: 'Ririn Riyanti Hakiki',
    text: 'lanjutkan bosss',
    image: '/assets/pasfoto/22.jpg',
  },
  {
    name: 'Sadiyyah Ajrin Azzahra',
    text: 'semangat menempuh kehidupan sesungguhnya',
    image: '/assets/pasfoto/23.jpg',
  },
  {
    name: 'Setia Novanto Sanosi',
    text: 'Semangat, jangan pantang menyerah',
    image: '/assets/pasfoto/24.jpg',
  },
  {
    name: 'Shahla Rizki Padillah',
    text: '-',
    image: '/assets/pasfoto/25.jpg',
  },
  {
    name: 'Siska Dwi Anggraeni',
    text: 'manusia itu tempatnya salah, tapi anehnya ada aja yang sibuk nyari kesalahan orang lain biar keliatan paling bener, perfect, bersih. padahal ngaku salah itu bukan kelemahan, tapi bentuk dewasa. ga usah cape ngejelasin ke orang yang cuma pengen nunjuk. tetep jadi versi terbaik, meski mereka sibuk main hakim sendiri.',
    image: '/assets/pasfoto/26.jpg',
  },
  {
    name: 'Suci Mulyani',
    text: '-',
    image: '/assets/pasfoto/27.jpg',
  },
  {
    name: 'Tiwi Pebriyanti',
    text: '-',
    image: '/assets/pasfoto/28.jpg',
  },
  {
    name: 'Yan Mulyana',
    text: 'jangan lupa makan',
    image: '/assets/pasfoto/29.jpg',
  },
  {
    name: 'Yohannes Anggi Sitinjak',
    text: 'jangan lupa makan',
    image: '/assets/pasfoto/30.jpg',
  },
  {
    name: 'Yuke Pratiwi Aryani',
    text: 'harus tetep hidup biar bisa selalu punya harapan dan impian 🥺🥺🥺',
    image: '/assets/pasfoto/31.jpg',
  },
  {
    name: 'Dede Sanusi',
    text: '-',
    image: '/assets/pasfoto/32.jpg',
  },
  {
    name: 'Salma Balqis Naila Syifa',
    text: 'jangan lupa bernafas ',
    image: '/assets/pasfoto/33.jpg',
  },
];

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 6);

  return (
    <div className="py-10 md:px-8 px-4 relative">
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
