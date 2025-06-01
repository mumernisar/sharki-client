import React, { useState } from "react";
import { Link } from "react-router-dom";

const WalletInfo = ({ pageName, setShowSurvey }) => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <section className="">
      <div className="container container-wallet py-4">
        <div className="card p-4">
          {/* Header: User Info & Buttons */}
          <div className="row align-items-center justify-content-between mb-4">
            <div className="col-md-6 col-12 mb-3 mb-md-0">
              <h5 className="mb-1 font-weight-bold">John Doe</h5>
              <small className="text-muted">Wallet ID: 0x1234...abcd</small>
            </div>

            <div className="col-md-6 col-12">
              <div className="d-flex flex-wrap justify-content-md-end">
                <button
                  className="btn btn-primary mr-2 mb-2"
                  onClick={() => setShowSurvey(true)}
                >
                  <i className="fa fa-plus mr-1"></i> Create Proposal
                </button>
                <button className="btn btn-outline-secondary mr-2 mb-2">
                  <i className="fa fa-eye mr-1"></i> View Investments
                </button>
                <button className="btn btn-outline-secondary mb-2">
                  <i className="fa fa-sync-alt mr-1"></i> History
                </button>
              </div>
            </div>
          </div>

          {/* Wallet Summary Section (Shared) */}
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-md-row justify-content-between">
                {/* Left Side */}
                <div className="mb-4 mb-md-0">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <strong>Estimated Balance</strong>
                    <i
                      className={`fa ${
                        hidden ? "fa-eye-slash" : "fa-eye"
                      } text-muted`}
                      onClick={toggleHidden}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <h5 className="font-weight-bold">
                    {hidden ? "*** Balance hidden ***" : "$5,280.00"}
                  </h5>
                  <div className="text-muted">******</div>
                </div>

                {/* Right Side */}
                <div className="text-md-right">
                  <div className="d-flex justify-content-between justify-content-md-end align-items-center mb-2">
                    <strong className="mr-2">PNL</strong>
                    <span className="badge badge-light">
                      Today <i className="fa fa-caret-down ml-1" />
                    </span>
                  </div>
                  <div className="font-weight-bold">******</div>
                  <div className="font-weight-bold">******</div>
                </div>
              </div>

              {/* Mobile-Only Camera & PNL Info Row */}
              <div className="d-flex d-md-none align-items-center justify-content-between mt-4">
                <span className="text-muted">
                  Equity Value (BTC)
                  <i
                    className={`fa ${hidden ? "fa-eye-slash" : "fa-eye"} ml-2`}
                    onClick={toggleHidden}
                    style={{ cursor: "pointer" }}
                  />
                </span>
                <i className="fa fa-camera text-muted" />
              </div>

              <div className="d-flex d-md-none align-items-center justify-content-between mt-2">
                <span className="text-muted">
                  Today's PNL <i className="fa fa-info-circle ml-1" />
                </span>
                <span>******</span>
              </div>

              {/* Mobile-Only Transfer Buttons
              <div className="d-md-none btn-group d-flex flex-column mt-3">
                <button className="btn btn-warning mb-2 w-100">Deposit</button>
                <button className="btn btn-light mb-2 w-100">Withdraw</button>
                <button className="btn btn-light w-100">Transfer</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletInfo;
