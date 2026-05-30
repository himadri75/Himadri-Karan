"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Container from "./Container";
import { navigation } from "../data/portfolio";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-[#d6dbe1] bg-[#f6f7f9]/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0e1116]">
            Himadri
          </div>
          <nav className="hidden items-center gap-6 sm:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="text-[12px] uppercase tracking-[0.24em] text-[#5d6672] transition-colors hover:text-[#0e1116]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
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
          className={`${
            isOpen ? "grid" : "hidden"
          } gap-4 border-t border-[#d6dbe1] py-4 sm:hidden`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              className="text-[12px] uppercase tracking-[0.24em] text-[#5d6672] transition-colors hover:text-[#0e1116]"
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
