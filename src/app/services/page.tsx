'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  ShieldCheck, 
  Clock, 
  BookOpen,
  Package,
  BedDouble,
  Cog,
  Trash2,
  Server,
  ShoppingBag,
  Settings2,
  Wrench,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

export default function ServicesPage() {
  const { t, dir, locale } = useLanguage();
  
  const [services, setServices] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

      if (!error && data && data.length > 0) {
        setServices(data);
      } else {
        setServices([]);
      }
      setIsLoading(false);
    }
    
    fetchServices();
  }, []);

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-12 h-12" };
    const icons: Record<string, React.ReactNode> = {
      'Package': <Package {...iconProps} />,
      'BedDouble': <BedDouble {...iconProps} />,
      'Cog': <Cog {...iconProps} />,
      'Trash2': <Trash2 {...iconProps} />,
      'Server': <Server {...iconProps} />,
      'ShoppingBag': <ShoppingBag {...iconProps} />,
      'Settings2': <Settings2 {...iconProps} />,
      'Wrench': <Wrench {...iconProps} />,
      'Globe': <Globe {...iconProps} />,
      'Activity': <Activity {...iconProps} />,
      'ShieldCheck': <ShieldCheck {...iconProps} />,
      'Clock': <Clock {...iconProps} />,
      'BookOpen': <BookOpen {...iconProps} />
    };
    return icons[iconName] || <Settings2 {...iconProps} />;
  };

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-background", locale === 'ar' ? 'font-arabic' : '')} dir={dir}>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-24 relative overflow-hidden bg-accent/30 border-b border-border">
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
            {locale === 'en' ? 'Our' : 'نقدم'} <span className="text-gradient">{t('global_service_excellence')}</span>
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
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground font-bold">
            {locale === 'en' ? 'No services found.' : 'لم يتم العثور على خدمات.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={service.id || i}
                className="bg-background rounded-[28px] md:rounded-[48px] p-8 md:p-14 border border-border hover:border-primary/20 group transition-all duration-500 shadow-xl shadow-black/5 relative overflow-hidden flex flex-col h-full text-start"
              >
                {/* Abstract decorative shape */}
                <div className={cn(
                  "absolute -top-10 w-40 h-40 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity",
                  dir === 'ltr' ? '-right-10' : '-left-10',
                  service.color_theme === "primary" ? "bg-primary" : "bg-secondary"
                )} />
                
                <div className={cn(
                  "w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass mb-6 md:mb-10 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm",
                  service.color_theme === "primary" ? "text-primary border-primary/20" : "text-secondary border-secondary/20"
                )}>
                  {renderIcon(service.icon_name)}
                </div>

                <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-outfit group-hover:text-primary transition-colors md:pr-8 leading-tight">
                  {locale === 'ar' ? service.title_ar : service.title_en}
                </h3>
                
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10 flex-grow font-bold">
                  {locale === 'ar' ? service.description_ar : service.description_en}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-12 pt-8 border-t border-border">
                  {(locale === 'ar' ? (service.features_ar || []) : (service.features_en || [])).map((feat: string, j: number) => (
                    <div key={j} className="flex items-center gap-3 text-[11px] md:text-sm font-bold text-foreground/80">
                      <CheckCircle2 size={16} className={cn(
                          "flex-shrink-0",
                          service.color_theme === "primary" ? "text-primary" : "text-secondary"
                      )} /> 
                      {feat}
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className={cn(
                      "w-full py-4 md:py-5 rounded-2xl font-bold text-sm md:text-lg text-center flex items-center justify-center gap-3 transition-all",
                      service.color_theme === "primary" 
                          ? "medical-gradient text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1" 
                          : "bg-background border border-border hover:border-secondary/50 text-foreground hover:bg-muted"
                  )}
                >
                  {t('inquire_service')} <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-1" : "group-hover:-translate-x-1 rotate-180")} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
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
