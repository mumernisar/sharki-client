import { Link } from "react-router-dom";
import PageBanner from "../components//PageBanner";
import Layout from "../layouts/Layout";

const Project2 = () => {
  return (
    <Layout>
      <PageBanner pageName="Latest Project" />
      <section className="project-section section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row justify-content-center project-items project-style-two">
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-01.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Video &amp; Movies</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      Best Romantic &amp; Action English Movie Release in 2022.
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">79%</span>
                    </div>
                    <div className="stats-bar" data-value={79}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-02.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Technology</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      Original Shinecon VR Pro Virtual Reality 3D Glasses VRBOX
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">85%</span>
                    </div>
                    <div className="stats-bar" data-value={85}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-03.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Educations</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      Needs Close Up Students Class Room In University
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-04.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Gaming &amp; Tech </Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/01.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      Fundraising For The People And Causes You Care About
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">83%</span>
                    </div>
                    <div className="stats-bar" data-value={83}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-05.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Headphone</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/03.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      Mobile First Is Just Not Goodies Enough Meet Journey
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">70%</span>
                    </div>
                    <div className="stats-bar" data-value={70}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-10">
              <div className="project-item mb-30">
                <div
                  className="thumb"
                  style={{
                    backgroundImage:
                      "url(assets/img/project/project-list-06.jpg)",
                  }}
                />
                <div className="content">
                  <div className="cats">
                    <Link to="/project-1">Covid -19</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/author-thumbs/02.jpg" alt="Thumb" />
                    <Link to="/project-details">James W. Barrows</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/project-details">
                      COVID-19 Vaccine Have Already Begun Introduced Countries
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">93%</span>
                    </div>
                    <div className="stats-bar" data-value={93}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="view-more-btn text-center mt-40">
                <Link to="/project-details" className="main-btn bordered-btn">
                  View More Project <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project2;
