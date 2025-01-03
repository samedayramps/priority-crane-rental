import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Equipment', href: '/#equipment' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Safety Information', href: '/safety' },
    { name: 'Get a Quote', href: '/quote' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-white text-2xl font-bold">
              Priority Crane Rentals
            </Link>
            <p className="text-gray-400 text-sm">
              Pittsburgh&apos;s trusted source for crane rentals and heavy equipment services.
              Available 24/7 for all your lifting needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-4 text-gray-400">
                <li>128 Kennedy Rd.</li>
                <li>Prospect, PA 16052</li>
                <li>Phone: (877) 856-9686</li>
                <li>Email: delullo.mitchel@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Priority Crane Rentals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 