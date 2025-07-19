// components/ServiceCard.js
'use client';
import { motion } from 'framer-motion';

export default function ServiceCard({ name, highlights, icon: Icon }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        <Icon className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-semibold mb-3 dark:text-white">{name}</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600">▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}