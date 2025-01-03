'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

type FormState = {
  email: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // TODO: Implement newsletter signup logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        isSuccess: true, 
        email: '' 
      }));
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: errorMessage 
      }));
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Get Started</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">How to Reach Us</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+18778569686" 
                    className="flex items-center hover:text-blue-400 transition-colors group"
                  >
                    <svg className="w-6 h-6 mr-3 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(877) 856-9686</span>
                  </a>
                  <a 
                    href="mailto:delullo.mitchel@gmail.com"
                    className="flex items-center hover:text-blue-400 transition-colors group"
                  >
                    <svg className="w-6 h-6 mr-3 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>delullo.mitchel@gmail.com</span>
                  </a>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>128 Kennedy Rd.<br />Prospect, PA 16052</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Available 24/7</h3>
                <p className="text-gray-300">
                  We&apos;re here to help with emergency lifts and scheduled projects around the clock.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="relative bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-2xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">
                Need Some Quick Advice?
              </h3>
              <p className="mb-6 text-gray-300">
                Sign up for our free guide: &quot;5 Things to Know Before Renting a Crane&quot;
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder=" "
                    required
                    disabled={formState.isLoading}
                    className={cn(
                      "peer w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
                      "text-white placeholder-transparent",
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      "disabled:opacity-50 disabled:cursor-not-allowed",
                      "transition-all duration-200"
                    )}
                  />
                  <label
                    htmlFor="email"
                    className={cn(
                      "absolute left-4 -top-6 text-sm text-gray-400",
                      "peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400",
                      "transition-all duration-200",
                      "peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400"
                    )}
                  >
                    Email address
                  </label>
                </div>

                {formState.error && (
                  <p className="text-red-400 text-sm">{formState.error}</p>
                )}

                {formState.isSuccess && (
                  <p className="text-green-400 text-sm">
                    Thanks for signing up! Check your email for the guide.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState.isLoading || formState.isSuccess}
                  className={cn(
                    "w-full px-6 py-3 text-base font-semibold text-white",
                    "bg-blue-600 hover:bg-blue-500 rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-colors duration-200",
                    "flex items-center justify-center space-x-2"
                  )}
                >
                  {formState.isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Signing up...</span>
                    </>
                  ) : formState.isSuccess ? (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Signed Up</span>
                    </>
                  ) : (
                    <span>Sign Up Now</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 