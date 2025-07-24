import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              At Grey Falcon Travels, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Make a booking or reservation</li>
              <li>Create an account on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us for customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Process and manage your bookings</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send you booking confirmations and travel updates</li>
              <li>Improve our services and website functionality</li>
              <li>Send promotional offers (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
            <p className="text-slate-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>To trusted service providers who assist in operating our website and conducting business</li>
              <li>When required by law or to protect our rights</li>
              <li>With hotels, airlines, and other travel providers to complete your bookings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-slate-700 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-700 mb-4">
              Our website uses cookies to enhance your browsing experience. You can choose to disable cookies 
              through your browser settings, though this may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-700">
                <strong>Grey Falcon Travels</strong><br/>
                Email: privacy@greyfalcontravels.com<br/>
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

export default PrivacyPolicy