'use client';
import {Text} from '@/components/site/language';
import {useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
import {Menu} from 'lucide-react';
import {LanguageSwitcher} from './language-switcher';
import {Crop} from './crop';
export function SiteHeader(){
 const [following,setFollowing]=useState(false),[menu,setMenu]=useState(false);
 const shell=useRef<HTMLDivElement>(null);const pathname=usePathname();
 useEffect(()=>{const update=()=>setFollowing(window.scrollY>Math.max(0,(shell.current?.offsetHeight??108)-16));update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[]);
 useEffect(()=>setMenu(false),[pathname]);
 return <><div className="header-shell" ref={shell}><header className={`header ${following?'is-following':''}`}><a href="/" aria-label="Concord home"><Crop x={53} y={16} w={113} h={72} className="logo" alt="Concord"/></a><nav className={menu?'nav open':'nav'} aria-label="Main navigation"><a href="/" aria-current={pathname==='/'?'page':undefined}><Text value="Home"/></a><a href="/products" aria-current={pathname==='/products'?'page':undefined}><Text value={"Products"}/></a><a href="/about" aria-current={pathname==='/about'?'page':undefined}><Text value={"About"}/></a><a href="/contact" aria-current={pathname==='/contact'?'page':undefined}><Text value={"Contact"}/></a><a href="/catalog" aria-current={pathname==='/catalog'?'page':undefined}><Text value="Catalogue"/></a></nav><div className="header-actions"><LanguageSwitcher/><a className="pill" href="/contact"><Text value={"Get in Touch"}/></a><button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}><Menu/></button></div><div className="header-wave" aria-hidden="true"/></header></div></>
}
