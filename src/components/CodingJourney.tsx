import { motion } from 'framer-motion';
import { Code, Github, TrendingUp, Hash, CalendarDays } from 'lucide-react';

const CodingJourney = () => {
  const stats = [
    { label: 'Problems Solved', value: '600+', icon: <Hash className="h-6 w-6 text-primary" /> },
    { label: 'Streak Days', value: '160+', icon: <CalendarDays className="h-6 w-6 text-accent" /> },
    { label: 'Contests', value: '25+', icon: <TrendingUp className="h-6 w-6 text-accent2" /> },
    { label: 'GitHub Repos', value: '20+', icon: <Github className="h-6 w-6 text-primary" /> },
  ];

  const platforms = [
    {
      name: 'LeetCode',
      username: 'Rakesh_chikatla',
      link: 'https://leetcode.com/u/Rakesh_chikatla/',
      highlight: '50-Day Challenge Completed',
    },
    {
      name: 'GitHub',
      username: '@chikatlarakesh',
      link: 'https://github.com/chikatlarakesh',
      highlight: 'Open Source Contributor',
    },
    {
      name: 'GeeksforGeeks',
      username: 'Rakesh_chikatla',
      link: 'https://www.geeksforgeeks.org/user/rakesh_chikatla/',
      highlight: '160 Days Challenge (#gfg160 #geekstreak2024)',
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
          <h2 className="section-title">My Coding Journey</h2>
          <p className="section-subtitle">
            Tracking my progress in competitive programming and coding challenges.
          </p>
        </motion.div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
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
            className="text-2xl font-bold text-center mb-10"
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
                className="card p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex-shrink-0">
                  <Code className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-xl font-bold mb-1">{platform.name}</h4>
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-block mb-3"
                  >
                    {platform.username}
                  </a>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block">
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
          className="mt-16 card p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Activity Heatmap</h3>
          <iframe
            src="https://leetcard.jacoblin.cool/Rakesh_chikatla?theme=dark&font=Fira%20Code&ext=heatmap"
            title="LeetCode Activity Heatmap"
            className="w-full h-80 border rounded-lg"
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Simple platform list */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Platforms</h3>
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
                <p className="text-sm text-gray-600">{platform.highlight}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CodingJourney;
