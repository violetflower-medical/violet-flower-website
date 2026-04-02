'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Globe, 
  Users, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  Search, 
  Activity, 
  Scale, 
  Leaf 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t, dir, locale } = useLanguage();

  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* Header Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-accent/30 border-b border-border">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass border border-primary/20 text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={14} /> {locale === 'en' ? 'Global Clinical Standards' : 'معايير سريرية عالمية'}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 font-outfit leading-[1.2] md:leading-tight"
          >
            {t('about')} <span className="text-gradientLeadingTightLeadingTight">Violet Flower</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-bold"
          >
            {t('about_desc')}
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: dir === 'ltr' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl relative aspect-[1.2/1] group">
                <Image 
                  src="/images/about_who.png" 
                  alt="Who We Are - Violet Flower Team" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className={cn(
                "absolute -bottom-4 md:-bottom-8 glass p-5 md:p-8 rounded-xl md:rounded-3xl border border-border flex items-center gap-4 md:gap-6 shadow-2xl max-w-[240px] md:max-w-xs animate-float z-20",
                dir === 'ltr' ? "left-1/2 -translate-x-1/2 md:left-[-32px] md:translate-x-0" : "right-1/2 translate-x-1/2 md:right-[-32px] md:translate-x-0"
              )}>
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl medical-gradient flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Award size={20} className="md:w-8 md:h-8" />
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-lg md:text-2xl leading-none">15+ {locale === 'en' ? 'Years' : 'عاما'}</h4>
                  <p className="text-muted-foreground text-[8px] md:text-sm font-semibold tracking-wide uppercase mt-1">{t('innovation_journey')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: dir === 'ltr' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 md:gap-8 text-start mt-12 md:mt-0"
            >
              <div className="space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm">{t('who_we_are')}</h2>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit leading-tight lg:max-w-md">{t('bridging_gap')} <span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTight">{t('equipment')}</span></h3>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                  {locale === 'en' ? (
                    <>
                      <p>
                        Violet Flower Company for Medical Supply, Hospital Furniture, Electromechanical Systems, Waste-Management & IT Infrastructure is a comprehensive healthcare solutions provider based in Riyadh and established in 2008. Over the years, we have evolved into a trusted partner delivering end-to-end solutions for healthcare facilities across Saudi Arabia.
                      </p>
                      <p>
                        Our integrated portfolio covers every essential component required to build, equip, operate, and maintain modern healthcare environments. From medical supplies and hospital furniture to electromechanical works, IT infrastructure, and compliant medical waste-management services, we support healthcare institutions throughout the entire lifecycle of their operations.
                      </p>
                      <p>
                        We operate with full adherence to Saudi regulatory standards, ensuring legal compliance, safety, and quality in every service we provide. Our multidisciplinary capabilities allow us to deliver seamless, coordinated solutions that reduce complexity for our clients and enhance the performance, safety, and sustainability of their facilities.
                      </p>
                      <p>
                        At Violet Flower Company, we believe that healthcare excellence begins with strong infrastructure, reliable equipment, and safe operational systems. By combining engineering expertise, medical-grade products, and advanced technology, we help hospitals and clinics achieve higher efficiency, better patient outcomes, and long-term operational stability.
                      </p>
                      <p>
                        With a reputation built on trust, professionalism, and long-term partnerships, Violet Flower Company continues to grow as a dependable end-to-end healthcare solutions provider for institutions seeking quality, innovation, and operational excellence.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        شركة Violet Flower للتوريدات الطبية، والأثاث الطبي، والأنظمة الكهروميكانيكية، وإدارة النفايات، والبنية التحتية لتقنية المعلومات هي مزود شامل لحلول الرعاية الصحية، يقع مقرها في الرياض وتأسست عام 2008. وعلى مدار السنوات، تطورت الشركة لتصبح شريكًا موثوقًا يقدم حلولًا متكاملة وشاملة للمنشآت الصحية في مختلف أنحاء المملكة العربية السعودية.
                      </p>
                      <p>
                        تغطي محفظتنا المتكاملة جميع العناصر الأساسية اللازمة لإنشاء وتجهيز وتشغيل وصيانة بيئات الرعاية الصحية الحديثة. فمن التوريدات الطبية والأثاث الطبي إلى الأعمال الكهروميكانيكية، والبنية التحتية لتقنية المعلومات، وخدمات إدارة النفايات الطبية المتوافقة مع الأنظمة، نحن ندعم المؤسسات الصحية طوال دورة تشغيلها الكاملة.
                      </p>
                      <p>
                        نعمل بالتزام كامل بالأنظمة والمعايير التنظيمية المعتمدة في المملكة العربية السعودية، بما يضمن الامتثال القانوني، والسلامة، والجودة في كل خدمة نقدمها. وتتيح لنا قدراتنا متعددة التخصصات تقديم حلول مترابطة ومنسقة تقلل التعقيد على عملائنا، وتعزز من أداء منشآتهم وسلامتها واستدامتها.
                      </p>
                      <p>
                        في شركة Violet Flower، نؤمن بأن التميز في الرعاية الصحية يبدأ من بنية تحتية قوية، ومعدات موثوقة، وأنظمة تشغيل آمنة. ومن خلال الجمع بين الخبرة الهندسية، والمنتجات الطبية عالية الجودة، والتقنيات المتقدمة، نساعد المستشفيات والعيادات على تحقيق كفاءة أعلى، ونتائج أفضل للمرضى، واستقرار تشغيلي طويل الأمد.
                      </p>
                      <p>
                        وبسمعةٍ بُنيت على الثقة، والاحترافية، والشراكات طويلة المدى، تواصل شركة Violet Flower نموها باعتبارها مزودًا موثوقًا للحلول الصحية المتكاملة للمؤسسات التي تبحث عن الجودة، والابتكار، والتميز التشغيلي.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-6 md:gap-12 mt-4 pt-8 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-4xl font-bold font-outfit text-primary tracking-tight">15+</span>
                  <span className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{locale === 'en' ? 'Years Experience' : 'سنوات خبرة'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-4xl font-bold font-outfit text-primary tracking-tight">200+</span>
                  <span className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{locale === 'en' ? 'Facilities Equipped' : 'منشأة مجهزة'}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-4xl font-bold font-outfit text-primary tracking-tight">24/7</span>
                  <span className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{locale === 'en' ? 'Tech Support' : 'دعم فني'}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Elegant Cards) */}
      <section className="py-16 md:py-24 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-6 md:p-14 rounded-[28px] md:rounded-[48px] border border-border group hover:border-primary/20 hover:shadow-2xl transition-all relative overflow-hidden text-start shadow-sm"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass border border-primary/20 flex items-center justify-center text-primary mb-6 md:mb-10 group-hover:scale-110 transition-transform">
                <Target size={28} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-outfit leading-tight">{t('mission')}</h3>
              <p className={cn(
                "text-base md:text-xl text-muted-foreground leading-relaxed italic py-2 font-bold",
                dir === 'ltr' ? "border-l-4 border-primary pl-4 md:pl-6" : "border-r-4 border-primary pr-4 md:pr-6"
              )}>
                {t('mission_text')}
              </p>
              <p className="mt-4 md:mt-8 text-xs md:text-base text-muted-foreground leading-relaxed font-medium">
                {t('mission_desc')}
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-6 md:p-14 rounded-[28px] md:rounded-[48px] border border-border group hover:border-secondary/20 hover:shadow-2xl transition-all relative overflow-hidden text-start shadow-sm"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl glass border border-secondary/20 flex items-center justify-center text-secondary mb-6 md:mb-10 group-hover:scale-110 transition-transform">
                <Eye size={28} className="md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-outfit leading-tight">{t('vision')}</h3>
              <p className={cn(
                "text-base md:text-xl text-muted-foreground leading-relaxed italic py-2 font-bold",
                dir === 'ltr' ? "border-l-4 border-secondary pl-4 md:pl-6" : "border-r-4 border-secondary pr-4 md:pr-6"
              )}>
                {t('vision_text')}
              </p>
              <p className="mt-4 md:mt-8 text-xs md:text-base text-muted-foreground leading-relaxed font-medium">
                {t('vision_desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-primary font-bold uppercase tracking-[0.2rem] text-[10px] md:text-sm mb-3 md:mb-4">{t('integrity_excellence')}</h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-outfit mb-4 md:mb-6 leading-tight">{t('core_values')}</h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bold">
              {t('values_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ValueCard 
              icon={<HeartPulse size={30} />}
              title={t('patient_centric')}
              text={t('patient_desc')}
              color="primary"
            />
            <ValueCard 
              icon={<Scale size={30} />}
              title={t('clinical_integrity')}
              text={t('clinical_int_desc')}
              color="secondary"
            />
            <ValueCard 
              icon={<Globe size={30} />}
              title={t('universal_access')}
              text={t('universal_desc')}
              color="primary"
            />
            <ValueCard 
              icon={<Search size={30} />}
              title={t('tech_rigor')}
              text={t('tech_rigor_desc')}
              color="secondary"
            />
            <ValueCard 
              icon={<Leaf size={30} />}
              title={t('sustainability')}
              text={t('sustain_desc')}
              color="primary"
            />
            <ValueCard 
              icon={<ShieldCheck size={30} />}
              title={t('trust_cert')}
              text={t('trust_desc')}
              color="secondary"
            />
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-16 md:py-32 bg-primary text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 md:space-y-12">
            <div className="w-12 md:w-16 h-px bg-white/30" />
            <blockquote className={cn(
              "text-xl sm:text-2xl md:text-5xl font-bold font-outfit italic leading-[1.4] md:leading-[1.3]",
              locale === 'ar' ? "md:leading-[1.45]" : ""
            )}>
              {t('board_quote')}
            </blockquote>
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/20 p-1 flex items-center justify-center relative shadow-2xl">
                <Users className="w-7 h-7 md:w-10 md:h-10 opacity-60" />
              </div>
              <div className="text-center">
                <p className="text-base md:text-xl font-bold font-outfit leading-tight">{t('board_directors')}</p>
                <p className="text-[9px] md:text-xs font-semibold text-white/60 tracking-widest uppercase mt-1.5 font-outfit">Violet Flower Company</p>
              </div>
            </div>
            <div className="w-12 md:w-16 h-px bg-white/30" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, text, color }: { icon: React.ReactNode, title: string, text: string, color: 'primary' | 'secondary' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="p-10 rounded-[40px] border border-border bg-background hover:border-primary/30 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.12)] transition-all duration-500 group flex flex-col h-full items-center text-center"
    >
      <div className={cn(
        "w-16 h-16 rounded-2xl glass mb-8 flex items-center justify-center transition-all group-hover:scale-110",
        color === 'primary' ? "text-primary border-primary/20" : "text-secondary border-secondary/20"
      )}>
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4 font-outfit">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {text}
      </p>
    </motion.div>
  );
}
