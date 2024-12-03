import React from 'react'

const Testimonals = () => {
  return (
<section id="testimonials" className="testimonials section">
  {/* Section Title */}
  <div className="container section-title" >
    <h2>Testimonials</h2>
  </div>{/* End Section Title */}
  <div className="container"  data-aos-delay={100}>
    <div className="swiper init-swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="testimonial-item">
            {/* <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt /> */}
            <h3>Nolawi Tadesse </h3>
            <h4>Founder of Node Consulting PLC </h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>GreenLight transformed our manual operations into an automated system that saved us hours of work weekly."</span>
              <i className="bi bi-quote quote-icon-right" />
            </p>

            <h3>Martha K. </h3>
            <h4>Operations Manager at Global Manufacturing</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>GreenLight Technology Solutions transformed our business operations with their custom ERP solution. The system seamlessly integrates all our departments, enhancing efficiency and decision-making. Their team was professional, communicative, and committed to delivering exactly what we needed."
              </span>
              <i className="bi bi-quote quote-icon-right" />
            </p>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt />
            <h3>Sara Wilsson</h3>
            <h4>Designer</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
              <i className="bi bi-quote quote-icon-right" />
            </p>
            
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
            <h3>Jena Karlis</h3>
            <h4>Store Owner</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
              <i className="bi bi-quote quote-icon-right" />
            </p>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
              <i className="bi bi-quote quote-icon-right" />
            </p>
          </div>
        </div>{/* End testimonial item */}
        <div className="swiper-slide">
          <div className="testimonial-item">
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
            <h3>John Larson</h3>
            <h4>Entrepreneur</h4>
            <div className="stars">
              <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
            </div>
            <p>
              <i className="bi bi-quote quote-icon-left" />
              <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
              <i className="bi bi-quote quote-icon-right" />
            </p>
          </div>
        </div>{/* End testimonial item */}
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>

  )
}

export default Testimonals
