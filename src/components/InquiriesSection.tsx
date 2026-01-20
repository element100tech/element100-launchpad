const InquiriesSection = () => {
  return (
    <section id="inquiries" className="section-padding gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Get In Touch</h2>
          <p className="text-body max-w-2xl mx-auto">
            Have a project in mind or want to learn more about how we can help? 
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-medium)" }}>
            {/* Microsoft Form Embed - Replace the src with your actual form URL */}
            <iframe
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNJdUQUVGNE0wMTlHS0k5TVlINFBKVkVIWjRSNy4u"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ border: "none" }}
              title="Contact Form"
              className="bg-background"
            >
              Loading form...
            </iframe>
          </div>
          <p className="text-small text-center mt-4">
            We typically respond within 1-2 business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InquiriesSection;
