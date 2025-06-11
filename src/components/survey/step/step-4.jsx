import React, { useState } from "react";

export default function Step4({ onNext, onBack }) {
  const [budget, setBudget] = useState("$390 - $600");
  const [support, setSupport] = useState("2 to 6 month");
  const [optimizations, setOptimizations] = useState(["Semantic coding"]);
  const [note, setNote] = useState("");

  const toggleOptimization = (value) => {
    setOptimizations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const options = ["Semantic coding", "Mobile APP", "Mobile Design"];

  return (
    <div className="wizard-forms">
      <div className="inner clearfix">
        <div className="form-content pera-content">
          <div className="step-inner-content">
            <span className="step-no bottom-line">Step 4</span>

            <h2>What kind of services You Need</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
            <div className="step-content-area">
              <div className="budget-area">
                <p>
                  <i className="fas fa-dollar-sign"></i> Budget
                </p>
                <select
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  {Array(5)
                    .fill("$390 - $600")
                    .map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
              </div>
              <div className="budget-area">
                <p>
                  <i className="fas fa-comments"></i> Required Support
                </p>
                <select
                  name="support_period"
                  value={support}
                  onChange={(e) => setSupport(e.target.value)}
                >
                  {Array(5)
                    .fill("2 to 6 month")
                    .map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                </select>
              </div>
              <div className="budget-area">
                <p>Optimization and Accessibility</p>
                <div className="opti-list">
                  <ul className="d-md-flex">
                    {options.map((opt) => (
                      <li
                        key={opt}
                        className={`bg-white ${
                          optimizations.includes(opt) ? "active" : ""
                        }`}
                        onClick={() => toggleOptimization(opt)}
                      >
                        <input
                          type="checkbox"
                          name={`code_opti_${opt}`}
                          value={opt}
                          checked={optimizations.includes(opt)}
                          readOnly
                        />
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="comment-box">
                <p>
                  <i className="fas fa-comments"></i> Write Something note
                </p>
                <textarea
                  name="comments-note"
                  placeholder="Your Content Here"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
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
            <span className="js-btn-next" title="NEXT" onClick={onNext}>
              NEXT <i className="fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
