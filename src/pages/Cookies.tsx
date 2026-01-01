import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-12 xl:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2026</p>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember your preferences, understand how you use the site, 
                and improve your overall experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">BunkRoot uses cookies for the following purposes:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic features 
                    like page navigation, secure areas access, and booking functionality. The website cannot 
                    function properly without these cookies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p>
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our platform and content.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p>
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences, quiz results, and recently viewed experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p>
                    These cookies may be used to track visitors across websites to display relevant 
                    advertisements. They help measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-4">
                  <thead>
                    <tr className="bg-card">
                      <th className="border border-border px-4 py-2 text-left text-foreground">Cookie Name</th>
                      <th className="border border-border px-4 py-2 text-left text-foreground">Purpose</th>
                      <th className="border border-border px-4 py-2 text-left text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-4 py-2">session_id</td>
                      <td className="border border-border px-4 py-2">Maintains user session</td>
                      <td className="border border-border px-4 py-2">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">preferences</td>
                      <td className="border border-border px-4 py-2">Stores user preferences</td>
                      <td className="border border-border px-4 py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">quiz_result</td>
                      <td className="border border-border px-4 py-2">Remembers vibe quiz results</td>
                      <td className="border border-border px-4 py-2">30 days</td>
                    </tr>
                    <tr>
                      <td className="border border-border px-4 py-2">_ga</td>
                      <td className="border border-border px-4 py-2">Google Analytics tracking</td>
                      <td className="border border-border px-4 py-2">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>
                Some cookies on our website are set by third-party services. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Payment Processors:</strong> For secure transaction handling</li>
                <li><strong>Social Media Platforms:</strong> For sharing functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p>
                    Most browsers allow you to view, manage, delete, and block cookies. Note that blocking 
                    all cookies may affect your experience on our website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Opt-Out Links</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Google Analytics Opt-out
                      </a>
                    </li>
                    <li>
                      <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        Digital Advertising Alliance Opt-out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Do Not Track Signals</h2>
              <p>
                Some browsers have a "Do Not Track" feature that signals to websites that you do not want 
                your online activity tracked. Our website currently does not respond to Do Not Track signals, 
                but you can manage your cookie preferences as described above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. Please revisit this page periodically 
                to stay informed about our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{" "}
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

export default Cookies;
