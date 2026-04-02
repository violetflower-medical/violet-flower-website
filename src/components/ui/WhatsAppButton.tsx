'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { locale, dir } = useLanguage();
  const phoneNumber = '966507269928';
  const message = locale === 'ar' ? 'مرحباً شركة زهرة البنفسج، أريد الاستفسار عن..' : 'Hello Violet Flower, I would like to inquire about..';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className={cn(
        "fixed bottom-8 z-[60] flex items-center gap-3",
        dir === 'ltr' ? "right-8" : "left-8"
      )}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: dir === 'ltr' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group relative flex items-center gap-3"
        >
          {/* Label / Tooltip */}
          <div 
            className={cn(
              "hidden md:flex glass px-4 py-2 rounded-full border border-border/80 shadow-xl items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none",
              dir === 'ltr' ? "origin-right" : "origin-left"
            )}
          >
            <span className={cn(
              "text-xs font-bold whitespace-nowrap",
              locale === 'ar' ? "font-arabic" : "font-outfit uppercase tracking-wider"
            )}>
              {locale === 'ar' ? 'تواصل معنا الآن' : 'Contact Us'}
            </span>
          </div>

          {/* Pulsing Background */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity" />

          {/* Main Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:-rotate-6 active:scale-95 transition-all duration-300 relative z-10"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle size={28} className="md:w-8 md:h-8 fill-current" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-bounce" />
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
