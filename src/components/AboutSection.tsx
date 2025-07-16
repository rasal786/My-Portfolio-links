import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Heart, Lightbulb, Target } from 'lucide-react';
const AboutSection = () => {
  const interests = [{
    icon: Target,
    title: "Data Science",
    description: "Passionate about extracting insights from data and building predictive models"
  }, {
    icon: Lightbulb,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user experiences that solve real problems"
  }, {
    icon: Heart,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications with modern technologies"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="about" className="py-20 relative">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey, education, and the passion that drives my work in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education & Bio */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/20">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Background</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">B.Tech in Information Technology</h4>
                  <p className="text-primary">Aalim Muhamed Salegh College</p>
                  <p className="text-muted-foreground">Anna University • 2022 - 2026</p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my degree with a focus on modern technologies, 
                    data structures, algorithms, and practical application development. 
                    Maintaining strong academic performance while gaining hands-on experience 
                    through internships and personal projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Personal Philosophy</h3>
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
                "Technology is not just about writing code or analyzing data — it's about creating 
                solutions that make a meaningful impact on people's lives. I believe in the power 
                of continuous learning and the importance of staying curious in this ever-evolving field."
              </blockquote>
            </Card>
          </motion.div>

          {/* Interests */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">My Interests</h3>
            
            {interests.map((interest, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            scale: 1.02
          }} className="cursor-pointer">
                <Card className="p-6 bg-card-gradient border-border backdrop-blur-sm hover:shadow-glow-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
                      <interest.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{interest.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>)}

            <motion.div variants={itemVariants} className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2 text-primary">Fun Fact!</h4>
              <p className="text-muted-foreground">
                When I'm not coding or designing, you'll find me exploring the latest tech trends, 
                reading about breakthrough innovations in AI, or experimenting with new frameworks 
                and libraries to expand my technical arsenal.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;