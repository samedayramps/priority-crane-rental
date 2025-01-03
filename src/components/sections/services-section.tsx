'use client';

import Image from 'next/image';

const services = [
  {
    title: "Hydraulic Truck Cranes",
    description: "Harnessing Power and Versatility: The Advantages of Hydraulic Truck Cranes",
    image: "/images/services/hydraulic-truck-crane.jpg"
  },
  {
    title: "Boom Truck",
    description: "Unlocking Elevated Potential: The Advantages of BoomTruck Cranes",
    image: "/images/services/boom-truck.jpg"
  },
  {
    title: "Heavy Hauling",
    description: "Heavy Hauling Trucks: Empowering Transport with Unparalleled Advantages",
    image: "/images/services/heavy-hauling.jpg"
  },
  {
    title: "Heavy Equipment Storage",
    description: "Safekeeping Powerhouses: The Advantages of Heavy Equipment Storage Facilities",
    image: "/images/services/equipment-storage.jpg"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive crane rental and heavy equipment services to meet all your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="relative h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 