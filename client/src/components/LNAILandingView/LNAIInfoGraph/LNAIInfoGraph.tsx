import CountUp from "react-countup";

import { Crowd, Handshake, Tick } from "../../../assets";

import "./LNAIInfograph.css";

const LNAIInfoGraph = () => {
  return (
    <div>
      <div className="lnai-info-graph-main-container">
        {/* <div className="lnai-landing-view-info-graph-dashed-gradient-line">
          <hr />
          <hr />
          <hr />
        </div> */}

        <div className="lnai-info-graph-detail-container-1">
          <img src={Crowd} alt="Trusted Lawyers" width={50} height={50} />
          <div className="lnai-info-graph-detail-number-container">
            <h2>
              {" "}
              <span className="lnai-info-graph-number-span">
                <CountUp start={0} end={10000} duration={2} />
              </span>
              {/* K+ */}+
            </h2>
            
            <p>
              Happy{" "}
              <span className="lnai-info-graph-highlight-text">Customers</span>
            </p>
          </div>
        </div>
        <div className="lnai-info-graph-detail-container-2">
          <img src={Tick} alt="Queries Solved" width={50} height={50} />
          <div className="lnai-info-graph-detail-number-container">
            <h2>
              {" "}
              <span className="lnai-info-graph-number-span">
                <CountUp start={0} end={50000} duration={4} />
              </span>
              +{/* K+ */}
            </h2>
            <p>
              <span className="lnai-info-graph-highlight-text">Queries</span>{" "}
              Solved
            </p>
          </div>
        </div>
        <div className="lnai-info-graph-detail-container-3">
          <img src={Handshake} alt="Trusted Lawyers" width={50} height={50} />
          <div className="lnai-info-graph-detail-number-container">
            <h2>
              {" "}
              <span className="lnai-info-graph-number-span">
                <CountUp start={0} end={20000} duration={3} />
              </span>
              +{/* K+ */}
            </h2>
            <p>
              Trusted{" "}
              <span className="lnai-info-graph-highlight-text">Lawyers</span>
            </p>
          </div>
        </div>

        {/* <div className="lnai-landing-view-info-graph-dashed-gradient-line">
          <hr />
          <hr />
          <hr />
        </div> */}

        {/* Keep This dashed line its responsive */}
        <hr className="lnai-landing-view-info-graph-dashed-gradient-line" />
      </div>
    </div>
  );
};

export default LNAIInfoGraph;
