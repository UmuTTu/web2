import type {Metadata} from 'next';
import {CatalogViewer} from './catalog-viewer';
export const metadata:Metadata={title:'Product Catalogue — Concord',description:'View the Concord product catalogue online.'};
export default function CatalogPage(){return <CatalogViewer/>}
