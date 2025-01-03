'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 1424,
    label: 'Crane Projects Placed',
    sublabel: 'In PA, OH, WV Last Year'
  },
  {
    value: 539,
    label: 'Large Industrial',
    sublabel: 'Projects Completed'
  }
];

function CountingNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        setDisplayValue(Math.floor(progress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl" />
      
      <div className="relative max-w-lg mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative overflow-hidden rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <dt>
                <p className="text-sm font-medium text-gray-200">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400">
                  {stat.sublabel}
                </p>
              </dt>
              <dd className="mt-2">
                <p className="text-3xl font-bold text-white tracking-tight">
                  <CountingNumber value={stat.value} />
                </p>
              </dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 