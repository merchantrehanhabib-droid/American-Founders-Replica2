import { getService } from "@/data/services";
import PageLayout from "@/components/layout/PageLayout";
import { useRoute } from "wouter";

export default function ServiceDetailPage() {
  const [, params] = useRoute("/services/:slug");
  const service = getService(params?.slug || "");

  if (!service) {
    return <div className="p-20 text-center">Service mil nahi rahi!</div>;
  }

  return (
    <PageLayout title={service.title} description={service.description}>
      <div className="py-20 text-center bg-navy text-white">
        <h1 className="text-5xl font-serif font-bold">{service.title}</h1>
      </div>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our {service.title} Service?</h2>
          <ul>
            {service.whyChoose.map((point, i) => (
              <li key={i} className="mb-2">✓ {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Results/Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {service.results.map((res, i) => (
            <div key={i} className="text-center">
              <p className="text-gold font-bold text-2xl">{res}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
