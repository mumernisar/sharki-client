import React, { useState } from "react";

export default function Step2({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    gender: "",
    file: null,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.full_name.trim()) errs.full_name = true;
    if (!formData.email.trim()) errs.email = true;
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleNext = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) onNext();
  };

  return (
    <div className="wizard-forms">
      <div className="inner pb-100 clearfix">
        <div className="form-content pera-content">
          <div className="step-inner-content">
            <span className="step-no bottom-line">Step 2</span>
            <div className="step-progress float-right">
              <span>2 of 5 completed</span>
              <div className="step-progress-bar">
                <div className="progress">
                  <div className="progress-bar"></div>
                </div>
              </div>
            </div>
            <h2>What kind of services you are quiz?</h2>
            <p>
              Tation argumentum et usu, dicit viderer evertitur te has. Eu
              dictas concludaturque usu, facete detracto patrioque an per,
              lucilius pertinacia eu vel.
            </p>
            <div className="form-inner-area">
              <input
                type="text"
                name="full_name"
                className={`form-control required ${
                  errors.full_name ? "is-invalid" : ""
                }`}
                placeholder="First and last name *"
                value={formData.full_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className={`form-control required ${
                  errors.email ? "is-invalid" : ""
                }`}
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="gender-selection">
              <h3>Gender:</h3>
              {["Male", "Female"].map((g) => (
                <label key={g}>
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  {g}
                </label>
              ))}
            </div>
            <div className="upload-documents">
              <h3>Upload Documents:</h3>
              <div className="upload-araa bg-white">
                <div className="upload-icon float-left">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <div className="upload-text">
                  <span>
                    ( File accepted: pdf. doc/ docx - Max file size : 150kb for
                    demo limit )
                  </span>
                </div>
                <div className="upload-option text-center">
                  <label htmlFor="attach">Upload The Documents</label>
                  <input
                    id="attach"
                    type="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                </div>
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
            <span className="js-btn-next" title="NEXT" onClick={handleNext}>
              NEXT <i className="fa fa-arrow-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
