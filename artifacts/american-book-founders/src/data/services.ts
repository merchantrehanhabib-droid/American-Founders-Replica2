export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  img: string;
  benefits: string[];
  process: { step: string; desc: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "ghost-writing",
    title: "Ghost Writing",
    tagline: "Your story, written by experts.",
    category: "Book Writing",
    img: "/genre-memoir-1.png",
    description:
      "Our professional ghostwriters capture your voice and bring your ideas to life. From concept to final manuscript, we handle every aspect of the writing process while you retain full authorship and 100% of your royalties.",
    benefits: [
      "100% confidential — you keep full credit",
      "Experienced writers across all genres",
      "Unlimited revisions until you're satisfied",
      "NDA signed before we begin",
      "Delivered chapter by chapter for your feedback",
    ],
    process: [
      { step: "Discovery Call", desc: "We learn about your vision, voice, and goals." },
      { step: "Outline & Structure", desc: "A detailed chapter-by-chapter blueprint." },
      { step: "First Draft", desc: "Full manuscript written in your voice." },
      { step: "Revisions", desc: "Unlimited rounds of edits until perfect." },
      { step: "Final Delivery", desc: "Formatted manuscript ready for publishing." },
    ],
  },
  {
    slug: "book-writing",
    title: "Book Writing",
    tagline: "From blank page to published author.",
    category: "Book Writing",
    img: "/genre-thriller-1.png",
    description:
      "Whether you have a detailed outline or just a spark of an idea, our book writing service takes your concept and transforms it into a compelling, publish-ready manuscript that resonates with readers.",
    benefits: [
      "Works for fiction and non-fiction",
      "Dedicated writer assigned to your project",
      "Regular milestone check-ins",
      "SEO-optimized content for online visibility",
      "Full rights transfer upon completion",
    ],
    process: [
      { step: "Consultation", desc: "Deep dive into your book concept and audience." },
      { step: "Research", desc: "Thorough research to ensure accuracy and depth." },
      { step: "Writing", desc: "Chapter-by-chapter development with your input." },
      { step: "Editing", desc: "Internal review and polishing." },
      { step: "Delivery", desc: "Final manuscript in your preferred format." },
    ],
  },
  {
    slug: "memoir-writing",
    title: "Memoir Writing",
    tagline: "Preserve your legacy in print.",
    category: "Book Writing",
    img: "/genre-memoir-1.png",
    description:
      "Your life story deserves to be told with authenticity and emotion. Our memoir writers conduct in-depth interviews and weave your experiences into a compelling narrative that moves readers and preserves your legacy.",
    benefits: [
      "In-depth interview process to capture your story",
      "Emotionally resonant narrative style",
      "Family history and personal archive research",
      "Perfect for personal and business memoirs",
      "Beautifully formatted for print and digital",
    ],
    process: [
      { step: "Interviews", desc: "Multiple sessions to capture your full story." },
      { step: "Timeline Building", desc: "We map your life events into a narrative arc." },
      { step: "Drafting", desc: "Writing begins with your ongoing feedback." },
      { step: "Refinement", desc: "Polishing the voice and emotional depth." },
      { step: "Publication Ready", desc: "Formatted and ready to publish." },
    ],
  },
  {
    slug: "biography-writing",
    title: "Biography Writing",
    tagline: "Tell the story of an extraordinary life.",
    category: "Book Writing",
    img: "/genre-western-1.png",
    description:
      "Our biography writers craft detailed, factual, and compelling accounts of real lives — from historical figures to business leaders and celebrities. We research deeply and write narratives that inspire and inform.",
    benefits: [
      "Rigorous historical and archival research",
      "Authoritative yet engaging narrative tone",
      "Suitable for public figures and private individuals",
      "Fact-checked and source-verified",
      "Available in short-form and full-length formats",
    ],
    process: [
      { step: "Subject Research", desc: "Deep archival and interview-based research." },
      { step: "Chronology", desc: "Building an accurate timeline of events." },
      { step: "Narrative Craft", desc: "Turning facts into a compelling story." },
      { step: "Review", desc: "Accuracy checks and editorial polish." },
      { step: "Delivery", desc: "Publish-ready biography manuscript." },
    ],
  },
  {
    slug: "childrens-book-writing",
    title: "Children's Book Writing",
    tagline: "Spark imagination in young readers.",
    category: "Book Writing",
    img: "/genre-fantasy-1.png",
    description:
      "We create magical, age-appropriate children's books that educate and entertain. From picture books to middle-grade adventures, our writers know how to speak directly to young hearts and minds.",
    benefits: [
      "Age-appropriate language and themes",
      "Engaging plots with strong moral lessons",
      "Compatible with custom illustration services",
      "Available in board book to YA format",
      "Proven track record with published titles",
    ],
    process: [
      { step: "Concept", desc: "Developing the story idea and target age group." },
      { step: "Characters", desc: "Creating relatable, memorable characters." },
      { step: "Story Writing", desc: "Crafting the narrative with pacing for young readers." },
      { step: "Illustration Notes", desc: "Scene descriptions for illustrators." },
      { step: "Final Manuscript", desc: "Ready for publishing or illustration." },
    ],
  },
  {
    slug: "proofreading",
    title: "Proofreading",
    tagline: "Catch every error before it reaches readers.",
    category: "Book Editing",
    img: "/genre-truecrime-1.png",
    description:
      "Our meticulous proofreaders catch spelling, grammar, punctuation, and formatting errors that slip past even experienced writers. Every manuscript deserves a final expert pass before publication.",
    benefits: [
      "Line-by-line error detection",
      "Grammar, spelling, and punctuation fixes",
      "Consistency checks for names and terms",
      "Formatting and style guide compliance",
      "Fast 3–5 day turnaround available",
    ],
    process: [
      { step: "Submission", desc: "Upload your manuscript in any format." },
      { step: "Proofreader Assignment", desc: "Matched to a specialist in your genre." },
      { step: "Error Marking", desc: "All errors flagged with comments." },
      { step: "Report", desc: "Summary of corrections made." },
      { step: "Clean Manuscript", desc: "Error-free file returned to you." },
    ],
  },
  {
    slug: "copy-editing",
    title: "Copy Editing",
    tagline: "Sharpen your prose to perfection.",
    category: "Book Editing",
    img: "/genre-thriller-1.png",
    description:
      "Beyond proofreading, copy editing refines sentence structure, improves clarity, and ensures your writing flows naturally. We preserve your voice while elevating the quality of every paragraph.",
    benefits: [
      "Sentence-level clarity and flow improvements",
      "Style and consistency enforcement",
      "Fact-checking for non-fiction titles",
      "Track Changes so you approve every edit",
      "Works with your preferred style guide",
    ],
    process: [
      { step: "Manuscript Review", desc: "Initial read-through to understand the work." },
      { step: "Line Editing", desc: "Sentence-by-sentence improvements." },
      { step: "Consistency Pass", desc: "Checking names, terms, and timeline." },
      { step: "Author Review", desc: "You approve changes via Track Changes." },
      { step: "Final Copy", desc: "Clean, polished manuscript returned." },
    ],
  },
  {
    slug: "developmental-editing",
    title: "Developmental Editing",
    tagline: "Strengthen your story from the ground up.",
    category: "Book Editing",
    img: "/genre-fantasy-2.png",
    description:
      "Developmental editing addresses the big picture — plot structure, character arcs, pacing, and theme. Our editors provide detailed feedback that transforms a good manuscript into a great one.",
    benefits: [
      "Full manuscript structural analysis",
      "Plot hole identification and fixes",
      "Character development coaching",
      "Pacing and tension assessment",
      "Detailed editorial letter included",
    ],
    process: [
      { step: "Full Read", desc: "Complete read of your manuscript." },
      { step: "Analysis", desc: "Structural, character, and thematic assessment." },
      { step: "Editorial Letter", desc: "Detailed feedback document provided." },
      { step: "Consultation", desc: "60-minute call to discuss recommendations." },
      { step: "Revised Draft Review", desc: "Optional second pass on revisions." },
    ],
  },
  {
    slug: "book-formatting",
    title: "Book Formatting",
    tagline: "Present your book professionally.",
    category: "Book Editing",
    img: "/genre-scifi-1.png",
    description:
      "Proper formatting makes your book look professional and reader-friendly. We format for print (POD) and all major e-reader platforms — ensuring your book meets every retailer's standards.",
    benefits: [
      "Print-ready PDF formatting",
      "ePub and Kindle (MOBI) files",
      "Custom chapter headers and fonts",
      "Table of contents and index",
      "Meets Amazon, IngramSpark standards",
    ],
    process: [
      { step: "File Submission", desc: "Send your final edited manuscript." },
      { step: "Format Selection", desc: "Print, ebook, or both." },
      { step: "Design & Layout", desc: "Professional interior design applied." },
      { step: "Proof Review", desc: "Digital proof for your approval." },
      { step: "Final Files", desc: "All format files delivered." },
    ],
  },
  {
    slug: "self-publishing",
    title: "Self Publishing",
    tagline: "Publish on your terms, keep your royalties.",
    category: "Publishing",
    img: "/genre-horror-1.png",
    description:
      "We guide you through every step of self-publishing — from ISBN registration to distribution on Amazon, Barnes & Noble, and beyond. Keep 100% of your royalties and creative control.",
    benefits: [
      "Amazon KDP and IngramSpark setup",
      "ISBN and LCCN registration",
      "Global distribution setup",
      "Author account management",
      "100% royalties retained by you",
    ],
    process: [
      { step: "Platform Setup", desc: "Create your KDP and IngramSpark accounts." },
      { step: "ISBN Registration", desc: "We register your ISBN and barcode." },
      { step: "Upload & Publish", desc: "Files uploaded and book published." },
      { step: "Distribution", desc: "Global retailer distribution activated." },
      { step: "Sales Dashboard", desc: "We show you how to track your royalties." },
    ],
  },
  {
    slug: "ebook-publishing",
    title: "eBook Publishing",
    tagline: "Reach millions of digital readers.",
    category: "Publishing",
    img: "/genre-scifi-1.png",
    description:
      "We convert and publish your book across all major ebook platforms — Kindle, Apple Books, Kobo, Google Play, and more. Reach readers on every device with a perfectly formatted digital edition.",
    benefits: [
      "Kindle, Apple Books, Kobo, Google Play",
      "Proper ePub and MOBI formatting",
      "Cover optimization for digital stores",
      "Category and keyword optimization",
      "Pricing strategy consultation",
    ],
    process: [
      { step: "Conversion", desc: "Manuscript converted to ePub and MOBI." },
      { step: "Platform Accounts", desc: "Set up or use your existing accounts." },
      { step: "Metadata", desc: "Title, description, categories, keywords." },
      { step: "Upload", desc: "Published on all selected platforms." },
      { step: "Verification", desc: "Live link verification across all stores." },
    ],
  },
  {
    slug: "book-cover-design",
    title: "Book Cover Design",
    tagline: "A cover that sells before they read page one.",
    category: "Book Marketing",
    img: "/genre-fantasy-1.png",
    description:
      "Our award-winning designers create covers that stop scrollers in their tracks. Genre-appropriate, commercially savvy, and stunning in print and digital — every cover is designed to sell.",
    benefits: [
      "Custom designed — never a template",
      "Front, back, and spine included",
      "Print-ready and ebook formats",
      "Unlimited revision rounds",
      "Delivered in all required file formats",
    ],
    process: [
      { step: "Brief", desc: "Your genre, audience, and design preferences." },
      { step: "Concepts", desc: "3 initial design concepts presented." },
      { step: "Selection & Refinement", desc: "Choose your favorite and we refine." },
      { step: "Revisions", desc: "Unlimited changes until you love it." },
      { step: "Final Files", desc: "Print and digital files delivered." },
    ],
  },
  {
    slug: "audiobook-production",
    title: "Audiobook Production",
    tagline: "Bring your book to life with professional audio.",
    category: "Book Marketing",
    img: "/genre-western-1.png",
    description:
      "Professional narration, studio-quality recording, and ACX/Findaway distribution. Our audiobook production service gives your readers the option to listen wherever they go.",
    benefits: [
      "Professional voice talent selection",
      "Studio-quality recording and mastering",
      "ACX, Findaway Voices distribution",
      "Chapter-by-chapter file delivery",
      "Audible, Apple Podcasts, Spotify ready",
    ],
    process: [
      { step: "Narrator Selection", desc: "Choose from our roster of voice professionals." },
      { step: "Sample Recording", desc: "15-minute sample for your approval." },
      { step: "Full Recording", desc: "Complete audiobook recorded and mastered." },
      { step: "QC Review", desc: "Quality check for audio and pacing." },
      { step: "Distribution", desc: "Published on all major audio platforms." },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
