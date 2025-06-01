import React, { useState } from "react";

export default function Step5({ onBack }) {
  const [selectedPlan, setSelectedPlan] = useState("Basic Plan");

  const plans = [
    {
      name: "Basic Plan",
      price: "$250.00",
      image: "/assets/v1/img/plan1.png",
    },
    {
      name: "Silver Plan",
      price: "$500.00",
      image: "/assets/v1/img/plan2.png",
    },
    {
      name: "Gold Plan",
      price: "$800.00",
      image: "/assets/v1/img/plan3.png",
    },
  ];

  return (
    <div className="wizard-forms">
      <div className="inner clearfix">
        <div className="form-content pera-content">
          <div className="step-inner-content">
            <span className="step-no bottom-line">Step 5</span>
            <div className="step-progress float-right">
              <span>5 of 5 completed</span>
              <div className="step-progress-bar">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <h2>Select Your Plan</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
            <div className="plan-selection-box">
              <div className="row">
                {plans.map((plan) => (
                  <div className="col-md-4" key={plan.name}>
                    <label
                      className={`plan-icon-text text-center bg-white ${
                        selectedPlan === plan.name ? "active" : ""
                      }`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      <span className="plan-icon">
                        <img src={plan.image} alt={plan.name} />
                      </span>
                      <span className="plan-text">
                        <span className="plan-title">{plan.name}</span>
                        <span className="plan-price">{plan.price}</span>
                      </span>
                      <input
                        type="radio"
                        name="plan"
                        value={plan.name}
                        checked={selectedPlan === plan.name}
                        readOnly
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <ul>
          <li>
            <span className="js-btn-prev" title="BACK" onClick={onBack}>
              <i className="fa fa-arrow-left"></i> BACK
            </span>
          </li>
          <li>
            <span
              className="js-btn-next"
              title="SUBMIT"
              onClick={() => alert("Submitted!")}
            >
              SUBMIT <i className="fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
