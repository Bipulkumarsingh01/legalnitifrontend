import "./LNAIServiceInfo.css";

import {
  ImportLicense,
  PartnershipDeals,
  LegalDrafting,
  Affidavit,
  Will,
  LegalServicesBgTp,
} from "../../../assets";

const LNAIServiceInfo = () => {
  return (
    <div
      className="lnai-service-info-container"
      style={{
        background: `url(${LegalServicesBgTp})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // backgroundPosition: "center",
      }}
    >
      <h1 className="lnai-service-info-container-heading">
        Discover 50+{" "}
        <span className="lnai-service-info-container-heading-highlight-text">
          Legal services
        </span>{" "}
        over one platform
      </h1>
      <div className="lnai-service-info-cards-main-container-1">
        <div className="lnai-service-info-card">
          <img
            src={ImportLicense}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Import License</p>
        </div>

        <div className="lnai-service-info-card">
          <img
            src={PartnershipDeals}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Partnership Deals</p>
        </div>

        <div className="lnai-service-info-card">
          <img
            src={LegalDrafting}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Legal Drafting</p>
        </div>

        <div className="lnai-service-info-card">
          <img src={Affidavit} alt="Import License" height={75} width={75} />
          <p>Affidavit</p>
        </div>

        <div className="lnai-service-info-card">
          <img src={Will} alt="Import License" height={75} width={75} />
          <p>Will</p>
        </div>
      </div>

      <div className="lnai-service-info-cards-main-container-2">
        <div className="lnai-service-info-card">
          <img
            src={ImportLicense}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Import License</p>
        </div>

        <div className="lnai-service-info-card">
          <img
            src={PartnershipDeals}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Partnership Deals</p>
        </div>

        <div className="lnai-service-info-card">
          <img
            src={LegalDrafting}
            alt="Import License"
            height={75}
            width={75}
          />
          <p>Legal Drafting</p>
        </div>

        <div className="lnai-service-info-card">
          <img src={Affidavit} alt="Import License" height={75} width={75} />
          <p>Affidavit</p>
        </div>
      </div>
    </div>
  );
};

export default LNAIServiceInfo;
