import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import type { Icon } from "@phosphor-icons/react";
import {
  InfoIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  FileTextIcon,
  DatabaseIcon,
  ClockIcon,
  LockIcon,
  GlobeIcon,
  UserIcon,
  SmileyIcon,
  ArrowsClockwiseIcon,
  WrenchIcon,
  EnvelopeSimpleIcon,
  LinkIcon,
  ScalesIcon,
  EyeIcon,
  WarningIcon,
  ChatCircleIcon,
  CheckCircleIcon,
  CaretDownIcon,
  GearSixIcon,
  ChartLineUpIcon,
  CopyrightIcon,
  CreditCardIcon,
  GavelIcon,
  HandshakeIcon,
  MapPinIcon,
} from "@phosphor-icons/react";

type Section = {
  title: string;
  summary: string;
  detail: string;
  Icon: Icon;
};

const SECTIONS: Section[] = [
  {
    title: "1. Introduction",
    summary: "MyNextDeveloper, operated by MND Technologies Private Limited (\"us\", \"we\", or \"our\"), operates https://mynextdeveloper.com. This Privacy Policy explains how we collect, safeguard, and disclose information that results from your use of our Service.",
    detail: "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined here, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which together with this Privacy Policy constitute your agreement with us (\"Agreement\").",
    Icon: InfoIcon,
  },
  {
    title: "2. Definitions",
    summary: "This section defines the key terms used throughout this Privacy Policy, including Service, Personal Data, Usage Data, Cookies, Candidate, Client, Data Controller, Data Processor, Data Subject, and User.",
    detail: "Personal Data means data about a living individual who can be identified from that data. Usage Data is data collected automatically from use of the Service or its infrastructure. Cookies are small files stored on your device. A Candidate is the person we introduce to a Client for an Engagement, and a Client is the person we introduce to a Candidate for an Engagement. We act as the Data Controller of your data, determining the purposes and means of processing, and may use Data Processors (Service Providers) to process your data on our behalf. A Data Subject is any living individual who is the subject of Personal Data, and the User is the individual using our Service.",
    Icon: FileTextIcon,
  },
  {
    title: "3. Information Collection and Use",
    summary: "We collect several different types of information for various purposes to provide and improve our Service to you.",
    detail: "This includes both information you provide directly and information collected automatically as you use the Service, covered in detail in the sections below on the types of data we collect and how we use it.",
    Icon: DatabaseIcon,
  },
  {
    title: "4. Types of Data Collected",
    summary: "We may collect Personal Data such as your email address, name, and phone number, as well as Usage Data and Cookies, whenever you use our Service.",
    detail: "Personal Data may include your email address, name, and phone number, and cookies and usage data; we may use this to send newsletters, marketing, or promotional materials, and you can opt out anytime by emailing ops@mynextdeveloper.com. Usage Data includes your IP address, browser type and version, the pages you visit, the time and date of your visit, time spent on pages, and device identifiers, collected whenever you access the Service from a computer or mobile device. We also use Tracking Cookies — Session Cookies to operate the Service, Preference Cookies to remember your settings, and Security Cookies for security purposes — and you can instruct your browser to refuse them, though some parts of the Service may not work as intended.",
    Icon: ChartBarIcon,
  },
  {
    title: "5. Use of Data",
    summary: "MyNextDeveloper uses the data we collect to provide, maintain, and improve our Service, and to communicate with you.",
    detail: "We use your data to provide and maintain the Service; notify you of changes; provide customer support; gather analysis to improve the Service; monitor usage; detect and prevent technical issues; fulfil any other purpose for which you provided it; enforce our contracts, including billing and collection; send account and subscription notices; share news, offers, and information about similar goods or services unless you've opted out; and for any other purpose with your consent.",
    Icon: GearSixIcon,
  },
  {
    title: "6. Retention of Data",
    summary: "We retain your Personal Data only for as long as necessary for the purposes set out in this Privacy Policy, or as required by law.",
    detail: "We retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements and policies. Usage Data is generally retained for a shorter period, unless it's needed to strengthen security, improve functionality, or we're legally obligated to keep it longer.",
    Icon: ClockIcon,
  },
  {
    title: "7. Access, Correction and Deletion of Information",
    summary: "You can request that we remove or modify any information about your account at any time.",
    detail: "To permanently remove your data, email us at ops@mynextdeveloper.com, and we will remove your data within 30 days of your request.",
    Icon: UserIcon,
  },
  {
    title: "8. Transfer of Data",
    summary: "Your information, including Personal Data, may be transferred to and processed on computers located outside your state, province, country, or other jurisdiction.",
    detail: "If you're located in the European Union, please note that we transfer your data outside the EU and process it there; your consent to this Privacy Policy represents your agreement to that transfer. We take all steps reasonably necessary to ensure your data is treated securely, and no transfer of your Personal Data takes place to an organisation or country without adequate controls in place.",
    Icon: GlobeIcon,
  },
  {
    title: "9. Disclosure of Data",
    summary: "We may disclose personal information that we collect, or that you provide, to fulfil the purpose for which you provided it.",
    detail: "Any disclosure of your personal information is limited to what is necessary to fulfil that stated purpose.",
    Icon: EyeIcon,
  },
  {
    title: "10. Security of Data",
    summary: "The security of your data is important to us, but no method of transmission over the Internet or electronic storage is 100% secure.",
    detail: "While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    Icon: LockIcon,
  },
  {
    title: "11. Your Data Protection Rights Under the GDPR",
    summary: "If you're a resident of the EU or EEA, you have certain data protection rights covered by the General Data Protection Regulation (GDPR).",
    detail: "We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data — email ops@mynextdeveloper.com to find out what data we hold or to have it removed. In certain circumstances you have the right to access, update, or delete your information; rectify inaccurate or incomplete information; object to our processing; request we restrict processing; receive a copy of your data in a structured, machine-readable format; and withdraw consent at any time. We may ask you to verify your identity before responding, and we may not be able to provide the Service without some necessary data. You also have the right to complain to a Data Protection Authority in the EEA about our collection and use of your Personal Data.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "12. Your Data Protection Rights Under CalOPPA",
    summary: "CalOPPA requires commercial websites and online services that collect personally identifiable information from California consumers to post a privacy policy.",
    detail: "In line with CalOPPA, we agree that: users can visit our site anonymously; our Privacy Policy link includes the word \"Privacy\" and is easy to find on our homepage; users will be notified of any changes on our Privacy Policy page; and users can change their personal information by emailing ops@mynextdeveloper.com.",
    Icon: ScalesIcon,
  },
  {
    title: "13. Analytics",
    summary: "We use third-party Service Providers, including Google Analytics, to monitor and analyze the use of our Service.",
    detail: "Google Analytics tracks and reports website traffic, and Google may use the collected data to contextualise and personalise ads across its own advertising network. You can read more about Google's privacy practices at https://policies.google.com/privacy?hl=en and its data safeguards at https://support.google.com/analytics/answer/6004245.",
    Icon: ChartLineUpIcon,
  },
  {
    title: "14. Intellectual Property",
    summary: "The Service and its original content, features, and functionality remain the exclusive property of MyNextDeveloper and its licensors.",
    detail: "The Service is protected by copyright, trademark, and other applicable laws, and our trademarks and trade dress may not be used without our prior written consent.",
    Icon: CopyrightIcon,
  },
  {
    title: "15. Payments",
    summary: "We may offer paid products or services and use third-party payment processors to handle payments; we do not store or collect your card details ourselves.",
    detail: "Payment information is provided directly to our third-party payment processors, whose use of your information is governed by their own Privacy Policy, and who adhere to PCI-DSS standards for secure handling of payment data. The payment processors we may work with include Razorpay (https://razorpay.com/privacy/) and Stripe (https://stripe.com/en-in/privacy).",
    Icon: CreditCardIcon,
  },
  {
    title: "16. Links to Other Sites",
    summary: "Our Service may contain links to third-party sites that are not operated by us.",
    detail: "We strongly advise you to review the Privacy Policy of every site you visit — we have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    Icon: LinkIcon,
  },
  {
    title: "17. Children's Privacy",
    summary: "Our Services are not intended for use by children under the age of 13, and we do not knowingly collect personal information from them.",
    detail: "If you become aware that a child has provided us with Personal Data, please contact us; if we discover we've collected data from a child without verified parental consent, we take steps to remove it from our servers.",
    Icon: SmileyIcon,
  },
  {
    title: "18. Changes to This Privacy Policy",
    summary: "We may update this Privacy Policy at any time by posting the revised version on this page.",
    detail: "We may notify you via email and/or a prominent notice on our Service about changes taking effect, and update the effective date at the top of this page. It's your responsibility to review this Privacy Policy periodically — changes are effective as soon as they're posted.",
    Icon: ArrowsClockwiseIcon,
  },
  {
    title: "19. Changes to Service",
    summary: "We reserve the right to withdraw or amend our Service, or any part of it, at our sole discretion and without notice.",
    detail: "We will not be liable if all or any part of the Service is unavailable at any time, and from time to time we may restrict access to some or all of the Service, including for registered users.",
    Icon: WrenchIcon,
  },
  {
    title: "20. Error Reporting and Feedback",
    summary: "You may send us feedback, error reports, and suggestions directly at ops@mynextdeveloper.com.",
    detail: "By submitting feedback you agree that you won't assert any intellectual property rights over it, that we may have similar ideas independently, that it contains no confidential or third-party proprietary information, and that we're under no obligation of confidentiality regarding it. Where ownership transfer isn't legally possible, you grant us an exclusive, transferable, irrevocable, royalty-free, sub-licensable, and perpetual right to use your feedback in any manner and for any purpose.",
    Icon: ChatCircleIcon,
  },
  {
    title: "21. Governing Law",
    summary: "These Terms are governed by the laws of India, without regard to its conflict of law provisions.",
    detail: "Our failure to enforce any right or provision of these Terms is not a waiver of those rights. If any provision is held invalid or unenforceable, the remaining provisions remain in effect, and these Terms constitute the entire agreement between us regarding the Service.",
    Icon: GavelIcon,
  },
  {
    title: "22. Disclaimer of Warranty",
    summary: "Our services are provided on an \"as is\" and \"as available\" basis, without warranties of any kind, express or implied.",
    detail: "We make no representations or warranties as to the completeness, security, reliability, accuracy, or availability of the Service, and your use of it is at your sole risk. We disclaim all warranties, including merchantability, non-infringement, and fitness for a particular purpose, except where such disclaimers cannot be excluded or limited under applicable law.",
    Icon: WarningIcon,
  },
  {
    title: "23. Limitation of Liability",
    summary: "Except as prohibited by law, you agree to hold us and our officers, directors, employees, and agents harmless for any indirect, punitive, special, incidental, or consequential damages arising from this Agreement.",
    detail: "If liability is found on our part, it will be limited to the amount paid for the products and/or services, and under no circumstances will there be consequential or punitive damages. Some states do not allow the exclusion or limitation of certain damages, so this limitation may not apply to you.",
    Icon: ScalesIcon,
  },
  {
    title: "24. Non-Solicitation",
    summary: "Candidates and Clients acknowledge the significant effort we put into matching them, and agree not to circumvent us or deal directly without our prior written authorisation.",
    detail: "This restriction applies during the tenure of any contract, or for twenty-four (24) months from the date of introduction, whichever is later, and covers any engagements or introductions. If a Client or Candidate solicits or works together without our consent, they will be liable to pay us a one-time fee equal to two (2) times the yearly cost we charged the Client.",
    Icon: HandshakeIcon,
  },
  {
    title: "25. Acknowledgement",
    summary: "By using our Service, you acknowledge that you have read these Terms of Service and agree to be bound by them.",
    detail: "Continued use of the Service after any changes are posted constitutes your acceptance of those changes.",
    Icon: CheckCircleIcon,
  },
  {
    title: "26. Contact Us",
    summary: "If you have any questions about this Privacy Policy, you can reach us by email or post.",
    detail: "By email: ops@mynextdeveloper.com. By post: MND Technologies Private Limited, 6, 1st Floor, Kamala Niketan, Dr. Bhagvan Indrjit Road, Malabar Hill, Mumbai – 400006.",
    Icon: MapPinIcon,
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
        <title>Privacy Policy – MyNextDeveloper</title>
        <meta name="description" content="MyNextDeveloper Privacy Policy" />
      </Head>

      {/* Page wrapper */}
      <div className="bg-mnd-beige text-mnd-charcoal min-h-screen overflow-hidden">

        {/* Navbar */}
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal showBorder />
        </div>

        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-mnd-cream">
          {/* Shield icon */}
          <div className="w-10 h-10 rounded-full border border-mnd-cream bg-mnd-oat flex items-center justify-center mb-4">
            <ShieldCheckIcon size={18} weight="bold" className="text-mnd-charcoal" />
          </div>
          <h1 className="font-playfair text-3xl md:text-5xl font-normal tracking-tight text-mnd-charcoal mb-3">Privacy Policy</h1>
          <p className="text-sm text-mnd-charcoal">Last updated: February 1, 2023</p>
          {/* Intro text */}
          <div className="mt-6 space-y-3 text-sm text-mnd-charcoal leading-relaxed">
            <p>MyNextDeveloper, accessible from <span className="text-mnd-charcoal">https://mynextdeveloper.com</span>, is operated by MND Technologies Private Limited.</p>
            <p>This Privacy Policy explains how we collect, safeguard, and disclose information that results from your use of our Service, and by using the Service you agree to the collection and use of information in accordance with this policy.</p>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          </div>
        </div>

        {/* Accordion list */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 divide-y divide-mnd-cream">
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
                  <div className="flex items-center gap-3 max-md:flex-1 md:w-96 shrink-0">
                    <div className="w-10 h-10 rounded-full border border-mnd-cream bg-mnd-oat flex items-center justify-center shrink-0">
                      <section.Icon size={18} weight="bold" className="text-mnd-charcoal" />
                    </div>
                    <span className="text-sm font-medium text-mnd-charcoal">{section.title}</span>
                  </div>

                  {/* Summary + detail — desktop only (side by side) */}
                  <div className="hidden md:block flex-1">
                    <p className="text-xs text-mnd-charcoal leading-relaxed">{section.summary}</p>
                    {open.has(i) && (
                      <p className="text-xs text-mnd-charcoal leading-relaxed mt-2">{section.detail}</p>
                    )}
                  </div>

                  {/* Chevron */}
                  <div className="w-7 h-7 rounded-full border border-mnd-cream flex items-center justify-center shrink-0 cursor-pointer">
                    <CaretDownIcon
                      size={14}
                      className={`text-mnd-charcoal/60 transition-transform duration-200 ${open.has(i) ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                {/* Summary + detail — mobile only (stacked below) */}
                <div className="md:hidden pl-[52px] mt-2">
                  <p className="text-xs text-mnd-charcoal leading-relaxed">{section.summary}</p>
                  {open.has(i) && (
                    <p className="text-xs text-mnd-charcoal leading-relaxed mt-2">{section.detail}</p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12 mb-8 sm:mb-10">
          <div className="rounded-2xl bg-mnd-silk flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 px-5 sm:px-8 py-6 sm:py-7">
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Mail icon bubble */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-mnd-oat flex items-center justify-center shrink-0">
                <EnvelopeSimpleIcon size={24} className="text-mnd-charcoal sm:hidden" />
                <EnvelopeSimpleIcon size={32} className="text-mnd-charcoal hidden sm:block" />
              </div>
              {/* CTA copy */}
              <div>
                <p className="text-mnd-charcoal text-xs font-bold pb-2">Have questions about our Privacy Policy?</p>
                <p className="text-mnd-charcoal font-playfair text-xl leading-tight">{"We're here to help."}</p>
              </div>
            </div>
            {/* Contact button */}
            <Link
              href="mailto:ops@mynextdeveloper.com"
              className="w-full sm:w-auto text-center px-5 md:px-8 py-2 bg-mnd-navy text-white rounded-full text-[12px] whitespace-nowrap font-semibold uppercase transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>

      <FooterSection />
    </>
  );
}
