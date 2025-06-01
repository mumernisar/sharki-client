import React from "react";
import CardHeader from "./CardHeader";
import Pagination from "./Pagination";
import HorizontalProgress from "./HorizontalProgress";
import { projectsData } from "./fackData.js";

const ProjectTracker = () => {
  const data = projectsData.trackerProjects;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="10"
      className="container container-wallet"
    >
      <div className="card stretch stretch-full">
        <CardHeader title={"Project Tracker"} />

        <div className="card-body custom-card-action p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col" className="w-25">
                    Status
                  </th>
                  <th scope="col">Time</th>
                  <th scope="col">Logged</th>
                  <th scope="col" className="text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map(
                  (
                    {
                      comment,
                      logged_time,
                      progress,
                      remaing_time,
                      working_time,
                      title,
                      icon,
                      brColor,
                    },
                    index
                  ) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-text bg-soft-primary text-primary mr-3">
                            <i className="fas fa-clock"></i>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="font-weight-bold d-block mb-1"
                            >
                              {title}
                            </a>
                            <div className="d-flex">
                              <a
                                href="#"
                                className="d-flex align-items-center text-muted mr-3"
                                style={{ fontSize: "11px", fontWeight: 400 }}
                              >
                                <i
                                  className="fas fa-clock mr-1"
                                  style={{ fontSize: "10px" }}
                                ></i>
                                <span>{remaing_time}</span>
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center text-muted"
                                style={{ fontSize: "11px", fontWeight: 400 }}
                              >
                                <i
                                  className="fas fa-comment mr-1"
                                  style={{ fontSize: "10px" }}
                                ></i>
                                <span>{comment} comments</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="mb-2"
                          style={{ fontSize: "12px", fontWeight: 500 }}
                        >
                          {progress}% Completed
                        </div>
                        <HorizontalProgress
                          progress={progress}
                          barColor={brColor}
                        />
                      </td>
                      <td>{working_time}</td>
                      <td className="font-weight-bold">{logged_time}</td>
                      <td>
                        <div className="d-flex justify-content-end">
                          <a href="#" className="avatar-text avatar-md mr-2">
                            <i className="fas fa-globe"></i>
                          </a>
                          <a href="#" className="avatar-text avatar-md mr-2">
                            <i className="fas fa-print"></i>
                          </a>
                          <a href="#" className="avatar-text avatar-md">
                            <i className="fas fa-bell"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-footer">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProjectTracker;
