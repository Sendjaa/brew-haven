'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"> */}
              {/* image logo */}
              <img src="/logo.png" alt="Brew Haven Logo" className="w-10 h-10 rounded-full" />
            {/* </div> */}
            <span className="hidden sm:inline font-bold text-lg text-primary">Brew Haven</span>
          </Link> 

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Beranda
            </Link>
            <Link href="/menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Galeri
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Kontak
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-sm font-medium hover:bg-secondary rounded-md"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
