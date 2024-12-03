import React from 'react'

const About = () => {
  return (
 <section id="about" className="about section">
  {/* Section Title */}
  <div className="container section-title" >
    <h2>About Us</h2>
  </div>{/* End Section Title */}
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-6 content"  data-aos-delay={100}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <ul>
          <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check2-circle" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
        </ul>
      </div>
      <div className="col-lg-6"  data-aos-delay={200}>
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right" /></a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
