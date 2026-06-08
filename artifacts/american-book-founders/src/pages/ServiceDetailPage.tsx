// ServiceDetailPage.tsx mein ye logic use karein:

{/* Why Choose Section */}
<section className="py-16">
  <h2>Why Choose Our {service.title} Service?</h2>
  <ul>
    {service.whyChoose.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</section>

{/* Results/Stats Section */}
<section className="py-16 bg-navy text-white">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {service.results.map((res, i) => (
      <div key={i} className="text-center">
        <p className="text-gold font-bold text-2xl">{res}</p>
      </div>
    ))}
  </div>
</section>
