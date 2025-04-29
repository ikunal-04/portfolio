"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

function Navigation() {
    const navItems = [
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Experience",
            link: "#experience",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        <NavbarButton 
                        variant="secondary" 
                        href="https://drive.google.com/file/d/17gSjO5w9dx_HtpuLPo_GPnDahevAJaTP/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer">
                            Resume
                        </NavbarButton>
                        <NavbarButton 
                        href="mailto:kunalgarg054@gmail.com?subject=Let's%20Collaborate%20or%20Connect!&body=Hey%20Kunal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect%20or%20discuss%20a%20project%20idea.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                        variant="primary">
                            Get in touch
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                                href="https://drive.google.com/file/d/17gSjO5w9dx_HtpuLPo_GPnDahevAJaTP/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                                href="mailto:kunalgarg054@gmail.com?subject=Let's%20Collaborate%20or%20Connect!&body=Hey%20Kunal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect%20or%20discuss%20a%20project%20idea.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                            >
                                Get in touch
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            {/* <Hero /> */}
        </div>
    );
}

export default Navigation;