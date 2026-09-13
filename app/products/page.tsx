import type {Metadata} from 'next';
import {Text} from '@/components/site/language';
import {ProductCatalog} from './product-catalog';
export const metadata:Metadata={title:'All Products — Concord',description:'Browse Concord wet wipes, surface cleaning towels and cleaning sets.'};
export default function ProductsPage(){return <main className="interior-page catalog-page"><section className="interior-heading"><a className="breadcrumb" href="/"><Text value={"Home / Products"}/></a><p className="eyebrow"><Text value={"Our full range"}/></p><h1><Text value={"Everyday essentials."}/><br/><span><Text value={"Care in every detail."}/></span></h1><p className="page-intro"><Text value={"Explore our wet wipes, surface cleaning towels and cleaning sets."}/></p><div className="catalog-download-row"><a className="pill" href="/catalog"><Text value="View Catalogue"/></a></div></section><ProductCatalog/></main>}

