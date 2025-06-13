import React, { useState } from 'react';
import { menu, Category, MenuItem } from '../data/menu';
import { motion, AnimatePresence } from 'framer-motion';

const categories: { key: Category; label: string }[] = [
  { key: 'drinks', label: '飲み物' },
  { key: 'fried', label: '揚物' },
  { key: 'salad', label: 'サラダ' },
  { key: 'special', label: 'おすすめ' },
];

const Menu: React.FC = () => {
  const [active, setActive] = useState<Category>('drinks');

  return (
    <section id="menu" className="py-16 px-4 bg-washi text-sumi">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl mb-6 text-center">メニュー</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-2xl font-heading transition-colors duration-200 ${
                active === key
                  ? 'bg-shu text-washi shadow-md'
                  : 'bg-white/70 hover:bg-white text-sumi'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {menu[active].map((item) => (
              <MenuRow key={item.name} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const MenuRow: React.FC<MenuItem> = ({ name, price, note }) => (
  <div className="flex justify-between bg-white/80 backdrop-blur rounded-2xl shadow-md p-4">
    <div>
      <p className="font-heading">{name}</p>
      {note && <p className="text-sm text-sumi/70">{note}</p>}
    </div>
    <p className="font-heading">¥{price}</p>
  </div>
);

export default Menu;
