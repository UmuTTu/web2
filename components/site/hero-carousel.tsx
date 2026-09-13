'use client';
import {useEffect,useRef,useState} from 'react';
import {ChevronLeft,ChevronRight} from 'lucide-react';
import {catalog} from '@/app/products/catalog';
const slides=catalog.filter(item=>['aegean-wipes','soap-soda-wipes','lemon-wipes','mop-complete','laundry-detergent'].includes(item.id));
export function HeroCarousel(){
 const [slide,setSlide]=useState(0),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false),[reduced,setReduced]=useState(false);
 const progress=useRef<HTMLSpanElement>(null),elapsed=useRef(0),touch=useRef<{x:number;y:number}|null>(null);
 useEffect(()=>{const query=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(query.matches);update();query.addEventListener('change',update);return()=>query.removeEventListener('change',update)},[]);
 useEffect(()=>{elapsed.current=0;if(progress.current)progress.current.style.transform='scaleX(0)'},[slide]);
 useEffect(()=>{if(hovered||focused||reduced)return;let frame=0,last=performance.now();const tick=(now:number)=>{if(!document.hidden)elapsed.current+=Math.min(now-last,100);last=now;if(progress.current)progress.current.style.transform=`scaleX(${Math.min(elapsed.current/8000,1)})`;if(elapsed.current>=8000){elapsed.current=0;setSlide(current=>(current+1)%slides.length)}frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick);return()=>cancelAnimationFrame(frame)},[hovered,focused,reduced]);
 const move=(direction:number)=>{elapsed.current=0;setSlide(current=>(current+direction+slides.length)%slides.length)};
 return <div className="hero-gallery premium-gallery" role="region" aria-roledescription="carousel" aria-label="Concord product images" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setFocused(false)}} onKeyDown={event=>{if(event.key==='ArrowLeft'){event.preventDefault();move(-1)}if(event.key==='ArrowRight'){event.preventDefault();move(1)}}} onTouchStart={event=>{touch.current={x:event.touches[0].clientX,y:event.touches[0].clientY}}} onTouchEnd={event=>{if(!touch.current)return;const dx=event.changedTouches[0].clientX-touch.current.x,dy=event.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.3)move(dx<0?1:-1);touch.current=null}} onTouchCancel={()=>{touch.current=null}}>
 {slides.map((image,index)=><div className={`hero-photo premium-slide ${index===slide?'is-active':''}`} key={image.id} aria-hidden={index!==slide}><img className="hero-real-product" src={image.image} alt={image.name}/></div>)}
 <button className="hero-prev" aria-label="Previous product image" onClick={()=>move(-1)}><ChevronLeft/></button><button className="hero-next" aria-label="Next product image" onClick={()=>move(1)}><ChevronRight/></button>
 <div className="hero-gallery-controls"><span className="slide-number" aria-live={hovered||focused?'polite':'off'}>{String(slide+1).padStart(2,'0')} <span>/ {String(slides.length).padStart(2,'0')}</span></span><div className="slide-progress" aria-hidden="true"><span ref={progress}/></div></div></div>
}

