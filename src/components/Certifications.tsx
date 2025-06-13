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
      title: "Microservices with Spring Boot, Docker & Kubernetes",
      issuer: "Udemy",
      date: "2024",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-16eb506f-7792-44ca-ac36-176fdf7a2c7e.jpg?v=1720852885000",
      link: "https://www.udemy.com/certificate/UC-16eb506f-7792-44ca-ac36-176fdf7a2c7e/"
    },
    {
      id: 2,
      title: "Java 7 & Java 8: New Features, Lambdas & Streams",
      issuer: "Udemy",
      date: "2024",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-838a4d52-5e3d-4341-b8d7-4fa49ee2d85c.jpg?v=1721238888000",
      link: "https://udemy.com/certificate/UC-838a4d52-5e3d-4341-b8d7-4fa49ee2d85c"
    },
    {
      id: 3,
      title: "Low-Level Design: Basics to Advanced",
      issuer: "Udemy",
      date: "2024",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-9731a583-f31d-48bd-a19f-64ca93519b26.jpg?v=1747399962000",
      link: "https://www.udemy.com/certificate/UC-9731a583-f31d-48bd-a19f-64ca93519b26/"
    },
    {
      id: 4,
      title: "SQL: Basics to Advanced",
      issuer: "Udemy",
      date: "2024",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-f695efc4-6b2a-45b0-9e95-1cca76b96e88.jpg?v=1747399438000",
      link: "https://www.udemy.com/certificate/UC-f695efc4-6b2a-45b0-9e95-1cca76b96e88/"
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
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl">Certifications</h2>
          <p className="section-subtitle text-sm sm:text-base">
            Professional certifications and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
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
              <div className="relative h-40 sm:h-48 md:h-40">
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

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base sm:text-lg mb-1">{cert.title}</h3>
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
