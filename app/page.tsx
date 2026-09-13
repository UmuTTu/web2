'use client';
import {Text} from '@/components/site/language';
import {HeroCarousel} from '@/components/site/hero-carousel';
import {HomeProductRange} from '@/components/site/home-product-range';
import {ArrowRight,ShieldCheck,Settings,Users} from 'lucide-react';
import {Crop} from '@/components/site/crop';
export default function Home(){return <main id="top">

<section className="hero"><HeroCarousel/><div className="hero-inner"><p className="eyebrow"><Text value={"Hygiene for everyday life"}/></p><h1><Text value={"Trusted"}/><br/><Text value={"Hygiene Solutions"}/><br/><span><Text value={"for Every Moment"}/></span></h1><p className="hero-copy"><Text value={"At Concord, we develop high-quality hygiene products that bring comfort, care and freshness to everyday life — for homes, workplaces and beyond."}/></p><div className="hero-buttons"><a className="pill" href="/products"><Text value={"Explore Our Products "}/><ArrowRight size={20}/></a></div></div></section>
<section className="products section" id="products"><div className="section-heading"><div><h2><Text value={"Our Product Range"}/></h2><p><Text value={"Practical hygiene solutions designed for every need."}/></p></div></div><HomeProductRange/></section>
<div className="experience-banner"><strong><Text value={"With a quarter century of experience."}/></strong></div>
<section className="about section" id="about"><div className="about-copy"><h2><Text value={"About Concord"}/></h2><p><Text value={"We are a hygiene company driven by a simple belief: everyday care makes a big difference. With a focus on quality, innovation and reliability, we create products that support healthier and more comfortable lives at home, at work and for the ones you care for."}/></p><a className="pill" href="/about"><Text value={"Learn More About Concord "}/><ArrowRight size={20}/></a></div><Crop x={423} y={1057} w={300} h={235} className="about-image" alt="A water droplet on soft white hygiene fabric"/><div className="values"><div className="value"><span className="value-icon"><ShieldCheck/></span><div><h3><Text value={"Trusted Quality"}/></h3><p><Text value={"Reliable products"}/><br/><Text value={"you can count on."}/></p></div></div><div className="value"><span className="value-icon"><Settings/></span><div><h3><Text value={"Practical Care"}/></h3><p><Text value={"Solutions for real"}/><br/><Text value={"life needs."}/></p></div></div><div className="value"><span className="value-icon"><Users/></span><div><h3><Text value={"For Every Space"}/></h3><p><Text value={"Home, workplace"}/><br/><Text value={"and beyond."}/></p></div></div></div></section>

</main>}

