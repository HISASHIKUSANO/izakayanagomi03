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
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1677.9054180530132!2d133.083!3d34.404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v000000000"
        className="w-full h-64 md:h-full rounded-2xl shadow-md border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  </section>
);

export default AccessContact;
