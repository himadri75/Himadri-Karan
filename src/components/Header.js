"use client";

import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Container from "./Container";
import { navigation } from "../data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIndex, setNavIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const itemsPerView = 3;
  const totalItems = navigation.length;
  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Track which section is currently in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navigation.forEach((item) => {
      const element = document.getElementById(item.href.slice(1)); // Remove # from href
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavItemClick = (clickedIndex) => {
    const relativePosition = clickedIndex - navIndex;

    // If clicking the rightmost item and there are more items to the right
    if (relativePosition === itemsPerView - 1 && navIndex < maxIndex) {
      setNavIndex((prev) => Math.min(maxIndex, prev + 1));
    }
    // If clicking the leftmost item and there are more items to the left
    else if (relativePosition === 0 && navIndex > 0) {
      setNavIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const visibleNavItems = navigation.slice(navIndex, navIndex + itemsPerView);

  return (
    <header className="sticky top-0 z-20 border-b border-[#d6dbe1] bg-[#f6f7f9]/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-6">
          <a
            href="#home"
            className={`text-sm font-semibold uppercase tracking-[0.3em] transition-colors ${
              activeSection === "home"
                ? "text-[#0e1116]"
                : "text-[#5d6672] hover:text-[#0e1116]"
            }`}
          >
            Himadri
          </a>
          <nav className="hidden items-center gap-4 sm:flex">
            <button
              type="button"
              onClick={() => setNavIndex(0)}
              className="flex items-center justify-center text-[#5d6672] transition-colors hover:text-[#0e1116] cursor-pointer"
              aria-label="Show first navigation items"
            >
              <IoChevronBack className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-6">
              {visibleNavItems.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-[12px] uppercase tracking-[0.24em] transition-colors whitespace-nowrap border-b-2 pb-1 ${
                    activeSection === item.href.slice(1)
                      ? "border-[#0e1116] text-[#0e1116]"
                      : "border-transparent text-[#5d6672] hover:text-[#0e1116]"
                  }`}
                  onClick={() => handleNavItemClick(navIndex + idx)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setNavIndex(maxIndex)}
              className="flex items-center justify-center text-[#5d6672] transition-colors hover:text-[#0e1116] cursor-pointer"
              aria-label="Show last navigation items"
            >
              <IoChevronForward className="h-5 w-5" />
            </button>
          </nav>
          <button
            type="button"
            className="inline-flex items-center justify-center border border-[#0e1116] p-2 text-[#0e1116] transition-colors hover:bg-[#0e1116] hover:text-[#f6f7f9] sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <RxCross1 className="h-5 w-5" />
            ) : (
              <GiHamburgerMenu className="h-5 w-5" />
            )}
          </button>
        </div>
        <div
          id="mobile-navigation"
          className={`${isOpen ? "grid" : "hidden"
            } gap-4 border-t border-[#d6dbe1] py-4 sm:hidden`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className={`text-[12px] uppercase tracking-[0.24em] transition-colors border-l-4 pl-3 ${
                activeSection === item.href.slice(1)
                  ? "border-[#0e1116] text-[#0e1116]"
                  : "border-transparent text-[#5d6672] hover:text-[#0e1116]"
              }`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </header>
  );
}
