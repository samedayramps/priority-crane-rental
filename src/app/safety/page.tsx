import { Footer } from '@/components/layout/footer';

const safetyGuidelines = [
  {
    title: 'Safety First Policy',
    description: 'At Priority Crane Rentals, safety is not just a priority – it&apos;s a core value that guides every decision and action we take.',
    points: [
      'Comprehensive safety training for all operators',
      'Regular equipment inspections and maintenance',
      'Strict adherence to OSHA regulations',
      'Zero-tolerance policy for unsafe practices'
    ]
  },
  {
    title: 'Pre-Lift Planning',
    description: 'Every lift begins with thorough planning to ensure safe and efficient execution.',
    points: [
      'Detailed site surveys',
      'Load weight and dimension analysis',
      'Environmental condition assessment',
      'Equipment selection verification'
    ]
  },
  {
    title: 'Operator Certification',
    description: 'Our operators are among the most qualified in the industry.',
    points: [
      'NCCCO certified operators',
      'Ongoing training and education',
      'Regular performance evaluations',
      'Extensive experience requirements'
    ]
  },
  {
    title: 'Equipment Maintenance',
    description: 'We maintain our equipment to the highest standards to ensure reliable and safe operation.',
    points: [
      'Daily equipment inspections',
      'Preventive maintenance program',
      'Immediate repair of any issues',
      'Complete maintenance records'
    ]
  }
];

export default function SafetyPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="bg-blue-600 py-24 sm:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Safety Information
              </h1>
              <p className="mt-6 text-lg leading-8">
                Our commitment to safety is unwavering. Learn about our comprehensive safety programs and policies that protect our team, our clients, and their projects.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-3xl">
            {safetyGuidelines.map((guideline, index) => (
              <div
                key={guideline.title}
                className={`mb-16 ${index !== safetyGuidelines.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {guideline.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {guideline.description}
                </p>
                <ul className="space-y-4">
                  {guideline.points.map((point) => (
                    <li key={point} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our safety policies or need more information?
              </p>
              <a
                href="tel:+18778569686"
                className="btn-primary"
              >
                Contact Our Safety Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 