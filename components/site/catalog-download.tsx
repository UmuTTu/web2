'use client';
import {Download} from 'lucide-react';
import {useLanguage} from './language';
export function CatalogDownload({compact=false}:{compact?:boolean}){const {locale}=useLanguage();return <a className={compact?'nav-catalog':'catalog-download pill'} href={`/catalogs/concord-catalog-${locale}.pdf`} download={`Concord-${locale==='tr'?'Urun-Katalogu':'Product-Catalogue'}.pdf`}><Download size={compact?15:18}/><span>{locale==='tr'?'Katalog İndir':'Download Catalogue'}</span>{!compact&&<small>PDF</small>}</a>}
