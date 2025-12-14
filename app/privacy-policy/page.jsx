'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] selection:bg-[var(--primary)] selection:text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 md:pt-48 md:pb-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black racing mb-8">PRIVACY POLICY</h1>
          <p className="text-[var(--text-secondary)] mb-12 openSans">
            Last Updated: December 14, 2024
          </p>

          <div className="space-y-12 openSans text-[var(--text-secondary)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                1. INTRODUCTION
              </h2>
              <p>
                VisQode ("we", "our", "us") respects your privacy and is committed to protecting
                your personal data. This privacy policy informs you how we look after your personal
                data when you visit our website (regardless of where you visit it from) and tells
                you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                2. DATA WE COLLECT
              </h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of personal data about you
                which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identity Data:</strong> includes first name, last name, username or
                  similar identifier.
                </li>
                <li>
                  <strong>Contact Data:</strong> includes email address and telephone numbers.
                </li>
                <li>
                  <strong>Technical Data:</strong> includes internet protocol (IP) address, browser
                  type and version, time zone setting and location, browser plug-in types and
                  versions, operating system and platform.
                </li>
                <li>
                  <strong>Usage Data:</strong> includes information about how you use our website,
                  products and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                3. HOW WE USE YOUR DATA
              </h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we
                will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Where we need to perform the contract we are about to enter into or have entered
                  into with you.
                </li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and
                  your interests and fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                4. DATA SECURITY
              </h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data
                from being accidentally lost, used or accessed in an unauthorized way, altered or
                disclosed. In addition, we limit access to your personal data to those employees,
                agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                5. YOUR LEGAL RIGHTS
              </h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation
                to your personal data, including the right to request access, correction, erasure,
                restriction, transfer, to object to processing, to portability of data and (where
                the lawful ground of processing is consent) to withdraw consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold racing text-[var(--text-primary)] mb-4">
                6. CONTACT US
              </h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please
                contact us at:{' '}
                <a
                  href="mailto:privacy@visqode.com"
                  className="text-[var(--primary)] hover:underline"
                >
                  privacy@visqode.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
