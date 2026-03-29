import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Shivshankar Mali. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
