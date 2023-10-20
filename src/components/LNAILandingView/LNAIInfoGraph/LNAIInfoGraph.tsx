import { Crowd, Handshake, Tick } from "../../../assets";
import "./LNAIInfograph.css";

const LNAIInfoGraph = () => {
  return (
    <div className="lnai-info-graph-main-container">
      <div className="lnai-info-graph-detail-container-1">
        <img src={Crowd} alt="Trusted Lawyers" width={50} height={50} />
        <div className="lnai-info-graph-detail-number-container">
          <h2>10K+</h2>
          <p>
            Happy{" "}
            <span className="lnai-info-graph-highlight-text">Customers</span>
          </p>
        </div>
      </div>
      <div className="lnai-info-graph-detail-container-2">
        <img src={Tick} alt="Queries Solved" width={50} height={50} />
        <div className="lnai-info-graph-detail-number-container">
          <h2>50K+</h2>
          <p>
            <span className="lnai-info-graph-highlight-text">Queries</span>{" "}
            Solved
          </p>
        </div>
      </div>
      <div className="lnai-info-graph-detail-container-3">
        <img src={Handshake} alt="Trusted Lawyers" width={50} height={50} />
        <div className="lnai-info-graph-detail-number-container">
          <h2>20+</h2>
          <p>
            Trusted{" "}
            <span className="lnai-info-graph-highlight-text">Lawyers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LNAIInfoGraph;
