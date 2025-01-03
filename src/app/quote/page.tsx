'use client';

import { useState } from 'react';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  liftDate: string;
  location: string;
  description: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
};

const projectTypes = [
  { value: 'construction', label: 'Construction Project' },
  { value: 'industrial', label: 'Industrial Project' },
  { value: 'residential', label: 'Residential Project' },
  { value: 'other', label: 'Other Project Type' },
] as const;

export default function QuotePage() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    liftDate: '',
    location: '',
    description: '',
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // TODO: Implement form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setFormState(prev => ({ 
        ...prev, 
        isLoading: false, 
        isSuccess: true 
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container py-12">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 tracking-tight">
                Request a Quote
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Fill out the form below and we&apos;ll get back to you with a detailed quote for your project.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className={cn(
                "bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-2xl md:col-span-2",
                "transition-opacity duration-200",
                formState.isSuccess && "opacity-50 pointer-events-none"
              )}
            >
              {formState.isSuccess ? (
                <div className="p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Quote Request Received</h2>
                  <p className="text-gray-600">
                    Thanks for your request! We&apos;ll get back to you within 24 hours with a detailed quote.
                  </p>
                </div>
              ) : (
                <>
                  <div className="px-4 py-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                          Full Name
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            disabled={formState.isLoading}
                            value={formState.name}
                            onChange={handleChange}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                          Email
                        </label>
                        <div className="mt-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            disabled={formState.isLoading}
                            value={formState.email}
                            onChange={handleChange}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                          Phone Number
                        </label>
                        <div className="mt-2">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            disabled={formState.isLoading}
                            value={formState.phone}
                            onChange={handleChange}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-900">
                          Project Type
                        </label>
                        <div className="mt-2">
                          <select
                            name="projectType"
                            id="projectType"
                            required
                            disabled={formState.isLoading}
                            value={formState.projectType}
                            onChange={handleChange}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          >
                            <option value="">Select a project type</option>
                            {projectTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="liftDate" className="block text-sm font-medium text-gray-900">
                          Preferred Lift Date
                        </label>
                        <div className="mt-2">
                          <input
                            type="date"
                            name="liftDate"
                            id="liftDate"
                            disabled={formState.isLoading}
                            value={formState.liftDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-900">
                          Project Location
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            required
                            disabled={formState.isLoading}
                            value={formState.location}
                            onChange={handleChange}
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                          Project Description
                        </label>
                        <div className="mt-2">
                          <textarea
                            name="description"
                            id="description"
                            rows={4}
                            required
                            disabled={formState.isLoading}
                            value={formState.description}
                            onChange={handleChange}
                            placeholder="Please describe your project and lifting requirements..."
                            className={cn(
                              "block w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm",
                              "ring-1 ring-inset ring-gray-300",
                              "placeholder:text-gray-400",
                              "focus:ring-2 focus:ring-inset focus:ring-blue-600",
                              "disabled:opacity-50 disabled:cursor-not-allowed",
                              "transition-colors duration-200"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {formState.error && (
                    <div className="px-4 sm:px-8">
                      <div className="rounded-lg bg-red-50 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">{formState.error}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                    <button
                      type="submit"
                      disabled={formState.isLoading}
                      className={cn(
                        "flex items-center justify-center gap-2",
                        "px-8 py-3 text-base font-semibold text-white",
                        "bg-blue-600 hover:bg-blue-500 rounded-lg",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        "transition-colors duration-200"
                      )}
                    >
                      {formState.isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Quote Request</span>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 