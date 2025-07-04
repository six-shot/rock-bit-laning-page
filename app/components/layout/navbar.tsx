import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { useState } from "react";

const nav_links = [
  { name: "Home", href: "/" },
  { name: "Demo", href: "/#demo" },
  { name: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-20 bg-[#0B0C10] border-b border-[#2b303b] w-full fixed top-0 left-0 right-0 px-5 z-[300]">
      <nav className="max-w-[1352px] mx-auto size-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icons.logo className="size-10" />
          <span className="font-medium text-2xl font-fig">Rockbit</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {nav_links.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                to={link.href}
                key={link.name}
                className={`text-sm font-medium font-fig text-muted hover:text-white transition-colors ${
                  isActive ? "text-white" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Button className="hidden md:block">Get started</Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0B0C10] border-b border-[#2b303b] shadow-lg">
          <div className="px-5 py-4 space-y-4">
            {nav_links.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  to={link.href}
                  key={link.name}
                  className={`block text-sm font-medium font-fig text-muted hover:text-white transition-colors py-2 ${
                    isActive ? "text-white" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
