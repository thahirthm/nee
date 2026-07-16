import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — NKE Floors" },
      {
        name: "description",
        content:
          "Get in touch with NKE Floors for professional stone restoration services. Contact form, phone, email, and office location.",
      },
      {
        property: "og:title",
        content: "Contact — NKE Floors",
      },
      {
        property: "og:description",
        content: "Reach out to our restoration specialists.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <PageHero
        title="Get In Touch"
        subtitle="Contact Us"
        description="Have questions about our services? Ready to schedule a consultation? We'd love to hear from you. Reach out using any of the methods below."
        backgroundImage={heroImg}
      />

      <ContactMain />
      <GoogleMap />
      <ContactFAQ />
    </main>
  );
}

/* ============ CONTACT MAIN ============ */
function ContactMain() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Let's Connect"
          title="Contact Information"
          intro="Multiple ways to reach our team. Choose what works best for you."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="border border-border bg-card rounded-sm p-8 hover:shadow-elevated transition-shadow">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
              <Phone className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl text-primary">Call Us</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Speak directly with our team during business hours.
            </p>
            <a
              href="tel:+919600040155"
              className="mt-4 block font-medium text-primary hover:text-gold transition-colors"
            >
              9600040155<br/>9600047255
            </a>
            <p className="mt-2 text-xs text-muted-foreground">
              Mon - Fri: 9 AM - 6 PM
              <br />
              Sat: 10 AM - 4 PM
              <br />
              Sun: Closed
            </p>
          </div>

          {/* Email */}
          <div className="border border-border bg-card rounded-sm p-8 hover:shadow-elevated transition-shadow">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
              <Mail className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl text-primary">Email Us</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Send us an email and we'll respond within 24 hours.
            </p>
            <div className="mt-4 space-y-1 font-medium text-primary break-all">
              <a href="mailto:mails@nkefloors.com" className="block hover:text-gold transition-colors">mails@nkefloors.com</a>
              <a href="mailto:dilip@nkefloors.com" className="block hover:text-gold transition-colors">dilip@nkefloors.com</a>
              <a href="mailto:Krish@nkefloors.com" className="block hover:text-gold transition-colors">Krish@nkefloors.com</a>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Response time: Typically 24 hours or less
            </p>
          </div>

          {/* Office Location */}
          <div className="border border-border bg-card rounded-sm p-8 hover:shadow-elevated transition-shadow">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30">
              <MapPin className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-4 font-serif text-xl text-primary">Visit Us</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Stop by our office for a consultation.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium text-primary text-sm">Reg: off:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  M5, Sudarsan Gardens,<br />
                  106, Velechery high road,<br />
                  Guindy, Chennai 600032, India
                </p>
              </div>
              <div>
                <p className="font-medium text-primary text-sm">Studio</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  57, North Boag Road,<br />
                  Tnager, Chennai 600017. India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & WhatsApp */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="border border-border bg-card rounded-sm p-8 lg:p-12">
            <h3 className="font-serif text-2xl text-primary">
              Send us a Message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form and we'll get back to you shortly.
            </p>

            {submitted && (
              <div className="mt-6 p-4 bg-gold/10 border border-gold/30 rounded-sm flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary text-sm">
                    Message Sent!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="9600040155"
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Subject *
                </label>
                <select
                  required
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="quote">Project Quote</option>
                  <option value="maintenance">Maintenance Program</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project, location, and timeline."
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-75"
              >
                {loading ? "Sending..." : "Send Message"}{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* WhatsApp & Info */}
          <div className="space-y-6">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919600040155"
              className="block border-2 border-gold rounded-sm p-8 text-center group hover:bg-gold/5 transition-colors"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                <MessageCircle className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary">
                Chat on WhatsApp
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Quick response · No installation needed
              </p>
              <div className="mt-4 font-medium text-gold">Start Chat →</div>
            </a>

            {/* Quick Info Cards */}
            <div className="border border-border bg-card rounded-sm p-8">
              <h4 className="font-serif text-lg text-primary mb-6">
                Why Contact Us?
              </h4>
              <div className="space-y-4">
                {[
                  {
                    i: Clock,
                    t: "Fast Response",
                    d: "Typically respond within 24 hours",
                  },
                  {
                    i: Users,
                    t: "Expert Team",
                    d: "Speak with restoration specialists",
                  },
                  {
                    i: CheckCircle2,
                    t: "Free Consultation",
                    d: "No obligation, honest assessment",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex gap-3">
                    <item.i className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-primary text-sm">
                        {item.t}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="border border-border bg-card rounded-sm p-8">
              <h4 className="font-serif text-lg text-primary mb-6">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[
                  { i: Facebook, label: "Facebook", url: "#" },
                  { i: Instagram, label: "Instagram", url: "#" },
                  { i: Linkedin, label: "LinkedIn", url: "#" },
                  { i: Twitter, label: "Twitter", url: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    aria-label={`Follow on ${s.label}`}
                    className="h-10 w-10 rounded-sm border border-border flex items-center justify-center hover:border-gold hover:bg-gold/5 transition-colors"
                  >
                    <s.i className="h-4 w-4 text-gold" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ GOOGLE MAP ============ */
function GoogleMap() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="rounded-sm overflow-hidden border border-border h-96">
          <iframe
            title="NKE Floors office location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1%2C51.5%2C-0.08%2C51.51&layer=mapnik"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ============ CONTACT FAQ ============ */
function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How quickly can you respond to inquiries?",
      a: "We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly at 9600040155.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes! We provide free, no-obligation on-site consultations. During this visit, we assess your flooring condition and provide honest recommendations.",
    },
    {
      q: "What areas do you serve?",
      a: "We serve the greater metropolitan area and surrounding regions. Contact us to confirm service availability for your location.",
    },
    {
      q: "Can you provide a quote over the phone?",
      a: "While we can provide a rough estimate, we recommend an on-site visit for an accurate quote. Surface condition, size, and specific requirements affect pricing.",
    },
    {
      q: "Do you handle emergency restoration?",
      a: "Yes, we offer emergency response services. Call us immediately at 9600040155 for urgent situations requiring immediate attention.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, bank transfers, and checks. Payment plans are available for larger projects. Discuss options during your consultation.",
    },
  ];

  return (
    <section className="py-28 bg-card">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Have Questions?"
          title="Frequently Asked Questions"
          intro="Find answers to common questions about our services and how to work with us."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors text-left"
              >
                <h3 className="font-medium text-primary">{faq.q}</h3>
                <div
                  className={`text-gold transition-transform ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </button>
              {openFaq === idx && (
                <div className="px-6 py-4 bg-card border-t border-border text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
