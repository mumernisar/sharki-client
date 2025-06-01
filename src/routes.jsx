// src/routes.js
import Home from "./pages/index";
import About from "./pages/about";
import CompanyOverview from "./pages/company-overview";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Faq from "./pages/faq";
// import ForgotPassword from "./pages/ForgotPassword";
// import Login from "./pages/login";
import NewsDetails from "./pages/news-details";
import NewsStandard from "./pages/news-standard";
import Pricing from "./pages/pricing";
import Project1 from "./pages/project-1";
import Project2 from "./pages/project-2";
import Project3 from "./pages/project-3";
import ProjectDetails from "./pages/project-details";
import TeamMember from "./pages/team-member";
import Survey from "./pages/survey/Survery";
import Testimonial from "./pages/testimonial";

const routes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/company-overview", Component: CompanyOverview },
  { path: "/contact", Component: Contact },
  { path: "/dashboard", Component: Dashboard },
  { path: "/faq", Component: Faq },
  //   { path: "/forgot-password", Component: ForgotPassword },
  // { path: "/login", Component: Login },
  { path: "/news-details", Component: NewsDetails },
  { path: "/news-standard", Component: NewsStandard },
  { path: "/pricing", Component: Pricing },
  { path: "/project-1", Component: Project1 },
  { path: "/project-2", Component: Project2 },
  { path: "/project-3", Component: Project3 },
  { path: "/project-details", Component: ProjectDetails },
  { path: "/survey", Component: Survey },
  { path: "/team-member", Component: TeamMember },
  { path: "/testimonial", Component: Testimonial },
];

export default routes;
