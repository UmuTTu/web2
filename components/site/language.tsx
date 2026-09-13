'use client';
import {createContext,useContext,useEffect,useState,type ReactNode} from 'react';
import {translations} from './translations';
type Locale='en'|'tr';
const LanguageContext=createContext<{locale:Locale;setLocale:(locale:Locale)=>void}>({locale:'en',setLocale:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}){const [locale,setState]=useState<Locale>('en');useEffect(()=>{let saved:string|null=null;try{saved=localStorage.getItem('concord-language')}catch{}if(saved==='tr'||saved==='en'){setState(saved);return}const preferred=(navigator.languages?.[0]||navigator.language||'en').toLowerCase();setState(preferred.startsWith('tr')?'tr':'en')},[]);useEffect(()=>{document.documentElement.lang=locale},[locale]);const setLocale=(value:Locale)=>{setState(value);try{localStorage.setItem('concord-language',value)}catch{}};return <LanguageContext.Provider value={{locale,setLocale}}>{children}</LanguageContext.Provider>}
export function useLanguage(){return useContext(LanguageContext)}
export function translate(value:string,locale:Locale):string{if(locale==='en')return value;const key=value.trim();const exact=translations[key];if(exact)return value.replace(key,exact);if(key.includes(' — '))return key.split(' — ').map(part=>translate(part,locale)).join(' — ');if(/^\d+-pack$/.test(key))return key.replace('-pack',"'li paket");return value}
export function Text({value}:{value:string|undefined|null}){const {locale}=useLanguage();return value?translate(value,locale):null}

