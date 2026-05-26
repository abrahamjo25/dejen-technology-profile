import React from "react";

const Team = () => {
  return (
    <section id="team" className="team section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Team</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos-delay={100}>
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <img src="assets/img/team/tea.jpg" className="img-fluid" alt />
              </div>
              <div className="member-info">
                <h4>Sewlesew Biazen</h4>
                <span>Software Developer</span>
                {/* <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p> */}
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="bi bi-linkedin" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div className="col-lg-6" data-aos-delay={200}>
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <img
                  src="assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="member-info">
                <h4>Talegeta Mandefro</h4>
                <span>Software Develper</span>
                {/* <p>Aut maiores voluptates amet et quis praesentium qui senda para</p> */}
                <div className="social">
                  <a href="https://www.linkedin.com/in/talegeta-mandefro-687918237/">
                    {" "}
                    <i className="bi bi-linkedin" />{" "}
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div className="col-lg-6" data-aos-delay={300}>
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt
                />
              </div>
              <div className="member-info">
                <h4>Abraham Yohannes</h4>
                <span>Software Developer</span>
                {/* <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p> */}
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/abraham-yohannes-a1257a262"
                    target="_blank"
                  >
                    {" "}
                    <i className="bi bi-linkedin" />{" "}
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
          <div className="col-lg-6" data-aos-delay={400}>
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <img src="assets/img/team/tea.jpg" className="img-fluid" alt />
              </div>
              <div className="member-info">
                <h4>Habtamu Awoke</h4>
                <span>Software Developer </span>
                {/* <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p> */}
                <div className="social">
                  <a href="#">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#">
                    {" "}
                    <i className="bi bi-linkedin" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Team Member */}
        </div>
      </div>
    </section>
  );
};

export default Team;
