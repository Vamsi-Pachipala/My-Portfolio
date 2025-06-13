import { motion } from 'framer-motion';
import { Code, Github, TrendingUp, Hash, CalendarDays } from 'lucide-react';

const CodingJourney = () => {
  const stats = [
    { label: 'Problems Solved', value: '1000+', icon: <Hash className="h-6 w-6 text-primary" /> },
    { label: 'Streak Days', value: '160+', icon: <CalendarDays className="h-6 w-6 text-accent" /> },
    { label: 'Contests', value: '25+', icon: <TrendingUp className="h-6 w-6 text-accent2" /> },
    { label: 'GitHub Repos', value: '20+', icon: <Github className="h-6 w-6 text-primary" /> },
  ];

  const platforms = [
    {
      name: 'LeetCode',
      username: 'Vamsi_Pachipala',
      link: 'https://leetcode.com/u/vamsipachipala/',
      highlight: 'Daily Coding & 1000+ Problems Solved',
    },
    {
      name: 'GitHub',
      username: '@Vamsi-Pachipala',
      link: 'https://github.com/Vamsi-Pachipala',
      highlight: 'System Design & Spring Boot Projects',
    },
    {
      name: 'GeeksforGeeks',
      username: 'Vamsi_Pachipala',
      link: 'https://www.geeksforgeeks.org/user/vamsiplaty/',
      highlight: '160+ Days Streak (#gfg160)',
    },
  ];

  return (
    <section id="coding" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl">My Coding Journey</h2>
          <p className="section-subtitle text-sm sm:text-base">
            Tracking my progress in backend development and competitive programming.
          </p>
        </motion.div>

        {/* Stats section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-5 text-center"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Coding platforms */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-bold text-center mb-10"
          >
            Platforms & Achievements
          </motion.h3>

          <div className="space-y-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-lg sm:text-xl font-bold mb-1">{platform.name}</h4>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-block mb-3"
                  >
                    {platform.username}
                  </a>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block text-sm">
                    <p className="text-blue-800 dark:text-blue-200 font-medium">{platform.highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activity heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 card p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Activity Heatmap</h3>
          <div className="w-full aspect-video min-h-[300px]">
            <iframe
              src="https://leetcard.jacoblin.cool/VamsiPachipala?theme=dark&font=Fira%20Code&ext=heatmap"
              title="LeetCode Activity Heatmap"
              className="w-full h-full border rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Simple platform list */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Platforms</h3>
          <ul>
            {platforms.map((platform, index) => (
              <li key={index} className="mb-4">
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold"
                >
                  {platform.name} ({platform.username})
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400">{platform.highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CodingJourney;