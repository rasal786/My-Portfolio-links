import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, TrendingUp, Users, Lightbulb, Database, Code, Network, ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ExperienceSection = () => {
  const experiences = [{
    role: "Networking Specialist",
    period: "2024",
    type: "Technical",
    icon: Network,
    description: "Gained expertise in network infrastructure, protocols, and security. Implemented and maintained network solutions while ensuring optimal performance and security standards.",
    highlights: ["Network topology design and implementation", "Router and switch configuration", "Network security protocol implementation", "Performance monitoring and troubleshooting", "Network documentation and maintenance"],
    skills: ["TCP/IP", "Cisco", "Network Security", "VPN", "Firewalls", "Wireshark", "Network Monitoring"]
  }, {
    role: "Front End Developer",
    period: "2024",
    type: "Project",
    icon: Code,
    description: "Developed responsive and interactive web applications using modern front-end technologies. Focused on creating seamless user experiences with clean, maintainable code and optimized performance.",
    highlights: ["Responsive web design implementation", "Interactive UI component development", "Performance optimization and lazy loading", "Cross-browser compatibility testing", "Modern JavaScript framework integration"],
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Git"]
  }, {
    role: "Data Science Intern",
    period: "Summer 2024",
    type: "Internship",
    icon: Database,
    description: "Gained hands-on experience in data analysis, statistical modeling, and machine learning algorithms. Worked with real-world datasets to extract meaningful insights and create predictive models.",
    highlights: ["Data cleaning and preprocessing", "Statistical analysis and visualization", "Machine learning model development", "Report generation and presentation"],
    skills: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"]
  }, {
    role: "UI/UX Design Intern",
    period: "Spring 2024",
    type: "Internship",
    icon: Lightbulb,
    description: "Collaborated with design teams to create user-centered digital experiences. Participated in the complete design process from research to prototyping and user testing.",
    highlights: ["User research and persona development", "Wireframing and prototyping", "Usability testing and iteration", "Design system contribution"],
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing"]
  }];
  const achievements = [{
    icon: TrendingUp,
    title: "Academic Excellence",
    description: "Maintaining strong GPA while pursuing B.Tech in Information Technology"
  }, {
    icon: Users,
    title: "Team Collaboration",
    description: "Successfully collaborated with cross-functional teams during internships"
  }, {
    icon: Briefcase,
    title: "Industry Exposure",
    description: "Gained practical experience in both data science and design fields"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">My Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey through internships and practical learning experiences
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => <motion.div key={index} variants={itemVariants} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div whileHover={{
                scale: 1.02
              }} className="cursor-pointer">
                    <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <exp.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{exp.period}</span>
                            <Badge variant="secondary" className="ml-2">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              {highlight}
                            </li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, idx) => <Badge key={idx} variant="outline" className="border-primary/30 text-primary">
                              {skill}
                            </Badge>)}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05
          }}>
                <Card className="p-6 bg-card-gradient border-border backdrop-blur-sm text-center hover:shadow-glow-primary transition-all duration-300">
                  <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} viewport={{
        once: true
      }} className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Personal Projects</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Hands-on learning projects that demonstrate my growing skills and passion for technology
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* EMI Calculator Project */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.02
          }}>
              <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Folder className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-2">EMI Calculator</h4>
                    <Badge variant="secondary" className="text-green-400 border-green-400/30">
                      Complete
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built a responsive EMI calculator web application with modern design and user-friendly interface. Features dark mode support and real-time calculations.
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Key Features:</h5>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-blue-400 font-bold text-lg">Responsive</div>
                      <div className="text-sm text-muted-foreground">Design</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold text-lg">Dark Mode</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold text-lg">Real-time</div>
                      <div className="text-sm text-muted-foreground">Calculations</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3">Tech Stack:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-primary/30 text-primary">React</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">Tailwind CSS</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">TypeScript</Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">Dark Mode</Badge>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    console.log('EMI Calculator button clicked');
                    try {
                      window.open('https://mohamed-emi-calculator.netlify.app', '_blank', 'noopener,noreferrer');
                    } catch (error) {
                      console.error('Error opening URL:', error);
                      // Fallback: direct navigation
                      window.location.href = 'https://mohamed-emi-calculator.netlify.app';
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Card>
            </motion.div>

            {/* Placeholder for future projects */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm border-dashed opacity-50 h-full flex items-center justify-center">
                <div className="text-center">
                  <Folder className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-muted-foreground">More Projects Coming Soon</h4>
                  <p className="text-muted-foreground mt-2">Exciting new projects in development</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ExperienceSection;