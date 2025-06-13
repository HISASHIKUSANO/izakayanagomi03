import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1526234151733-3b17d7af03e6?auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=60',
];

const About: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="py-16 px-4 bg-washi text-sumi">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="font-heading text-3xl md:text-4xl mb-6 text-center"
        >
          店主ご挨拶
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          旬の食材と地元の温かさを大切に、心安らぐひとときをご提供いたします。どうぞごゆっくりお過ごしください。
        </motion.p>

        {/* Slider */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-md mb-10">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="店内写真"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Feature icon="🥘" title="地元食材" />
          <Feature icon="🍶" title="日本酒多数" />
          <Feature icon="🏠" title="アットホーム" />
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{ icon: string; title: string }> = ({ icon, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-md flex flex-col items-center"
  >
    <span className="text-4xl mb-2" role="img" aria-label={title}>
      {icon}
    </span>
    <p className="font-heading text-lg">{title}</p>
  </motion.div>
);

export default About;
