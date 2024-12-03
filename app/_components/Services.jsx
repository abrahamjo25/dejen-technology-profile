import React from 'react'

const Services = () => {
  return (
   <section id="services" className="services section light-background">
  {/* Section Title */}
  <div className="container section-title" >
    <h2>Services</h2>
    <h4>🚀 Transformative Development Experience </h4>
    <p>Get ready for a transformative experience!</p>
    
    <h5 className='mt-5'>✨ Here's what you'll receive:</h5>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div className="col-xl-3 col-md-6 d-flex"  data-aos-delay={100}>
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-diagram-3 icon" /></div>
          <h4><a href className="stretched-link">ERP System Development</a></h4>
                  <ul>
          <li><i className="" /> <span> ERP development to specific industries.</span></li>
          <li><i className="" /> <span>Integration with existing systems .</span></li>
          <li><i className="" /> <span>Comprehensive modules: Finance, HR, Inventory, Procurement, and CRM , etc..</span></li>
        </ul>
        </div>
      </div>{/* End Service Item */}
      <div className="col-xl-3 col-md-6 d-flex" data-aos-delay={200}>
        <div className="service-item position-relative">
          <div className="icon"> <i className="bi bi-code-slash icon" /></div>
          <h4><a href className="stretched-link">Software Development</a></h4>
          <p>End-to-end software development for business needs</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-xl-3 col-md-6 d-flex"  data-aos-delay={300}>
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-phone icon"  /></div>
          <h4><a href className="stretched-link">Mobile App Development</a></h4>
          <p>Development of native and cross-platform mobile applications for iOS and Android</p>
        </div>
      </div>{/* End Service Item */}
      <div className="col-xl-3 col-md-6 d-flex"  data-aos-delay={400}>
        <div className="service-item position-relative">
          <div className="icon"><i className="bi bi-tools icon"/></div>
          <h4><a href className="stretched-link">IT Consulting & System Support</a></h4>
          <ul>
          <li><i className="" /> <span>Remote IT Support Service.</span></li>
          <li><i className="" /> <span>Physical IT training.</span></li>
          <li><i className="" /> <span>Consulting IT related service</span></li>
        </ul>
        </div>
      </div>{/* End Service Item */}
    </div>
  </div>
</section>

  )
}

export default Services
