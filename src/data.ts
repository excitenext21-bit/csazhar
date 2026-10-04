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
    shortDesc: "End-to-end incorporation of Public/Private companies, Section 8, OPC, foreign subsidiaries, and structured entity closure & strike-off.",
    category: "Corporate Law",
    iconName: "Building2",
    statutoryFramework: "Companies Act, 2013 | SPICe+ (INC-32) | Section 248 Strike-Off | NCLT & RoC",
    subServices: [
      "Incorporation of Public & Private Limited Companies",
      "Section 8 (Non-Profit Organisation) Registration",
      "One Person Company (OPC) Incorporation",
      "Wholly-Owned Subsidiaries Registration",
      "Conversion of Business into Company/LLP",
      "Branch / Liaison / Project Offices Setup",
      "Amalgamation / Merger Schemes",
      "Voluntary & Compulsory Winding Up of Companies",
      "Striking of Name from MCA (Section 248)"
    ],
    keyOfferings: [
      "Incorporation of Public and Private Limited Companies including Company limited by Shares or by guarantee",
      "Incorporation of Section 8 (Non-profit organisation)",
      "Incorporation of One Person Company (OPC)",
      "Registering of wholly owned subsidiaries",
      "Conversion of existing business entities into Company/LLP",
      "Registration of Partnership Firm",
      "Registration of Branch Offices / Liaison Offices / Project Offices of Foreign Company in India",
      "Registration of Trust",
      "Establishment of entity in Free Trade Zone / SEZ",
      "Amalgamation / Merger",
      "Winding up of Companies (Voluntary and Compulsory)",
      "Acting as Voluntary Liquidator in case of voluntary winding up",
      "Striking of name of the Company from Ministry of Corporate Affairs",
      "Closure of Branch Office / Liaison Offices / Project Offices",
      "Liaison for Winding up with office of Judicial and Quasi Judicial Authorities, including NCLT, RD, RoC, and Official Liquidator"
    ],
    sections: [
      {
        heading: "BUSINESS SET UP SERVICES",
        intro: "Full-range business formation and statutory establishment in India:",
        items: [
          "Incorporation of Public and Private Limited Companies including Company limited by Shares or by guarantee",
          "Incorporation of Section 8 (Non-profit organisation)",
          "Incorporation of One Person Company (OPC)",
          "Registering of wholly owned subsidiaries",
          "Conversion of existing business entities into Company/LLP",
          "Registration of Partnership Firm",
          "Registration of Branch Offices / Liaison Offices / Project Offices of Foreign Company in India",
          "Registration of Trust",
          "Establishment of entity in Free Trade Zone / SEZ"
        ]
      },
      {
        heading: "CLOSURE / EXIT OF BUSINESS ENTITY",
        intro: "Structured legal exit, dissolution, and voluntary strike-off solutions:",
        items: [
          "Amalgamation / Merger",
          "Winding up of Companies (Voluntary and Compulsory)",
          "Acting as Voluntary Liquidator in case of voluntary winding up",
          "Striking of name of the Company from Ministry of Corporate Affairs",
          "Closure of Branch Office / Liaison Offices / Project Offices",
          "Liaison for Winding up with office of Judicial and Quasi Judicial Authorities, including National Company Law Tribunal, Regional Director, Registrar of Companies and Official Liquidator"
        ]
      }
    ],
    fullDesc: "We offer a full range of business setup and structured corporate exit services designed to manage business compliances, establish optimal legal entities, and provide seamless winding-up or strike-off solutions before the MCA, RoC, RD, and NCLT authorities."
  },
  {
    id: "limited-liability-partnership",
    title: "Limited Liability Partnership",
    shortDesc: "Structuring, incorporation, drafting tailored LLP agreements, statutory filings, and partner admittance/cessation.",
    category: "Secretarial",
    iconName: "Layers",
    statutoryFramework: "Limited Liability Partnership Act, 2008 | LLP Rules, 2009 | RUN-LLP & FiLLiP",
    subServices: [
      "Obtaining DIN & Digital Signatures for Partners",
      "LLP Name Reservation & Incorporation",
      "Drafting & Vetting of LLP Agreements",
      "Conversion of Company / Firm into LLP",
      "Annual Compliances & Solvency Returns (Form 8 & 11)",
      "Admission, Retirement & Capital Restructuring",
      "Taxation-Driven Restructuring Guidance",
      "LLP Name & Registered Office Changes",
      "FDI Facilitation & RBI FEMA Filings"
    ],
    keyOfferings: [
      "Obtaining DIN and Digital signatures for Partners",
      "Seeking availability of desired Name of LLP",
      "Incorporation of Limited Liability Partnership (LLP) Firm",
      "Drafting and vetting of LLP Agreements",
      "Conversion of company or partnership firm into Limited Liability Partnership",
      "Annual Compliances and Filing of returns, statement of account etc",
      "Providing necessary guidance in Restructuring in LLP",
      "Executing process of Admission, Retirement / Resignation / Capital Restructuring and all other types of Restructuring in the LLP",
      "Advising and guiding on Taxation driven Restructuring in the LLP",
      "Providing Event based Services like changing Name of LLP, shifting Registered Office of LLP within or outside State etc",
      "Facilitating FDIs in LLP and making all related FEMA Compliances with Reserve Bank of India"
    ],
    sections: [
      {
        heading: "Limited Liability Partnership Services",
        intro: "We provide the following gamut of services pertaining to LLPs:",
        items: [
          "Obtaining DIN and Digital signatures for Partners",
          "Seeking availability of desired Name of LLP",
          "Incorporation of Limited Liability Partnership (LLP) Firm",
          "Drafting and vetting of LLP Agreements",
          "Conversion of company or partnership firm into Limited Liability Partnership",
          "Annual Compliances and Filing of returns, statement of account etc",
          "Providing necessary guidance in Restructuring in LLP",
          "Executing process of Admission, Retirement / Resignation / Capital Restructuring and all other types of Restructuring in the LLP",
          "Advising and guiding on Taxation driven Restructuring in the LLP",
          "Providing Event based Services like changing Name of LLP, shifting Registered Office of LLP within or outside State etc",
          "Facilitating FDIs in LLP and making all related FEMA Compliances with Reserve Bank of India"
        ]
      }
    ],
    fullDesc: "Limited Liability Partnership, popularly known as LLP, is a worldwide recognized form of business organization. Introduced in India by way of the Limited Liability Partnership Act 2008, LLP combines the advantages of both the Company and Partnership entities into a single form of organization. LLPs need only two (2) Designated Partners and an LLP Agreement to commence its business operations. The Compliances under the LLP Act are fewer than those of a Company form of Organisation and hence most suited to small and medium-sized Business Organisations. Young Entrepreneurs or First Generation Entrepreneurs prefer LLP to all other forms of organisation."
  },
  {
    id: "corporate-advisory-and-compliances",
    title: "Corporate Advisory & Compliances",
    shortDesc: "Retainer-based corporate secretarial services, statutory registers, board/general meetings, and MCA V3 filings.",
    category: "Compliance & Audit",
    iconName: "Compass",
    statutoryFramework: "Companies Act, 2013 | Secretarial Standards SS-1 & SS-2 | MCA V3 Portal",
    subServices: [
      "Alteration of MoA & AoA (Name/Capital/Objects)",
      "Allotment, Transfer & Dematerialization of Shares",
      "Changes in Directorship & Key Managerial Personnel",
      "Convening Board, Committee & General Meetings",
      "Preparation of Annual Reports & Financial Statements",
      "Creation, Modification & Satisfaction of Charges",
      "Statutory Registers Maintenance under Act 2013",
      "Compounding of Offences under Companies Act",
      "Shifting of Registered Office across States / RoCs",
      "Annual Audited Financials Filing in XBRL Form"
    ],
    keyOfferings: [
      "Executing process of Alterations, modifications and changes in names of Companies, objects, share capital, situation of registered office, amendments and alterations in MoA and AoA",
      "Executing process of Allotment of Shares, consolidation/sub-division of shares, transfer and transmission of Shares, conversion into stocks or warrants, share certificates, dematerialization, forfeiture",
      "Executing statutory process of Changes with respect to Directorship including appointment, re-appointment, regularization, resignations, remuneration fixation and revisions",
      "Convening process relating to conducting Board Meetings, General meetings including ensuring pre and post meeting statutory compliances",
      "Executing process of ensuring Procedural compliances with respect to induction and expulsion of members, variation in membership rights",
      "Preparation of annual reports and annual accounts including Balance Sheet, P&L account, income & expenditure, auditors report, directors' reports, corporate governance statement",
      "Executing process of creation, modification and satisfaction of charges and MCA registration",
      "Preparation of Dividend Policy and assistance for ascertainment, declaration and payment of interim and final dividend; unpaid and unclaimed dividend management",
      "Maintenance of statutory registers as per the provisions of the Companies Act 2013",
      "Assist in executing Procedures and compliances related to making inter-company loans, investments, guarantees and providing of securities",
      "Providing Assistance for filing of the statutory Returns, documents with the Ministry of Corporate Affairs",
      "Drafting various Corporate documents viz. MoA, AoA, Agreements, Allotment Letters, contracts, debentures, proxies, notices, resolutions and minutes of meetings",
      "Executing Process for passing resolution through Postal Ballot",
      "Executing process for Compounding of various offences under Companies Act 2013",
      "Dematerialization/Rematerialization of securities and obtaining DIN / DSC",
      "Liaison with offices of ROC / RD / CLB / MCA for obtaining regulatory approvals",
      "Application for Condonation of delay while submission of Statutory Returns",
      "Support for Statutory Compliances to Shifting of books of accounts from one place to another",
      "Providing opinion on Corporate Law related queries and XBRL annual audited filing",
      "Statutory Compliances to Shifting of Registered Office of the Company from One State to another or within RoC jurisdiction",
      "Develop and monitor system of ascertaining Related Party Transactions"
    ],
    sections: [
      {
        heading: "Corporate Advisory & Compliances Scope",
        intro: "The summary of our services pertaining to Compliances, which are broadly required for various types of Companies includes but is not limited to:",
        items: [
          "Executing process of Alterations, modifications and changes in names of Companies, objects, share capital, situation of registered office, amendments and alterations in the Memorandum of Association and Articles of Association",
          "Executing process of Allotment of Shares, consolidation/sub-division of shares, transfer and transmission of Shares, conversion of shares into stocks or warrants, issue of shares certificates, dematerialization of shares, forfeiture of shares etc.",
          "Executing statutory process of Changes with respect to Directorship including appointment, re-appointment, regularization, resignations, fixation and revisions of the remunerations to Directors, Managers, Company Secretary, Compliance officer, secretary in whole time practice, auditors, cost auditors etc.",
          "Convening process relating to conducting Board Meetings, General meetings including ensuring pre and post meeting statutory compliances",
          "Executing process of ensuring Procedural compliances with respect to induction and expulsion of members, variation in membership rights",
          "Preparation of annual reports and annual accounts including Balance Sheet, Profit and loss account, income and expenditure statement, auditors report, directors' reports, statement on corporate governance, obtaining compliance certificate, Preparation of directors/ chairman's statement etc.",
          "Executing process of creation, modification and satisfaction of charges and facilitating client to represent Ministry of Corporate Affairs for Registration of the same",
          "To help in Preparation of Dividend Policy and provide assistance for ascertainment, declaration and payment of interim and final dividend; management of unpaid and unclaimed dividend",
          "Maintenance of statutory registers as per the provisions of the Companies Act 2013",
          "Assist in executing Procedures and compliances related to making inter-company loans, investments, guarantees and providing of securities",
          "Providing Assistance for filing of the statutory Returns, documents with the Ministry of Corporate Affairs",
          "Assist in Drafting various Corporate documents viz. Memorandum of Association, Articles of Association, Agreements, Allotment Letter, contract of appointments, share certificates, debentures/bond certificates, proxies, dividend / interest / redemption warrants, fixed deposit receipts, share transfer documents, documents related to public offerings and listing, notices, resolutions and minutes of meetings",
          "Assist in executing Process for passing resolution through Postal Ballot",
          "Executing process for Compounding of various offences under Companies Act 2013",
          "Assist in Dematerialization/Rematerialization of securities",
          "Assist in Obtaining DIN / DSC (including PAN encrypted) for directors and professionals",
          "Liaison with offices of ROC / RD / CLB / MCA for obtaining various regulatory approvals",
          "Assist in making Application for Condonation of delay while submission of Statutory Returns",
          "Provide Support for Statutory Compliances to Shifting of books of accounts from one place to another place",
          "Providing opinion on Corporate Law related queries",
          "Filing of Annual audited financials in XBRL form",
          "Assist in executing Statutory Compliances to Shifting of Registered Office of the Company from One State to another or within the jurisdiction of One ROC to the another in the same state",
          "Develop and monitor system of ascertaining Related Party Transactions",
          "Any other matter related to working and administration of Company Law including any new developments"
        ]
      }
    ],
    fullDesc: "The summary of our services pertaining to Compliances, which are broadly required for various types of Companies includes but is not limited to continuous secretarial governance, board management, MCA statutory returns, and end-to-end statutory compliance."
  },
  {
    id: "corporate-and-financial-restructuring",
    title: "Corporate & Financial Restructuring",
    shortDesc: "Strategic advisory on Mergers, Demergers, Amalgamations, Slump Sales, Capital Reductions, and Corporate Realignments.",
    category: "Restructuring",
    iconName: "TrendingUp",
    statutoryFramework: "Sections 230-240, Companies Act, 2013 | NCLT (CAA) Rules, 2016",
    subServices: [
      "Structuring Corporate Governance Framework",
      "Takeovers, Mergers & Demergers (NCLT)",
      "Post-Merger Integration & Compliances",
      "Revival of Defunct / Sick Companies",
      "Variation of Class Rights & Joint Ventures",
      "Conversion (Private/Public/LLP)",
      "Dissolution & Winding Up of Companies",
      "Rights, Bonus, Sweat Equity & Preferential Issues",
      "ESOP / ESPS Scheme Structuring",
      "Buy-Back & Reduction of Share Capital"
    ],
    keyOfferings: [
      "Undertaking process of determining / structuring Corporate Governance Structure",
      "Corporate Restructuring in the nature of takeover, Mergers, De-mergers",
      "Undertaking post-merger related services",
      "Revival of defunct/sick Companies",
      "Variation of Class Rights",
      "Joint Venture and alliance",
      "Conversion of Companies from Private to Public, from Public to Private or from Companies into LLP",
      "Dissolution and Winding up of Companies",
      "Change in the management of the Company",
      "Issuing and allotment of securities for cash / consideration other than cash carrying voting rights and/or differential voting rights",
      "Rights issue / Bonus Issue / Sweat Equity / Preferential Issue/ Private Placement of securities",
      "Reclassification / consolidation / sub division/ cancellation of share capital",
      "Employees Stock Option Scheme / Employees Stock Purchase Scheme",
      "Buy Back of Securities",
      "Reduction of share capital"
    ],
    sections: [
      {
        heading: "Corporate Restructuring",
        intro: "This category of services includes but is not limited to:",
        items: [
          "Undertaking process of determining / structuring Corporate Governance Structure",
          "Corporate Restructuring in the nature of takeover, Mergers, De-mergers",
          "Undertaking post-merger related services",
          "Revival of defunct/sick Companies",
          "Variation of Class Rights",
          "Joint Venture and alliance",
          "Conversion of Companies from Private to Public, from Public to Private or from Companies into LLP",
          "Dissolution and Winding up of Companies",
          "Change in the management of the Company"
        ]
      },
      {
        heading: "FINANCIAL RESTRUCTURING",
        intro: "This category of services includes but is not limited to:",
        items: [
          "Issuing and allotment of securities for cash / consideration other than cash carrying voting rights and/or differential voting rights",
          "Rights issue / Bonus Issue / Sweat Equity / Preferential Issue / Private Placement of securities",
          "Reclassification / consolidation / sub division / cancellation of share capital",
          "Employees Stock Option Scheme / Employees Stock Purchase Scheme",
          "Buy Back of Securities",
          "Reduction of share capital"
        ]
      }
    ],
    fullDesc: "Corporate and Financial restructuring is the process of redesigning one or more aspects of a Company. The process of reorganizing a Company may be implemented due to a number of different factors, such as positioning the Company to be more competitive, survive a currently adverse economic climate, or poise the corporation to move in an entirely new direction."
  },
  {
    id: "due-diligence",
    title: "Due Diligence",
    shortDesc: "In-depth corporate health checks for M&A, private equity investments, bank loan sanctioning, and pre-IPO verification.",
    category: "Compliance & Audit",
    iconName: "Search",
    statutoryFramework: "Companies Act, 2013 | SEBI Regulations | Banking Guidelines | RBI Act",
    subServices: [
      "Physical & Virtual Data Room Creation",
      "Secretarial Compliance Due Diligence Audit",
      "Pre & Post Funding / M&A Documentation",
      "Private Funding Advisory & Assistance",
      "Bank / Financial Institution Consortium Due Diligence",
      "Title Verification & RoC Search Reports"
    ],
    keyOfferings: [
      "Data Room Creation for Due Diligence Audit - physical and virtual",
      "Due Diligence Audit - Secretarial compliances",
      "Handling documentation - pre and post funding/ merger/ acquisition / investment etc.",
      "Private Funding - Advisory and Assistance including drafting",
      "To undertake Due diligence of Corporate Compliances in terms of RBI Act before granting Loan / Financial Assistance by Bank or Financial Institutions (Whether under Consortium Arrangement or not)"
    ],
    sections: [
      {
        heading: "Due Diligence Audit & Assurance",
        intro: "We mainly undertake audit and conduct Due Diligence in events including (but not limited to):",
        items: [
          "Data Room Creation for Due Diligence Audit - physical and virtual",
          "Due Diligence Audit - Secretarial compliances",
          "Handling documentation - pre and post funding/ merger/ acquisition / investment etc.",
          "Private Funding - Advisory and Assistance including drafting",
          "To undertake Due diligence of Corporate Compliances in terms of RBI Act before granting Loan / Financial Assistance by Bank or Financial Institutions. (Whether under Consortium Arrangement or not)"
        ]
      }
    ],
    fullDesc: "A Due Diligence is essential when Companies aim to enter into transactions like Mergers & Acquisitions, Takeovers or Amalgamations. Especially in case of cross border Merger & Amalgamation or Cross Cultural Alliance, Due Diligence is crucial before making any decision. Also when the Company wants to release IPOs or to issue Foreign Currency Convertible Bonds (FCCBs), Global Depository Receipts (GDRs), Due Diligence is the prime focus in order to ascertain compliance of various laws and regulations including Commercial Agreements. Due Diligence entails the specific scrutiny of the legal affairs of the target company with a view to uncover any legal risks and providing the buyer Company with extensive insights into the Company's legal affairs."
  },
  {
    id: "fema-and-rbi",
    title: "FEMA & RBI",
    shortDesc: "Cross-border transaction reporting, Inbound FDI, Outbound Overseas Direct Investment (ODI), ECB, and FIRMS portal filings.",
    category: "Cross-Border",
    iconName: "Globe2",
    statutoryFramework: "Foreign Exchange Management Act, 1999 (FEMA) | RBI Master Directions | FIRMS Portal",
    subServices: [
      "Filing FC-GPR on Allotment of Shares to Non-Residents",
      "Filing FC-TRS for Resident/Non-Resident Transfers",
      "Annual Foreign Liabilities & Assets (FLA Return)",
      "Branch, Liaison & Project Office Setup & Closure",
      "Compounding of Offences under FEMA Provisions",
      "NBFC Returns & Regulatory Compliances with RBI"
    ],
    keyOfferings: [
      "Preparation and filing of Returns with the Reserve Bank of India on Allotment of Shares in the form of FC-GPR, Transfer of Shares from Resident to Non-Resident or vice versa in the Form of FC-TRS and return with respect to Foreign Assets and Liabilities etc",
      "Registering and Closure of Branch, Liaison or Project office of a Foreign Company in India with the Reserve Bank of India as well as Department of Company Affairs etc",
      "Compounding the Offences under various provisions of FEMA",
      "Preparation and filing of Returns with respect to Non-Banking Finance Company"
    ],
    sections: [
      {
        heading: "FEMA & RBI Regulatory Services",
        intro: "This Category of services mainly includes but is not limited to:",
        items: [
          "Preparation and filing of Returns with the Reserve Bank of India on Allotment of Shares in the form of FC-GPR, Transfer of Shares from Resident to Non-Resident or vice versa in the Form of FC-TRS and return with respect to Foreign Assets and Liabilities etc",
          "Registering and Closure of Branch, Liaison or Project office of a Foreign Company in India with the Reserve Bank of India as well as Department of Company Affairs etc",
          "Compounding the Offences under various provisions of FEMA",
          "Preparation and filing of Returns with respect to Non-Banking Finance Company"
        ]
      }
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
      "Mandatory Secretarial Audit under Section 204",
      "Corporate Governance Compliance Audit (SEBI LODR)",
      "Depositories & Participants Share Reconciliation Audit",
      "SEBI Takeover & Insider Trading Audits",
      "Secretarial Compliance Certification",
      "Preferential Issue, Buy-Back & FC-GPR Certificates",
      "Exhaustive Annual Return Verification & Certification",
      "Certification of MCA E-Forms on Web Portal",
      "Search & Status Reports and Inspection Facility",
      "Scrutinizer Reports for AGMs, Postal Ballots & Court Meetings"
    ],
    keyOfferings: [
      "Undertaking Secretarial Audit across Media, NBFCs, Pharma, Manufacturing, Merchant Banking, Debt Listed, and Power Generation Companies",
      "Undertaking Corporate Governance Compliance Audit as required under SEBI (LODR)",
      "Undertaking Audit as required by SEBI under Depositories and Participants Regulation: Reconciliation of share Capital Audit & Share Transfer Audit",
      "Undertaking specific audits to ensure compliance of the SEBI Takeover Code, SEBI Insider Trading Regulations, etc.",
      "Secretarial Compliance Certification",
      "Certificate for Preferential issue of Shares, Buy-back, FC-GPR etc.",
      "Verification of Secretarial Data and Annual Returns of listed Companies and Certification of correctness and compliances by exhaustive audit",
      "Certification of E-Forms which are required to be filed with the Registrar of Companies through web portal of Ministry of Corporate Affairs",
      "Other Miscellaneous Certificates issued under various Acts like FEMA, Listing Obligation Regulations etc.",
      "Filing of Annual Return/Forms (including XBRL)",
      "Providing Inspection facility and Search and Status Report",
      "Scrutinizer Report with respect to General Meetings, Postal Ballot Meetings, Court Convened Meetings, etc."
    ],
    sections: [
      {
        heading: "Secretarial Audit Coverage",
        intro: "We undertake Secretarial Audit across diverse corporate sectors including:",
        items: [
          "Media Companies",
          "Non-Banking Finance Companies",
          "Pharmaceuticals Companies",
          "Various Manufacturing Companies",
          "Merchant Banking Companies",
          "Debt Listed Companies",
          "Power Generation Companies etc."
        ]
      },
      {
        heading: "Other Audits / Certification / Reports",
        intro: "Comprehensive certification and independent assurance services:",
        items: [
          "Undertaking Corporate Governance Compliance Audit as required under SEBI (LODR)",
          "Undertaking Audit as required by SEBI under Depositories and Participants Regulation: a). Reconciliation of share Capital Audit; b). Share Transfer Audit",
          "Undertaking specific audits to ensure compliance of the SEBI Takeover Code, SEBI Insider Trading Regulations, etc.",
          "Secretarial Compliance Certification",
          "Certificate for Preferential issue of Shares, Buy-back, FC-GPR etc.",
          "Verification of Secretarial Data and Annual Returns of listed Companies and Certification of the correctness and compliances of the contents by exhaustive audit of each provisions of the Companies Act",
          "Certification of E-Forms which are required to be filed with the Registrar of Companies through web portal of Ministry of Corporate of Affairs",
          "Other Miscellaneous Certificates that may be required to be issued under various other Acts like FEMA, Listing Obligation (Disclosure and Requirements) Regulations etc.",
          "Filing of Annual Return/Forms (including XBRL)",
          "Providing Inspection facility and Search and Status Report",
          "Scrutinizer Report with respect to General Meetings, Postal Ballot Meetings, Court Convened Meetings, etc."
        ]
      }
    ],
    fullDesc: "Introduced by the Companies Act 2013, 'Secretarial Audit' is a process to check compliances made by the Company under Corporate Law & other laws, rules, regulations, procedures etc. It is a mechanism to monitor compliance with the requirements of stated laws and processes. Periodically inspecting the records of company gives exact information whether, and if so, to what extent Company has complied with the laws applicable to it. Secretarial Audit assures regulators, stakeholders and management of the Company that it has a disciplined approach to evaluate and improve effectiveness of risk management, control, and governance processes."
  },
  {
    id: "sebi-and-listing-compliances",
    title: "SEBI & Listing Compliances",
    shortDesc: "Advisory on SEBI (LODR), IPO secretarial readiness, Insider Trading (PIT) code, Takeover (SAST) disclosures, and delisting.",
    category: "Corporate Law",
    iconName: "BarChart3",
    statutoryFramework: "SEBI (LODR) Regulations, 2015 | SEBI (PIT) Regulations, 2015 | SEBI (SAST) Regulations, 2011",
    subServices: [
      "Assistance in Managing IPO / FPO",
      "Listing / Delisting / Relisting of Securities",
      "SEBI Intermediaries Registration (Brokers, Merchant Bankers, AIFs)",
      "Audits and Certification under SEBI (LODR)",
      "Continuous Compliance with SEBI Guidelines & Rules",
      "Liaison with Stock Exchanges (BSE & NSE)",
      "Acting as Scrutinizer for Postal Ballots & Court Meetings",
      "Ensuring Compliance of SEBI Takeover Code & Insider Trading"
    ],
    keyOfferings: [
      "Assistance in managing IPO / FPO",
      "Listing/ Delisting/ Relisting of Securities",
      "Registration of intermediaries with SEBI (Mutual Fund, Stock and Sub Brokers, Portfolio Managers, Venture Capital Funds, Merchant Bankers, FIIs and other intermediaries)",
      "Audits and certification under SEBI (LODR)",
      "Assistance in compliance with provisions of SEBI (LODR)",
      "Assistance in compliance with various Guidelines, Rules and Regulations issued by SEBI",
      "Liaison with office of Stock Exchanges",
      "Acting as Scrutinizer in the process of Postal Ballot, Court Convened Meetings, etc.",
      "Ensuring compliance of SEBI Takeover Code, SEBI Insider Trading Regulations, etc.",
      "Other allied services"
    ],
    sections: [
      {
        heading: "SEBI & Listing Compliances Scope",
        intro: "The summary of our services pertaining to Listing Compliances, which are broadly required for various types of Listed Companies includes but is not limited to:",
        items: [
          "Assistance in managing IPO / FPO",
          "Listing/ Delisting/ Relisting of Securities",
          "Registration of intermediaries with SEBI (Mutual Fund, Stock and Sub Brokers, Portfolio Managers, Venture Capital Funds, Merchant Bankers, FIIs and other intermediaries)",
          "Audits and certification under SEBI (LODR)",
          "Assistance in compliance with provisions of SEBI (LODR)",
          "Assistance in compliance with various Guidelines, Rules and Regulations issued by SEBI",
          "Liaison with office of Stock Exchanges",
          "Acting as Scrutinizer in the process of Postal Ballot, Court Convened Meetings, etc.",
          "Ensuring compliance of SEBI Takeover Code, SEBI Insider Trading Regulations, etc.",
          "Other allied services"
        ]
      }
    ],
    fullDesc: "The summary of our services pertaining to Listing Compliances, which are broadly required for various types of Listed Companies includes assistance in capital market offerings, stock exchange liaison, LODR certifications, and statutory market integrity compliance."
  },
  {
    id: "representation-and-other-services",
    title: "Representation & Other Services",
    shortDesc: "Advocacy, petitions, and appearances before NCLT, Ministry of Corporate Affairs, Regional Directors, RoC, and SEBI.",
    category: "Corporate Law",
    iconName: "Scale",
    statutoryFramework: "National Company Law Tribunal (NCLT) Rules, 2016 | Section 441 Compounding | Trade Marks Act, 1999",
    subServices: [
      "Representation before MCA & Regional Directors (RD)",
      "Advocacy before National Company Law Tribunal (NCLT)",
      "Appearances before Securities and Exchange Board of India (SEBI)",
      "Appearances before Official Liquidator (OL) & CLB",
      "Representation before Reserve Bank of India (RBI)",
      "Representation before Stock Exchanges (BSE / NSE)",
      "Providing Formal Written Legal Opinions",
      "Drafting Shareholders' Agreements & Legal Contracts",
      "Financials Conversion for XBRL Filings",
      "Intellectual Property Rights & Trademark Services"
    ],
    keyOfferings: [
      "Representation before Ministry of Corporate Affairs (MCA)",
      "Representation before Securities and Exchange Board of India (SEBI)",
      "Representation before Company Law Board (CLB)",
      "Representation before Central Government (CG)",
      "Representation before Official Liquidator (OL)",
      "Representation before National Company Law Tribunal (NCLT)",
      "Representation before Reserve Bank of India (RBI)",
      "Representation before Stock Exchanges (SE)",
      "Representation before Regional Director (RD)",
      "Providing Written Opinions on complex Company Law matters",
      "Drafting Shareholder's Agreements and other Legal Documents",
      "Providing opinion on Corporate Law related queries",
      "Conversion of Financials of Company into machine-readable format to facilitate XBRL filings",
      "Providing services related to Intellectual Property Rights"
    ],
    sections: [
      {
        heading: "Representation Authorities",
        intro: "We represent our clients before the following Regulatory Authorities:",
        items: [
          "Ministry of Corporate Affairs (MCA)",
          "Securities and Exchange Board of India (SEBI)",
          "Company Law Board (CLB)",
          "Central Government (CG)",
          "Official Liquidator (OL)",
          "National Company Law Tribunal (NCLT)",
          "Reserve Bank of India (RBI)",
          "Stock Exchanges (SE)",
          "Regional Director (RD)"
        ]
      },
      {
        heading: "Other Allied & Specialized Services",
        intro: "Corporate legal opinions and documentation:",
        items: [
          "Providing Written Opinions",
          "Drafting Shareholder's Agreements and other Legal Documents",
          "Providing opinion on Corporate Law related queries",
          "Conversion of Financials of Company into machine-readable format to facilitate XBRL filings by the Corporate",
          "Providing services related to Intellectual Property Rights"
        ]
      }
    ],
    fullDesc: "We represent our clients before key regulatory and judicial authorities including MCA, SEBI, NCLT, RBI, and Stock Exchanges, while offering authoritative written legal opinions, shareholder charters, and specialized corporate documentation."
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
    sections: [
      {
        heading: "Trademark & Brand Protection",
        intro: "Comprehensive IP asset management and enforcement:",
        items: [
          "Comprehensive Trademark Search and Class Classification (NICE Classification Classes 1 to 45)",
          "E-filing of Trademark Applications (Form TM-A) for Words, Logos, and Device Marks",
          "Drafting Legal Replies to Examination Reports & Objections (Section 9 & Section 11)",
          "Appearance before Registrar of Trade Marks for Show-Cause Hearings",
          "Trademark Opposition Proceedings (Filing Notices of Opposition & Counter Statements - Form TM-O)",
          "Assignment, Licensing & Transmission of Trademarks (Form TM-P)",
          "Trademark Renewal & Restoration Monitoring across corporate portfolios",
          "Copyright Registration for Literary, Artistic and Software Works"
        ]
      }
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
  },
  {
    id: "4",
    quote: "Navigating CDSCO approvals, state clinical trial licensing, and cross-border tech licensing agreements requires razor-sharp legal mastery. Azhar Shaikh & Associates handled our regulatory covenants with flawless secretarial precision.",
    author: "Dr. Ananya Sen",
    designation: "Whole-Time Director & Head of Regulatory, Cadence Biopharma Ltd.",
    location: "Hyderabad"
  },
  {
    id: "5",
    quote: "From drafting our multi-party Shareholders' Agreement and ESOP trust architecture to guiding our Series B FDI inflow under FEMA reporting, CS Azhar Shaikh has been an indispensable strategic legal ally for our founding team.",
    author: "Devansh Kothari",
    designation: "Co-Founder & CEO, ZetaPay Financial Technologies",
    location: "Bengaluru"
  },
  {
    id: "6",
    quote: "Managing commercial consortium charges, RERA disclosures, and special purpose vehicle governance across multi-state infrastructure projects seemed daunting until we engaged ASA. Outstanding competence and proactive advisory.",
    author: "Pradeep Singhal",
    designation: "Executive Director, Skyline Infrastructure & Logistics SPV",
    location: "Mumbai"
  }
];
