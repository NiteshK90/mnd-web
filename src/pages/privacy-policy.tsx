import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import type { Icon } from "@phosphor-icons/react";
import {
  InfoIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  FileTextIcon,
  DatabaseIcon,
  ClockIcon,
  LockIcon,
  UsersIcon,
  GlobeIcon,
  BrowserIcon,
  UserIcon,
  SmileyIcon,
  ArrowsClockwiseIcon,
  WrenchIcon,
  EnvelopeIcon,
  LinkIcon,
  ScalesIcon,
  EyeIcon,
  WarningIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";

type Section = {
  title: string;
  summary: string;
  detail: string;
  Icon: Icon;
};

const SECTIONS: Section[] = [
  {
    title: "1. Information We Collect",
    summary: "We collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, when you participate in activities on the Site.",
    detail: "The personal information we collect includes names, email addresses, phone numbers, company names, IP addresses, and usage data. This information is collected to improve your experience and provide better services.",
    Icon: InfoIcon,
  },
  {
    title: "2. How We Use Your Information",
    summary: "We use the information we collect in various ways, including to provide, operate, and maintain our website, improve, personalize, and expand our website, and understand and analyze how you use our website.",
    detail: "We also use your information to develop new products, services, features, and functionality, communicate with you for customer service, updates, and marketing, send emails, find and prevent fraud, and as required by law.",
    Icon: ChartBarIcon,
  },
  {
    title: "3. How We Protect Your Information",
    summary: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.",
    detail: "All sensitive information is transmitted via Secure Socket Layer (SSL) technology and encrypted in our database. Only authorized personnel with special access rights may access this information and are required to keep it confidential.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "4. Types of Data Collected",
    summary: "The types of personal information we may collect include your name, email address, phone number, company name, IP address, and usage data.",
    detail: "Usage data may include information such as your device's IP address, browser type and version, pages visited, time and date of visit, time spent on pages, and unique device identifiers.",
    Icon: FileTextIcon,
  },
  {
    title: "5. Use of Data",
    summary: "We use the collected data for various purposes, including to provide and maintain our service, to notify you about changes to our service, and to provide customer support.",
    detail: "Data is also used to monitor usage of our Service, detect and address technical issues, provide analysis or valuable information to improve the Service, and fulfill any other purpose for which you provide it.",
    Icon: DatabaseIcon,
  },
  {
    title: "6. Data Retention",
    summary: "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy unless a longer retention period is required or permitted by law.",
    detail: "We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.",
    Icon: ClockIcon,
  },
  {
    title: "7. Data Security",
    summary: "The security of your data is important to us, and we implement appropriate technical and organizational measures to protect it.",
    detail: "However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.",
    Icon: LockIcon,
  },
  {
    title: "8. Sharing of Data",
    summary: "We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our website and conducting our business.",
    detail: "These third parties are required to maintain the confidentiality of your information and are prohibited from using it for any purpose other than to carry out the services they are performing for us.",
    Icon: UsersIcon,
  },
  {
    title: "9. Third-Party Services",
    summary: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of those sites.",
    detail: "We encourage you to read the Privacy Policy of every website you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.",
    Icon: GlobeIcon,
  },
  {
    title: "10. Cookies and Tracking Technologies",
    summary: "We use cookies and similar tracking technologies to track activity on our website and hold certain information.",
    detail: "Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    Icon: BrowserIcon,
  },
  {
    title: "11. Your Data Protection Rights",
    summary: "Depending on your location, you may have the right to access, update, or delete the personal information we hold about you.",
    detail: "These rights may include the right to access, rectification, erasure, restriction of processing, data portability, and to object. To exercise any of these rights, please contact us.",
    Icon: UserIcon,
  },
  {
    title: "12. Children's Privacy",
    summary: "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.",
    detail: "If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we can take necessary action.",
    Icon: SmileyIcon,
  },
  {
    title: "13. Changes to This Privacy Policy",
    summary: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
    detail: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    Icon: ArrowsClockwiseIcon,
  },
  {
    title: "14. Changes to Our Service",
    summary: "We may update or discontinue our Service at any time without notice. We are not liable for any modification, suspension, or discontinuance of the Service.",
    detail: "We reserve the right to modify or terminate the Service for any reason, without notice at any time. We shall not be liable to you or any third party for any termination of your access to the Service.",
    Icon: WrenchIcon,
  },
  {
    title: "15. Contact Us",
    summary: "If you have any questions about this Privacy Policy, please contact us.",
    detail: "You can reach our privacy team at privacy@mnd.ai or by writing to us at our registered address. We aim to respond to all inquiries within 5 business days.",
    Icon: EnvelopeIcon,
  },
  {
    title: "16. Links to Other Sites",
    summary: "Our website may contain links to other websites that are not operated by us. We encourage you to review the Privacy Policy of every site you visit.",
    detail: "We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    Icon: LinkIcon,
  },
  {
    title: "17. Policy of Privacy",
    summary: "Only our Privacy Policy governs the collection, use and disclosure of your information by MND.",
    detail: "Any representations made by our employees or agents that contradict this Policy are not authorized and should be disregarded.",
    Icon: FileTextIcon,
  },
  {
    title: "18. Change to This Privacy Policy",
    summary: "We may update our Privacy Policy at any time. We will let you know about any changes by posting the new Privacy Policy on this page.",
    detail: "We will update the \"Last updated\" date of this Privacy Policy when it is revised. It is your responsibility to review this Privacy Policy periodically.",
    Icon: ArrowsClockwiseIcon,
  },
  {
    title: "19. Changes to Service",
    summary: "We may update or discontinue our Service at any time without notice. We are not liable for any modification, suspension, or discontinuance of the Service.",
    detail: "MND is constantly updating its offerings and services and may change or discontinue any product or service at any time with or without notice.",
    Icon: WrenchIcon,
  },
  {
    title: "20. Your Consent and Withdraw",
    summary: "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
    detail: "You may withdraw your consent at any time by contacting us. However, this will not affect the lawfulness of any processing based on consent before its withdrawal.",
    Icon: ClockIcon,
  },
  {
    title: "21. Governing Law",
    summary: "This Privacy Policy shall be governed and construed in accordance with the laws of your jurisdiction.",
    detail: "Our failure to enforce any right or provision of this Privacy Policy will not be considered a waiver of those rights.",
    Icon: ScalesIcon,
  },
  {
    title: "22. Disclosure of Your Data",
    summary: "We may disclose your personal data if required to do so by law or in response to valid requests by public authorities.",
    detail: "We may also disclose your data to enforce our policies, protect ours or others' rights, property, or safety, or in connection with any merger, acquisition, or sale of company assets.",
    Icon: EyeIcon,
  },
  {
    title: "23. Limitation of Liability",
    summary: "MND shall not be liable for any indirect, incidental, or consequential damages arising out of or in connection with the use of this website.",
    detail: "In no event shall MND, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any loss or damage, direct or indirect, incidental, special, punitive, or consequential including loss of profits, data, use, goodwill, or other intangible losses.",
    Icon: WarningIcon,
  },
  {
    title: "24. Your Feedback",
    summary: "We welcome your feedback on this Privacy Policy. Please contact us with any questions or suggestions.",
    detail: "Your feedback helps us improve our policies and practices. We value your input and are committed to continuously improving our approach to privacy.",
    Icon: ChatCircleIcon,
  },
  {
    title: "25. Acknowledgment",
    summary: "By using our website, you acknowledge that you have read and understood this Privacy Policy.",
    detail: "Continued use of our site following the posting of changes to this Privacy Policy will be deemed as your acceptance of those changes.",
    Icon: CheckCircleIcon,
  },
  {
    title: "26. Contact Us",
    summary: "For any privacy-related inquiries, please contact us.",
    detail: "Email us at privacy@mnd.ai or write to us at our registered address. We are committed to working with you to obtain a fair resolution.",
    Icon: EnvelopeIcon,
  },
];

export default function PrivacyPolicy() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <>
      <Head>
        <title>Privacy Policy – MND</title>
        <meta name="description" content="MND Privacy Policy" />
      </Head>

      {/* Page wrapper */}
      <div className="bg-mnd-parchment text-mnd-charcoal min-h-screen">

        {/* Top nav bar */}
        <div className="border-b border-mnd-cream bg-mnd-parchment">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-2">
            {/* Shield icon */}
            <div className="w-8 h-8 rounded-full border border-mnd-cream flex items-center justify-center">
              <ShieldCheckIcon size={16} className="text-neutral-500" />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 border-b border-mnd-cream">
          <h1 className="font-playfair text-3xl md:text-5xl font-normal tracking-tight text-mnd-charcoal mb-3">Privacy Policy</h1>
          <p className="text-sm text-neutral-500">Last updated: May 15, 2024</p>
          {/* Intro text */}
          <div className="mt-6 space-y-3 text-sm text-neutral-500 leading-relaxed">
            <p>At MND, accessible from <span className="text-mnd-charcoal underline underline-offset-2">https://mnd.ai</span>, one of our main priorities is the privacy of our visitors.</p>
            <p>This Privacy Policy document contains types of information that is collected and recorded by MND and how we use it.</p>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="max-w-6xl mx-auto px-6 divide-y divide-mnd-cream">
          {SECTIONS.map((section, i) => (
            <div key={i} className="py-5">
              {/* Accordion trigger */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left group"
              >
                {/* Top row: icon + title + (desktop: summary) + chevron */}
                <div className="flex items-start gap-4">
                  {/* Icon bubble + title */}
                  <div className="flex items-center gap-3 max-md:flex-1 md:w-72 shrink-0">
                    <div className="w-8 h-8 rounded-full border border-mnd-cream flex items-center justify-center shrink-0">
                      <section.Icon size={16} className="text-neutral-500" />
                    </div>
                    <span className="text-sm font-medium text-mnd-charcoal">{section.title}</span>
                  </div>

                  {/* Summary + detail — desktop only (side by side) */}
                  <div className="hidden md:block flex-1">
                    <p className="text-xs text-neutral-500 leading-relaxed">{section.summary}</p>
                    {open.has(i) && (
                      <p className="text-xs text-neutral-500 leading-relaxed mt-2">{section.detail}</p>
                    )}
                  </div>

                  {/* Chevron */}
                  <CaretDownIcon
                    size={16}
                    className={`text-neutral-500 mt-1 shrink-0 transition-transform duration-200 ${open.has(i) ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Summary + detail — mobile only (stacked below) */}
                <div className="md:hidden pl-11 mt-2">
                  <p className="text-xs text-neutral-500 leading-relaxed">{section.summary}</p>
                  {open.has(i) && (
                    <p className="text-xs text-neutral-500 leading-relaxed mt-2">{section.detail}</p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 mx-6 mb-10 max-w-3xl md:mx-auto rounded-2xl bg-mnd-charcoal flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-4">
            {/* Mail icon bubble */}
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <EnvelopeIcon size={20} className="text-white/70" />
            </div>
            {/* CTA copy */}
            <div>
              <p className="text-white/60 text-xs">Have questions about our Privacy Policy?</p>
              <p className="text-white font-playfair text-xl leading-tight">{"We're here to help."}</p>
            </div>
          </div>
          {/* Contact button */}
          <Link
            href="mailto:privacy@mnd.ai"
            className="shrink-0 bg-white text-mnd-charcoal text-xs font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-mnd-parchment transition-colors"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </>
  );
}
