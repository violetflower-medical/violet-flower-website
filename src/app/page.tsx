'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  Award, 
  Settings, 
  Zap, 
  CheckCircle2, 
  Star 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t, dir, locale } = useLanguage();

  return (
    <div className={cn("flex flex-col w-full overflow-hidden", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className={cn(
            "absolute inset-0 z-10",
            dir === 'ltr' 
              ? "bg-gradient-to-r from-background via-background/90 md:via-background/80 to-transparent" 
              : "bg-gradient-to-l from-background via-background/90 md:via-background/80 to-transparent"
          )} />
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="/images/hero.png"
              alt="Medical Hero Background"
              fill
              className={cn(
                "object-cover",
                dir === 'ltr' ? "object-[80%_center] md:object-right" : "object-[20%_center] md:object-left"
              )}
              priority
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="max-w-4xl text-start">
            <motion.div
              initial={{ opacity: 0, x: dir === 'ltr' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-primary/20 text-primary font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              <ShieldCheck size={14} className="shrink-0" />
              <span>{t('since_2010')}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className={cn(
                "text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] font-outfit",
                dir === 'rtl' ? "md:leading-[1.35] leading-[1.3]" : ""
              )}
            >
              <span className="block">{t('hero_title_1')}</span>
              <span className="text-gradient block mt-1.5 md:mt-2">{t('hero_title_highlight')} </span>
              <span className="block mt-1.5 md:mt-2">{t('hero_title_2')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-2xl text-muted-foreground/90 leading-relaxed mb-8 md:mb-12 max-w-2xl font-bold"
            >
              {t('hero_desc')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
            >
              <Link
                href="/products"
                className="px-8 md:px-10 py-4 md:py-5 rounded-full medical-gradient text-white font-bold text-base md:text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1.5 flex items-center justify-center gap-3 group"
              >
                {t('explore_sol_btn')} 
                <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-2" : "group-hover:-translate-x-2 rotate-180")} />
              </Link>
              <Link
                href="/about"
                className="px-8 md:px-10 py-4 md:py-5 rounded-full glass border border-border/80 text-foreground font-bold text-base md:text-lg hover:bg-white/90 hover:border-primary/20 hover:-translate-y-1.5 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                {t('learn_more')}
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-10 md:mt-20 flex flex-wrap items-center gap-6 sm:gap-8 md:gap-16 border-t border-border/40 pt-8 md:pt-10"
            >
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">500+</span>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">{t('clinics_served')}</span>
              </div>
              <div className="w-px h-10 md:h-12 bg-border/60" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">15+</span>
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-bold">{t('years_exp')}</span>
              </div>
              <div className="hidden lg:block w-px h-12 bg-border/60" />
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background medical-gradient p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center">
                        <Activity size={12} className="text-white" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col text-start">
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs text-muted-foreground font-bold mt-1 uppercase tracking-wider">{t('top_rated')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-16 md:py-32 bg-accent/20 relative overflow-hidden border-y border-border/40">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-start">
          <div className="mb-10 md:mb-20">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-5">{t('core_strengths')}</h2>
            <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5 md:mb-6 leading-tight max-w-3xl">{t('why_choose_title')}</h3>
            <p className="text-base md:text-xl max-w-2xl leading-relaxed font-bold text-muted-foreground">
              {t('why_choose_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={28} className="text-primary" />}
              title={t('prec_title')}
              description={t('prec_desc')}
            />
            <FeatureCard 
              icon={<Zap size={28} className="text-secondary" />}
              title={t('tech_title')}
              description={t('tech_desc')}
            />
            <FeatureCard 
              icon={<Settings size={28} className="text-primary" />}
              title={t('global_sup_title')}
              description={t('global_sup_desc')}
            />
            <FeatureCard 
              icon={<Award size={28} className="text-secondary" />}
              title={t('trusted_part_title')}
              description={t('trusted_part_desc')}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-20 text-start">
            <div className="max-w-3xl">
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-5">{t('diag_solutions')}</h2>
              <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5 md:mb-6 leading-tight">{t('state_of_art')} <span className="text-gradientLeadingTightLeadingTight">{t('equipment')}</span></h3>
              <p className="text-base md:text-xl leading-relaxed font-bold text-muted-foreground">
                {t('equip_desc')}
              </p>
            </div>
            <Link href="/products" className="group flex items-center gap-3 font-bold text-primary hover:text-secondary transition-all text-base md:text-lg underline underline-offset-[12px] decoration-2 decoration-primary/30 hover:decoration-secondary">
              {t('view_all_prods')} 
              <ArrowRight size={22} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-2" : "group-hover:-translate-x-2 rotate-180")} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <ProductCard 
              image="/images/mri.png"
              category={locale === 'en' ? 'Imaging Systems' : 'أنظمة التصوير'}
              title={t('mri_name')}
              specs={locale === 'en' 
                ? ["3.0T Field Strength", "AI Artifact Removal", "Low Energy Mode"] 
                : ["قوة مغناطيسية 3.0T", "إزالة الشوائب بالذكاء الاصطناعي", "وضع توفير الطاقة"]}
            />
            <ProductCard 
              image="/images/ultrasound.png"
              category={locale === 'en' ? 'Diagnostics' : 'التشخيص'}
              title={t('ultrasound_name')}
              specs={locale === 'en' 
                ? ["4D Real-time Imaging", "High-Def Probes", "Compact Design"]
                : ["تصوير 4D في الوقت الفعلي", "مجسات عالية الدقة", "تصميم مدمج"]}
            />
            <ProductCard 
              image="/images/monitor.png"
              category={locale === 'en' ? 'Patient Monitoring' : 'مراقبة المرضى'}
              title={t('monitor_name')}
              specs={locale === 'en' 
                ? ["Wireless Integration", "Real-time Analytics", "12-Lead ECG"]
                : ["تكامل لاسلكي", "تحليلات الوقت الفعلي", "تخطيط القلب 12-Lead"]}
            />
          </div>
        </div>
      </section>

      {/* Corporate Intro Section */}
      <section className="py-16 md:py-32 relative bg-accent/5 lg:py-48 overflow-hidden">
        <div className={cn(
          "absolute top-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full opacity-50 pointer-events-none",
          dir === 'ltr' ? "-left-1/4" : "-right-1/4"
        )} />
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: dir === 'ltr' ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
              <div className="relative z-10 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50">
                <Image 
                  src="/images/hero.png" 
                  alt="Corporate Vision"
                  width={600}
                  height={800}
                  className="object-cover h-[350px] md:h-[600px] w-full"
                />
                <div className={cn(
                  "absolute bottom-4 md:bottom-8 p-6 md:p-8 glass rounded-[24px] md:rounded-[30px] border border-white/40 shadow-2xl mx-4 md:mx-6",
                  dir === 'ltr' ? "left-0 right-0" : "right-0 left-0"
                )}>
                  <p className="italic text-foreground/90 font-bold text-base md:text-lg leading-relaxed text-start">
                    {t('board_quote')}
                  </p>
                  <div className="mt-4 md:mt-6 flex items-center justify-between border-t border-secondary/10 pt-4">
                    <span className="font-bold text-primary uppercase tracking-[0.2em] text-[10px] md:text-xs pb-1">{t('board_directors')}</span>
                    <ShieldCheck size={20} className="text-secondary/30" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-6 md:gap-10 text-start relative z-10">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block">{t('committed_excellence')}</span>
                </h2>
                <div className="w-16 md:w-20 h-1.5 medical-gradient rounded-full" />
              </div>
              <p className="text-muted-foreground/90 leading-relaxed text-base md:text-xl font-bold">
                {t('corporate_desc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
                {[
                  { label: t('iso_cert'), icon: <CheckCircle2 size={18} className="text-primary shrink-0" /> },
                  { label: t('factory_training'), icon: <CheckCircle2 size={18} className="text-primary shrink-0" /> },
                  { label: t('spare_parts'), icon: <CheckCircle2 size={18} className="text-primary shrink-0" /> },
                  { label: t('leasing_options'), icon: <CheckCircle2 size={18} className="text-primary shrink-0" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border border-border group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
                      {item.icon}
                    </div>
                    <span className="font-bold text-foreground/80 tracking-wide text-sm md:text-base">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-6">
                <Link 
                  href="/about"
                  className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full medical-gradient text-white font-bold text-base md:text-lg text-center shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                >
                  {t('our_full_story')}
                </Link>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-md">
                    <Activity size={24} />
                  </div>
                  <span className="font-bold text-base md:text-lg underline underline-offset-[10px] decoration-2 decoration-primary/20 hover:decoration-primary transition-all">{t('watch_video')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center mb-12 md:mb-24">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-8 font-outfit leading-tight">{t('enterprise_services')}</h2>
          <div className="w-20 md:w-24 h-1.5 medical-gradient rounded-full mx-auto mb-6 md:mb-8" />
          <p className="text-base sm:text-lg md:text-2xl max-w-3xl mx-auto font-bold text-muted-foreground">{t('beyond_equip')}</p>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              title: t('maint_repair'),
              desc: t('maint_desc'),
              icon: <Settings className="w-10 h-10" />,
              accent: "text-primary"
            },
            {
              title: t('clin_training'),
              desc: t('clin_desc'),
              icon: <Award className="w-10 h-10" />,
              accent: "text-secondary"
            },
            {
              title: t('fac_planning'),
              desc: t('fac_desc'),
              icon: <Zap className="w-10 h-10" />,
              accent: "text-primary"
            }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[24px] md:rounded-[40px] border border-border/60 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group text-start flex flex-col h-full shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)]"
            >
              <div className={cn(
                "w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass flex items-center justify-center mb-6 md:mb-10 group-hover:medical-gradient group-hover:text-white transition-all shadow-sm border border-border/80",
                service.accent
              )}>
                {service.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-outfit leading-tight">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-lg mb-6 md:mb-10 flex-grow font-bold">{service.desc}</p>
              <Link href="/services" className="text-primary font-bold text-base md:text-lg flex items-center gap-3 group/link underline-offset-8 hover:underline">
                {t('learn_more')} 
                <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover/link:translate-x-2" : "group-hover/link:-translate-x-2 rotate-180")} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-16 md:py-32 mb-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="medical-gradient rounded-[32px] md:rounded-[60px] p-8 md:p-28 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(142,93,168,0.4)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay scale-110" />
            <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-8xl font-bold mb-6 md:mb-10 tracking-tight leading-[1.2] md:leading-[1.05] font-outfit">{t('ready_modernize')}</h2>
              <p className="text-white/80 text-base sm:text-lg md:text-3xl mb-8 md:mb-14 leading-relaxed font-bold">
                {t('cta_desc')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="px-8 md:px-12 py-4 md:py-6 rounded-full bg-white text-secondary font-bold text-lg hover:bg-opacity-90 transition-all shadow-2xl hover:-translate-y-2 active:translate-y-0"
                >
                  {t('schedule_consult')}
                </Link>
                <Link 
                  href="/products"
                  className="px-8 md:px-12 py-4 md:py-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-2 active:translate-y-0"
                >
                  {t('request_catalog')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-10 rounded-[35px] border border-border/80 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group text-start flex flex-col h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] focus-within:border-primary/40">
      <div className="w-16 h-16 rounded-2xl glass border border-border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all shadow-sm">
        {icon}
      </div>
      <h4 className="font-bold text-2xl mb-4 text-secondary font-outfit">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-medium flex-grow">
        {description}
      </p>
    </div>
  );
}

function ProductCard({ image, category, title, specs }: { image: string, category: string, title: string, specs: string[] }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col rounded-[40px] overflow-hidden border border-border/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 group bg-white shadow-[0_15px_50px_-20px_rgba(0,0,0,0.05)]">
      <div className="relative h-80 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-1000" 
        />
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center pointer-events-none">
          <div className="glass px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary border border-primary/20 bg-white/60">
            {category}
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary/50 shadow-sm pointer-events-auto cursor-pointer border border-white/50"
          >
            <Star size={18} />
          </motion.div>
        </div>
      </div>
      <div className="p-10 text-start flex flex-col h-full">
        <h4 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight font-outfit">{title}</h4>
        <ul className="flex flex-col gap-4 mb-10 flex-grow">
          {specs.map((spec, i) => (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground/90 font-medium">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
        <Link 
          href={`/products?item=${title}`}
          className="w-full py-5 rounded-2xl border border-primary/20 text-primary font-bold text-lg hover:medical-gradient hover:text-white transition-all duration-500 text-center flex items-center justify-center gap-3 group/btn shadow-sm"
        >
          {t('view_details')} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
