'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Activity, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { t, dir, locale } = useLanguage();

  return (
    <footer className={cn("bg-secondary text-white relative overflow-hidden", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-8 pt-16 md:pt-20 pb-8 md:pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20 text-start">
          {/* Brand Identity Section */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Violet Flower Logo" 
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-3xl tracking-tight leading-none font-outfit">
                  Violet Flower
                </span>
                <span className={cn(
                  "text-[9px] md:text-xs uppercase font-bold text-primary/80 mt-1.5 md:mt-2 whitespace-nowrap",
                  locale === 'en' ? "tracking-[0.15em] md:tracking-[0.2em]" : "tracking-normal"
                )}>
                  {t('tagline')}
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 leading-relaxed text-base md:text-lg font-medium max-w-sm">
              {t('hero_desc')}
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all group" aria-label="LinkedIn">
                <Activity size={18} className="text-white group-hover:scale-110 transition-transform md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all group" aria-label="Twitter">
                <ShieldCheck size={18} className="text-white group-hover:scale-110 transition-transform md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
            <h4 className="text-lg md:text-xl font-bold font-outfit tracking-wider border-b border-white/10 pb-3 md:pb-4 inline-block max-w-fit pr-6 md:pr-8">
              {t('navigation')}
            </h4>
            <nav className="flex flex-col gap-3 md:gap-4 text-start font-medium text-white/70">
              <Link href="/" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('home')}
              </Link>
              <Link href="/products" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('products')}
              </Link>
              <Link href="/services" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('services')}
              </Link>
              <Link href="/partners" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('partners')}
              </Link>
            </nav>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
            <h4 className="text-lg md:text-xl font-bold font-outfit tracking-wider border-b border-white/10 pb-3 md:pb-4 inline-block max-w-fit pr-6 md:pr-8">
              {t('legal')}
            </h4>
            <nav className="flex flex-col gap-3 md:gap-4 text-start font-medium text-white/70">
              <Link href="#" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('privacy_policy')}
              </Link>
              <Link href="#" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('terms_service')}
              </Link>
              <Link href="#" className="hover:text-primary transition-all flex items-center gap-2 group text-sm md:text-base">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" />
                {t('compliance')}
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <h4 className="text-lg md:text-xl font-bold font-outfit tracking-wider border-b border-white/10 pb-3 md:pb-4 inline-block max-w-fit pr-6 md:pr-8">
              {t('contact_us')}
            </h4>
            <div className="flex flex-col gap-5 md:gap-6 font-medium">
              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                  <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="flex flex-col text-start">
                  <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{t('location')}</span>
                  <span className="text-white/80 leading-snug text-sm md:text-base">{t('address')}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                  <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="flex flex-col text-start">
                  <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{t('support')}</span>
                  <a href="tel:+966123456789" className="text-white/80 hover:text-primary transition-colors text-base md:text-lg font-outfit" dir="ltr">
                    {t('phone_num')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm shrink-0">
                  <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                </div>
                <div className="flex flex-col text-start">
                  <span className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{t('email')}</span>
                  <a href="mailto:info@violetflower.com" className="text-white/80 hover:text-primary transition-colors text-sm md:text-base">
                    info@violetflower.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] md:text-sm font-medium text-white/40">
          <p className="text-center md:text-start leading-relaxed">
            {t('footer_copyright').replace('{year}', new Date().getFullYear().toString()).replace('{company}', locale === 'en' ? 'Violet Flower Corp.' : 'شركة البنفسجة للزهور')}
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t('sys_status')}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 uppercase tracking-tighter text-[9px] md:text-[10px] font-bold">
              v1.0.4-LTS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
