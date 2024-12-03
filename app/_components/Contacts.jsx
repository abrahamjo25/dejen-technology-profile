import React from "react";

const Contacts = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Contact</h2>
        {/* <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p> */}
      </div>
      {/* End Section Title */}
      <div className="container" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos-delay={200}>
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex" data-aos-delay={300}>
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+251115174696</p>
                </div>
              </div>
              {/* End Info Item */}
              <div className="info-item d-flex" data-aos-delay={400}>
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>info@example.com</p>
                </div>
              </div>
              {/* End Info Item */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d828.4637503757713!2d38.79204303260823!3d8.985032732332233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1733210521963!5m2!1sen!2set"
                frameBorder={0}
                style={{ border: 0, width: "100%", height: 270 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message-field"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
