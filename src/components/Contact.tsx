import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!formRef.current) return;
  
    console.log('Form data:', formData);
  
    try {
      // Step 1: Send message to YOU (Contact Us template)
      const result1 = await emailjs.sendForm(
        'service_8i9055l',
        'template_8uoopir', // Contact Us Template
        formRef.current,
        '0xikwWBSA0DIrVgUH'
      );
      console.log('Message sent to me:', result1.status, result1.text);
  
      // Step 2: Send Auto-Reply to USER (Auto-Reply template)
      const result2 = await emailjs.send(
        'service_8i9055l',
        'template_dv6g1pu', // Auto-Reply Template
        {
          from_name: formData.user_name,   // User's name
          reply_to: formData.user_email,   // User's email
          to_email: formData.user_email,   // Send to the user
          message: formData.message,       // User's message
          from_email: 'rakeshchikatla12@gmail.com',  // Your email
        },
        '0xikwWBSA0DIrVgUH'
      );
      console.log('Auto-reply sent to user:', result2.status, result2.text);
  
      // Check if both results were successful
      if (result1.status === 200 && result2.status === 200) {
        alert('Thank you for your message! A confirmation email has been sent to you.');
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      } else {
        console.error('Error in sending emails. Check your EmailJS configurations.');
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error occurred during email sending process:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      value: 'rakeshchikatla12@gmail.com',
      link: 'mailto:rakeshchikatla12@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      value: '+91 6301712297',
      link: 'tel:+916301712297'
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      value: 'Visakhapatnam, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: 'https://www.linkedin.com/in/rakeshchikatla/'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      url: 'https://github.com/chikatlarakesh'
    },
    {
      name: 'Linktree',
      icon: <ExternalLink className="h-5 w-5" />,
      url: 'https://linktr.ee/rakeshchikatla'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for collaboration, feedback, or just to say hello!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="contact-form" value="Contact Form" />
                
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email id"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Socials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="card p-6 flex items-start space-x-4 hover:shadow-md transition-all duration-300"
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-bold">{info.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="card p-6">
                <h4 className="font-bold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h4 className="font-bold mb-4">Availability</h4>
                <ul className="space-y-2">
                <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Internships</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Full-time opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Freelance projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <span>Open source collaboration</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-primary/10 border border-primary/20">
                <h4 className="font-bold mb-2">Feedback Welcome</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Feel free to reach out for collaboration, feedback, or just to say hello!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
