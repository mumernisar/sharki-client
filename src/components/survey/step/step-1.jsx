import React, { useState } from "react";

const options = [
  {
    label: "Corporate Services",
    value: "Corporate Services",
    image: "/assets/v1/img/d1.png",
  },
  {
    label: "Freelancing Services",
    value: "Freelancing Services",
    image: "/assets/v1/img/d2.png",
  },
  {
    label: "Development",
    value: "Development Services",
    image: "/assets/v1/img/d3.png",
  },
];

export default function Step1({ onNext }) {
  const [selected, setSelected] = useState("Corporate Services");

  return (
    <div className="wizard-forms">
      <div className="inner clearfix">
        <div className="form-content pera-content">
          <div className="step-inner-content">
            <span className="step-no">Step 1</span>
            <h2>What kind of Services You need?</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
            <div className="step-box">
              <div className="row">
                {options.map((opt) => (
                  <div className="col-md-4" key={opt.value}>
                    <label
                      className={`step-box-content bg-white text-center relative-position ${
                        selected === opt.value ? "active" : ""
                      }`}
                      onClick={() => setSelected(opt.value)}
                    >
                      <span className="step-box-icon">
                        <img src={opt.image} alt="" />
                      </span>
                      <span className="step-box-text">{opt.label}</span>
                      <span className="service-check-option">
                        <span>
                          <input
                            type="radio"
                            name="service_name"
                            value={opt.value}
                            checked={selected === opt.value}
                            readOnly
                          />
                        </span>
                      </span>
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
          <li className="disable" aria-disabled="true">
            <span className="js-btn-next" title="NEXT">
              Backward <i className="fa fa-arrow-right" />
            </span>
          </li>
          <li>
            <span className="js-btn-next" title="NEXT" onClick={onNext}>
              NEXT <i className="fa fa-arrow-right" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
