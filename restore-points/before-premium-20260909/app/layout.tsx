import type {Metadata} from 'next';
import {SiteHeader} from '@/components/site/header';
import {SiteFooter} from '@/components/site/footer';
import './globals.css';
export const metadata:Metadata={title:'Concord — Trusted Hygiene for Every Moment',description:'Discover Concord hygiene products for homes, workplaces and everyday life.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/></body></html>}
