'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t, dir } = useLanguage();
  const [settings, setSettings] = useState<any>(null);

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

  useEffect(() => {
    async function fetchSettings() {
      const { data } = await supabase.from('site_settings').select('*').limit(1).single();
      if (data) {
        setSettings(data);
      }
    }
    fetchSettings();
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  let companyName = settings ? (locale === 'ar' ? (settings.company_name_ar || 'زهرة البنفسج') : (settings.company_name_en || 'Violet Flower')) : (locale === 'ar' ? 'زهرة البنفسج' : 'Violet Flower');
  if (locale === 'en' && !companyName.toLowerCase().includes('company')) companyName += ' Company';
  if (locale === 'ar' && !companyName.includes('شركة')) companyName = 'شركة ' + companyName;

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
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
              <Image 
                src="/logo.png" 
                alt="Violet Flower Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-start py-1 min-w-0">
              <span className="font-bold text-base sm:text-lg md:text-2xl tracking-tight leading-none text-secondary group-hover:text-primary transition-colors font-outfit truncate sm:whitespace-normal">
                {companyName}
              </span>
              <span className={cn(
                "text-[7px] sm:text-[9.5px] md:text-[10px] font-bold text-muted-foreground mt-1 max-w-[140px] sm:max-w-[200px] md:max-w-[300px] leading-snug opacity-80 line-clamp-2",
                locale === 'en' ? "tracking-wide" : "tracking-normal"
              )}>
                {t('tagline')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-[13px] uppercase tracking-[0.2em] font-bold transition-all hover:text-primary relative py-2 font-outfit px-2 group flex flex-col items-center',
                      isActive ? 'text-primary' : 'text-foreground/70'
                    )}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(142,93,168,0.5)]"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    <div className="absolute -bottom-1 w-0 h-0.5 bg-primary/20 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-6">
              {/* Professional Language Switcher Slider */}
              <div 
                className="relative h-10 w-32 glass border border-border/80 rounded-full p-1 flex items-center cursor-pointer shadow-sm hover:border-primary/30 transition-all select-none"
                onClick={toggleLanguage}
              >
                <motion.div 
                  className="absolute h-8 w-[58px] bg-primary rounded-full shadow-md z-0"
                  animate={{ x: locale === 'en' ? 62 : 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className={cn(
                  "relative z-10 flex-1 text-center text-[10px] font-bold uppercase transition-colors duration-300",
                  locale === 'ar' ? "text-white" : "text-muted-foreground"
                )}>
                  AR
                </div>
                <div className={cn(
                  "relative z-10 flex-1 text-center text-[10px] font-bold uppercase transition-colors duration-300",
                  locale === 'en' ? "text-white" : "text-muted-foreground"
                )}>
                  EN
                </div>
              </div>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full medical-gradient text-white text-[13px] uppercase tracking-wider font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1.5 active:translate-y-0"
              >
                {t('get_quote')}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button Container */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Language Toggle */}
            <div 
              className="relative h-8 w-16 glass border border-border rounded-full p-0.5 flex items-center cursor-pointer shadow-sm select-none"
              onClick={toggleLanguage}
            >
              <motion.div 
                className="absolute h-7 w-[30px] bg-primary rounded-full shadow-sm z-0"
                animate={{ x: locale === 'en' ? 29 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <div className={cn(
                "relative z-10 flex-1 text-center text-[8px] font-black tracking-tighter uppercase transition-colors duration-300",
                locale === 'ar' ? "text-white" : "text-muted-foreground"
              )}>AR</div>
              <div className={cn(
                "relative z-10 flex-1 text-center text-[8px] font-black tracking-tighter uppercase transition-colors duration-300",
                locale === 'en' ? "text-white" : "text-muted-foreground"
              )}>EN</div>
            </div>

            {/* Menu Toggle Button */}
            {!isOpen && (
              <button
                className="p-2 text-foreground hover:bg-accent rounded-full transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            )}
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
              initial={{ x: dir === 'ltr' ? '-100%' : '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: dir === 'ltr' ? '-100%' : '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 35, stiffness: 400 }}
              className={cn(
                "fixed top-0 bottom-0 w-[78%] max-w-[320px] bg-white z-[55] lg:hidden shadow-[20px_0_60px_-15px_rgba(0,0,0,0.15)] flex flex-col p-8 overflow-y-auto no-scrollbar",
                dir === 'ltr' ? "left-0" : "right-0"
              )}
            >
              <div className="flex items-center justify-between mb-12">
                <div className="relative w-14 h-14">
                  <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-secondary border border-border mt-2"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'py-6 text-2xl font-bold flex items-center justify-between group border-b border-border/40 last:border-0 transition-all active:scale-[0.98]',
                        isActive ? 'text-primary' : 'text-foreground/90',
                        locale === 'ar' ? 'font-arabic text-3xl' : 'font-outfit'
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-4">
                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight 
                        size={24} 
                        className={cn(
                          "text-primary/40 group-hover:text-primary transition-all duration-300", 
                          dir === 'rtl' ? "rotate-180 group-hover:-translate-x-2" : "group-hover:translate-x-2",
                          isActive && "text-primary opacity-100"
                        )} 
                      />
                    </Link>
                  );
                })}
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
