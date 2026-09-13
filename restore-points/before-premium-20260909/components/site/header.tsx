'use client';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {Globe,Menu} from 'lucide-react';
import {Crop} from './crop';
import {Dialog,DialogContent,DialogTitle,DialogDescription} from '@/components/ui/dialog';
export function SiteHeader(){
 const [following,setFollowing]=useState(false),[menu,setMenu]=useState(false),[info,setInfo]=useState<{title:string;body:string}|null>(null);
 const shell=useRef<HTMLDivElement>(null);const pathname=usePathname();
 useEffect(()=>{const update=()=>setFollowing(window.scrollY>Math.max(0,(shell.current?.offsetHeight??108)-16));update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[]);
 useEffect(()=>setMenu(false),[pathname]);
 return <><div className="header-shell" ref={shell}><header className={`header ${following?'is-following':''}`}><a href="/" aria-label="Concord home"><Crop x={53} y={16} w={113} h={72} className="logo" alt="Concord"/></a><nav className={menu?'nav open':'nav'} aria-label="Main navigation"><a href="/products" aria-current={pathname==='/products'?'page':undefined}>Products</a><a href="/about" aria-current={pathname==='/about'?'page':undefined}>About</a><button onClick={()=>setInfo({title:'Care for everyday life',body:'Our focus is on practical hygiene products that support healthier, more comfortable spaces. Product materials and responsible-use information can be provided by the Concord team.'})}>Sustainability</button><button onClick={()=>setInfo({title:'Hygiene for your business',body:'Explore our hygiene range for workplaces and everyday business needs. Visit our contact page for partnership enquiries.'})}>Business</button><a href="/contact" aria-current={pathname==='/contact'?'page':undefined}>Contact</a></nav><div className="header-actions"><span className="language"><Globe size={19}/> EN</span><a className="pill" href="/contact">Get in Touch</a><button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}><Menu/></button></div><div className="header-wave" aria-hidden="true"/></header></div><Dialog open={!!info} onOpenChange={open=>{if(!open)setInfo(null)}}><DialogContent className="detail-dialog"><DialogTitle className="detail-title">{info?.title}</DialogTitle><DialogDescription className="detail-description">{info?.body}</DialogDescription><a className="pill" href="/contact">Contact Concord</a></DialogContent></Dialog></>
}
