"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import caseStudiesData from "@/constants/all-case-studies.json";

// ─── Stats ───────────────────────────────────────────────────────────────────

const STATS = [
  {
    value: "250+",
    label: "Projects Delivered",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-mnd-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    value: "25+",
    label: "Industries Served",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-mnd-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.959 8.959 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-mnd-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    value: "5+",
    label: "Years of Impact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-mnd-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
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

        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">

            {/* Title */}
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-mnd-oat flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-mnd-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold tracking-widest text-mnd-charcoal uppercase">Success Stories</span>
              </div>
              <h1 className="font-playfair text-5xl leading-[1.1] mb-6">Real Problems.<br />Solved.</h1>
              <div className="w-10 h-[2px] bg-mnd-dark mb-6" />
              <p className="text-mnd-charcoal text-base leading-relaxed">
                Explore how we help businesses overcome critical challenges with the right people, processes, and precision.
              </p>
            </div>

            {/* Stats + Trusted By */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl border border-mnd-cream px-6 py-6 flex flex-col items-center text-center min-w-[130px]">
                    <div className="w-11 h-11 rounded-full bg-mnd-oat flex items-center justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-semibold mb-1">{stat.value}</div>
                    <div className="text-xs text-mnd-charcoal">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Trusted By */}
              <div>
                <p className="text-xs font-semibold tracking-widest text-mnd-charcoal uppercase mb-4">Trusted by startups to enterprises worldwide</p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-60">
                  <span className="text-lg font-semibold flex items-center gap-1.5">◁ Clari</span>
                  <span className="text-lg font-semibold flex items-center gap-1.5">➤ pendo</span>
                  <span className="text-lg font-semibold flex items-center gap-1.5">⊞ happay</span>
                  <span className="text-lg font-semibold italic">whatfix</span>
                  <span className="text-lg font-semibold flex items-center gap-1.5">◍ HealthPlix</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-mnd-cream mb-8" />

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">

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
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-mnd-charcoal hover:opacity-60 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-mnd-charcoal absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
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
              className="w-9 h-9 flex items-center justify-center rounded-full border border-mnd-cream text-mnd-charcoal hover:bg-mnd-oat transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
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
              className="w-9 h-9 flex items-center justify-center rounded-full border border-mnd-cream text-mnd-charcoal hover:bg-mnd-oat transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
