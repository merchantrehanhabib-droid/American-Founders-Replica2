export const SERVICES = [
  {
    slug: "ghostwriting",
    category: "Book Writing",
    title: "Professional Ghostwriting",
    tagline: "Your vision, professionally penned.",
    description: "Expert writers to bring your story to life, handling everything from plot development to final manuscript completion.",
    img: "/services/ghostwriting.jpg",
    benefits: ["Custom-tailored content", "100% original work", "Professional storytelling"],
    process: [
      { step: "Consultation", desc: "Share your vision" },
      { step: "Outlining", desc: "Structure the story" },
      { step: "Drafting", desc: "Writing phase" },
      { step: "Revision", desc: "Fine-tuning" },
      { step: "Final Polish", desc: "Ready to publish" }
    ]
  },
  {
    slug: "editing",
    category: "Book Editing",
    title: "Book Editing",
    tagline: "Refining your manuscript to perfection.",
    description: "Our professional editors ensure your book is error-free, flows perfectly, and maintains your unique voice.",
    img: "/services/editing.jpg",
    benefits: ["Grammar & Syntax check", "Pacing improvement", "Structural editing"],
    process: [
      { step: "Evaluation", desc: "Manuscript audit" },
      { step: "Line Editing", desc: "Sentence improvement" },
      { step: "Copy Editing", desc: "Error correction" },
      { step: "Proofreading", desc: "Final check" },
      { step: "Approval", desc: "Ready for launch" }
    ]
  },
  {
    slug: "publishing",
    category: "Publishing",
    title: "Book Publishing",
    tagline: "From manuscript to global shelf.",
    description: "We handle the complexities of publishing, ensuring your book reaches major platforms like Amazon, B&N, and more.",
    img: "/services/publishing.jpg",
    benefits: ["Global distribution", "ISBN management", "Metadata optimization"],
    process: [
      { step: "Setup", desc: "Platform selection" },
      { step: "Formatting", desc: "Interior layout" },
      { step: "Cover Design", desc: "Visual branding" },
      { step: "Upload", desc: "Distribution" },
      { step: "Launch", desc: "Go live" }
    ]
  }
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
