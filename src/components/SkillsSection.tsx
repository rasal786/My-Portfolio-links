import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Palette, 
  BarChart3, 
  Brain, 
  Globe,
  FileText,
  Users
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 90, color: "from-orange-500 to-red-500" },
        { name: "SQL", level: 75, color: "from-purple-500 to-purple-600" }
      ]
    },
    {
      category: "Data Science & Analytics",
      icon: BarChart3,
      skills: [
        { name: "Pandas", level: 80, color: "from-green-500 to-green-600" },
        { name: "NumPy", level: 75, color: "from-blue-500 to-indigo-500" },
        { name: "Data Visualization", level: 85, color: "from-pink-500 to-rose-500" },
        { name: "Statistical Analysis", level: 70, color: "from-teal-500 to-cyan-500" }
      ]
    },
    {
      category: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 80, color: "from-blue-400 to-blue-500" },
        { name: "Tailwind CSS", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Responsive Design", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "TypeScript", level: 70, color: "from-blue-600 to-blue-700" }
      ]
    },
    {
      category: "Design & UX",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 75, color: "from-purple-500 to-pink-500" },
        { name: "Prototyping", level: 70, color: "from-indigo-500 to-purple-500" },
        { name: "User Research", level: 65, color: "from-rose-500 to-pink-500" },
        { name: "Design Systems", level: 70, color: "from-orange-500 to-yellow-500" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and growing expertise across various domains
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm h-full hover:shadow-glow-primary transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-lg">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.5
                          }}
                          viewport={{ once: true }}
                        />
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.5
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Additional Competencies</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "Machine Learning", desc: "Building predictive models" },
              { icon: Database, title: "Data Management", desc: "Database design & optimization" },
              { icon: FileText, title: "Technical Writing", desc: "Documentation & communication" },
              { icon: Users, title: "Team Collaboration", desc: "Agile & project management" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-card-gradient border-border backdrop-blur-sm text-center hover:shadow-glow-primary transition-all duration-300">
                  <div className="p-3 rounded-lg bg-primary/20 w-fit mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;