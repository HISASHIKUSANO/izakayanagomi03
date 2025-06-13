import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1529692236671-f1c2f321d232?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1547592180-220b2904a974?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1570147721582-14d3b8d7a876?auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1523268162205-34e2f1e71014?auto=format&fit=crop&w=600&q=60',
];

const Gallery: React.FC = () => (
  <section id="gallery" className="py-16 px-4 bg-washi text-sumi">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl mb-6 text-center">ギャラリー</h2>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src) => (
          <motion.img
            key={src}
            src={src}
            alt="店内や料理の写真"
            className="w-full rounded-2xl shadow-md break-inside-avoid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
