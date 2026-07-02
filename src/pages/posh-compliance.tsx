import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import type { Icon } from "@phosphor-icons/react";
import {
  InfoIcon,
  ShieldCheckIcon,
  FileTextIcon,
  GlobeIcon,
  UsersIcon,
  ArrowsClockwiseIcon,
  EnvelopeSimpleIcon,
  WarningIcon,
  ChatCircleIcon,
  CaretDownIcon,
  GavelIcon,
} from "@phosphor-icons/react";

type Section = {
  title: string;
  summary: string;
  detail: string;
  Icon: Icon;
};

const SECTIONS: Section[] = [
  {
    title: "1. Purpose",
    summary: "To create and maintain a safe work environment, free from sexual harassment and discrimination, for all employees of MND Technologies Private Limited.",
    detail: "This Policy establishes guidelines in line with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
    Icon: InfoIcon,
  },
  {
    title: "2. Scope",
    summary: "MND Technologies Private Limited adopts a zero-tolerance attitude towards any kind of sexual harassment or discrimination caused by any employee during their tenure at MND.",
    detail: "This applies towards any other person — whether an employee of MND, a Client, Vendor, or Contractor — on Company premises or elsewhere in India or abroad.",
    Icon: GlobeIcon,
  },
  {
    title: "3. Applicability",
    summary: "This Policy applies to all employees of MND Technologies Private Limited.",
    detail: "The definition of \"employee\" for the purposes of this Policy is set out below, and includes permanent, temporary, contracted, part-time, and retainer employees engaged directly or indirectly through a vendor organisation.",
    Icon: UsersIcon,
  },
  {
    title: "4. Definition",
    summary: "This section defines key terms used in this Policy, including Employee, Sexual Harassment, Aggrieved Person, and Respondent.",
    detail: "Employee of MND Technologies Private Limited includes any person carrying out work on behalf of MND, whether hired as permanent, temporary, contracted, or on a retainership, revenue-sharing, or part-time basis, either directly or indirectly through a vendor organisation. Sexual Harassment means harassment of a female/male employee consisting of any unwelcome sexually determined behaviour, whether direct or indirect, by any person in charge of management or a co-employee, individually or in association with others, to exploit the sexuality of a co-employee in a manner that prevents or impairs their full utilisation of benefits, facilities, or opportunities, or any other generally derogatory behaviour. An Aggrieved Person is, in relation to the workplace, a person of any age, whether employed or not, who alleges to have been subjected to an act of sexual harassment by the Respondent. The Respondent is the employee against whom the complaint has been filed.",
    Icon: FileTextIcon,
  },
  {
    title: "5. Policy Guidelines",
    summary: "Sexual harassment includes, but is not limited to, physical contact and sexual advances, demands or requests for sexual favours, sexually coloured remarks, and showing pornography.",
    detail: "It also includes any other unwelcome physical, verbal, non-verbal, or written conduct of a sexual nature.",
    Icon: WarningIcon,
  },
  {
    title: "6. Grievance Mechanism: Procedure to Register Complaints",
    summary: "A complaint can be submitted by email to ops@mynextdeveloper.com, or discussed with any member of the Internal Committee, within 3 months of the occurrence of the act of sexual harassment.",
    detail: "If the Respondent is the complainant's direct supervisor or otherwise influences their career growth, the reporting structure will be changed for the duration of the enquiry.",
    Icon: ChatCircleIcon,
  },
  {
    title: "7. Internal Committee",
    summary: "Every complaint is dealt with by an Internal Committee comprising a Presiding Officer, three Internal Members, and one External Member from an NGO or legal background, with utmost confidentiality and urgency.",
    detail: "Within 3 working days, the Committee commences an Official Internal Enquiry — informing the Respondent of the complaint, instructing them to stop the alleged conduct immediately, directing them not to contact the complainant, and seeking an immediate explanation. Within 5 working days of the original complaint, the complainant is informed in writing of the initial steps taken. Within 15 days, the Committee records and communicates its prima facie findings to both parties, after a fair opportunity to be heard and after fact-finding, verification, and counselling sessions. The complaint is closed no later than one month from receipt, with the decision communicated to both parties. Employees are duty-bound to assist in the investigation, and whistleblowers are protected from exposure, retaliation, or hostility. Either party may appeal a decision, in writing and with reasons, to the Managing Director within 2 working days of receiving the findings; the appeal is disposed of within 5 working days, and the Managing Director's decision is final.",
    Icon: ShieldCheckIcon,
  },
  {
    title: "8. Redressal",
    summary: "An amicable resolution is possible only with the complainant's written consent, and any decision establishing an offence leads to disciplinary action proportionate to its nature and impact.",
    detail: "Within 24 hours of closing a case, the Internal Committee presents its decision to the Managing Director, and within 3 working days recommends disciplinary action considering the injury caused, any prior or repeat offences, and the impact on the company. The offender's position or seniority is no bar to disciplinary action, which may include a warning, a written apology, a bond of good behaviour, transfer, debarring from supervisory duties, denial of increments or promotion, cancellation of a work assignment, suspension, or dismissal. An annual report summarising complaints and their redressal is prepared by the designated person, and all related documents are kept strictly confidential in their custody.",
    Icon: GavelIcon,
  },
  {
    title: "9. Monitoring and Review",
    summary: "This Policy and Procedure will be reviewed whenever required from the date of implementation, with reviews initiated by the HR Department.",
    detail: "Where changes in employment legislation directly affect this Policy, they will be reflected with immediate effect and communicated through HR.",
    Icon: ArrowsClockwiseIcon,
  },
];

export default function PoshCompliance() {
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
        <title>POSH Compliance – MyNextDeveloper</title>
        <meta name="description" content="MyNextDeveloper POSH (Prevention of Sexual Harassment) Compliance Policy" />
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
          <h1 className="font-playfair text-3xl md:text-5xl font-normal tracking-tight text-mnd-charcoal mb-3">POSH Compliance</h1>
          {/* Intro text */}
          <div className="mt-6 space-y-3 text-sm text-mnd-charcoal leading-relaxed">
            <p>MND Technologies Private Limited is committed to providing a workplace free from sexual harassment, in line with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.</p>
            <p>This Policy explains what constitutes sexual harassment, the composition of our Internal Complaints Committee, and the procedure for reporting and resolving complaints.</p>
            <p>If you have additional questions or require more information about this Policy, do not hesitate to contact us.</p>
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
                <p className="text-mnd-charcoal text-xs font-bold pb-2">Need to reach our Internal Complaints Committee?</p>
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
