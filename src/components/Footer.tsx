import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Company */}
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Element100 Logo" className="w-9 h-9 rounded-lg" />
            <span className="font-semibold text-foreground">Element100 Technology</span>
          </div>

          {/* Contact Info */}
          <div className="text-small text-center md:text-right">
            <p>contact@element100.tech</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-small text-center">
            © {currentYear} Element100 Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
