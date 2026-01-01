import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-12 xl:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2026</p>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                At BunkRoot ("we," "our," or "us"), we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact details (email, phone number)</li>
                    <li>Payment information for booking transactions</li>
                    <li>Profile information you choose to provide</li>
                    <li>Communication history with hosts and our support team</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device information (browser type, operating system)</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and browsing behavior on our platform</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and manage your bookings</li>
                <li>Facilitate communication between guests and hosts</li>
                <li>Send booking confirmations and important updates</li>
                <li>Improve our platform and user experience</li>
                <li>Personalize content and experience recommendations</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Prevent fraud and ensure platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Hosts:</strong> To facilitate your booking and experience</li>
                <li><strong>Payment Processors:</strong> To process transactions securely</li>
                <li><strong>Service Providers:</strong> Who assist in operating our platform</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Object to processing of your data in certain circumstances</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. 
                When no longer needed, we securely delete or anonymize your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the 
                privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under 18 years of age. We do not knowingly 
                collect personal information from children. If we become aware of such collection, 
                we will take steps to delete the information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes 
                by posting a notice on our platform or sending you an email. Your continued use of our services 
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at{" "}
                <a href="mailto:hello@bunkroot.com" className="text-accent hover:underline">hello@bunkroot.com</a> 
                {" "}or through our <a href="/contact" className="text-accent hover:underline">Contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
