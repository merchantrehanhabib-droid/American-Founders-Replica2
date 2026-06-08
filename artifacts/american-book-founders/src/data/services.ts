export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  img: string;
  gallery: string[];
  benefits: string[];
  process: { step: string; desc: string }[];
  whyChoose: string[];
  examples: { title: string; desc: string }[];
  results: string[];
  faq: { q: string; a: string }[];
  relatedServices: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "ghost-writing",
    title: "Ghost Writing",
    tagline: "Your story, written by experts.",
    category: "Book Writing",
    img: "/genre-memoir-1.png",
    gallery: ["/genre-memoir-1.png", "/bg-hero.png", "/genre-thriller-1.png", "/author-1.png"],
    description: "Our professional ghostwriters capture your voice and bring your ideas to life. From concept to final manuscript, we handle every aspect of the writing process while you retain full authorship and 100% of your royalties.",
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
    whyChoose: [
      "Our writers have published 500+ books across all genres",
      "We match you with a writer who specializes in your genre",
      "100% confidentiality with legally binding NDAs",
      "Unlimited revisions at no extra cost",
      "Chapter-by-chapter delivery so you stay in control",
    ],
    examples: [
      { title: "Business Memoir", desc: "A CEO turned their 30-year career into a Wall Street Journal bestseller with our ghostwriters." },
      { title: "Self-Help Book", desc: "A wellness coach's ideas became a published book with 10,000+ copies sold in the first year." },
      { title: "Historical Fiction", desc: "A family history spanning three generations was crafted into a 400-page novel loved by readers." },
    ],
    results: [
      "3,400+ books ghostwritten",
      "92% client satisfaction rate",
      "Average 6-month completion time",
      "100% client confidentiality maintained",
    ],
    faq: [
      { q: "Will anyone know I used a ghostwriter?", a: "No. Our ghostwriting service is 100% confidential. We sign NDAs and you retain full authorship. No one will ever know." },
      { q: "How long does it take?", a: "Most manuscripts take 4-6 months. We deliver chapter-by-chapter so you can review and approve as we go." },
      { q: "Do I keep the rights?", a: "Yes — you retain 100% of the copyright, royalties, and authorship." },
    ],
    relatedServices: ["book-writing", "memoir-writing", "biography-writing", "copy-editing"],
  },
  {
    slug: "book-writing",
    title: "Book Writing",
    tagline: "From blank page to published author.",
    category: "Book Writing",
    img: "/genre-thriller-1.png",
    gallery: ["/genre-thriller-1.png", "/genre-fantasy-1.png", "/bg-concerned.png", "/author-2.png"],
    description: "Whether you have a detailed outline or just a spark of an idea, our book writing service takes your concept and transforms it into a compelling, publish-ready manuscript that resonates with readers.",
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
    whyChoose: [
      "Genre-matched writers — fiction, non-fiction, memoir, academic",
      "Built-in research and fact-checking included",
      "Real-time collaboration via our author portal",
      "Chapter-by-chapter approval process",
      "Includes basic formatting and structure ready for publishing",
    ],
    examples: [
      { title: "Thriller Novel", desc: "A 90,000-word thriller written from a 2-page outline. Now published on Amazon with 200+ reviews." },
      { title: "Business Guide", desc: "A founder's sales methodology turned into a step-by-step book that generated $50K in consulting leads." },
      { title: "Cookbook", desc: "A chef's family recipes transformed into a beautifully structured 200-page cookbook with photography notes." },
    ],
    results: [
      "500+ books written to completion",
      "Average 4.8 star review rating",
      "85% of clients go on to publish",
      "6-month average completion time",
    ],
    faq: [
      { q: "What if I only have an idea?", a: "That's exactly what we do. We take your idea and develop it into a full manuscript with your approval at every step." },
      { q: "Can I review the work as it progresses?", a: "Absolutely. We deliver chapter-by-chapter and you approve each before we move forward." },
      { q: "What genres do you cover?", a: "Fiction, non-fiction, memoir, business, self-help, romance, thriller, sci-fi, fantasy, children's, and more." },
    ],
    relatedServices: ["ghost-writing", "memoir-writing", "copy-editing", "self-publishing"],
  },
  {
    slug: "memoir-writing",
    title: "Memoir Writing",
    tagline: "Preserve your legacy in print.",
    category: "Book Writing",
    img: "/genre-memoir-1.png",
    gallery: ["/genre-memoir-1.png", "/bg-hero.png", "/author-3.png", "/genre-western-1.png"],
    description: "Your life story deserves to be told with authenticity and emotion. Our memoir writers conduct in-depth interviews and weave your experiences into a compelling narrative that moves readers and preserves your legacy.",
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
    whyChoose: [
      "Our interview process captures your voice authentically",
      "We research family history and timelines to add depth",
      "Emotional storytelling that moves readers",
      "Available for personal memoirs, family histories, and business memoirs",
      "Full formatting and publishing support included",
    ],
    examples: [
      { title: "Family Legacy Memoir", desc: "A 50-year family history compiled into a 300-page memoir presented as a gift to 40 family members." },
      { title: "Entrepreneur Journey", desc: "A tech founder's journey from garage to IPO — written as an inspiring business memoir." },
      { title: "War Veteran Story", desc: "A decorated veteran's experiences captured and published, now in its second printing." },
    ],
    results: [
      "200+ memoirs published",
      "100% interview completion rate",
      "Average 50+ interviews per memoir",
      "4.9 star average review rating",
    ],
    faq: [
      { q: "How do you capture my voice?", a: "We conduct multiple recorded interviews and then review them to match your speaking style, vocabulary, and emotional tone." },
      { q: "Can my family contribute?", a: "Yes! We welcome input from family members and can conduct interviews with them as well." },
      { q: "How long is a typical memoir?", a: "Most memoirs are 50,000–80,000 words (200–300 pages). We can adjust based on your goals." },
    ],
    relatedServices: ["biography-writing", "ghost-writing", "book-writing", "self-publishing"],
  }
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
