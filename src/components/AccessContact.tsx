import { motion } from 'framer-motion';

const AccessContact: React.FC = () => (
  <section id="access" className="py-16 px-4 bg-washi text-sumi">
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl mb-4">アクセス ＆ 連絡先</h2>
        <p className="mb-2">〒722-2323 広島県尾道市因島土生町2205-1</p>
        <p className="mb-2">
          TEL: <a href="tel:0845222917" className="text-shu underline">0845-22-2917</a> /{' '}
          <a href="tel:09056945795" className="text-shu underline">090-5694-5795</a>
        </p>
        <p className="mb-2">営業時間 17:00 - 22:00</p>
        <p className="mb-4">定休日 日・祝</p>

        <a
          href="tel:0845222917"
          className="inline-block bg-shu text-washi rounded-2xl px-6 py-3 shadow-md font-heading"
        >
          予約する
        </a>
      </div>
      <motion.iframe
        title="map"
        src="https://maps.google.com/maps?q=%E5%B0%BE%E9%81%93%E5%B8%82%E5%9B%A0%E5%B3%B6%E5%9C%9F%E7%94%9F%E7%94%BA2205-1&hl=ja&z=17&output=embed"
        className="w-full h-64 md:h-full rounded-2xl shadow-md border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  </section>
);

export default AccessContact;
