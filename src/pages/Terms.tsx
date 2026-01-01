import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-12 xl:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-12">Last updated: January 2026</p>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using BunkRoot ("we," "our," or "us"), you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
              <p>
                BunkRoot is a platform that connects users with unique local experiences hosted by independent hosts. 
                We act as an intermediary between guests and hosts, facilitating bookings and communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Booking & Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Payment Structure</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Booking Amount:</strong> 30% of the total experience cost is payable at the time of booking to confirm your reservation.</li>
                    <li><strong>Remaining Amount:</strong> 70% of the total cost is payable directly at the venue before or at the start of the experience.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cancellation & Refund Policy</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cancellations made <strong>within 48 hours</strong> of the experience start time: The booking amount (30%) is <strong>non-refundable</strong>.</li>
                    <li>Cancellations made <strong>more than 48 hours</strong> before the experience: Full refund of the booking amount within 5-7 business days.</li>
                    <li>No-shows without prior cancellation will not be eligible for any refund.</li>
                    <li>If the host cancels the experience, you will receive a full refund of any amount paid.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information during booking.</li>
                <li>Arrive on time for scheduled experiences.</li>
                <li>Follow all safety guidelines provided by hosts.</li>
                <li>Treat hosts, other guests, and property with respect.</li>
                <li>Not engage in any illegal or harmful activities during experiences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Host Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate descriptions of experiences.</li>
                <li>Ensure all necessary safety measures are in place.</li>
                <li>Communicate any changes or cancellations promptly.</li>
                <li>Maintain appropriate licenses and permits where required.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability & Disclaimers</h2>
              <p className="mb-4">
                BunkRoot acts as a marketplace and is not responsible for the actions, content, or services provided by hosts. 
                We do not guarantee the quality, safety, or legality of experiences listed on our platform.
              </p>
              <p>
                Participants engage in experiences at their own risk. We recommend reviewing all experience details, 
                safety requirements, and host information before booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p>
                All content on BunkRoot, including logos, text, images, and design, is owned by BunkRoot or its licensors. 
                You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. 
                Continued use of the platform constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
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

export default Terms;
