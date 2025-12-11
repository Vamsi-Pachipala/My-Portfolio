import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Terminal,
  Wrench,
  Users,
  Database,
  Zap,
  ShieldCheck,
  GitBranch,
} from 'lucide-react';

/*
  Redesigned Skills component — tailored for a Java Backend Developer (3 years).
  - Accessible progress bars (role="progressbar", aria-valuenow)
  - Focused skills that match resume: Java, Spring Boot, Microservices, Redis, MySQL, Docker, K8s, Git, CI/CD, DSA, System Design, Concurrency...
  - Compact UI, responsive grid, clear filters
*/

const Skills = () => {
  const [filter, setFilter] = useState<'all' | 'backend' | 'tools' | 'core' | 'soft'>('all');

  const skills = [
    // Backend / Platform
    { name: 'Java', proficiency: 96, category: 'backend', icon: <Code className="h-4 w-4" /> },
    { name: 'Spring Boot', proficiency: 92, category: 'backend', icon: <Server className="h-4 w-4" /> },
    { name: 'Spring Security', proficiency: 86, category: 'backend', icon: <ShieldCheck className="h-4 w-4" /> },
    { name: 'Microservices Architecture', proficiency: 88, category: 'backend', icon: <Server className="h-4 w-4" /> },
    { name: 'REST API Design', proficiency: 90, category: 'backend', icon: <Code className="h-4 w-4" /> },
    { name: 'Redis', proficiency: 82, category: 'backend', icon: <Zap className="h-4 w-4" /> },
    { name: 'MySQL', proficiency: 90, category: 'backend', icon: <Database className="h-4 w-4" /> },

    // Tools & DevOps
    { name: 'Docker', proficiency: 86, category: 'tools', icon: <Wrench className="h-4 w-4" /> },
    { name: 'Kubernetes', proficiency: 80, category: 'tools', icon: <Wrench className="h-4 w-4" /> },
    { name: 'Git & GitHub', proficiency: 94, category: 'tools', icon: <GitBranch className="h-4 w-4" /> },
    { name: 'CI/CD (Jenkins/GitHub Actions)', proficiency: 84, category: 'tools', icon: <Terminal className="h-4 w-4" /> },
    { name: 'SonarQube', proficiency: 78, category: 'tools', icon: <ShieldCheck className="h-4 w-4" /> },

    // Core CS / Programming fundamentals
    { name: 'Data Structures', proficiency: 96, category: 'core', icon: <Code className="h-4 w-4" /> },
    { name: 'Algorithms', proficiency: 92, category: 'core', icon: <Code className="h-4 w-4" /> },
    { name: 'System Design', proficiency: 88, category: 'core', icon: <Server className="h-4 w-4" /> },
    { name: 'Multithreading & Concurrency', proficiency: 84, category: 'core', icon: <Zap className="h-4 w-4" /> },

    // Soft skills
    { name: 'Problem Solving', proficiency: 95, category: 'soft', icon: <Users className="h-4 w-4" /> },
    { name: 'Collaboration', proficiency: 90, category: 'soft', icon: <Users className="h-4 w-4" /> },
    { name: 'Communication', proficiency: 86, category: 'soft', icon: <Users className="h-4 w-4" /> },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: <Terminal className="h-4 w-4" /> },
    { id: 'backend', name: 'Backend', icon: <Server className="h-4 w-4" /> },
    { id: 'tools', name: 'Tools', icon: <Wrench className="h-4 w-4" /> },
    { id: 'core', name: 'Core CS', icon: <Code className="h-4 w-4" /> },
    { id: 'soft', name: 'Soft', icon: <Users className="h-4 w-4" /> },
  ];

  const filtered = filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6">
      <div className="section-container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Skills</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
            Core backend technologies, tooling, and engineering fundamentals I use to build scalable systems.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id as any)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition ${
                filter === c.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-pressed={filter === c.id}
            >
              <span className="opacity-90">{c.icon}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* Grid of skill cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold">{skill.name}</h3>
                </div>
                <div className="text-sm font-medium text-primary">{skill.proficiency}%</div>
              </div>

              {/* Accessible progress bar */}
              <div
                className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.proficiency}
                aria-label={`${skill.name} proficiency`}
              >
                <motion.div
                  className="h-2.5 rounded-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* small tag row */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                  title={`Category: ${skill.category}`}
                >
                  {skill.category.toUpperCase()}
                </span>

                {skill.proficiency >= 90 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700">Expert</span>
                )}
                {skill.proficiency >= 80 && skill.proficiency < 90 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-yellow-50 text-yellow-700">Proficient</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill cloud (small) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mt-8 justify-center"
        >
          {filtered.slice(0, 12).map((s) => (
            <span
              key={`tag-${s.name}`}
              className={`text-xs sm:text-sm px-3 py-1 rounded-full font-medium ${
                s.proficiency >= 85 ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
              }`}
            >
              {s.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
