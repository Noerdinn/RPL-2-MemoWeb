'use client';
import React from 'react';
import TeamSection from '@/components/ui/TeamSection';
import { cn } from '@/lib/utils';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { Timeline } from '@/components/ui/timeline';
import YearContent from '@/components/ui/YearContent';
import Footer from '@/components/ui/Footer';
import CountUp from 'react-countup';
export default function App() {
  const navItems = [
    {
      name: 'Home',
      link: '#hero-section',
    },
    {
      name: 'Timelime',
      link: '#timeline',
    },
    {
      name: 'Profile',
      link: '#profile',
    },
    {
      name: 'Arsip',
      link: '#arsip',
    },
  ];

  const images = [
    'img10.jpg',
    'img2.jpg',
    'img1.jpg',
    'img4.jpg',
    'img23.jpg',
    'img5.jpg',
    'img3.jpg',
    'img18.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img6.jpg',
    'img11.jpg',
    'img12.jpg',
    'img13.jpg',
    'img14.jpg',
    'img19.jpg',
    'img16.jpg',
    'img17.jpg',
    'img15.jpg',
    'img21.jpg',
    'img20.jpg',
    'img22.jpg',
  ];

  const timelineData = [
    {
      title: '2022',
      images: [
        { src: '/assets/timeline/pentas2022.jpg', alt: 'Pentas 2022' },
        { src: '/assets/timeline/BK2022.jpg', alt: 'BK 2022' },
        { src: '/assets/timeline/hariguru2022.jpg', alt: 'Hari Guru 2022' },
      ],
      quote: '“Di tahun ini, kita melangkah dengan penuh ketidakpastian, namun setiap tawa, air mata, dan perjuangan menjadi fondasi mimpi yang tak pernah padam.🔥”',
    },
    {
      title: '2023',
      images: [
        { src: '/assets/timeline/BK2023.jpg', alt: 'BK2023' },
        { src: '/assets/timeline/upacara2023.jpg', alt: 'Upacara 2023' },
        { src: '/assets/timeline/postud2023.jpg', alt: 'Postud 2023' },
        { src: '/assets/timeline/pentas2023.jpg', alt: 'Pentas 2023' },
        { src: '/assets/timeline/pakfajar2023.jpg', alt: 'Pak Fajar 2023' },
      ],
      quote: '“Walaupun di tahun ini waktu masih enggan berbisik tentang perpisahan, setiap detik bersama teman, guru, dan kenangan kecil mulai terukir abadi.🗺️”',
    },
    {
      title: '2024',
      images: [
        { src: '/assets/timeline/papajar2024.jpg', alt: 'Papajar 2024' },
        { src: '/assets/timeline/perwalianpkl2024.jpg', alt: 'Perwalian PKL 2024' },
      ],
      quote: '“Di antara hiruk-pikuk tujuan dan tekanan, kita menemukan makna sejati dari kebersamaan—setiap canda, dan mimpi yang kita rajut bersama menjadi kenangan terbesar.📍”',
    },
    {
      title: '2025',
      images: [
        { src: '/assets/timeline/bukber2025.jpg', alt: 'Bukber 2025' },
        { src: '/assets/timeline/ukk2025.jpg', alt: 'UKK/UJIKOM 2025' },
      ],
      quote: '“Kini kita berdiri di ujung perjalanan sekolah, menyadari bahwa setiap langkah kita di sini adalah awal dari masa lampau yang akan dikenang selamanya.🏁”',
    },
  ];

  const data = timelineData.map((item) => ({
    title: item.title,
    content: <YearContent images={item.images} quote={item.quote} />,
  }));
  return (
    <div>
      {/* Section 1 */}
      <div>
        <section id="hero-section" className="relative min-h-dvh bg-gradient-to-t from-sky-50 to-transparent">
          <div
            className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(56, 189, 248, 0.1) 2px, transparent 1px),
                linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 2px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
            }}
          />
          <div className="h-dvh w-full flex items-center">
            <header className="w-full">
              <div className="relative  w-full">
                <FloatingNav navItems={navItems} />
              </div>

              <div>
                <img src="/assets/Logo-rpl2.png" className="m-auto" width={400} height={300} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></img>
              </div>

              <div className="text-center md:pt-20 pt-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
                <h1 className="md:text-4xl text-3xl px-4 tracking-tight font-bold text-sky-700">Selamat Datang di Kelas RPL 2</h1>
                <p className="text-pretty px-4 md:w-1/2 w-full mx-auto text-sm text-sky-900 pt-3">
                  Tempat kumpulnya anak-anak keren yang suka ngoding, ngulik teknologi, dan bikin project seru bareng. Di sini kita belajar bareng, saling support, dan siap jadi programmer masa depan!
                </p>

                <div className="flex gap-8 justify-center pt-4">
                  <div className="flex items-center gap-1">
                    <div className="relative h-16 w-16 flex items-center justify-center gap-3">
                      <div
                        tabIndex={0}
                        className="absolute h-14 w-14 border-2 bg-sky-500/30 border-sky-600  rounded-full border-dashed  md:hover:animate-spin focus:animate-spin z-20"
                        style={{ animationDuration: '10s' }}
                      ></div>
                      <div className="absolute items-center z-10">
                        <p className="font-medium text-sky-700 text-xl">
                          <CountUp start={1} end={15} duration={5} />
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">Siswa</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="relative h-16 w-16 flex items-center justify-center gap-3">
                      <div
                        tabIndex={0}
                        className="absolute h-14 w-14 border-2 bg-pink-300/30 border-pink-400  rounded-full border-dashed md:hover:animate-spin focus:animate-spin z-20"
                        style={{ animationDuration: '10s' }}
                      ></div>
                      <div className="absolute items-center z-10">
                        <p className="font-medium text-pink-500 text-xl">
                          <CountUp start={1} end={18} duration={5} />
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">Siswi</p>
                  </div>
                </div>

                {/* <div className="pt-6">
                  <a
                    href="https://www.instagram.com/class.xiirpl2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="py-2 px-8 bg-slate-50 border-dashed border-sky-300 hover:border-sky-400 border-3 rounded-lg text-sky-500 font-semibold"
                  >
                    Instagram
                  </a>
                </div> */}
                <div className="pt-8">
                  <a
                    href="https://www.instagram.com/class.xiirpl2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="relative py-2 px-20 bg-slate-50 border-sky-600 border-2 rounded-lg text-sky-600 font-semibold overflow-hidden group flex items-center justify-center mx-auto w-fit transition-all ease-in-out duration-1000"
                  >
                    <span className="absolute bg-sky-500 w-full h-0 left-0 group-hover:h-full group-active:h-full transition-all ease-in-out md:duration-500 duration-300"></span>
                    <span className="relative group-hover:text-slate-50 group-active:text-slate-50 transition-all ease-in-out md:duration-500 duration-300">Instagram</span>
                  </a>
                </div>
              </div>
            </header>
          </div>
        </section>
      </div>
      {/* Section 2 */}
      <div id="timeline">
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
      {/* Section 3 */}
      <div>
        <section
          id="profile"
          className="pt-8 md:px-8 px-4 bg-white dark:bg-neutral-950"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-black dark:text-white">
            Apa kata <span className="text-sky-500">mereka?🔥</span>
          </h2>
          <p className="text-neutral-700 mb-8 dark:text-neutral-300 text-md md:text-lg max-w-2xl mx-auto">
            Mereka telah merasakan langsung dampak luar biasa dari apa yang kami lakukan. Inilah suara dan pengalaman nyata dari mereka yang telah menjadi bagian dari perjalanan ini.
          </p>
          <TeamSection />
        </section>
      </div>
      {/* Section 4 */}
      <div>
        <section id="arsip" className="py-8 mt-8 bg-slate-50">
          <div className="w-full pb-8 px-8 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold text-black dark:text-white">
              <span className="text-sky-500">Arsip </span> Kita🖼️
            </h2>
            <p className="text-neutral-700 mb-4 dark:text-neutral-300 text-md md:text-lg max-w-2xl mx-auto text-center">
              Ada tawa di balik setiap potret, ada cerita di balik setiap ekspresi. Arsip ini bukan cuma gambar, ini memori yang kita bentuk bareng.
            </p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 md:px-8 px-4">
            {images.map((img, index) => (
              <div tabIndex={0} className="relative overflow-hidden rounded-lg group" key={index} data-aos="fade-up" data-aos-duration="700" data-aos-delay={index * 50}>
                <div className="absolute group-hover:opacity-100 group-focus:opacity-100 opacity-0 md:h-40 h-30 md:w-40 w-30 -top-20 -left-20 bg-black/35 blur-3xl z-[100000] transition-all duration-1000"></div>

                <div className="absolute group-hover:opacity-100 group-focus:opacity-100 opacity-0 md:h-40 h-30 md:w-40 w-30 -bottom-20 -right-20 bg-black/40 blur-3xl z-[100000] transition-all duration-1000"></div>

                <img
                  loading="lazy"
                  src={`/assets/arsip/${img}`}
                  className="group-hover:scale-105 transition-all w-full group-focus:scale-105 md:duration-1000 duration-500 ease-in-out select-none"
                  style={{ animationDuration: '0.1s', transitionProperty: 'all', animationDelay: 'unset' }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
