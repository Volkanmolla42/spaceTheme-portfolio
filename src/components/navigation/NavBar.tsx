import React from "react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavBarProps {
  links?: Array<{ href: string; label: string }>;
  onThemeToggle?: () => void;
}

const NavBar = ({
  links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ],
  onThemeToggle = () => {},
}: NavBarProps) => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-[#0a2a2a]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="text-white text-2xl tracking-[0.2em] font-light">
          PORTFOLIO
        </div>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {links.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={link.href}
                  className={cn(
                    "text-white/70 hover:text-white tracking-[0.3em] text-sm px-6 py-2 transition-colors",
                    location.pathname === link.href && "text-white bg-white/5",
                    "hover:bg-white/5 rounded-full",
                  )}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          variant="ghost"
          className="text-white/70 hover:text-white hover:bg-white/5"
          onClick={onThemeToggle}
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
