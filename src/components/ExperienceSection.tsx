import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, TrendingUp, Users, Lightbulb, Database } from 'lucide-react';
const ExperienceSection = () => {
  const experiences = [{
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My 
          </h2>
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
      </div>
    </section>;
};
export default ExperienceSection;