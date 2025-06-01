import { Link } from "react-router-dom";
import { useState } from "react";
import WalletInfo from "../components/WalletInfo";
import PageBanner from "../components/PageBanner";
import Layout from "../layouts/Layout";
import Table from "./../components/table/Table";
import Survey from "./../components/survey/Survey";

const Dashboard = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <Layout>
      <Survey show={showSurvey} handleClose={() => setShowSurvey(false)} />
      <PageBanner pageName="Dashboard" />
      <WalletInfo showSurvey={showSurvey} setShowSurvey={setShowSurvey} />
      <Table />
      <section className="event-area section-gap-extra-bottom">
        <div className="container">
          <div className="event-items">
            <div
              className="single-event-item mb-30 "
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="event-thumb">
                <img src="assets/img/event/01.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link className="date category" aria-disabled>
                      <i className="far fa-calendar-alt" /> 25 February 2021
                    </Link>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    Combining UX Design &amp; Psychology
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque . Sed ut perspiciatis
                  unde omnis iste natus error voluptatem accus laudantium totam
                  rem aperiam eaque
                </p>
                <div className="project-stats ">
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
              </div>

              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="single-event-item mb-30 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="event-thumb">
                <img src="assets/img/event/02.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link to="/project-1" className="category">
                      Meetup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      <i className="fal fa-map-marker-alt" />
                      25 Main Street ,New York
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    App Development Hawaiian Airlines
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque
                </p>
              </div>
              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="single-event-item mb-30 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="event-thumb">
                <img src="assets/img/event/03.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link to="/project-1" className="category">
                      Meetup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      <i className="fal fa-map-marker-alt" />
                      25 Main Street ,New York
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    App Development Hawaiian Airlines
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque
                </p>
              </div>
              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="single-event-item mb-30 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="event-thumb">
                <img src="assets/img/event/04.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link to="/project-1" className="category">
                      Meetup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      <i className="fal fa-map-marker-alt" />
                      25 Main Street ,New York
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    Combining UX Design &amp; Psychology
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque
                </p>
              </div>
              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="single-event-item mb-30 "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="event-thumb">
                <img src="assets/img/event/05.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link to="/project-1" className="category">
                      Meetup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      <i className="fal fa-map-marker-alt" />
                      25 Main Street ,New York
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    App Development Hawaiian Airlines
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque
                </p>
              </div>
              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="single-event-item "
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="event-thumb">
                <img src="assets/img/event/06.jpg" alt="Image" />
              </div>
              <div className="event-content">
                <ul className="meta">
                  <li>
                    <Link to="/project-1" className="category">
                      Meetup
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="date">
                      <i className="fal fa-map-marker-alt" />
                      25 Main Street ,New York
                    </a>
                  </li>
                </ul>
                <h4 className="event-title">
                  <Link to="/project-details">
                    App Development Hawaiian Airlines
                  </Link>
                </h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accus laudantium totam rem aperiam eaque
                </p>
              </div>
              <div className="event-button">
                <Link to="/project-details" className="main-btn bordered-btn">
                  Join Event <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="view-more-btn text-center mt-80">
              <Link to="/dashboard" className="main-btn bordered-btn">
                View More dashboard <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
