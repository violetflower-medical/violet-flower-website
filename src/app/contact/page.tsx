'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t, dir, locale } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mimic API delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className={cn("flex flex-col w-full min-h-screen", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Hero / Header */}
      <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-accent/30 relative overflow-hidden border-b border-border/80">
        <div className={cn(
          "absolute top-0 w-1/4 h-full bg-primary/5 blur-[80px] rounded-full translate-x-1/2",
          dir === 'ltr' ? "right-0" : "left-0"
        )} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 font-outfit leading-tight"
            >
                {locale === 'en' ? 'Get in' : ''} <span className="text-gradientLeadingTightLeadingTightLeadingTightLeadingTightLeadingTightLeadingTight">{t('get_in_touch')}</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-bold"
            >
                {t('contact_hero_desc')}
            </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Contact Details Column */}
            <div className="flex flex-col gap-10 md:gap-14 text-start">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold font-outfit leading-tight">{t('global_presence')}</h2>
                <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-md font-bold">{t('global_presence_desc')}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <ContactInfoCard 
                    icon={<MapPin className="text-primary" size={24} />}
                    title={t('headquarters')}
                    text={locale === 'en' ? "123 Medical Plaza, Dubai Health Care City, UAE" : "123 ميديكال بلازا، مدينة دبي للرعاية الصحية، الإمارات"}
                />
                <ContactInfoCard 
                    icon={<Phone className="text-secondary" size={24} />}
                    title={t('global_support')}
                    text="+1 (800) VIOLET-MED / +971 4 000 000"
                />
                <ContactInfoCard 
                    icon={<Mail className="text-primary" size={24} />}
                    title={t('inquiries')}
                    text="sales@violetflower.med / info@violetflower.med"
                />
                <ContactInfoCard 
                    icon={<Clock className="text-secondary" size={24} />}
                    title={t('operating_hours')}
                    text={t('mon_fri')}
                />
              </div>

              <div className={cn(
                "p-6 md:p-10 glass rounded-[28px] md:rounded-[40px] border border-border mt-4 relative overflow-hidden group shadow-sm transition-all hover:bg-white/40",
                dir === 'ltr' ? "border-l-4 border-l-primary" : "border-r-4 border-r-primary"
              )}>
                <h3 className="font-bold text-lg md:text-2xl mb-4 md:mb-6 flex items-center gap-3 font-outfit">
                    <ShieldCheck size={24} className="text-primary" /> {t('tech_urgency')}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 md:mb-10 font-bold">
                    {t('tech_urgency_desc')}
                </p>
                <button className="w-full py-4.5 md:py-5 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-base md:text-lg active:scale-95">
                    {t('access_priority')}
                </button>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-background rounded-[32px] md:rounded-[50px] p-8 md:p-16 border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden group text-start">
              <div className={cn(
                "absolute top-0 w-32 h-32 medical-gradient opacity-5 rounded-bl-full group-hover:w-40 group-hover:h-40 transition-all duration-700",
                dir === 'ltr' ? "right-0" : "left-0"
              )} />
              
              <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 flex items-center gap-4 font-outfit">
                <MessageSquare className="text-primary" size={28} /> {t('send_message')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] px-1 font-outfit">{t('full_name')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={locale === 'en' ? "Dr. John Smith" : "د. أحمد كمال"} 
                      className="w-full px-5 py-4.5 md:px-6 md:py-5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-accent/20 transition-all outline-none text-sm md:text-base font-bold" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] px-1 font-outfit">{t('medical_facility')}</label>
                    <input 
                      required
                      type="text" 
                      placeholder={locale === 'en' ? "City General Hospital" : "مستشفى المدينة العام"} 
                      className="w-full px-5 py-4.5 md:px-6 md:py-5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-accent/20 transition-all outline-none text-sm md:text-base font-bold" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] px-1 font-outfit">{t('email_addr')}</label>
                    <input 
                      required
                      type="email" 
                      placeholder="email@facility.com" 
                      className="w-full px-5 py-4.5 md:px-6 md:py-5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-accent/20 transition-all outline-none text-sm md:text-base font-bold" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] px-1 font-outfit">{t('equip_interest')}</label>
                    <div className="relative">
                      <select className="w-full px-5 py-4.5 md:px-6 md:py-5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-accent/20 transition-all outline-none appearance-none text-sm md:text-base font-bold">
                        <option>{t('select_cat')}</option>
                        <option>{t('cat_mri')}</option>
                        <option>{t('cat_ultrasound')}</option>
                        <option>{t('cat_monitoring')}</option>
                        <option>{t('tech_support_training')}</option>
                      </select>
                      <Info size={16} className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground/40 pointer-events-none", dir === 'ltr' ? "right-5" : "left-5")} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] px-1 font-outfit">{t('clinical_inquiry')}</label>
                  <textarea 
                    required
                    placeholder={locale === 'en' ? "Describe your requirements..." : "صف متطلباتك أو استفساراتك الفنية..."} 
                    rows={4}
                    className="w-full px-5 py-4.5 md:px-6 md:py-5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-accent/20 transition-all outline-none resize-none text-sm md:text-base font-bold"
                  />
                </div>

                <div className="flex items-center gap-3 py-2 text-[10px] md:text-xs text-muted-foreground px-2 font-bold leading-relaxed">
                    <Info size={14} className="text-primary shrink-0" />
                    <span>{t('privacy_standards')}</span>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitted}
                  className={cn(
                    "w-full py-5 md:py-6 rounded-2xl font-bold text-base md:text-xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4 active:scale-[0.98] active:translate-y-0",
                    isSubmitted 
                        ? "bg-green-500 text-white" 
                        : "medical-gradient text-white shadow-primary/30"
                  )}
                >
                  {isSubmitted ? (
                    <> <CheckCircle2 size={24} /> {t('msg_sent_success')} </>
                  ) : (
                    <> <Send size={22} className={cn("transition-transform duration-300", dir === 'rtl' ? "rotate-180" : "")} /> {t('req_consultation')} </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-32 bg-muted border-t border-border overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12 md:mb-20">
                <h2 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6 font-outfit leading-tight">{t('visit_centers')}</h2>
                <p className="text-base md:text-xl text-muted-foreground max-w-2xl font-bold">{t('nearest_hub_desc')}</p>
            </div>
            <div className="relative h-[450px] md:h-[600px] w-full rounded-[32px] md:rounded-[60px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-accent border border-border flex items-center justify-center text-muted-foreground group">
                <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-[15s] ease-out bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <Globe className="w-20 h-20 md:w-32 md:h-32 animate-pulse opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass px-8 py-10 md:px-12 md:py-12 rounded-[32px] md:rounded-[48px] border border-white/20 text-center shadow-2xl backdrop-blur-3xl max-w-[300px] md:max-w-md mx-4 transform group-hover:scale-105 transition-transform duration-700">
                        <MapPin className="mx-auto mb-6 text-primary animate-bounce w-10 h-10 md:w-14 md:h-14" />
                        <h4 className="font-bold text-xl md:text-3xl mb-4 text-foreground font-outfit leading-tight">{t('map_loading')}</h4>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/80 mt-2">{t('locations_count')}</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex flex-col gap-4 p-7 md:p-10 glass rounded-[28px] md:rounded-[40px] border border-border hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.12)] hover:-translate-y-2 transition-all duration-500 group text-start active:scale-95">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl glass border border-border flex items-center justify-center group-hover:medical-gradient group-hover:text-white transition-all shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg md:text-2xl mb-2 font-outfit leading-tight">{title}</h4>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-bold">{text}</p>
      </div>
    </div>
  );
}
