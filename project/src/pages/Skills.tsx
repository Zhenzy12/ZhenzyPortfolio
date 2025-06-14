import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="h-8 w-8" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="h-8 w-8" />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 90 },
        { name: 'Laravel', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: <Database className="h-8 w-8" />,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Supabase', level: 90 },
        { name: 'Firebase', level: 80 },
        { name: 'Azure DevOps', level: 75 },
        { name: 'Azure Web Services', level: 75 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'Render (Deployment)', level: 85 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="h-8 w-8" />,
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Expo', level: 85 },
        { name: 'Flutter', level: 65 },
        { name: 'Android', level: 85 },
        { name: 'iOS', level: 60 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code2 className="h-8 w-8" />,
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Java', level: 65 },
        { name: 'C++', level: 65 },
      ]
    },
    {
      title: 'Design & Others',
      icon: <Palette className="h-8 w-8" />,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Figma', level: 80 },
        { name: 'Canva', level: 95 },
        { name: 'Photoshop', level: 75 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Software Documentation', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Critical Thinking', level: 95 },
        { name: 'Team Collaboration', level: 90 },
      ]
    },
  ];

  const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => (
    <AnimatedSection delay={delay}>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-300 font-medium">{name}</span>
          <span className="text-emerald-400 font-semibold">{level}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-emerald-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen bg-black dark:bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-emerald-400">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various technologies
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 50}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      delay={categoryIndex * 50 + skillIndex * 20}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Skills */}
        <AnimatedSection delay={200}>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Other <span className="text-emerald-400">Competencies</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
  'Agile/Scrum', 'Clean Code', 'Testing', 'CI/CD', 
  'DevOps', 'Microservices', 'GraphQL', 'Redux',
  'Next.js', 'Vue.js', 'Laravel', 'Spring Boot',
  'RESTful APIs', 'Azure DevOps', 'Supabase', 'Firebase',
  'MySQL', 'PostgreSQL', 'Docker', 'Git/GitHub',
  'Software Documentation', 'Responsive Design', 'TypeScript',
  'Tailwind CSS', 'Flutter', 'React Native',
  'Node.js', 'Express.js', 'Problem Solving', 'Team Collaboration',
  'Python', 'Data Visualization', 'Machine Learning', 'Scikit-learn',
  'Object-Oriented Programming', 'Version Control', 'Cloud Deployment',
  'Technical Writing', 'Web Security Basics', 'State Management', 'Axios'
].map((skill, index) => (
                <AnimatedSection key={skill} delay={200 + index * 10}>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:border-emerald-500/50 hover:bg-gray-800/70 transition-all duration-300">
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Skills;