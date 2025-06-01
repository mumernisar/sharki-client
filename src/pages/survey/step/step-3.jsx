import React, { useState } from "react";

export default function Step3({ onNext, onBack }) {
  const [selectedService, setSelectedService] = useState("Web Design");
  const [language, setLanguage] = useState("English");
  const [comment, setComment] = useState("");

  const services = ["Web Design", "Web Development", "Graphics Design", "SEO"];

  const languages = ["English", "Arabic", "Spanish", "French"];

  return (
    <div className="wizard-forms">
      <div className="inner pb-100 clearfix">
        <div className="form-content pera-content">
          <div className="step-inner-content">
            <span className="step-no bottom-line">Step 3</span>
            <div className="step-progress float-right">
              <span>3 of 5 completed</span>
              <div className="step-progress-bar">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
            <h2>What kind of services You Need</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
            <div className="services-select-option">
              <ul>
                {services.map((service) => (
                  <li
                    key={service}
                    className={`bg-white ${
                      selectedService === service ? "active" : ""
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    <label>
                      {service}
                      <input
                        type="radio"
                        name="web_service"
                        value={service}
                        checked={selectedService === service}
                        readOnly
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="language-select">
              <p>I want to browse projects in the following languages:</p>
              <select
                name="languages"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
            <div className="comment-box">
              <p>
                <i className="fas fa-comments"></i> Write Something note
              </p>
              <textarea
                name="full_comments"
                placeholder="Write here"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
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
            <span className="js-btn-next" title="NEXT" onClick={onNext}>
              NEXT <i className="fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
