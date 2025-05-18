'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth-provider";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Libraries', href: '/libraries' },
    { label: 'Forum', href: '/forum' },
    { label: 'Contact Us', href: '/contact' },
  ];

  // Add active state to nav items
  const routes = navItems.map(item => ({
    ...item,
    active: pathname === item.href
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav 
      className={`sticky  max-w-[1920px] lg:overflow-x-auto top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#ECE3DA]/90 shadow-md backdrop-blur-sm' : 'bg-[#ECE3DA]'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="StudentAdda Home">
            <div className="flex items-center gap-2">
              {/* <BookOpen className="h-6 w-6 text-[#435058]" /> */}
              <Image
                src="/logo.svg"
                width={158}
                height={28}
                alt="StudentAdda Logo"
                className="w-32 sm:w-40 h-auto object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 font-bold text-[#435058] text-sm lg:text-[14.19px] leading-[14.19px] tracking-[0.14px]">
          {routes.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`px-3 lg:px-4 py-2 rounded-full transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1] focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50 ${
                item.active ? 'bg-[#435058] text-[#FEEDC1]' : 'text-[#435058]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Auth buttons and ModeToggle */}
        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
          
          {user ? (
            <>
              <Link href={`/dashboard/${user.role}`}>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-bold text-[15.61px] leading-[22.71px] tracking-[0.14px]"
                >
                  Dashboard
                </Button>
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full hover:bg-[#374349] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50"
                aria-label="Sign Out"
              >
                <span className="font-bold text-[15.61px] leading-[22.71px] tracking-[0.14px] whitespace-nowrap">
                  Sign Out
                </span>
                <Image
                  src="/home/signin.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                  aria-hidden="true"
                />
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-bold text-[15.61px] leading-[22.71px] tracking-[0.14px]"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <button
                  className="flex items-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full hover:bg-[#374349] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50"
                  aria-label="Sign Up"
                >
                  <span className="font-bold text-[15.61px] leading-[22.71px] tracking-[0.14px] whitespace-nowrap">
                    Sign Up
                  </span>
                  <Image
                    src="/signin.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                    aria-hidden="true"
                  />
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button - Using Sheet from second component */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                id="menu-button"
                variant="outline" 
                size="icon" 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <Menu size={24} className="text-[#435058]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px] bg-[#ECE3DA]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <BookOpen className="h-6 w-6 text-[#435058]" />
                  <Image
                    src="/logo.svg"
                    width={120}
                    height={24}
                    alt="StudentAdda Logo"
                    className="h-auto object-contain"
                  />
                </Link>
                <nav className="flex flex-col gap-4 font-semibold text-[#435058]">
                  {routes.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className={`px-4 py-2 rounded-md transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1] focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50 ${
                        item.active ? 'bg-[#435058] text-[#FEEDC1]' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {user ? (
                    <>
                      <Link
                        href={`/dashboard/${user.role}`}
                        className="px-4 py-2 rounded-md transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1] focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="mt-2 flex items-center justify-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full hover:bg-[#374349] transition duration-200"
                        aria-label="Sign Out"
                      >
                        <span>Sign Out</span>
                        <Image
                          src="/home/signin.png"
                          alt=""
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                          aria-hidden="true"
                        />
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="px-4 py-2 rounded-md transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1] focus:outline-none focus:ring-2 focus:ring-[#435058] focus:ring-opacity-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <button
                          className="mt-2 flex items-center justify-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full hover:bg-[#374349] transition duration-200 w-full"
                          aria-label="Sign Up"
                        >
                          <span>Sign Up</span>
                          <Image
                            src="/signin.svg"
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 object-contain"
                            aria-hidden="true"
                          />
                        </button>
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}