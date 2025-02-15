import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneNumber } from '../lib/constants';
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcDiscover,
    FaCcAmex,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

export const metadata: Metadata = {
    title: '24/7 Auto Glass Repair',
    description: '24/7 Auto Glass Repair',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="py-8 bg-brand-grey text-white relative">
                <header className="flex flex-col gap-4 items-center sticky md:static bg-brand-grey top-0 z-10">
                    <nav className="md:hidden flex w-full justify-between items-center max-w-5xl px-8 md:px-0">
                        <Link href={'/'}>
                            <Image src="/logo.jpg" alt="" width={120} height={0} />
                        </Link>
                        <details className="relative">
                            <summary className="">
                                <FiMenu className="h-12 w-12" />
                            </summary>
                            <div className="flex flex-col gap-4 w-24 pl-4 -left-4 justify-center absolute bg-brand-green-dark">
                                <Link href={'/'}>Home</Link>
                                <Link href={'/replace'}>Replace</Link>
                                <Link href={'/repair'}>Repair</Link>
                                <Link href={'/quote'}>Quote</Link>
                                <Link href={'/about'}>About</Link>
                                <Link href={'/contact'}>Contact</Link>
                                <Link href={'/reviews'}>Reviews</Link>
                            </div>
                        </details>
                    </nav>
                    <nav className="hidden md:flex w-full justify-between items-center max-w-5xl px-8 md:px-0">
                        <Link href={'/'}>
                            <Image src="/logo.jpg" alt="" width={180} height={0} />
                        </Link>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/replace'}>Replace</Link>
                        <Link href={'/repair'}>Repair</Link>
                        <Link
                            href={'/quote'}
                            className="border border-brand-green p-2 items-center flex"
                        >
                            Quote
                        </Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                        <Link href={'/reviews'}>Reviews</Link>
                    </nav>
                </header>
                <main className="flex flex-col max-w-5xl mx-auto px-4">{children}</main>
                <footer className="flex flex-col items-center justify-center">
                    <div className="flex gap-12 bg-brand-green-dark text-white p-4 w-full justify-center">
                        <div className="flex bg-brand-grey md:bg-transparent flex-col gap-4 md:gap-0 md:flex-row justify-between w-full max-w-5xl p-8 md:p-0">
                            <div className="flex flex-col items-center gap-4">
                                <span>Contact</span>
                                <span>24/7 Auto Glass Repair</span>
                                <span>Address</span>
                                <span>{PhoneNumber}</span>
                                <span className="flex gap-2">
                                    <FaFacebook /> <FaTwitter /> <FaInstagram />
                                </span>
                                <span>
                                    <Link
                                        href="/quote"
                                        className="py-2 px-4 bg-brand-green-dark md:bg-brand-grey hover:bg-black text-white items-center flex rounded-lg text-center"
                                    >
                                        Request Quote
                                    </Link>
                                </span>
                            </div>
                            <div className="flex flex-col items-center md:gap-4 bg-brand-green-dark md:bg-transparent p-4">
                                <span>Services:</span>
                                <ul>
                                    <li>Auto Glass Replacement</li>
                                    <li>Windshield Repair</li>
                                    <li>Flat Glass</li>
                                    <li>Commercial Glass</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <span>Areas Served</span>
                                <ul>
                                    <li>City 1</li>
                                    <li>City 2</li>
                                    <li>City 3</li>
                                    <li>City 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 justify-between w-full max-w-5xl px-8 md:px-0 mt-12">
                        <div className="flex flex-col items-center gap-4">
                            <span>Hours</span>
                            <ul>
                                <li>Monday: 8:00 AM - 5:00 PM</li>
                                <li>Tuesday: 8:00 AM - 5:00 PM</li>
                                <li>Wednesday: 8:00 AM - 5:00 PM</li>
                                <li>Thursday: 8:00 AM - 5:00 PM</li>
                                <li>Friday: 8:00 AM - 5:00 PM</li>
                                <li>Saturday: 8:00 AM - 5:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span>Payment:</span>
                            <ul className="flex gap-2">
                                <li>
                                    <FaCcVisa size={'3rem'} />
                                </li>
                                <li>
                                    <FaCcMastercard size={'3rem'} />
                                </li>
                                <li>
                                    <FaCcAmex size={'3rem'} />
                                </li>
                                <li>
                                    <FaCcDiscover size={'3rem'} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
