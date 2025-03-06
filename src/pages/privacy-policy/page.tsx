export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: 12/02/2025</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When using Zest, we collect and process the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address and account credentials</li>
              <li>Email content and metadata</li>
              <li>Usage data and interaction with our services</li>
              <li>Technical information such as device type and IP address</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our email services</li>
              <li>Process and send emails on your behalf</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. All data is encrypted. We regularly review
              and update our security practices to maintain the safety of your
              information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may
              share your information with service providers who assist in
              operating our service, subject to confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              6. AI and Machine Learning Data Usage
            </h2>
            <p className="mb-4">
              While we use artificial intelligence and machine learning to
              improve our services, we want to be clear about our data
              practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We do not retain or use data obtained through Google Workspace
                APIs to develop, improve, or train generalized AI or machine
                learning models
              </li>
              <li>
                Any AI features in our service process data on-demand and do not
                store or learn from your personal information
              </li>
              <li>
                Our AI systems are pre-trained on public datasets and do not
                learn from or adapt to individual user data
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Google User Data</h2>
            <p>
              We do not share or transfer Google user data to any third party.
              Google user data is stored and encrypted in our servers hosted in
              the EU.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@zest.email"
                className="text-blue-600 hover:underline"
              >
                privacy@zest.email
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
