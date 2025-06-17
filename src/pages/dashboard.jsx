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
      <section className="event-area section-gap-extra-bottom"></section>
    </Layout>
  );
};

export default Dashboard;
