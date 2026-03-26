'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Award, Activity, Building2, MapPin, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function GlobalPartnersPage() {
  const { t, dir, locale } = useLanguage();

  const partners = [
    {
      name: locale === 'en' ? "Strauss Imaging Systems" : "شتراوس لأنظمة التصوير",
      country: locale === 'en' ? "Germany" : "ألمانيا",
      specialty: locale === 'en' ? "Advanced MRI & CT Diagnostics" : "تشخيص الرنين والاشعة المقطعية المتقدم",
      description: locale === 'en' ? "World-class engineering for high-field MRI systems and high-throughput CT scanners with German precision." : "هندسة عالمية لأنظمة الرنين المغناطيسي عالية المجال وماسحات الأشعة المقطعية عالية الإنتاجية بدقة ألمانية.",
      founded: "1988",
      impact: locale === 'en' ? "Top 3 European OEM manufacturer." : "من أفضل 3 مصنعين للمعدات الأصلية في أوروبا."
    },
    {
      name: locale === 'en' ? "Bio-Sense Clinical" : "بايو سينس السريرية",
      country: locale === 'en' ? "United States" : "الولايات المتحدة",
      specialty: locale === 'en' ? "Next-Gen Patient Monitoring" : "مراقبة المرضى من الجيل القادم",
      description: locale === 'en' ? "Intelligent vital sign monitoring and AI-integrated nursing dashboards for critical care and ICU units." : "مراقبة العلامات الحيوية الذكية ولوحات التمريض المتكاملة مع الذكاء الاصطناعي لوحدات العناية المركزة.",
      founded: "1995",
      impact: locale === 'en' ? "Serving 4,000+ US hospitals." : "يخدم أكثر من 4000 مستشفى في أمريكا."
    },
    {
      name: locale === 'en' ? "Fujimoto Medical Tech" : "فوجيموتو للتكنولوجيا الطبية",
      country: locale === 'en' ? "Japan" : "اليابان",
      specialty: locale === 'en' ? "Ultrasound & Endoscopy Solutions" : "حلول الموجات فوق الصوتية والمناظير",
      description: locale === 'en' ? "Leading the revolution in 4D real-time ultrasound imaging and high-definition endoscopic video processors." : "قيادة الثورة في تصوير الموجات فوق الصوتية رباعي الأبعاد ومعالجات الفيديو التنظيرية عالية الدقة.",
      founded: "1972",
      impact: locale === 'en' ? "Industry leader in optical diagnostics." : "رائد الصناعة في التشخيص البصري."
    },
    {
      name: locale === 'en' ? "Euro-Diagnostics Automations" : "يورو ديجنوستيكس للأتمتة",
      country: locale === 'en' ? "France" : "فرنسا",
      specialty: locale === 'en' ? "Laboratory Diagnostics & Biochemistry" : "تشخيص المختبرات والكيمياء الحيوية",
      description: locale === 'en' ? "Fully automated, high-throughput pathology and biochemistry laboratory systems for large-scale clinical labs." : "أنظمة مختبرات علم الأمراض والكيمياء الحيوية المؤتمتة بالكامل للمختبرات السريرية واسعة النطاق.",
      founded: "2001",
      impact: locale === 'en' ? "Automating 500M+ tests annually." : "أتمتة أكثر من 500 مليون اختبار سنوياً."
    },
    {
      name: locale === 'en' ? "Swiss-Precision Surgical" : "سويس بريسيجن الجراحية",
      country: locale === 'en' ? "Switzerland" : "سويسرا",
      specialty: locale === 'en' ? "Surgical Equipment & Robotics" : "المعدات الجراحية والروبوتات",
      description: locale === 'en' ? "Fine-calibrated instrumentation and robotic-assisted surgery stabilizers for neuro and cardiac procedures." : "أجهزة معايرة دقيقة ومثبتات جراحية مدعومة بالروبوت لإجراءات الأعصاب والقلب.",
      founded: "1945",
      impact: locale === 'en' ? "Highest engineering standards in surgery." : "أعلى المعايير الهندسية في الجراحة."
    },
    {
      name: locale === 'en' ? "Med-Link Solutions" : "ميد لينك للحلول",
      country: locale === 'en' ? "United Kingdom" : "المملكة المتحدة",
      specialty: locale === 'en' ? "Digital Healthcare & PACS Systems" : "الرعاية الصحية الرقمية وأنظمة PACS",
      description: locale === 'en' ? "Secure, high-speed PACS and cloud-native teleradiology platforms connecting global hospital networks." : "منصات PACS وتصوير شعاعي عن بعد آمنة وعالية السرعة تربط شبكات المستشفيات العالمية.",
      founded: "2012",
      impact: locale === 'en' ? "Connecting 12 global regions." : "يربط 12 منطقة عالمية."
    },
    {
      name: locale === 'en' ? "Northern Optics Diagnostics" : "نورثرن أوبتيكس للتشخيص",
      country: locale === 'en' ? "Sweden" : "السويد",
      specialty: locale === 'en' ? "Ophthalmology & Optical Microscopes" : "طب العيون والمجاهر البصرية",
      description: locale === 'en' ? "Cutting-edge optical engineering for eye diagnostic systems and specialized clinical microscopes." : "هندسة بصرية متطورة لأنظمة تشخيص العيون والمجاهر السريرية المتخصصة.",
      founded: "1998",
      impact: locale === 'en' ? "Market leader in Scandinavia." : "رائد السوق في الدول الاسكندنافية."
    },
    {
      name: locale === 'en' ? "Heli-Care Critical Systems" : "هيلي كير للأنظمة الحرجة",
      country: locale === 'en' ? "Canada" : "كندا",
      specialty: locale === 'en' ? "Neonatal & ICU Ventilators" : "أجهزة التنفس لحديثي الولادة والعناية المركزة",
      description: locale === 'en' ? "Life-preserving respiratory care systems specializing in high-frequency oscillation for neonatals." : "أنظمة رعاية تنفسية للحفاظ على الحياة متخصصة في التذبذب عالي التردد لحديثي الولادة.",
      founded: "1985",
      impact: locale === 'en' ? "The standard for neonatal ICU care." : "المعيار لرعاية العناية المركزة لحديثي الولادة."
    }
  ];

  return (
    <div className={cn("flex flex-col w-full min-h-screen bg-background", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Header section with globe background */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 bg-accent/30 border-b border-border overflow-hidden text-start">
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
                {locale === 'en' ? 'International' : ''} <span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTight">{t('intl_partners')}</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, i) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    key={i}
                    className="bg-background rounded-[32px] md:rounded-[40px] border border-border p-6 md:p-8 hover:border-primary/30 transition-all group hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full shadow-lg shadow-black/5 text-start"
                >
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                            <Building2 size={28} className="md:w-8 md:h-8" />
                        </div>
                        <div className={dir === 'ltr' ? "text-right" : "text-left"}>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest border border-border">
                                <MapPin size={10} className="text-primary" /> {partner.country}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 font-outfit group-hover:text-primary transition-colors leading-tight">
                        {partner.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest leading-none">{partner.specialty}</span>
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-10 flex-grow font-medium">
                        {partner.description}
                    </p>

                    <div className="pt-6 md:pt-8 border-t border-border flex flex-col gap-3 md:gap-4">
                        <div className="flex justify-between items-center text-[10px] md:text-xs">
                            <span className="text-muted-foreground font-semibold uppercase tracking-widest">{t('est_since')}</span>
                            <span className="font-bold text-foreground">{partner.founded}</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] md:text-xs">
                            <span className="text-muted-foreground font-semibold uppercase tracking-widest">{t('global_status')}</span>
                            <span className="font-bold text-primary">{partner.impact}</span>
                        </div>
                    </div>

                    <Link 
                        href={`/products?brand=${partner.name}`}
                        className="mt-6 md:mt-8 py-3.5 md:py-4 rounded-xl border border-primary/20 text-primary font-bold text-xs md:text-sm text-center hover:medical-gradient hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                    >
                        {t('view_partner_prods')} <ArrowRight size={16} className={cn("transition-transform", dir === 'ltr' ? "group-hover/btn:translate-x-1" : "group-hover/btn:-translate-x-1 rotate-180")} />
                    </Link>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Why We Partner Section */}
      <section className="py-16 md:py-24 bg-muted relative border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 text-start">
            <div className="lg:col-span-1 space-y-5 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-outfit leading-tight">{locale === 'en' ? 'Our Strategic' : 'معاييرنا'} <br className="hidden md:block" /><span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTight">{t('strategic_criteria')}</span></h2>
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
