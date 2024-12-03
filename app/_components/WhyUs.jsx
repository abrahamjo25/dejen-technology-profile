import React from 'react'

const WhyUs = () => {
  return (
<section id="why-us" className="section why-us light-background" data-builder="section">
  <div className="container-fluid">
    <div className="row gy-4">
      <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">
        <div className="content px-xl-5"  data-aos-delay={100}>
          <h4>Key Skills for a Software Development</h4>
          <p>
          Our Company have diverse set of technical and non-technical skills to excel in delivering quality solutions. Below is a categorized list of key skills:
          </p>
        </div>
        <div className="faq-container px-xl-5"  data-aos-delay={200}>
          <div className="faq-item faq-active">
            <h3><span>01</span> Technical Skills</h3>
            <div className="faq-content">
              <p>
            <ul>
          <li><i className="" /> <span>Programming and Development.</span></li>
          <li><i className="" /> <span>System Design and Architecture.</span></li>
          <li><i className="" /> <span>Database Management</span></li>
          <li><i className="" /> <span>ERP Development</span></li>
          <li><i className="" /> <span>Cybersecurity</span></li>
          <li><i className="" /> <span>Software Testing</span></li>
          <li><i className="" /> <span>DevOps and CI/CD</span></li>
        </ul>
        </p>
            </div>
            <i className="faq-toggle bi bi-chevron-right" />
          </div>{/* End Faq item*/}
          <div className="faq-item">
            <h3><span>02</span> Design and User Experience</h3>
            <div className="faq-content">
              <p>            <ul>
          <li><i className="" /> <span>UI/UX Design: Creating user-friendly and intuitive interfaces.</span></li>
          <li><i className="" /> <span>Graphic Design: For branding, logos, and visuals.</span></li>
          <li><i className="" /> <span>Prototyping Tools: Figma, Adobe XD, Sketch.</span></li>
        </ul> </p>
            </div>
            <i className="faq-toggle bi bi-chevron-right" />
          </div>{/* End Faq item*/}
          <div className="faq-item">
            <h3><span>03</span> Business and Project Management Skills</h3>
            <div className="faq-content">
              <p>            <ul>
          <li><i className="" /> <span>Project Management.</span></li>
          <li><i className="" /> <span>Client Relationship Management.</span></li>
          <li><i className="" /> <span>Business Analysis</span></li>
          <li><i className="" /> <span>Product Management</span></li>
        </ul></p>
            </div>
            <i className="faq-toggle bi bi-chevron-right" />
          </div>{/* End Faq item*/}
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 why-us-img">
        <img src="assets/img/why-us.png" className="img-fluid" alt  data-aos-delay={100} />
      </div>
    </div>
  </div>
</section>

  )
}

export default WhyUs
