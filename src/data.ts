import { ServiceItem, TeamMember, IndustrySector, RegulatoryLink, ComplianceCalendarItem } from "./types";

export const FIRM_INFO = {
  name: "Azhar Shaikh & Associates",
  shortName: "ASA",
  tagline: "Practicing Company Secretary & Trademark Agent",
  subTagline: "Excellence in Corporate Governance, Secretarial Audit & Intellectual Property Advisory",
  establishedYear: "2009",
  experienceYears: "15+",
  registrationNumber: "ICSI PCS Reg: 14820 | COP No. 8924 | TM Agent No: 28419",
  peerReviewStatus: "ICSI Peer Reviewed Practice Unit",
  
  contact: {
    addressLine1: "10th Floor, Office No. 501/502, 391/392, Antarikash Tower",
    addressLine2: "New Mangalwar Peth",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411011",
    country: "India",
    
    phone1: "+91 98902 56076",
    phone2: "+91 98902 56076",
    mobile: "+91 98902 56076",
    emailPrimary: "info@csazharshaikh.com",
    emailAdvisory: "info@csazharshaikh.com",
    website: "www.csazharshaikh.com",
    workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
    emergencySupport: "24/7 Corporate Emergency Filing Desk Available"
  },

  metrics: [
    { value: "15+", label: "Years of Experience", suffix: "Years" },
    { value: "750+", label: "Corporate Clients", suffix: "Retainers" },
    { value: "1,500+", label: "Secretarial & TM Filings", suffix: "Completed" },
    { value: "100%", label: "Statutory Compliance", suffix: "Adherence" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "business-setup-and-closure-services",
    title: "Business Setup & Closure Services",
    shortDesc: "End-to-end incorporation of Private/Public companies, Section 8, OPC, foreign subsidiaries, and structured fast-track entity exit.",
    category: "Corporate Law",
    iconName: "Building2",
    statutoryFramework: "Companies Act, 2013 | SPICe+ (INC-32) | Section 248 Strike-Off",
    subServices: [
      "Private Limited Company Incorporation",
      "Public Limited Company Incorporation",
      "Section 8 (Non-Profit / NGO) Company",
      "One Person Company (OPC) Registration",
      "Foreign Subsidiaries & WOS Setup",
      "Fast Track Exit (FTE) & Company Strike-Off",
      "MoA, AoA & Promoters' Charters"
    ],
    keyOfferings: [
      "Incorporation of Private Limited and Public Limited Companies",
      "Incorporation of Section 8 (Non-Profit / Charitable) Organizations",
      "One Person Company (OPC) Registration and Conversion",
      "Setting up Wholly-Owned Subsidiaries (WOS) for Foreign Entities in India",
      "Conversion of existing Business Entities (Proprietorship / Partnership) into Company / LLP",
      "Fast Track Exit (FTE) and Voluntary Winding-Up under Section 248 of the Companies Act",
      "Drafting MoA, AoA, Promoters' Agreements, and Shareholder Charters"
    ],
    fullDesc: "Azhar Shaikh & Associates advises domestic entrepreneurs, multinational conglomerates, and non-resident investors on choosing the optimal corporate vehicle in India. From name reservation, drafting customized Articles of Association (AoA) to post-incorporation statutory commencement (INC-20A), our firm delivers seamless turnaround. For non-operating entities, we handle official strike-off and liquidation minimizing promoter liability."
  },
  {
    id: "limited-liability-partnership",
    title: "Limited Liability Partnership",
    shortDesc: "Structuring, incorporation, drafting tailored LLP agreements, statutory filings, and partner admittance/cessation.",
    category: "Secretarial",
    iconName: "Layers",
    statutoryFramework: "Limited Liability Partnership Act, 2008 | LLP Rules, 2009",
    subServices: [
      "LLP Incorporation (RUN-LLP & FiLLiP)",
      "Customized LLP Agreement Drafting",
      "Partner Additions & Resignations (Form 3 & 4)",
      "Annual Solvency & Returns (Form 8 & 11)",
      "Conversion of Business into LLP",
      "LLP Strike-Off & Winding Up (Form 24)"
    ],
    keyOfferings: [
      "Name reservation via RUN-LLP and Incorporation via FiLLiP",
      "Drafting tailored LLP Agreements capturing profit sharing, capital contribution, and dispute mechanisms",
      "Filing Form 3 and Form 4 for changes in Designated Partners, Partners, and Capital Structure",
      "Annual Compliances: Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency)",
      "Conversion of Traditional Partnership Firms / Private Companies into LLP",
      "Compounding of Offences and Strike-Off under Form 24"
    ],
    fullDesc: "LLP combines the flexibility of a traditional partnership with the benefit of limited liability for partners. Our practice assists partners in designing dispute-proof agreements, ensuring seamless annual solvency filings with the Ministry of Corporate Affairs, and executing corporate restructuring into or out of the LLP structure."
  },
  {
    id: "corporate-advisory-and-compliances",
    title: "Corporate Advisory & Compliances",
    shortDesc: "Retainer-based corporate secretarial services, statutory registers, board/shareholder meetings, and MCA V3 filings.",
    category: "Compliance & Audit",
    iconName: "Compass",
    statutoryFramework: "Companies Act, 2013 | Secretarial Standards SS-1 & SS-2 | MCA V3 Portal",
    subServices: [
      "Alteration of MoA & AoA (Name/Capital/Objects)",
      "Registered Office Shifting (RD & NCLT)",
      "Board, Committee & General Meetings (AGM/EGM)",
      "Statutory Registers & Secretarial Records",
      "Annual ROC Filings (AOC-4 & MGT-7/7A)",
      "Share Allotments & Capital Alterations (PAS-3, SH-7)",
      "Charge Creation, Modification & Satisfaction"
    ],
    keyOfferings: [
      "Alteration of Memorandum & Articles of Association (Name, Registered Office, Capital, Objects)",
      "Shifting of Registered Office from one State to another (RD & NCLT approval)",
      "Convening and Documenting Board Meetings, Committee Meetings, and AGMs / EGMs",
      "Maintenance of Statutory Registers (Members, Debentures, Directors, Charges, Investments)",
      "Filing Annual Return (MGT-7/7A) and Financial Statements (AOC-4/AOC-4 XBRL)",
      "Allotment of Shares on Right / Private Placement Basis (PAS-3) and Capital Increases (SH-7)",
      "Creation, Modification, and Satisfaction of Charges (CHG-1, CHG-4, CHG-9)"
    ],
    fullDesc: "With enhanced regulatory scrutiny and stringent penalties under the Companies Act 2013, our ongoing corporate advisory ensures complete peace of mind for boards of directors. We handle corporate secretarial administration with precision, ensuring timely disclosures and zero non-compliance exposure."
  },
  {
    id: "corporate-and-financial-restructuring",
    title: "Corporate & Financial Restructuring",
    shortDesc: "Strategic advisory on Mergers, Demergers, Amalgamations, Slump Sales, Capital Reductions, and Corporate Realignments.",
    category: "Restructuring",
    iconName: "TrendingUp",
    statutoryFramework: "Sections 230-240, Companies Act, 2013 | NCLT (CAA) Rules, 2016",
    subServices: [
      "Schemes of Arrangement & Mergers (NCLT)",
      "Fast Track Mergers (Section 233)",
      "Reduction of Share Capital (Section 66)",
      "Slump Sale & Business Transfer Agreements (BTA)",
      "Joint Ventures & Shareholder Charters (SHA / SPA)",
      "ESOP Scheme Structuring & Securities Buy-Back"
    ],
    keyOfferings: [
      "Schemes of Arrangement, Mergers, and Demergers under NCLT Jurisdiction",
      "Fast Track Mergers between Small Companies / Holding & Wholly Owned Subsidiary (Section 233)",
      "Reduction of Share Capital (Section 66) before NCLT",
      "Business Transfer Agreements (BTA), Slump Sale, and Asset Purchase Advisory",
      "Joint Venture (JV) Structuring, Shareholders' Agreements (SHA), and Share Purchase Agreements (SPA)",
      "Advisory on Corporate Buy-Back of Securities and ESOP Scheme Structuring"
    ],
    fullDesc: "Restructuring is essential to unlock enterprise value, optimize operational synergies, or reposition for market expansion. Azhar Shaikh & Associates coordinates the entire restructuring roadmap: drafting schemes of arrangement, valuation handoffs, obtaining regulatory clearances from RoC, RD, OL, and securing sanction orders from the National Company Law Tribunal."
  },
  {
    id: "due-diligence",
    title: "Due Diligence",
    shortDesc: "In-depth corporate health checks for M&A, private equity investments, bank loan sanctioning, and pre-IPO verification.",
    category: "Compliance & Audit",
    iconName: "Search",
    statutoryFramework: "Companies Act, 2013 | SEBI Regulations | Banking Guidelines",
    subServices: [
      "Pre-Acquisition & PE Legal Due Diligence",
      "Bank Credit & Loan Facility Due Diligence",
      "RoC Search Reports & Title Verification",
      "Pre-IPO Secretarial Health-Checks",
      "Statutory Non-Compliance & Red-Flag Audit",
      "Risk Remediation Action Plans"
    ],
    keyOfferings: [
      "Pre-Acquisition Secretarial & Legal Due Diligence for Investors & Private Equity",
      "Secretarial Due Diligence required by Commercial Banks & Financial Institutions for Credit Facilities",
      "Search Reports and Status Reports from ROC records across India",
      "Pre-IPO Due Diligence and Capital History Verification",
      "Identification of Statutory Non-compliances, Undisclosed Charges, and Potential Penalties",
      "Comprehensive Red-Flag Due Diligence Reports with Remediation Action Plans"
    ],
    fullDesc: "Before deploying capital or sanctioning substantial credit lines, institutional lenders and private investors demand uncompromising transparency. Our rigorous due diligence unearths statutory liabilities, verifies title to shares, examines charge registrations, and provides actionable remediation roadmaps to de-risk transactions."
  },
  {
    id: "fema-and-rbi",
    title: "FEMA & RBI",
    shortDesc: "Cross-border transaction reporting, Inbound FDI, Outbound Overseas Direct Investment (ODI), ECB, and FIRMS portal filings.",
    category: "Cross-Border",
    iconName: "Globe2",
    statutoryFramework: "Foreign Exchange Management Act, 1999 (FEMA) | RBI Master Directions | FIRMS Portal",
    subServices: [
      "Inbound FDI Advisory (Automatic & Approval Routes)",
      "RBI FIRMS Portal & FC-GPR Reporting",
      "Transfer of Shares (Form FC-TRS)",
      "Annual Foreign Liabilities & Assets (FLA Return)",
      "Overseas Direct Investment (ODI Structuring)",
      "External Commercial Borrowings (ECB / LRN)",
      "Branch, Liaison & Project Office Setup"
    ],
    keyOfferings: [
      "Inbound Foreign Direct Investment (FDI) Advisory and Compliance under Automatic & Approval Routes",
      "Filing Single Master Form (SMF) via RBI FIRMS Portal including Form FC-GPR (Foreign Currency - Gross Provisional Return)",
      "Transfer of Shares between Residents & Non-Residents (Form FC-TRS)",
      "Annual Return on Foreign Liabilities and Assets (FLA Return)",
      "Overseas Direct Investment (ODI) Structuring for Indian Entities investing abroad",
      "External Commercial Borrowings (ECB) Advisory and Loan Registration Number (LRN) filings",
      "Setting up & Compounding of Branch Office (BO), Liaison Office (LO) and Project Office (PO)"
    ],
    fullDesc: "Navigating India's cross-border foreign exchange framework requires acute technical mastery. We advise international investors, NRI stakeholders, and Indian corporates expanding overseas on seamless RBI compliance, ensuring full conformity with pricing guidelines, sectoral caps, and compulsory FIRMS reporting."
  },
  {
    id: "audit-and-certification",
    title: "Audit & Certification",
    shortDesc: "Mandatory Section 204 Secretarial Audits (Form MR-3), Annual Return Certifications (MGT-8), and Governance compliance.",
    category: "Compliance & Audit",
    iconName: "Award",
    statutoryFramework: "Section 204, Companies Act, 2013 | Regulation 24A, SEBI (LODR) Regulations, 2015",
    subServices: [
      "Mandatory Secretarial Audit (Section 204 / MR-3)",
      "Annual Secretarial Compliance Report (SEBI)",
      "Annual Return Certification (Form MGT-8)",
      "Corporate Governance Compliance Audits",
      "Depository Participant & RTA Internal Audit",
      "Share Capital Reconciliation Audit (Reg 76)"
    ],
    keyOfferings: [
      "Mandatory Secretarial Audit under Section 204 of the Companies Act (Form MR-3)",
      "Annual Secretarial Compliance Report for Listed Entities under SEBI Circulars",
      "Certification of Annual Returns in Form MGT-8 for Listed and prescribed Public/Private Companies",
      "Corporate Governance Compliance Certifications",
      "Internal Audit of Depository Participants and Registrar & Transfer Agents (RTA)",
      "Reconciliation of Share Capital Audit Reports under Regulation 76 of SEBI (DP) Regulations"
    ],
    fullDesc: "Secretarial Audit serves as an independent assurance mechanism evaluating statutory compliance across company law, securities laws, labor statutes, and environmental rules. Our rigorous audit methodologies protect board directors against regulatory culpability and reinforce institutional investor trust."
  },
  {
    id: "sebi-and-listing-compliances",
    title: "SEBI & Listing Compliances",
    shortDesc: "Advisory on SEBI (LODR), IPO secretarial readiness, Insider Trading (PIT) code, Takeover (SAST) disclosures, and delisting.",
    category: "Corporate Law",
    iconName: "BarChart3",
    statutoryFramework: "SEBI (LODR) Regulations, 2015 | SEBI (PIT) Regulations, 2015 | SEBI (SAST) Regulations, 2011",
    subServices: [
      "SEBI (LODR) Quarterly & Annual Compliances",
      "IPO, Rights Issue & Preferential Issue Readiness",
      "Insider Trading Code (PIT) & SDD Compliance",
      "Substantial Acquisition & Takeover Disclosures (SAST)",
      "Stock Exchange Liaison & In-Principle Approvals",
      "Delisting, Relisting & Securities Buy-Back"
    ],
    keyOfferings: [
      "Quarterly, Half-Yearly, and Annual Compliances under SEBI Listing Regulations (LODR)",
      "Secretarial support for Initial Public Offerings (IPO), Rights Issues, and Preferential Issues",
      "Structuring & Enforcing Code of Conduct under SEBI (Prohibition of Insider Trading) Regulations",
      "Filing Disclosures under SEBI (Substantial Acquisition of Shares and Takeovers) Regulations (SAST)",
      "Delisting, Voluntary Buy-Back of Equity Shares, and Relisting of Securities",
      "Liaison with Stock Exchanges (BSE & NSE) for In-Principle and Listing Approvals"
    ],
    fullDesc: "Listed companies operate in an intensely scrutinized regulatory environment. Azhar Shaikh & Associates delivers strategic counsel on listing agreement covenants, managing board committees (Audit, NRC, SRC, CSR), structured digital database (SDD) compliance, and disclosure obligations under SEBI mandate."
  },
  {
    id: "representation-and-other-services",
    title: "Representation & Other Services",
    shortDesc: "Advocacy, petitions, and appearances before NCLT, Ministry of Corporate Affairs, Regional Directors, RoC, and SEBI.",
    category: "Corporate Law",
    iconName: "Scale",
    statutoryFramework: "National Company Law Tribunal (NCLT) Rules, 2016 | Section 441 Compounding | Trade Marks Act, 1999",
    subServices: [
      "Petitions & Advocacy before NCLT Benches",
      "Compounding of Offences (Section 441)",
      "Condonation of Delay Applications (Section 460)",
      "Revival of Struck-off Companies (Section 252)",
      "RoC Adjudication of Penalties (Section 454)",
      "Trademark Search, Filings & Opposition Hearings",
      "Formal Written Legal Opinions on Corporate Law"
    ],
    keyOfferings: [
      "Drafting Petitions & Appearing before National Company Law Tribunal (NCLT)",
      "Compounding of Offences under Section 441 of the Companies Act before NCLT / Regional Director",
      "Applications for Condonation of Delay under Section 460 of the Companies Act",
      "Revival / Restoration of Struck-off Companies under Section 252 before NCLT",
      "Representations before Registrar of Companies (RoC) for Adjudication of Penalties (Section 454)",
      "Appearance before Official Liquidator (OL) in Winding-up Proceedings",
      "Trademark Search, Filing (TM-A), Objections & Show-Cause Hearings before TM Registry",
      "Providing Written Legal Opinions on intricate nuances of Company Law and Securities Jurisprudence"
    ],
    fullDesc: "When contentious regulatory issues or inadvertent non-compliances arise, competent representation is paramount. We advocate on behalf of companies, promoter groups, and management before NCLT benches, Regional Directorates, and Registrar of Companies, securing compounded settlements and restoration orders."
  },
  {
    id: "trademark-and-ip-rights",
    title: "Trademark & Intellectual Property Rights",
    shortDesc: "Comprehensive trademark search, registration, office action responses, show-cause hearings, and IP portfolio governance.",
    category: "Intellectual Property",
    iconName: "ShieldAlert",
    statutoryFramework: "Trade Marks Act, 1999 | Trade Marks Rules, 2017 | Controller General of Patents, Designs and Trade Marks",
    subServices: [
      "Trademark Search & Class Classification (NICE 1-45)",
      "E-filing of Trademark Applications (Form TM-A)",
      "Drafting Legal Replies to Examination Reports",
      "Show-Cause Hearings before TM Registry",
      "Trademark Opposition & Counter-Statements (TM-O)",
      "Assignment, Licensing & Transmission (TM-P)",
      "Copyright Registration for Software & Works"
    ],
    keyOfferings: [
      "Comprehensive Trademark Search and Class Classification (NICE Classification Classes 1 to 45)",
      "E-filing of Trademark Applications (Form TM-A) for Words, Logos, and Device Marks",
      "Drafting Legal Replies to Examination Reports & Objections (Section 9 & Section 11)",
      "Appearance before Registrar of Trade Marks for Show-Cause Hearings",
      "Trademark Opposition Proceedings (Filing Notices of Opposition & Counter Statements - Form TM-O)",
      "Assignment, Licensing & Transmission of Trademarks (Form TM-P)",
      "Trademark Renewal & Restoration Monitoring across corporate portfolios",
      "Copyright Registration for Literary, Artistic and Software Works"
    ],
    fullDesc: "As registered Trademark Agents, Azhar Shaikh & Associates safeguards your brand equity. We manage the entire lifecycle of trade mark protection—from pre-filing distinctiveness audits to contested opposition litigation before the Trade Marks Registry. We ensure robust protection for corporate identities, product brand names, and artistic assets."
  }
];

export const NAV_SERVICES = SERVICES.slice(0, 9);

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: "azhar-shaikh",
    name: "CS Azhar Shaikh",
    role: "Founder & Managing Partner",
    designation: "Practicing Company Secretary & Registered Trademark Agent",
    qualification: "FCS, B.Com, LL.B, Registered Trademark Agent",
    experience: "15+ Years of Professional Standing",
    photoUrl: "/team/azhar_shaikh.jpg",
    bio: "CS Azhar Shaikh is the visionary founder of Azhar Shaikh & Associates. A Fellow Member of the Institute of Company Secretaries of India (ICSI) and a Law Graduate, he possesses over two decades of multifaceted expertise across Corporate Governance, Securities Law, Cross-Border FEMA structuring, and Intellectual Property jurisprudence. As an authorized Trademark Agent, he has represented hundreds of marquee brand owners and corporate boards before the Trade Marks Registry, NCLT, and MCA authorities. He has authored several technical treatises on secretarial compliance and frequently lectures at industry forums.",
    specializations: [
      "Corporate Restructuring & M&A",
      "NCLT Advocacy & Compounding",
      "Trademark Portfolio Strategy & Litigation",
      "Secretarial Audit of Listed Entities",
      "Cross-Border FEMA Inbound & Outbound Investment"
    ]
  },
  {
    id: "senior-associate-corporate",
    name: "CS Farhan Memon",
    role: "Senior Partner - Corporate Advisory",
    designation: "Partner, Corporate Law & Securities Practice",
    qualification: "ACS, M.Com, PGDBM (Corporate Governance)",
    experience: "14+ Years in Secretarial Practice",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Heading the Corporate Advisory and SEBI compliance wing, CS Farhan Memon specializes in Listing Regulation management, Shareholder dispute documentation, and complex capital restructuring. He has steered multiple pre-IPO secretarial reviews and cross-border joint ventures.",
    specializations: [
      "SEBI (LODR) Regulatory Compliance",
      "Due Diligence for Private Equity",
      "Fast Track Mergers (Section 233)",
      "ESOP Schemes & Capital Alterations"
    ]
  },
  {
    id: "associate-trademark-ipr",
    name: "Adv. Sneha Kulkarni",
    role: "Head of Intellectual Property & Legal",
    designation: "Advocate & Registered Trademark Attorney",
    qualification: "B.A. LL.B (Hons.), Post Graduate Diploma in IPR Law",
    experience: "11+ Years in IP & Commercial Law",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Adv. Sneha Kulkarni manages the firm's Intellectual Property practice. She spearheads brand protection, handling contentious trademark opposition hearings, copyright registrations, and IP licensing contracts for emerging startups and established conglomerates alike.",
    specializations: [
      "Trademark Search & Distinctiveness Analysis",
      "Notice of Opposition & Counter-Statements",
      "IP Assignment Agreements & Franchising",
      "Commercial Contract Drafting"
    ]
  },
  {
    id: "associate-fema-audit",
    name: "CS Rituja Patil",
    role: "Senior Associate - FEMA & Secretarial Audit",
    designation: "Associate Member of ICSI",
    qualification: "ACS, B.Com, Diploma in Cyber Law",
    experience: "8+ Years in Secretarial Practice",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "CS Rituja Patil oversees Secretarial Audit mandates under Section 204 of the Companies Act 2013 and RBI cross-border compliances on the FIRMS portal. Her sharp eye for statutory compliance ensures zero non-conformity risks for client firms.",
    specializations: [
      "Secretarial Audit (MR-3) & MGT-8",
      "RBI FIRMS & FC-GPR Reporting",
      "Statutory Register Maintenance",
      "LLP Annual Compliances"
    ]
  }
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "manufacturing-engineering",
    title: "Manufacturing & Heavy Engineering",
    iconName: "Factory",
    description: "Assisting major industrial manufacturing plants, capital goods producers, and auto-ancillary companies with strict factory statutory compliance, environmental board covenants, and corporate financing charges.",
    examples: ["Precision Components", "Textile Conglomerates", "Industrial Machinery", "Chemical Processing"]
  },
  {
    id: "banking-nbfc",
    title: "Banking & NBFCs",
    iconName: "Landmark",
    description: "Providing secretarial due diligence, charge search reports, board governance covenants, and regulatory compliance for non-banking financial companies registered with the Reserve Bank of India.",
    examples: ["Systemically Important NBFCs", "Microfinance Institutions", "Fintech Lending Platforms"]
  },
  {
    id: "it-tech-startups",
    title: "Information Technology & Startups",
    iconName: "Laptop",
    description: "Advising high-growth tech ventures on ESOP scheme design, seed/Series A-C investment documentation, SHA drafting, foreign subsidiary incorporation, and brand trademark portfolios.",
    examples: ["SaaS Enterprises", "AI & Cloud Platforms", "E-Commerce Networks", "Digital Payments"]
  },
  {
    id: "pharmaceuticals-healthcare",
    title: "Pharmaceuticals & Healthcare",
    iconName: "Activity",
    description: "Secretarial audits, trademark brand registrations for drug formulations, joint ventures, and clinical research cross-border compliances under stringent regulatory scrutiny.",
    examples: ["API Formulation Units", "Diagnostic Laboratory Chains", "Medical Device Manufacturers"]
  },
  {
    id: "real-estate-infrastructure",
    title: "Real Estate & Infrastructure",
    iconName: "Building",
    description: "Joint development agreements, SPV structuring for residential/commercial projects, RERA alignment, private placement of non-convertible debentures (NCDs), and charge registrations.",
    examples: ["Urban Township Developers", "Infrastructure EPC Contractors", "Commercial Asset SPVs"]
  },
  {
    id: "listed-entities",
    title: "Public Listed Corporations",
    iconName: "TrendingUp",
    description: "Delivering continuous SEBI LODR compliance, annual secretarial compliance reports, structured digital database monitoring, and handling AGM/EGM e-voting oversight.",
    examples: ["BSE/NSE Mainboard Entities", "SME Exchange Listed Companies", "Public Limited Giants"]
  }
];

export const REGULATORY_LINKS: RegulatoryLink[] = [
  {
    id: "mca",
    name: "Ministry of Corporate Affairs (MCA)",
    category: "Corporate Affairs",
    url: "https://www.mca.gov.in/",
    description: "Official portal for company and LLP filings, Master Data, Director KYC, and corporate forms under the Companies Act."
  },
  {
    id: "ipindia",
    name: "Trade Marks Registry (IP India)",
    category: "Intellectual Property",
    url: "https://ipindiaonline.gov.in/",
    description: "Controller General of Patents, Designs and Trade Marks online portal for trademark applications, public search, and status tracking."
  },
  {
    id: "icsi",
    name: "Institute of Company Secretaries of India (ICSI)",
    category: "Professional Body",
    url: "https://www.icsi.edu/",
    description: "Statutory professional body governing Practicing Company Secretaries and issuing Secretarial Standards (SS-1 & SS-2)."
  },
  {
    id: "sebi",
    name: "Securities and Exchange Board of India (SEBI)",
    category: "Capital Markets",
    url: "https://www.sebi.gov.in/",
    description: "Regulator for securities market in India, overseeing listing regulations, insider trading norms, and takeovers."
  },
  {
    id: "nclt",
    name: "National Company Law Tribunal (NCLT)",
    category: "Tribunal & Adjudication",
    url: "https://nclt.gov.in/",
    description: "Quasi-judicial authority adjudicating corporate disputes, mergers, capital reduction, compounding, and IBC proceedings."
  },
  {
    id: "rbi",
    name: "Reserve Bank of India (RBI)",
    category: "Central Bank & FEMA",
    url: "https://www.rbi.org.in/",
    description: "Central bank governing cross-border capital, Foreign Exchange Management Act (FEMA), and NBFC regulations."
  },
  {
    id: "bse",
    name: "Bombay Stock Exchange (BSE India)",
    category: "Stock Exchange",
    url: "https://www.bseindia.com/",
    description: "Premier stock exchange providing listing circulars, corporate announcements, and compliance disclosures."
  },
  {
    id: "nse",
    name: "National Stock Exchange of India (NSE)",
    category: "Stock Exchange",
    url: "https://www.nseindia.com/",
    description: "Leading stock exchange platform for equities, debt, derivatives, and listing compliance reporting."
  }
];

export const COMPLIANCE_CALENDAR: ComplianceCalendarItem[] = [
  {
    id: "1",
    formName: "Form DPT-3",
    purpose: "Return of Deposits / Information not considered as deposit",
    applicableLaw: "Companies Act, 2013",
    duePeriod: "Annual (By 30th June)",
    category: "MCA"
  },
  {
    id: "2",
    formName: "FLA Return",
    purpose: "Annual Return on Foreign Liabilities and Assets",
    applicableLaw: "FEMA, 1999 (RBI)",
    duePeriod: "Annual (By 15th July)",
    category: "RBI"
  },
  {
    id: "3",
    formName: "DIR-3 KYC",
    purpose: "Annual KYC verification for all Director Identification Number (DIN) holders",
    applicableLaw: "Companies Act, 2013",
    duePeriod: "Annual (By 30th September)",
    category: "MCA"
  },
  {
    id: "4",
    formName: "Form AOC-4 / AOC-4 XBRL",
    purpose: "Filing of Financial Statements & Board's Report with RoC",
    applicableLaw: "Companies Act, 2013",
    duePeriod: "Within 30 days of AGM (Typically 30th October)",
    category: "MCA"
  },
  {
    id: "5",
    formName: "Form MGT-7 / 7A",
    purpose: "Filing of Annual Return with the Registrar of Companies",
    applicableLaw: "Companies Act, 2013",
    duePeriod: "Within 60 days of AGM (Typically 29th November)",
    category: "MCA"
  },
  {
    id: "6",
    formName: "Form MSME-1",
    purpose: "Half-yearly return of outstanding dues to Micro & Small Enterprises",
    applicableLaw: "Order under Section 405",
    duePeriod: "Half-Yearly (30th April & 31st October)",
    category: "MCA"
  },
  {
    id: "7",
    formName: "Form 8 & Form 11 (LLP)",
    purpose: "Statement of Account & Solvency and Annual Return of LLP",
    applicableLaw: "LLP Act, 2008",
    duePeriod: "Form 11: 30th May | Form 8: 30th October",
    category: "MCA"
  },
  {
    id: "8",
    formName: "Reg 24A Secretarial Audit Report",
    purpose: "Annual Secretarial Compliance Report for Listed Entities to Stock Exchanges",
    applicableLaw: "SEBI (LODR) Regulations, 2015",
    duePeriod: "Within 60 days from end of Financial Year",
    category: "SEBI"
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    quote: "CS Azhar Shaikh and his team have been our trusted corporate counsel for over a decade. Their turnaround time during our complex cross-border merger before the NCLT was exemplary. Their knowledge of secretarial standards and trademark laws is second to none.",
    author: "Rajesh V. Singhania",
    designation: "Managing Director, Apex Industrial Technologies Ltd.",
    location: "Mumbai"
  },
  {
    id: "2",
    quote: "When our group faced brand infringement across multiple digital marketplaces, Azhar Shaikh & Associates swiftly secured contested trademark hearings in our favor. Having a Practicing Company Secretary who is also an astute Trademark Agent gives us an immense strategic edge.",
    author: "Kavita S. Merchant",
    designation: "Director & General Counsel, BlueOrbit Retail Ventures",
    location: "Bengaluru"
  },
  {
    id: "3",
    quote: "Flawless secretarial audit and complete peace of mind for our Board. Their advisory on SEBI (LODR) compliances and structured digital database regulations has maintained our pristine corporate governance record without a single hitch.",
    author: "Vikramaditya Rao",
    designation: "Independent Director & Audit Committee Chairman",
    location: "New Delhi"
  }
];
