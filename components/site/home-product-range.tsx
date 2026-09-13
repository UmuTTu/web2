'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowRight} from 'lucide-react';
import {Text} from './language';
import {catalog,categories} from '@/app/products/catalog';
import {Collapsible,CollapsibleTrigger,CollapsibleContent} from '@/components/ui/collapsible';
export function HomeProductRange(){
 const [open,setOpen]=useState<string|null>(null);
 const range=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  if(!open)return;
  const dismiss=(event:PointerEvent)=>{const active=range.current?.querySelector('[data-family-open="true"]');if(event.target instanceof Node&&!active?.contains(event.target))setOpen(null)};
  const keyboard=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(null)};
  document.addEventListener('pointerdown',dismiss);document.addEventListener('keydown',keyboard);
  return()=>{document.removeEventListener('pointerdown',dismiss);document.removeEventListener('keydown',keyboard)};
 },[open]);
 return <div className="product-wrap" ref={range}><div className="product-grid expanding-product-grid" id="product-grid">{categories.map(category=>{const items=catalog.filter(item=>item.category===category);return <Collapsible className="product-family" key={category} open={open===category} onOpenChange={value=>setOpen(value?category:null)} data-family-open={open===category}><CollapsibleTrigger className="product family-trigger"><div className="home-product-photo"><img src={items[0].image} alt={items[0].name} loading="lazy"/></div><div className="product-copy"><h3><Text value={category}/></h3><p>{items.length} <Text value="products"/></p></div><span className="round-arrow"><ArrowRight size={20}/></span></CollapsibleTrigger><CollapsibleContent className="inline-products"><div className="inline-products-inner">{items.map((item,index)=><a className="inline-product" href={`/products#${item.id}`} key={item.id} style={{animationDelay:`${index*110}ms`}}><img className="inline-product-image" src={item.image} alt={item.name} loading="lazy"/><div><h4><Text value={item.name}/></h4><p><Text value={item.format}/></p></div><ArrowRight size={18}/></a>)}</div></CollapsibleContent></Collapsible>})}</div></div>}

