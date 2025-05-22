'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { cn } from '@/lib/utils';
import { Music, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [showMusicControls, setShowMusicControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    { title: 'Toby Fox - Undertale', src: '/assets/lagu/Undertale.mp3' },
    { title: 'C418 - Moog City', src: '/assets/lagu/moog-city.mp3' },
  ];

  // Scroll event for showing or hiding the navbar
  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        setShowMusicControls(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setShowMusicControls(false);
        }
      }
    }
  });

  const notifyTrack = (index: number) => {
    const trackTitle = tracks[index].title || 'Unknown Track';
    toast.info(`Now playing: ${trackTitle}`, {
      icon: <Music className="text-sky-700" />,
    });
  };

  const notifyPause = () => {
    const trackTitle = tracks[currentTrackIndex].title || 'Unknown Track';
    toast.warning(`Paused: ${trackTitle}`, {
      icon: <Pause className="text-yellow-500" />,
    });
  };

  const toggleMusicControls = () => {
    setShowMusicControls(!showMusicControls);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      notifyPause();
    } else {
      audioRef.current.play();
      notifyTrack(currentTrackIndex);
    }
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = tracks[nextIndex].src;
      setIsPlaying(true);
      notifyTrack(nextIndex);
    }
  };

  const skipBack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = tracks[prevIndex].src;
      setIsPlaying(true);
      notifyTrack(prevIndex);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].src}
        onEnded={skipForward}
        onCanPlay={() => {
          if (isPlaying && audioRef.current) {
            audioRef.current.play();
          }
        }}
      />

      {/* Floating Navigation Bar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex max-w-fit fixed top-10 left-1/2 -translate-x-1/2 border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow z-[5000] p-8 py-2 items-center justify-center space-x-4 hover:border-sky-400 border-2 transition-all',
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 items-center flex space-x-1 text-sky-700 dark:hover:text-neutral-300 hover:text-sky-500 font-semibold'
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Music Toggle Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMusicControls}
            className="fixed sm:top-10 top-24 right-10 z-[5001] bg-white dark:bg-black border-2 hover:border-sky-400 rounded-full p-3 shadow hover:bg-sky-100 dark:hover:bg-neutral-800"
          >
            <motion.div
              animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [1, 0.8, 1] } : { scale: 1, opacity: 1 }}
              transition={isPlaying ? { duration: 1, repeat: Infinity, ease: 'easeInOut' } : {}}
            >
              {isPlaying ? (
                <div className="loader">
                  <svg id="wave" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
                    <title>Audio Wave</title>
                    <path id="Line_1" data-name="Line 1" d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z" />
                    <path id="Line_2" data-name="Line 2" d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z" />
                    <path id="Line_3" data-name="Line 3" d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z" />
                    <path id="Line_4" data-name="Line 4" d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z" />
                    <path id="Line_5" data-name="Line 5" d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z" />
                    <path id="Line_6" data-name="Line 6" d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z" />
                    <path id="Line_7" data-name="Line 7" d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z" />
                    <path id="Line_8" data-name="Line 8" d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z" />
                    <path id="Line_9" data-name="Line 9" d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z" />
                  </svg>
                </div>
              ) : (
                <Music className="w-5 h-5 text-sky-700 dark:text-white" />
              )}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Music Controls */}
      <AnimatePresence>
        {showMusicControls && visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed sm:top-[4.9rem] top-[8.4rem] right-[2.75rem] flex flex-col items-center justify-center space-y-4 bg-white dark:bg-black border-2 hover:border-sky-400 rounded-b-full px-2 py-4 z-[4990] shadow-md"
          >
            <button onClick={skipBack} className="text-sky-700 dark:text-white hover:text-sky-500">
              <SkipBack className="w-5 h-5" />
            </button>
            <button onClick={togglePlayPause} className="text-sky-700 dark:text-white hover:text-sky-500">
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button onClick={skipForward} className="text-sky-700 dark:text-white hover:text-sky-500">
              <SkipForward className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        toastClassName="toastify-toast"
      />
    </>
  );
};
export default FloatingNav;