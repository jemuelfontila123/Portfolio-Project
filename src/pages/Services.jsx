const services = [
  {
    title: "Web Development",
    description:
      "Development of responsive and modern websites using current web technologies.",
  },
  {
    title: "Software Development",
    description:
      "Design and development of modular software applications using programming best practices.",
  },
  {
    title: "Application Development",
    description:
      "Development of practical applications focused on usability, maintainability, and performance.",
  },
];

function Services() {
  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I DO</p>
        <h1>Services</h1>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;