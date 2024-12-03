import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Our Portfolio</h2>
        <p>
          Discover the diverse software solutions we've developed to help
          businesses thrive in the digital world. From custom mobile apps to
          scalable web applications, our portfolio showcases our expertise in
          crafting innovative technology solutions.
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-product">Web Apps</li>
            <li data-filter=".filter-app">Mobile Apps</li>
            <li data-filter=".filter-branding">Branding & UI/UX</li>
          </ul>
          {/* End Portfolio Filters */}

          <div className="row gy-4 isotope-container" data-aos-delay={200}>
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/projects/2.png" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Efficient File Exchange App</h4>
                <p>
                  A file exchange application for Ethiopian Airlines Group that
                  allows for the efficient parsing and exchange of files from
                  Sabre. The application is designed to check all issued airline
                  tickets and drop them into a local Filezilla file for easy
                  access and management.
                </p>
                <a
                  href="assets/projects/2.png"
                  title="Web App 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/projects/3.png" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>
                  Employee promotion and competative achievment Coaching
                  Training System
                </h4>
                <p>
                  A project created for Ethiopian airlines Employees coaching
                  training process for promotion and competitve achievement
                </p>
                <a
                  href="assets/projects/3.png"
                  title="Web App 1"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/projects/4.png" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Real Estate Sales and Rental Services</h4>
                <p>
                  Discover your dream home with our top-notch real estate
                  services. Whether you're looking to buy, sell, or rent, we
                  offer a wide range of properties to suit all needs and
                  budgets. Explore listings, get expert advice, and find the
                  perfect property today.
                </p>
                <a
                  href="assets/projects/4.png"
                  title="Branding Project 1"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <img src="assets/projects/5.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Modern NextJS and Tailwind CSS Website Template</h4>
                <p>
                  Create a professional and visually appealing website with our
                  NextJS and Tailwind CSS template. This template is perfect for
                  businesses, agencies, portfolios, and more. The modern design
                  is fully customizable to match your brand, and the responsive
                  layout ensures your website looks great on all devices.
                </p>
                <a
                  href="assets/projects/5.jpg"
                  title="Branding Project 1"
                  data-gallery="portfolio-gallery-app"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img src="assets/projects/6.png" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Legal Case Management System</h4>
                <p>
                  Legal Case Management System which is a comprehensive and
                  integrated platform designed to streamline and automate the
                  process of managing legal cases. This system allows users to
                  easily access and update their case information, track
                  deadlines and progress, communicate with legal
                  representatives, and generate reports.
                </p>
                <a
                  href="assets/projects/6.png"
                  title="Web App 2"
                  data-gallery="portfolio-gallery-product"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
            {/* End Portfolio Item */}

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <img
                src="assets/projects/7.png"
                className="img-fluid"
                alt
              />
              <div className="portfolio-info">
                <h4>Node Consult financial management system</h4>
                <p>
                  A comprehensive financial management system designed for Node consult company.
                </p>
                <a
                  href="assets/projects/7.png"
                  title="Branding Project 2"
                  data-gallery="portfolio-gallery-branding"
                  className="glightbox preview-link"
                >
                  <i className="bi bi-zoom-in" />
                </a>
              </div>
            </div>
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
