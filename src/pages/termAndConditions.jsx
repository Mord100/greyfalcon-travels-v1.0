import React from 'react'

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-700 mb-4">
              By accessing and using Grey Falcon Travels' services, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Booking and Payment</h2>
            <div className="text-slate-700 mb-4">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Booking Process</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Prices are subject to change until booking is confirmed</li>
                <li>A deposit may be required to secure your booking</li>
                <li>Full payment is typically due 30 days before departure</li>
              </ul>
              
              <h3 className="text-lg font-medium text-slate-900 mb-2">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>We accept major credit cards and bank transfers</li>
                <li>All payments are processed securely</li>
                <li>Additional fees may apply for certain payment methods</li>
                <li>Currency exchange rates may affect final pricing</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cancellation and Refund Policy</h2>
            <div className="text-slate-700 mb-4">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Cancellation by Customer</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>More than 60 days: Full refund minus processing fee</li>
                <li>30-60 days: 50% refund</li>
                <li>15-30 days: 25% refund</li>
                <li>Less than 15 days: No refund</li>
              </ul>
              
              <h3 className="text-lg font-medium text-slate-900 mb-2">Cancellation by Grey Falcon Travels</h3>
              <p className="mb-4">
                We reserve the right to cancel trips due to insufficient enrollment, natural disasters, 
                or other circumstances beyond our control. In such cases, we will provide a full refund or alternative arrangements.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Travel Requirements</h2>
            <p className="text-slate-700 mb-4">
              Travelers are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Valid passports and visas required for travel</li>
              <li>Compliance with health and vaccination requirements</li>
              <li>Travel insurance (highly recommended)</li>
              <li>Arriving at departure points on time</li>
              <li>Following local laws and customs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Liability and Responsibility</h2>
            <div className="text-slate-700 mb-4">
              <h3 className="text-lg font-medium text-slate-900 mb-2">Our Responsibility</h3>
              <p className="mb-4">
                Grey Falcon Travels acts as an intermediary between travelers and service providers. 
                We are responsible for arranging services as described, but not for the actions of third-party providers.
              </p>
              
              <h3 className="text-lg font-medium text-slate-900 mb-2">Limitation of Liability</h3>
              <p className="mb-4">
                Our liability is limited to the cost of services provided. We are not responsible for delays, 
                changes, or cancellations by airlines, hotels, or other service providers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Travel Insurance</h2>
            <p className="text-slate-700 mb-4">
              We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances 
              including trip cancellation, medical emergencies, and travel delays.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-700 mb-4">
              Grey Falcon Travels reserves the right to modify these terms and conditions at any time. 
              Changes will be posted on our website and will take effect immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law</h2>
            <p className="text-slate-700 mb-4">
              These terms and conditions are governed by the laws of the jurisdiction in which Grey Falcon Travels operates. 
              Any disputes will be resolved through binding arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              For questions regarding these terms and conditions, please contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700">
                <strong>Grey Falcon Travels</strong><br/>
                Email: legal@greyfalcontravels.com<br/>
                Phone: +1 (555) 123-4567<br/>
                Address: 123 Travel Street, Adventure City, AC 12345
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions