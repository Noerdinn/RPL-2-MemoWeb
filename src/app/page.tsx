'use client';
import React from 'react';
import TeamSection from '@/components/ui/TeamSection';
import { cn } from '@/lib/utils';
import { FloatingNav } from '@/components/ui/floating-navbar';
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

  const kaloAdaVariable = [{}];
  return (
    <div>
      {/* Section 1 */}
      <div>
        <section id="hero-section" className="h-dvh bg-gradient-to-t from-sky-50 to-white">
          <header className="w-full z-50">
            <div className="relative  w-full">
              <FloatingNav navItems={navItems} />
            </div>

            <div>
              <img src="/assets/Logo-rpl2.png" className="m-auto md:pt-20 pt-16" width={400} height={300} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"></img>
            </div>

            <div className="text-center md:pt-24 pt-16" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700">
              <h1 className="md:text-4xl text-3xl px-4 tracking-tight font-bold text-sky-700">Selamat Datang di Kelas RPL 2</h1>
              <p className="text-pretty px-4 md:w-1/2 w-full mx-auto text-sm text-sky-900 pt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, molestias nostrum id hic consequatur perspiciatis cumque sit architecto! Consectetur temporibus, laudantium officiis
                fugiat sapiente impedit commodi? Esse vitae quis asperiores!
              </p>

              <div className="flex gap-8 justify-center pt-4">
                <div className="flex items-center gap-1">
                  <div className="relative h-16 w-16 flex items-center justify-center gap-3">
                    <div className="absolute h-14 w-14 border-2 bg-sky-500/30 border-sky-600  rounded-full border-dashed hover:animate-spin z-20" style={{ animationDuration: '10s' }}></div>
                    <div className="absolute items-center z-10">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-sky-700" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M173.19,155c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,98Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="font-medium">15 Siswa</p>
                </div>

                <div className="flex items-center gap-1">
                  <div className="relative h-16 w-16 flex items-center justify-center gap-3">
                    <div className="absolute h-14 w-14 border-2 bg-pink-300/30 border-pink-400  rounded-full border-dashed hover:animate-spin z-20" style={{ animationDuration: '10s' }}></div>
                    <div className="absolute items-center z-10">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-pink-500" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M173.19,155c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128ZM92,118a10,10,0,1,0-10-10A10,10,0,0,0,92,118Zm72-20a10,10,0,1,0,10,10A10,10,0,0,0,164,98Z"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="font-medium">18 Siswi</p>
                </div>
              </div>

              <div className="pt-6">
                <button className="py-2 px-8 bg-slate-50 border-dashed border-sky-300 hover:border-sky-400 border-3 rounded-lg text-sky-500 font-medium">Instagram</button>
              </div>
            </div>
          </header>
        </section>
      </div>
      {/* Section 2 */}
      <div></div>
      {/* Section 3 */}
      <div></div>
      {/* Section 4 */}
    </div>
  );
}
