import React, { useEffect, useState } from "react";
import AOS from "aos";
import Step1 from "./step/step-1.jsx";
import Step2 from "./step/step-2.jsx";
import Step3 from "./step/step-3.jsx";
import Step4 from "./step/step-4.jsx";
import Step5 from "./step/step-5.jsx";

export default function Survey({ show, handleClose }) {
  const [step, setStep] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];
  useEffect(() => {
    if (show) {
      requestAnimationFrame(() => {
        AOS.refreshHard();
      });
    }
  }, [show]);
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [show]);

  useEffect(() => {
    const setHeight = () => {
      const panel = document.querySelector(".multisteps-form__panel.js-active");
      const form = document.querySelector(".multisteps-form__form");
      if (panel && form) {
        form.style.height = `${panel.offsetHeight}px`;
      }
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, [step]);

  const renderStepButtons = () => {
    return [0, 1, 2, 3, 4].map((index) => (
      <li
        key={index}
        className={`multisteps-form__progress-btn ${
          index === step ? "js-active current" : index < step ? "js-active" : ""
        }`}
      >
        <span>{index + 1}</span>
      </li>
    ));
  };

  return (
    <div
      className={`modal fade-scale ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      role="dialog"
      aria-hidden={!show}
    >
      {show && <div className="survey-backdrop" />}
      <div
        className={`modal-dialog modal-survey-lg modal-dialog-centered  ${
          show ? "survey-blowup-in" : "survey-blowup-out"
        } `}
        role="document"
      >
        <div className="modal-content" data-aos="zoom-in" data-aos-delay="100">
          <div className="modal-header">
            <h5 className="modal-title">
              <i className="fa fa-clipboard-list mr-2" /> Survey
            </h5>
            <button type="button" className="close" onClick={handleClose}>
              <span>&times;</span>
            </button>
          </div>

          <div
            className="modal-body"
            style={{ maxHeight: "75vh", minHeight: "70vh", overflowY: "auto" }}
          >
            <div className="wrapper">
              <div className="steps-area steps-area-fixed">
                <div className="image-holder">
                  <img src={"/assets/img/side-img.jpg"} alt="Survey" />
                </div>
                <div className="steps clearfix">
                  <ul className="tablist multisteps-form__progress">
                    {renderStepButtons()}
                  </ul>
                </div>
              </div>

              <form
                className="multisteps-form__form"
                style={{ height: "auto" }}
                id="wizard"
                method="POST"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-area position-relative">
                  {steps.map((Comp, idx) => (
                    <div
                      key={idx}
                      className={`multisteps-form__panel ${
                        step === idx
                          ? "js-active animate__animated slideHorz"
                          : ""
                      }`}
                      data-animation="slideHorz"
                    >
                      {React.cloneElement(Comp, {
                        onNext: () => setStep(step + 1),
                        onBack: () => setStep(step - 1),
                      })}
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={handleClose}>
              <i className="fa fa-times mr-1" />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
