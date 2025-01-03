'use client';

import Image from 'next/image';
import Link from 'next/link';

const equipment = [
  {
    type: "All-terrain cranes",
    image: "/images/equipment/all-terrain-crane.jpg",
    description: "Perfect for challenging terrain and tight spaces"
  },
  {
    type: "Crawler cranes",
    image: "/images/equipment/crawler-crane.jpg",
    description: "Ideal for heavy lifting and long-term projects"
  },
  {
    type: "Rough terrain cranes",
    image: "/images/equipment/rough-terrain-crane.jpg",
    description: "Built for off-road construction sites"
  },
  {
    type: "Truck-mounted cranes",
    image: "/images/equipment/truck-mounted-crane.jpg",
    description: "Versatile and mobile lifting solutions"
  }
];

export function EquipmentSection() {
  return (
    <section className="py-20 bg-white" id="equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Equipment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We maintain a modern fleet of cranes to handle any job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item) => (
            <div
              key={item.type}
              className="relative overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src={item.image}
                  alt={`${item.type} in action`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.type}
                  </h3>
                  <p className="text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 italic">
            Can&apos;t find what you need? We have partners across the East Coast and can get you any crane you need.
          </p>
          <Link 
            href="/quote" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Request Equipment
          </Link>
        </div>
      </div>
    </section>
  );
} 