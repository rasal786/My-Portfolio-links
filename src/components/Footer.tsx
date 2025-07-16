import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rasal786",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mohamed-rasal",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rasaljafreennj@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">
              Mohamed Rasal
            </h3>
            <p className="text-muted-foreground">
              Data Science & Frontend Development Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:shadow-glow-primary"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Mohamed Rasal
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            Building the future, one line of code at a time. Currently pursuing B.Tech in Information Technology at Aalim Muhamed Salegh College.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;