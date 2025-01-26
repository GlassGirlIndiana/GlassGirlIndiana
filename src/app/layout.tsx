import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import PhoneNumberLink from '../components/phoneNumber';
import { PhoneNumber } from '../lib/constants';

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
            <body className="antialiased">
                <header className="flex flex-col gap-4 items-center">
                    <nav className="flex gap-4 items-center">
                        <Link href={'/'}>
                            <Image src="/bizCardFront.jpg" alt="" width={80} height={40} />
                        </Link>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/replace'}>Replace</Link>
                        <Link href={'/repair'}>Repair</Link>
                        <Link href={'/quote'} className="border border-brand-green p-2">
                            Quote
                        </Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                        <Link href={'/reviews'}>Reviews</Link>
                    </nav>
                </header>
                <main className="flex flex-col max-w-4xl mx-auto px-4 py-8">{children}</main>
                <footer className="flex flex-col items-center justify-center">
                    <div className="flex gap-12 bg-brand-green-dark text-white p-4 w-full justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <span>Contact</span>
                            24/7 Auto Glass Repair Address
                            {PhoneNumber}
                            Socials
                            <Link href={'/quote'}>Request Quote</Link>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <span>Services</span>
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
                    <div className="flex gap-12">
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
                            <span>Payment</span>
                            <ul className="flex gap-4">
                                <li>Visa</li>
                                <li>Mastercard</li>
                                <li>Discover</li>
                                <li>American Express</li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
