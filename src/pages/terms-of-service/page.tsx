export default function TermsOfUse() {
  return (
    <div
      id="terms"
      className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              {`By accessing or using Zest's email services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms,
              please do not use our services.`}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              2. Service Description
            </h2>
            <p className="mb-4">
              Zest provides AI-powered email composition and management
              services. We offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email composition assistance</li>
              <li>Email organization and classification</li>
              <li>Integration with existing email providers</li>
              <li>AI-powered email features</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Not engage in unauthorized access or use of the service</li>
              <li>Not use the service for spam or malicious purposes</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of Zest, including but
              not limited to text, graphics, logos, and software, are the
              exclusive property of Zest and are protected by intellectual
              property laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              5. Service Availability
            </h2>
            <p>
              While we strive to provide uninterrupted service, we do not
              guarantee that the service will be available at all times. We
              reserve the right to modify, suspend, or discontinue the service
              with or without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Zest shall not be liable for any indirect, incidental, special,
              consequential, or exemplary damages, including but not limited to,
              damages for loss of profits, goodwill, use, data or other
              intangible losses (even if Zest has been advised of the
              possibility of such damages).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
