import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[80vh] flex items-center justify-center bg-wood bg-cover bg-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="backdrop-blur-sm bg-black/40 p-8 rounded-2xl shadow-md text-center"
      >
        <h1 className="font-heading text-6xl md:text-7xl text-washi mb-4 tracking-widest">
          和
        </h1>
        <h2 className="font-heading text-3xl md:text-4xl text-washi mb-2">
          Izakaya Nagomi
        </h2>
        <p className="text-washi text-lg md:text-xl">旬と寛ぎの酒場</p>
      </motion.div>
    </section>
  );
};

export default Hero;
