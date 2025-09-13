import React from 'react';

const SiteConfig = {
  footerText: '© 2025 Gozie Ihejirika. All Rights Reserved.',
};

const Footer = () => {
  return (
    <footer
      className="border-t border-border/50 py-8 bg-card/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright section */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground transition-colors duration-300">
              {SiteConfig.footerText}
            </p>
          </div>

          {/* Made with love section - enhanced */}
          <div
            className="flex items-center gap-2 text-muted-foreground transition-colors duration-300">
            <span>Made with</span>

            {/* Heart icon with enhanced animation */}
            <span
              className="text-red-500 animate-pulse relative"
              aria-label="love"
              title="Made with love">
              <span className="inline-block hover:scale-110 transition-transform duration-300">
                ❤️
              </span>
            </span>

            <span>using</span>

            {/* React link with enhanced styling */}
            <a
              className="font-medium text-primary hover:text-primary-glow transition-all duration-300 hover:scale-105 relative group"
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit React Framework">
              React
              {/* Subtle underline effect */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300">
              </span>
            </a>

            <span>&</span>

            {/* Tailwind link with enhanced styling */}
            <a
              className="font-medium text-primary hover:text-primary-glow transition-all duration-300 hover:scale-105 relative group"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Tailwind CSS">
              Tailwind
              {/* Subtle underline effect */}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300">
              </span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/30">
          <div className="flex justify-center">
            <div className="w-12 h-0.5 bg-gradient-primary rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };