const reasons = [
  {
    title: "We Keep It Simple",
    description: "Tell us what you need to lift, and we'll handle the rest. No confusing quotes or hidden fees."
  },
  {
    title: "Safety Comes First",
    description: "Every lift is planned and executed with safety as the top priority. Our operators are certified and our equipment is regularly inspected."
  },
  {
    title: "We're Here When You Need Us",
    description: "Available 24/7 for your project needs. Whether it's a planned lift or an emergency, we're ready to help."
  },
  {
    title: "We Know Our Stuff",
    description: "With years of experience in Pittsburgh and beyond, we know exactly what equipment you'll need for a successful lift."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50" id="why-choose-us">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Why People Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a team that puts your needs first
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
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