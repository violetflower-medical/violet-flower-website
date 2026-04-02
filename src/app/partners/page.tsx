'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award, Activity, Building2, MapPin, Zap, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

export default function GlobalPartnersPage() {
  const { t, dir, locale } = useLanguage();
  const [partners, setPartners] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPartners() {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
        
      if (!error && data && data.length > 0) {
        setPartners(data);
      } else {
        setPartners([]);
      }
      setIsLoading(false);
    }
    fetchPartners();
  }, []);

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-background", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Header section with globe background */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-24 bg-accent/30 border-b border-border overflow-hidden text-start">
        <div className={cn(
          "absolute top-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none",
          dir === 'ltr' ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        )} />
        <Globe size={400} className={cn(
          "absolute -bottom-20 opacity-5 text-primary pointer-events-none animate-spin-slow",
          dir === 'ltr' ? "-left-20" : "-right-20"
        )} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6"
            >
                <Activity size={14} /> {t('global_clinical_network')}
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 font-outfit leading-tight"
            >
                {locale === 'en' ? 'Our' : 'شبكة'} <span className="text-gradient">{t('intl_partners')}</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
            >
                {t('intl_partners_desc')}
            </motion.p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          </div>
        ) : partners.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-bold">
            {locale === 'en' ? 'No partners found.' : 'لم يتم العثور على شركاء.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {partners.map((partner, i) => (
                  <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      key={partner.id || i}
                      className="bg-background rounded-[32px] md:rounded-[40px] border border-border p-6 md:p-8 hover:border-primary/30 transition-all group hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full shadow-lg shadow-black/5 text-start"
                  >
                      <div className="flex items-center justify-between mb-6 md:mb-8">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm overflow-hidden relative">
                              {partner.logo_url ? (
                                  <Image src={partner.logo_url} alt="Logo" fill className="object-cover" />
                              ) : (
                                  <Building2 size={28} className="md:w-8 md:h-8" />
                              )}
                          </div>
                          <div className={dir === 'ltr' ? "text-right" : "text-left"}>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest border border-border">
                                  <MapPin size={10} className="text-primary" /> {locale === 'ar' ? (partner.country_ar || partner.country_en) : (partner.country_en || partner.country_ar)}
                              </div>
                          </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold mb-3 font-outfit group-hover:text-primary transition-colors leading-tight">
                          {locale === 'ar' ? (partner.name_ar || partner.name_en) : (partner.name_en || partner.name_ar)}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-6">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest leading-none">
                              {locale === 'ar' ? (partner.specialty_ar || partner.specialty_en) : (partner.specialty_en || partner.specialty_ar)}
                          </span>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-10 flex-grow font-medium">
                          {locale === 'ar' ? (partner.description_ar || partner.description_en) : (partner.description_en || partner.description_ar)}
                      </p>

                      <div className="pt-6 md:pt-8 border-t border-border flex flex-col gap-3 md:gap-4">
                          <div className="flex justify-between items-center text-[10px] md:text-xs">
                              <span className="text-muted-foreground font-semibold uppercase tracking-widest">{t('est_since')}</span>
                              <span className="font-bold text-foreground">{partner.founded_year}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] md:text-xs">
                              <span className="text-muted-foreground font-semibold uppercase tracking-widest">{t('global_status')}</span>
                              <span className="font-bold text-primary">
                                  {locale === 'ar' ? (partner.impact_ar || partner.impact_en) : (partner.impact_en || partner.impact_ar)}
                              </span>
                          </div>
                      </div>

                      <Link 
                          href={`/products?brand=${locale === 'en' ? (partner.name_en || '') : (partner.name_ar || '')}`}
                          className="mt-6 md:mt-8 py-3.5 md:py-4 rounded-xl border border-primary/20 text-primary font-bold text-xs md:text-sm text-center hover:medical-gradient hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                      >
                          {t('view_partner_prods')} <ArrowRight size={16} className={cn("transition-transform", dir === 'ltr' ? "group-hover/btn:translate-x-1" : "group-hover/btn:-translate-x-1 rotate-180")} />
                      </Link>
                  </motion.div>
              ))}
          </div>
        )}
      </section>

      {/* Why We Partner Section */}
      <section className="py-16 md:py-24 bg-muted relative border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 text-start">
            <div className="lg:col-span-1 space-y-5 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-outfit leading-tight">{locale === 'en' ? 'Our' : 'نلتزم بـ'} <br className="hidden md:block" /><span className="text-gradient">{t('strategic_criteria')}</span></h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                    {t('criteria_desc')}
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary transition-all underline underline-offset-8 text-sm md:text-base">
                    {t('partner_with_us')} <ArrowRight size={20} className={cn("", dir === 'ltr' ? "" : "rotate-180")} />
                </Link>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <CriterionCard 
                    icon={<ShieldCheck size={28} className="text-primary" />}
                    title={t('fda_ce_cert')} 
                    text={t('fda_ce_cert_desc')}
                />
                <CriterionCard 
                    icon={<Zap size={28} className="text-secondary" />}
                    title={t('rd_invest')} 
                    text={t('rd_invest_desc')}
                />
                <CriterionCard 
                    icon={<Award size={28} className="text-primary" />}
                    title={t('after_sales_legacy')} 
                    text={t('after_sales_desc')}
                />
                <CriterionCard 
                    icon={<Globe size={28} className="text-secondary" />}
                    title={t('ethical_supply_chain')} 
                    text={t('ethical_supply_chain_desc')}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Global Agency CTA */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="glass p-8 md:p-20 rounded-[32px] md:rounded-[60px] border border-border relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 medical-gradient/5 group-hover:medical-gradient/10 transition-colors pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-outfit leading-tight">{t('expanding_frontiers')}</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-medium transition-colors">
                {t('expanding_frontiers_desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-4.5 md:px-12 md:py-5 rounded-full medical-gradient text-white font-bold text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all">
                    {t('inquire_agency')}
                </Link>
                <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4.5 md:px-8 md:py-5 rounded-full glass border border-border text-muted-foreground font-bold text-sm md:text-base">
                    <Globe size={20} className="text-primary" /> {t('supported_regions')}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CriterionCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="p-8 md:p-10 glass rounded-[32px] md:rounded-[40px] border border-border hover:border-primary/20 transition-all duration-500 group text-start">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass border border-border flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform shadow-sm">
            {icon}
        </div>
        <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-outfit leading-tight">{title}</h4>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">{text}</p>
    </div>
  );
}
