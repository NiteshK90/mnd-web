"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import caseStudiesData from "@/constants/all-case-studies.json";

// ─── Stats ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: "250+", label: "Projects Delivered", icon: "/svgs/icon-people.svg" },
  { value: "25+",  label: "Industries Served",  icon: "/svgs/icon-globe.svg"  },
  { value: "98%",  label: "Client Satisfaction", icon: "/svgs/icon-shield.svg" },
  { value: "5+",   label: "Years of Impact",     icon: "/svgs/icon-clock.svg"  },
];

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

const FILTER_TABS = [
  "All Stories",
  ...Array.from(
    new Set(
      caseStudiesData.caseStudies.map(
        (cs) => cs.caseStudyHeader.companyInfo.find((c) => c.label === "Industry")?.value ?? ""
      )
    )
  ).filter(Boolean),
];

// ─── Case Study Cards ─────────────────────────────────────────────────────────

// ─── Pagination config ────────────────────────────────────────────────────────

const PER_PAGE = 6;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function getIndustry(companyInfo: { label: string; value: string }[]) {
  return companyInfo.find((c) => c.label === "Industry")?.value ?? "";
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SuccessStories() {
  const allCases = caseStudiesData.caseStudies;

  const [selectedTab, setSelectedTab] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCases = allCases.filter((cs) => {
    const matchesTab = selectedTab === "All Stories" || getIndustry(cs.caseStudyHeader.companyInfo) === selectedTab;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q
      || cs.caseStudyHeader.title.toLowerCase().includes(q)
      || cs.aboutClient.description.toLowerCase().includes(q)
      || getIndustry(cs.caseStudyHeader.companyInfo).toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filteredCases.length / PER_PAGE);
  const paginated = filteredCases.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <>
      <Head>
        <title>Success Stories – MyNextDeveloper</title>
        <meta name="description" content="Explore how we help businesses overcome critical challenges with the right people, processes, and precision." />
      </Head>

      <div className="bg-mnd-parchment text-mnd-charcoal min-h-screen overflow-hidden">

        {/* Navbar */}
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal showBorder />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10 mb-8 sm:mb-12">

            {/* Title */}
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 rounded-full bg-mnd-oat flex items-center justify-center">
                  <img src="/svgs/icon-star.svg" alt="" width={16} height={16} />
                </div>
                <span className="text-xs font-semibold tracking-widest text-mnd-charcoal uppercase">Success Stories</span>
              </div>
              <h1 className="font-playfair text-4xl sm:text-5xl leading-[1.1] mb-4 sm:mb-6">Real Problems.<br />Solved.</h1>
              <div className="w-10 h-[2px] bg-mnd-dark mb-4 sm:mb-6" />
              <p className="text-mnd-charcoal text-sm sm:text-base leading-relaxed">
                Explore how we help businesses overcome critical challenges with the right people, processes, and precision.
              </p>
            </div>

            {/* Stats + Trusted By */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-mnd-cream px-3 sm:px-6 py-4 sm:py-6 flex flex-col items-center text-center">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-mnd-oat flex items-center justify-center mb-3 sm:mb-4">
                      <img src={stat.icon} alt="" width={20} height={20} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-semibold mb-1">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-mnd-charcoal">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trusted By */}
              <div>
                <p className="text-xs font-semibold tracking-widest text-mnd-charcoal uppercase mb-3 sm:mb-4">Trusted by startups to enterprises worldwide</p>
                <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 opacity-60">
                  <span className="flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight">
                    <img src="/svgs/clari.svg" alt="" width={20} height={20} />
                    Clari
                  </span>
                  <span className="flex items-center gap-1.5 text-lg sm:text-xl font-semibold tracking-tight lowercase">
                    <img src="/svgs/pendo.svg" alt="" width={16} height={16} />
                    pendo
                  </span>
                  <span className="flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight lowercase">
                    <img src="/svgs/happay.svg" alt="" width={20} height={20} />
                    happay
                  </span>
                  <span className="text-lg sm:text-xl font-semibold italic tracking-tight lowercase">whatfix</span>
                  <span className="flex items-center gap-2 text-lg sm:text-xl font-semibold tracking-tight">
                    <img src="/svgs/healthplix.svg" alt="" width={20} height={20} />
                    HealthPlix
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-mnd-cream mb-6 sm:mb-8" />

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">

            {/* Filter tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide min-w-0">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setSelectedTab(tab === selectedTab && tab !== "All Stories" ? "All Stories" : tab); setCurrentPage(1); }}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    tab === selectedTab ? "bg-mnd-oat font-semibold text-mnd-charcoal" : "text-mnd-charcoal hover:bg-mnd-oat"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 shrink-0">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-4 pr-10 py-2.5 rounded-full border border-mnd-cream bg-white text-sm placeholder:text-mnd-charcoal focus:outline-none"
              />
              {searchQuery ? (
                <button
                  onClick={() => { setSearchQuery(""); setCurrentPage(1); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity"
                >
                  <img src="/svgs/icon-close.svg" alt="Clear" width={16} height={16} />
                </button>
              ) : (
                <img src="/svgs/icon-search.svg" alt="" width={16} height={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              )}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginated.map((cs) => (
              <article key={cs.id} className="group cursor-pointer bg-transparent border border-mnd-cream rounded-2xl overflow-hidden hover:shadow-card transition-shadow duration-200 flex flex-col">

                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-mnd-dark" />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">

                  {/* Tag */}
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-mnd-oat text-[10px] font-semibold uppercase tracking-wide text-mnd-charcoal mb-3">
                    {getIndustry(cs.caseStudyHeader.companyInfo)}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-semibold leading-snug mb-2">{cs.caseStudyHeader.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-mnd-charcoal leading-relaxed flex-1">{cs.aboutClient.description}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-mnd-charcoal mt-4">
                    <span>{formatDate(cs.pageMetadata.publishedDate)} &nbsp;•&nbsp; {cs.pageMetadata.readingTime}</span>
                    <img src="/svgs/icon-arrow-right.svg" alt="" width={16} height={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">

            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-mnd-cream hover:bg-mnd-oat transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <img src="/svgs/icon-arrow-left.svg" alt="Previous" width={16} height={16} />
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  n === currentPage ? "bg-mnd-oat font-semibold text-mnd-charcoal border border-mnd-sand" : "text-mnd-charcoal hover:bg-mnd-oat"
                }`}
              >
                {n}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-mnd-cream hover:bg-mnd-oat transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <img src="/svgs/icon-arrow-right.svg" alt="Next" width={16} height={16} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
