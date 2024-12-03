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
          Greenlight Technology Solutions is a dynamic software development company committed 
          to delivering cutting-edge technology solutions tailored to the unique needs of businesses. 
          Founded in 2019 and headquartered in Addis Ababa, Ethiopia, we have been at the forefront of bridging 
          innovation with practicality, helping organizations achieve their objectives with scalable and impactful software solutions.
          <br/><br/>
Our company specializes in creating tailored digital solutions that enhance operational efficiency, 
streamline processes, and provide businesses with the tools they need to thrive in a competitive landscape. With expertise spanning various industries,
 we serve clients ranging from startups to established enterprises, offering solutions that align with their unique goals and challenges.
 <br/><br/>
 At Greenlight Technology Solutions, we understand that every business is different. That’s why we take a consultative approach to deeply understand our clients' needs, 
 ensuring our solutions are not only innovative but also practical and result oriented.
        </p>
        {/* <ul>
          <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
          <li><i className="bi bi-check2-circle" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
          <li><i className="bi bi-check2-circle" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo</span></li>
        </ul> */}
      </div>
      <div className="col-lg-6"  data-aos-delay={200}>
        <p>Our team consists of highly skilled developers, designers, and strategists who are passionate about leveraging technology to create meaningful change. 
          We combine creativity and technical expertise to design solutions that drive tangible results and sustainable growth for businesses worldwide.
          <br/><br/>
          As a forward-thinking company, we are dedicated to staying ahead of technological trends, 
          ensuring our clients benefit from the most advanced and reliable solutions available. By partnering with Greenlight Technology Solutions, businesses gain a trusted technology ally that’s committed to their success.

          <br/><br/>
          <h4>Mission:</h4>
         To empower businesses with innovative software solutions that simplify processes, enhance efficiency, and foster growth.<br/><br/>
         <h4>Vision:</h4>
         To become a global leader in delivering transformative software that shapes the future of industries.

</p>

        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right" /></a>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
