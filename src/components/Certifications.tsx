import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Project Completion Certificate",
      issuer: "Infosys Springboard",
      date: "January 2025",
      image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg",
      link: "https://drive.google.com/file/d/1U5nzPVXN9MIUyZb55pcLus6VyaNoYF_F/view"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      issuer: "GirlScript Summer of Code",
      date: "November 2024",
      image: "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg",
      link: "https://drive.google.com/file/d/1ZYoU9hmKT3Pd-dzcD77uWY6YRxL_N-ez/view"
    },
    {
      id: 3,
      title: "Career Essentials in GitHub Professional Certificate",
      issuer: "GitHub",
      date: "September 2024",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      link: "https://www.linkedin.com/learning/certificates/94070231fefd4403cfaf757176db5fee76d6fe7d7148715bf1cf4efc7466aa20"
    },
    {
      id: 4,
      title: "C++ Advanced Programming",
      issuer: "Coursera",
      date: "October 2023",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      link: "#cert-4"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and achievements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden"
            >
              <div className="relative h-40">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-primary text-white p-2 rounded-full">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.date}</p>
                
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;