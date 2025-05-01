import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Dynamic Programming: A Step-by-Step Guide",
      excerpt: "Learn how to approach dynamic programming problems with confidence and solve them efficiently.",
      date: "Coming Soon",
      minutesToRead: 12,
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      comingSoon: true
    },
    {
      id: 2,
      title: "Building Scalable Frontend Applications with React",
      excerpt: "Best practices for creating maintainable and scalable React applications that perform well.",
      date: "Coming Soon",
      minutesToRead: 10,
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
      comingSoon: true
    },
    {
      id: 3,
      title: "My Experience Contributing to Open Source",
      excerpt: "How I started contributing to open source projects and what I've learned along the way.",
      date: "Coming Soon",
      minutesToRead: 8,
      image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
      comingSoon: true
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Blog & Writing</h2>
          <p className="section-subtitle">
            Sharing my thoughts, experiences, and knowledge with the community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group relative"
            >
              {/* Blog image */}
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Blog content */}
              <div className="p-6 relative">
                {post.comingSoon && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.minutesToRead} min read</span>
                  </div>
                  
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>Rakesh Ch</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-1">
                <a
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Subscribe section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 card p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Subscribe for Updates</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Get notified when I publish new articles and tutorials. No spam, just quality content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;