import type {Metadata} from 'next';
import {Text} from '@/components/site/language';
import {Phone,Mail,MapPin,ArrowRight} from 'lucide-react';
export const metadata:Metadata={title:'Contact Concord',description:'Contact information for Concord product and business enquiries.'};
export default function ContactPage(){return <main className="interior-page contact-page"><section className="interior-heading"><a className="breadcrumb" href="/"><Text value={"Home / Contact"}/></a><p className="eyebrow"><Text value={"Contact Concord"}/></p><h1><Text value="Contact"/><br/><span><Text value="Addresses"/></span></h1><p className="page-intro"><Text value={"For product information and business enquiries, find our contact details below."}/></p></section><section className="contact-options" aria-label="Contact details"><article><Phone/><h2><Text value={"Call us"}/></h2><p><a href="tel:+902126406026">+90 212 640 6026</a><br/><a href="tel:+905326407232">+90 532 640 7232</a></p></article><article><Mail/><h2><Text value={"Email us"}/></h2><p><a href="mailto:info@atlasitriyat.com">info@atlasitriyat.com</a></p></article><article><MapPin/><h2><Text value={"Find us"}/></h2><address>KOCATEPE MAH. YAĞ İSKELESİ CD. 12. SK. C27 BLOK NO: 238/3<br/>MEGACENTER - BAYRAMPAŞA / İSTANBUL, TÜRKİYE</address></article></section></main>}


