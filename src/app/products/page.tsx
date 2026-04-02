'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, CheckCircle2, Zap, Download, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

export default function ProductsPage() {
  const { t, dir, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t('all_products'));
  const [searchQuery, setSearchQuery] = useState("");
  
  const [categories, setCategories] = useState<string[]>([t('all_products')]);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      
      const { data: dbCategories } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
        
      if (dbCategories && dbCategories.length > 0) {
        const catNames = dbCategories.map(c => locale === 'ar' ? c.name_ar : c.name_en);
        setCategories([t('all_products'), ...catNames]);
      } else {
        setCategories([t('all_products'), t('cat_mri'), t('cat_ultrasound'), t('cat_monitoring'), t('cat_xray'), t('cat_lab')]);
      }

      const { data: dbProducts } = await supabase
        .from('products')
        .select('*, categories(*)')
        .eq('is_active', true);
        
      if (dbProducts && dbProducts.length > 0) {
        const mappedProducts = dbProducts.map(p => ({
          id: p.id,
          name: locale === 'ar' ? p.name_ar : p.name_en,
          category: p.categories ? (locale === 'ar' ? p.categories.name_ar : p.categories.name_en) : t('all_products'),
          image: p.image_url || '/images/mri.png',
          price: p.price || t('custom_quote'),
          description: locale === 'ar' ? p.description_ar : p.description_en,
          features: locale === 'ar' ? (p.features_ar || []) : (p.features_en || []),
          popular: p.is_popular
        }));
        setProducts(mappedProducts);
      } else {
        setProducts([]);
      }
      setIsLoading(false);
    }
    
    fetchData();
  }, [locale, t]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === t('all_products') || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={cn("flex flex-col w-full min-h-screen", locale === 'ar' ? "font-arabic" : "")} dir={dir}>
      {/* Header */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-24 glass border-b border-border/80 mb-8 md:mb-12">
        <div className="container mx-auto px-4 md:px-6 text-start">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5 leading-tight font-outfit">
                {locale === 'en' ? 'Our' : 'تصفح'} <span className="text-gradient">{t('product_catalog')}</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-bold">
                {t('catalog_desc')}
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex items-center gap-3 md:gap-4 mt-2">
              <div className="relative flex-grow lg:w-80">
                <Search className={cn("absolute top-1/2 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary", dir === 'ltr' ? "left-4" : "right-4")} size={18} />
                <input 
                  type="text" 
                  placeholder={t('search_equip')} 
                  className={cn(
                    "w-full py-3.5 md:py-3.5 rounded-xl border border-border/80 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-background transition-all outline-none text-sm md:text-base font-bold",
                    dir === 'ltr' ? "pl-11 pr-4" : "pr-11 pl-4"
                  )}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="p-3.5 md:p-3.5 rounded-xl border border-border hover:bg-accent transition-all text-muted-foreground shrink-0 shadow-sm active:scale-95">
                <Filter size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 mt-8 md:mt-12 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-3 md:px-7 md:py-3 rounded-full border border-border text-xs md:text-sm font-bold whitespace-nowrap transition-all shadow-sm active:scale-95",
                  activeCategory === cat 
                    ? "medical-gradient text-white border-transparent shadow-lg shadow-primary/20" 
                    : "hover:bg-accent text-muted-foreground bg-background hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-4 md:px-6 pb-16 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode='popLayout'>
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center py-32"
              >
                <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
              </motion.div>
            ) : filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={product.id}
                className="bg-background rounded-[28px] md:rounded-[40px] border border-border/80 overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col h-full text-start shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/30">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {product.popular && (
                    <div className={cn(
                      "absolute top-4 medical-gradient px-4 py-2 rounded-full text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 shadow-xl z-10",
                      dir === 'ltr' ? "right-4" : "left-4"
                    )}>
                      <Zap size={10} fill="currentColor" /> {t('best_seller')}
                    </div>
                  )}
                  <div className={cn(
                    "absolute bottom-4 glass px-4 py-1.5 rounded-full text-[9px] md:text-[11px] font-bold text-primary uppercase tracking-widest z-10 shadow-lg border border-white/20",
                    dir === 'ltr' ? "left-4" : "right-4"
                  )}>
                    {product.category}
                  </div>
                </div>

                <div className="p-7 md:p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors leading-tight font-outfit">{product.name}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 flex-grow font-bold line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3.5 md:space-y-4 mb-8 md:mb-10 py-6 border-y border-border/60">
                    {product.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-[11px] md:text-sm font-bold text-foreground/80">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0" /> {feat}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <Link 
                      href="/contact"
                      className="flex-grow py-4 md:py-4.5 rounded-2xl medical-gradient text-white font-bold text-sm md:text-base shadow-lg hover:shadow-primary/40 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 group/btn"
                    >
                      {t('request_quote')}
                      <ArrowRight size={18} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover/btn:translate-x-1" : "group-hover/btn:-translate-x-1 rotate-180")} />
                    </Link>
                    <button className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-primary transition-all shrink-0 shadow-sm active:scale-95 group/down">
                      <Download size={20} className="md:w-6 md:h-6 group-hover/down:translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {!isLoading && filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 md:py-32 text-center"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-muted-foreground/40" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-muted-foreground mb-4">{t('no_prods_found')}</h3>
            <button 
              onClick={() => { setActiveCategory(t('all_products')); setSearchQuery(""); }} 
              className="px-8 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary/5 transition-all text-sm md:text-base"
            >
              {t('clear_all')}
            </button>
          </motion.div>
        )}
      </section>

      {/* Support CTA */}
      <section className="bg-muted/50 py-16 md:py-24 border-t border-border/80 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border text-primary font-bold text-[10px] md:text-xs mb-8 uppercase tracking-[0.2em]">
                <ShieldCheck size={14} /> {t('support_center')}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 font-outfit leading-tight">{t('need_tech_details')}</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed font-bold">
                {t('tech_details_desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 rounded-full medical-gradient border-2 border-transparent text-white font-bold hover:shadow-primary/40 hover:-translate-y-1 transition-all text-base md:text-lg shadow-xl shadow-primary/20">
                    {t('talk_specialist')}
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-10 py-5 rounded-full text-foreground/80 font-bold hover:text-primary transition-all flex items-center justify-center gap-3 text-base md:text-lg glass border border-border group-hover:border-primary/20">
                    {t('our_training_prog')} <ArrowRight size={20} className={cn("transition-transform duration-300", dir === 'ltr' ? "group-hover:translate-x-1" : "group-hover:-translate-x-1 rotate-180")} />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
