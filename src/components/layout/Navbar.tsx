'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t, dir } = useLanguage();

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('products'), href: '/products' },
    { name: t('services'), href: '/services' },
    { name: t('partners'), href: '/partners' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      dir={dir}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'glass py-2 border-border/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent py-4 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 md:gap-5 group flex-shrink-0">
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
              <Image 
                src="/logo.png" 
                alt="Violet Flower Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-start py-1">
              <span className="font-bold text-xl md:text-2xl tracking-tight leading-none text-secondary group-hover:text-primary transition-colors font-outfit">
                Violet Flower
              </span>
              <span className={cn(
                "text-[9px] md:text-[10px] uppercase font-bold text-primary mt-1 md:mt-2 whitespace-nowrap opacity-90",
                locale === 'en' ? "tracking-[0.25em]" : "tracking-normal"
              )}>
                {t('tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[13px] uppercase tracking-widest font-bold transition-all hover:text-primary relative py-2 font-outfit px-1',
                    pathname === link.href ? 'text-primary' : 'text-foreground/70'
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/80 hover:border-primary/40 hover:bg-white/80 transition-all text-xs font-bold text-foreground/80 group shadow-sm"
                aria-label="Toggle Language"
              >
                <Languages size={14} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="min-w-[50px]">{locale === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Link
                href="/contact"
                className="px-7 py-3 rounded-full medical-gradient text-white text-[13px] uppercase tracking-wider font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 active:translate-y-0"
              >
                {t('get_quote')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full glass border border-border text-foreground/80 font-bold text-[10px] uppercase"
              aria-label="Toggle Language"
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              className="p-2 text-foreground hover:bg-accent rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay & Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-secondary/40 backdrop-blur-md z-[51] lg:hidden"
            />
            <motion.div
              initial={{ x: dir === 'ltr' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: dir === 'ltr' ? '-100%' : '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 bottom-0 w-[85%] max-w-sm bg-background z-[52] lg:hidden shadow-[20px_0_60px_-15px_rgba(0,0,0,0.15)] flex flex-col p-8 overflow-y-auto no-scrollbar",
                dir === 'ltr' ? "left-0" : "right-0"
              )}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="relative w-14 h-14">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary border border-border mt-2"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'py-6 text-2xl font-bold flex items-center justify-between group border-b border-border/40 last:border-0 transition-all active:scale-[0.98]',
                      pathname === link.href ? 'text-primary' : 'text-foreground/90',
                      locale === 'ar' ? 'font-arabic text-3xl' : 'font-outfit'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ChevronRight 
                      size={24} 
                      className={cn(
                        "text-primary/40 group-hover:text-primary transition-all duration-300", 
                        dir === 'rtl' ? "rotate-180 group-hover:-translate-x-2" : "group-hover:translate-x-2"
                      )} 
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10 flex flex-col gap-6">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-5 rounded-2xl glass border border-border font-bold text-lg flex items-center justify-center gap-4 text-foreground/80 active:bg-accent transition-all"
                >
                  <Languages size={24} className="text-primary" />
                  <span className={locale === 'ar' ? 'font-arabic' : 'font-outfit'}>
                    {locale === 'en' ? 'العربية' : 'English'}
                  </span>
                </button>

                <Link
                  href="/contact"
                  className="w-full py-5 text-center rounded-2xl medical-gradient text-white font-bold text-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  {t('get_quote')}
                </Link>
                
                <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-widest py-4">
                  © {new Date().getFullYear()} Violet Flower Corp.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
