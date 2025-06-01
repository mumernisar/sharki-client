import { Link } from "react-router-dom";
const PageBanner = ({ pageName }) => {
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8">
            <h1 className="page-title">{pageName}</h1>
          </div>
          <div className="col-auto">
            <ul className="page-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="text-muted">{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
