import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — NKE Floors" },
      { name: "description", content: "Privacy Policy for NKE Floors services." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 mt-12 bg-card border border-border p-8 md:p-12 rounded-sm shadow-sm text-primary/80 leading-relaxed">
            <p>
              We NKE Floorcare Pvt.Ltd (NKE) collect information about you when you visit our site, use our services, or view our online advertisements. The information that we collect and store during normal use of the site is used to monitor use of our site and to help further development of our products and services.
            </p>
            <p>
              Which effectively means that you can visit NKE's website on the Internet without telling us who you are or providing data that personally identifies you.
            </p>
            <p>
              Protecting your privacy and ensuring that your personal data is held securely is of utmost importance to NKE. Rest assured that we are looking after your interests, which is why this Privacy Statement clearly defines our information practices.
            </p>
            <p>
              We do not share your information with third parties, unless we need to share your information to provide the product or service you have requested and we have asked for and obtained your explicit consent. The foregoing notwithstanding, if (1) disclosure was required by law, rule or regulation or was in response to a valid order of a court or authorised agency of government or other legal process and/or; (2) When we find your action on the website violates NKE's terms and conditions or any of your usage guidelines for specific products or services.
            </p>
            <p>
              This Privacy Statement will apply when you use our website to discover more information about NKE and its products.
              By submitting your personal data through this website, you shall be consenting to it being processed in the manner described above by NKE and its sister concerns.
            </p>
            <p>
              If you have submitted personal data through this website and wish us to cease using it for the purposes submitted, please contact us using the contact details given in the appropriate sections of the site.
            </p>
            
            <h2 className="text-2xl font-serif text-primary mt-12 mb-4">Contacting us</h2>
            <p>
              NKE regularly reviews its compliance with this Privacy Statement. Please feel free to direct any questions or concerns regarding this Privacy Statement or our treatment of personal data and information by completing our web contact form or by writing to us at the following addresses:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8 mb-8 p-6 bg-muted/30 border border-border rounded-sm">
              <div>
                <h3 className="font-semibold uppercase tracking-wider text-sm text-gold mb-3">Registered Office</h3>
                <address className="not-italic text-sm leading-relaxed">
                  #33 Srinivasa Kalyana Mantapa Road,<br/>
                  J P Nagar 6th Phase. Kanakapura Road.<br/>
                  Bengaluru-560078. Karnataka, INDIA
                </address>
              </div>
              <div>
                <h3 className="font-semibold uppercase tracking-wider text-sm text-gold mb-3">Head Office</h3>
                <address className="not-italic text-sm leading-relaxed">
                  NKE Floorcare Pvt. Ltd,<br/>
                  M/5 Sudarsan gardens, 106 velachery road,<br/>
                  Guindy, Chennai, Tamil Nadu - 600032, India.
                </address>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-primary mt-12 mb-4">Changes to this Policy</h2>
            <p>
              NKE may edit this policy from time to time. If we make substantial changes, we will notify you by posting a prominent announcement on this website.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
