const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border dot-grid-bg">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Company */}
          <div className="flex items-center gap-3">
            <img 
              src="https://element100tech.github.io/images/logo.png" 
              alt="Element100 Logo" 
              className="h-8 w-auto" 
            />
          </div>

          {/* Contact Info */}
          <div className="text-small text-center md:text-right">
            <p className="text-foreground/70">contact@element100.tech</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-small text-center text-foreground/70">
            © {currentYear} Element100 Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
