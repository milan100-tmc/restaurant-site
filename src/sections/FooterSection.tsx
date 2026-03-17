import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/custom/ScrollReveal';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { footerConfig } from '../config';

export function FooterSection() {
  // Null check for empty config
  if (!footerConfig.brandName) {
    return null;
  }

  // Map platform string to icon component
  const getSocialIcon = (platform: 'instagram' | 'facebook' | 'twitter') => {
    const iconMap = {
      instagram: <Instagram className="w-5 h-5" />,
      facebook: <Facebook className="w-5 h-5" />,
      twitter: <Twitter className="w-5 h-5" />,
    };
    return iconMap[platform];
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#05140A] to-[#020a05] overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <ScrollReveal className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-2">
                {footerConfig.brandName.split(' ').map((word, index) => (
                  <span key={index}>
                    {index === 0 ? word : <span className="gold-gradient-text">{word}</span>}
                    {index < footerConfig.brandName.split(' ').length - 1 && ' '}
                  </span>
                ))}
              </h3>
              {footerConfig.brandTagline && (
                <p className="text-[#8FBC8F] tracking-wider">{footerConfig.brandTagline}</p>
              )}
            </div>
            {footerConfig.brandDescription && (
              <p className="text-[#8FBC8F]/80 leading-relaxed mb-6 max-w-md">
                {footerConfig.brandDescription}
              </p>
            )}

            {/* Social Links */}
            {footerConfig.socialLinks.length > 0 && (
              <div className="flex gap-4">
                {footerConfig.socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0D2818] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.platform}
                  >
                    {getSocialIcon(social.platform)}
                  </motion.a>
                ))}
              </div>
            )}
          </ScrollReveal>

          {/* Navigation Column */}
          {(footerConfig.navSectionTitle || footerConfig.navLinks.length > 0) && (
            <ScrollReveal delay={0.1}>
              {footerConfig.navSectionTitle && (
                <h4 className="text-[#F5F5DC] font-semibold tracking-wider mb-6">
                  {footerConfig.navSectionTitle}
                </h4>
              )}
              {footerConfig.navLinks.length > 0 && (
                <ul className="space-y-3">
                  {footerConfig.navLinks.map((link) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-[#8FBC8F] hover:text-[#C9A227] transition-colors duration-300 inline-flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                      >
                        <span className="w-0 h-px bg-[#C9A227] group-hover:w-4 transition-all duration-300" />
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              )}
            </ScrollReveal>
          )}

          {/* Contact Column */}
          {(footerConfig.contactSectionTitle || footerConfig.contactAddress || footerConfig.contactPhone || footerConfig.contactEmail) && (
            <ScrollReveal delay={0.2}>
              {footerConfig.contactSectionTitle && (
                <h4 className="text-[#F5F5DC] font-semibold tracking-wider mb-6">
                  {footerConfig.contactSectionTitle}
                </h4>
              )}
              <ul className="space-y-4">
                {footerConfig.contactAddress && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <span className="text-[#8FBC8F]">
                      {footerConfig.contactAddress.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < footerConfig.contactAddress.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  </li>
                )}
                {footerConfig.contactPhone && (
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-[#8FBC8F]">{footerConfig.contactPhone}</span>
                  </li>
                )}
                {footerConfig.contactEmail && (
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C9A227] flex-shrink-0" />
                    <span className="text-[#8FBC8F]">{footerConfig.contactEmail}</span>
                  </li>
                )}
              </ul>
            </ScrollReveal>
          )}
        </div>

        {/* Newsletter */}
        {(footerConfig.newsletterTitle || footerConfig.newsletterButton) && (
          <ScrollReveal delay={0.3} className="mt-16 pt-12 border-t border-[#C9A227]/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                {footerConfig.newsletterTitle && (
                  <h4 className="text-[#F5F5DC] font-semibold tracking-wider mb-2">
                    {footerConfig.newsletterTitle}
                  </h4>
                )}
                {footerConfig.newsletterDescription && (
                  <p className="text-[#8FBC8F] text-sm">
                    {footerConfig.newsletterDescription}
                  </p>
                )}
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder={footerConfig.newsletterPlaceholder || "Email"}
                  className="px-4 py-3 bg-[#0D2818] border border-[#C9A227]/30 text-[#F5F5DC] placeholder:text-[#8FBC8F]/50 focus:outline-none focus:border-[#C9A227] transition-colors w-64"
                />
                {footerConfig.newsletterButton && (
                  <motion.button
                    className="px-6 py-3 bg-[#C9A227] text-[#0D2818] font-semibold tracking-wider hover:bg-[#D4AF37] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {footerConfig.newsletterButton}
                  </motion.button>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Bottom Bar */}
      {(footerConfig.copyright || footerConfig.policyLinks.length > 0) && (
        <div className="relative z-10 border-t border-[#C9A227]/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {footerConfig.copyright && (
                <p className="text-[#8FBC8F]/60 text-sm">
                  {footerConfig.copyright}
                </p>
              )}
              {footerConfig.policyLinks.length > 0 && (
                <div className="flex gap-6">
                  {footerConfig.policyLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[#8FBC8F]/60 text-sm hover:text-[#C9A227] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Decorative Leaves */}
      <motion.img
        src="/images/leaf_1.png"
        alt=""
        className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/images/leaf_2.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
}
