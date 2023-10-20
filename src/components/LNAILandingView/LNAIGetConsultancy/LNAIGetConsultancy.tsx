import {
  ChooseConsultancy,
  OnCallDiscussion,
  RegisterQueries,
  SolutionDelivered,
} from "../../../assets";

import "./LNAIGetConsultancy.css";

const LNAIGetConsultancy = () => {
  return (
    <div className="lnai-landing-view-get-consultancy-container">
      <h1 className="lnai-landing-view-get-consultancy-heading">
        How to get{" "}
        <span className="lnai-landing-view-get-consultancy-heading-highlight">
          Consultancy ?
        </span>
      </h1>
      <div className="lnai-landing-view-get-consultancy-steps-main-container">
        <div className="lnai-landing-view-get-consultancy-steps-dotted-line"></div>
        <div className="lnai-landing-view-get-consultancy-steps-item register-queries-step-item">
          <img
            src={RegisterQueries}
            alt="RegisterQueries"
            height={90}
            width={90}
          />
          <h3>
            Register <br /> your query
          </h3>
        </div>
        <div className="lnai-landing-view-get-consultancy-steps-item choose-consultancy-step-item">
          <img
            src={ChooseConsultancy}
            alt="ChooseConsultancy"
            height={90}
            width={90}
          />
          <h3>
            Choose your <br /> Consultancy
          </h3>
        </div>
        <div className="lnai-landing-view-get-consultancy-steps-item on-call-discussion-step-item">
          <img
            src={OnCallDiscussion}
            alt="OnCallDiscussion"
            height={90}
            width={90}
          />
          <h3>
            On Call <br /> Discussion
          </h3>
        </div>
        <div className="lnai-landing-view-get-consultancy-steps-item solution-delivered-step-item">
          <img
            src={SolutionDelivered}
            alt="SolutionDelivered"
            height={90}
            width={90}
          />
          <h3>
            Solution <br /> Delivered
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LNAIGetConsultancy;
