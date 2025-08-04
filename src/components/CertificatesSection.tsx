import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certificates = [
  {
    title: 'CS ION Career Edge - IT for Non-IT',
    link: 'https://drive.google.com/file/d/1JXIIYM2cyhCvwCQ0ZqG550bjAJ0LdoR5/view',
  },
  {
    title: 'Microsoft Certified Technology Specialist (MCTS)',
    link: 'https://drive.google.com/file/d/18HMKnBF5M9XoskUY0EusQlDUH6icC_IB/view',
  },
  {
    title: 'IBM Solution Developer – WebSphere DataStage v7.5',
    link: 'https://drive.google.com/file/d/1m0scDBU5pnW0onlwKLpuklyGrHLBdsI3/view',
  },
  {
    title: 'Amazon Web Services for Beginners',
    link: 'https://drive.google.com/file/d/17w1rJFfYIlkh5k47TgaYdHKzJSJVCzkW/view',
  },
  {
    title: 'Tata Group – Data Visualisation Job Simulation',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_YrupDR4NQicRBub7Z_1707975079851_completion_certificate.pdf',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              My Certificates
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my commitment to continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="glass border-glass-border h-full transition-all duration-300 hover:shadow-glow-primary">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300 group/link"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;