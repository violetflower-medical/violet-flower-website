'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Settings2, 
  Wrench, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Clock, 
  BookOpen 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesPage() {
  const { t, dir, locale } = useLanguage();

  const services = [
    {
      title: t('strat_sourcing'),
      desc: t('strat_sourcing_desc'),
      icon: <ShoppingBag className="w-12 h-12" />,
      color: "primary",
      features: [
        t('feat_quality_audit'),
        t('feat_logistics'),
        t('feat_compliance'),
        t('feat_negotiations')
      ]
    },
    {
      title: t('turnkey_projects'),
      desc: t('turnkey_desc'),
      icon: <Settings2 className="w-12 h-12" />,
      color: "secondary",
      features: [
        t('feat_design'),
        t('feat_shielding'),
        t('feat_commissioning'),
        t('feat_workflow')
      ]
    },
    {
      title: t('tech_support_training'),
      desc: t('tech_support_desc'),
      icon: <Wrench className="w-12 h-12" />,
      color: "primary",
      features: [
        t('feat_helpline'),
        t('feat_courses'),
        t('feat_prev_maint'),
        t('feat_remote_diag')
      ]
    },
    {
      title: t('intl_representation'),
      desc: t('intl_rep_desc'),
      icon: <Globe className="w-12 h-12" />,
      color: "secondary",
      features: [
        t('feat_moh'),
        t('feat_hubs'),
        t('feat_exhibition'),
        t('feat_warehouse')
      ]
    }
  ];

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-background", locale === 'ar' ? 'font-arabic' : '')} dir={dir}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 relative overflow-hidden bg-accent/30 border-b border-border">
        <div className={cn(
          "absolute top-0 w-1/3 h-full medical-gradient/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none",
          dir === 'ltr' ? 'right-0' : 'left-0'
        )} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} /> {t('clinical_ecosystem')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 font-outfit leading-tight"
          >
            {locale === 'en' ? 'Global' : 'الخدمات'} <span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTight">{t('global_service_excellence')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-bold"
          >
            {t('services_hero_desc')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid (Specific 4 sections) */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i}
              className="bg-background rounded-[28px] md:rounded-[48px] p-8 md:p-14 border border-border hover:border-primary/20 group transition-all duration-500 shadow-xl shadow-black/5 relative overflow-hidden flex flex-col h-full text-start"
            >
              {/* Abstract decorative shape */}
              <div className={cn(
                "absolute -top-10 w-40 h-40 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity",
                dir === 'ltr' ? '-right-10' : '-left-10',
                service.color === "primary" ? "bg-primary" : "bg-secondary"
              )} />
              
              <div className={cn(
                "w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass mb-6 md:mb-10 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm",
                service.color === "primary" ? "text-primary border-primary/20" : "text-secondary border-secondary/20"
              )}>
                {service.icon}
              </div>

              <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-outfit group-hover:text-primary transition-colors md:pr-8 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-grow font-bold">
                {service.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12 pt-8 border-t border-border">
                {service.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-3 text-[11px] md:text-sm font-bold text-foreground/80">
                    <CheckCircle2 size={16} className={cn(
                        "flex-shrink-0",
                        service.color === "primary" ? "text-primary" : "text-secondary"
                    )} /> 
                    {feat}
                  </div>
                ))}
              </div>

              <Link 
                href="/contact"
                className={cn(
                    "w-full py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg text-center flex items-center justify-center gap-3 transition-all",
                    service.color === "primary" 
                        ? "medical-gradient text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1" 
                        : "bg-background border border-border hover:border-secondary/50 text-foreground hover:bg-muted"
                )}
              >
                {t('inquire_service')} <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-1" : "group-hover:-translate-x-1 rotate-180")} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Numbers / Emergency Section */}
      <section className="py-16 md:py-24 bg-muted border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8 text-start">
              <h2 className="text-2xl sm:text-4xl font-bold font-outfit leading-tight">{t('priority_support')} <br className="hidden md:block" /><span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTight">{t('infrastructure')}</span></h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bold">
                {t('support_infra_desc')}
              </p>
              
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 glass rounded-[24px] md:rounded-[32px] border border-border group hover:border-primary/30 transition-all shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl medical-gradient flex items-center justify-center text-white shadow-lg shrink-0">
                    <Clock size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="text-start">
                    <h4 className="font-bold text-lg md:text-xl leading-tight text-foreground">{t('remote_monitoring')}</h4>
                    <p className="text-[10px] md:text-sm text-muted-foreground mt-1.5 font-medium">{t('remote_mon_desc')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6 p-5 md:p-6 glass rounded-[24px] md:rounded-[32px] border border-border group hover:border-secondary/30 transition-all shadow-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center text-white shadow-lg shrink-0">
                    <BookOpen size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="text-start">
                    <h4 className="font-bold text-lg md:text-xl leading-tight text-foreground">{t('knowledge_base')}</h4>
                    <p className="text-[10px] md:text-sm text-muted-foreground mt-1.5 font-medium">{t('knowledge_base_desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 md:mt-0">
              <div className="absolute inset-0 medical-gradient/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="relative glass border border-border p-8 md:p-12 rounded-[28px] md:rounded-[48px] text-center shadow-2xl">
                <h4 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 font-outfit leading-tight">{t('support_credentials')}</h4>
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-start">
                    <span className="text-muted-foreground font-semibold uppercase tracking-widest text-[9px] md:text-xs shrink-0">{t('response_time')}</span>
                    <span className="font-bold text-primary text-xs md:text-base text-end">{t('less_than_4h')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-start">
                    <span className="text-muted-foreground font-semibold uppercase tracking-widest text-[9px] md:text-xs shrink-0">{t('eng_cert')}</span>
                    <span className="font-bold text-primary text-xs md:text-base text-end">{t('factory_gold')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/10 text-start">
                    <span className="text-muted-foreground font-semibold uppercase tracking-widest text-[9px] md:text-xs shrink-0">{t('spare_parts_avail')}</span>
                    <span className="font-bold text-primary text-xs md:text-base text-end">{t('regional_stock')}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 md:py-4 text-start">
                    <span className="text-muted-foreground font-semibold uppercase tracking-widest text-[9px] md:text-xs shrink-0">{locale === 'en' ? 'ISO Certification' : 'شهادة ISO'}</span>
                    <span className="font-bold text-primary text-xs md:text-base text-end">{t('iso_reg')}</span>
                  </div>
                </div>
                <Link 
                    href="/contact"
                    className="mt-8 md:mt-10 inline-flex items-center justify-center w-full md:w-auto gap-2 group font-bold text-primary underline underline-offset-8 decoration-primary/30 hover:decoration-primary transition-all text-base md:text-lg"
                >
                    {t('req_tech_portfolio')} <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-1" : "group-hover:-translate-x-1 rotate-180")} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Agency Partners Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 md:mb-6 leading-tight">{locale === 'en' ? 'Partnering for' : 'شراكات من أجل'} <br className="hidden md:block" /><span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTight">{t('partnering_advancement')}</span></h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold">
            {t('partnering_desc')}
          </p>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center gap-8 md:gap-12 text-muted-foreground/30 opacity-50">
            {/* Logo placeholders with text labels for premium feel */}
            {[
                "Imaging Dynamics", "Bio-Med Systems", "Global Clinical", "Euro-Diagnostics", "MediSync Japan"
            ].map((partner) => (
                <div key={partner} className="flex flex-col items-center gap-3 md:gap-4 group cursor-default">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-primary/30 transition-all shadow-sm">
                        <Globe className="w-6 h-6 md:w-8 md:h-8 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest group-hover:text-foreground transition-colors text-center">{partner}</span>
                </div>
            ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 mt-16 md:mt-24">
            <div className="medical-gradient rounded-[28px] md:rounded-[48px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                    <ShieldCheck size={48} className="mb-6 md:mb-8 opacity-50 shrink-0" />
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-outfit leading-tight">{t('scale_capabilities_today')}</h2>
                    <p className="text-base md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed font-bold">
                        {t('join_network_desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto">
                        <Link 
                            href="/contact"
                            className="w-full sm:w-auto bg-white text-primary px-10 md:px-12 py-4.5 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-opacity-90 shadow-xl hover:-translate-y-1 transition-all"
                        >
                            {t('start_turnkey_proj')}
                        </Link>
                        <Link 
                            href="/products"
                            className="w-full sm:w-auto bg-white/10 border border-white/20 backdrop-blur-md px-10 md:px-12 py-4.5 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/20 hover:-translate-y-1 transition-all"
                        >
                            {t('procure_equip')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
