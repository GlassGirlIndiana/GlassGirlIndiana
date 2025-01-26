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
            <body className="py-8">
                <header className="flex flex-col gap-4 items-center">
                    <nav className="flex w-full justify-between items-center max-w-4xl">
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
                <main className="flex flex-col max-w-4xl mx-auto px-4">{children}</main>
                <footer className="flex flex-col items-center justify-center">
                    <div className="flex gap-12 bg-brand-green-dark text-white p-4 w-full justify-center">
                        <div className="flex justify-between w-full max-w-4xl">
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
                                        className="py-2 px-4 bg-brand-grey hover:bg-black text-white items-center flex rounded-lg"
                                    >
                                        Request Quote
                                    </Link>
                                </span>
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
                    </div>
                    <div className="flex justify-between w-full max-w-4xl mt-12">
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
