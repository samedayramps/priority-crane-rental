import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="American flag suspended between two cranes"
          fill
          className="object-cover !object-[85%_center]"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative h-full">
        <div className="flex h-full flex-col items-start justify-center space-y-8 pt-20 max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl [text-wrap:balance]">
            Pittsburgh&apos;s Trusted Crane Rental Experts
          </h1>
          <p className="text-xl text-gray-100 sm:text-2xl font-medium max-w-2xl">
            Need a crane for your project? We&apos;ve got you covered with cranes from 30 to 500 tons, available 24/7.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-lg font-medium text-white">Expert operators included</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-8">
            <Link 
              href="/quote" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link 
              href="/#equipment" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 