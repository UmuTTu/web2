'use client';
import pages from './pages.json';
import {Download} from 'lucide-react';
import {useLanguage} from '@/components/site/language';
export function CatalogViewer(){const {locale}=useLanguage();const turkish=locale==='tr';const url='/catalogs/Concord_Product_Catalog.pdf';return <main className="embedded-catalog-page"><div className="embedded-catalog-heading"><a className="breadcrumb" href="/">{turkish?'Ana Sayfa / Katalog':'Home / Catalogue'}</a><h1>{turkish?'Ürün Kataloğu':'Product Catalogue'}</h1><a className="pill catalog-page-download" href={url} download={`Concord-${locale==='tr'?'Urun-Katalogu':'Product-Catalogue'}.pdf`}><Download size={18}/>{turkish?'Kataloğu İndir':'Download Catalogue'}<span>PDF</span></a></div><div className="catalog-pages" role="region" aria-label={turkish?"Katalog sayfaları":"Catalogue pages"}>{pages.map((page,index)=><img key={page.src} src={page.src} width={page.width} height={page.height} loading={index===0?"eager":"lazy"} alt={`${turkish?"Katalog sayfası":"Catalogue page"} ${index+1} / ${pages.length}`}/>)}</div><p className="catalog-viewer-help">{turkish?'Katalog görüntülenmiyorsa ':'If the catalogue does not display, '}<a href={url} target="_blank" rel="noopener noreferrer">{turkish?'yeni sekmede açın.':'open it in a new tab.'}</a></p></main>}


