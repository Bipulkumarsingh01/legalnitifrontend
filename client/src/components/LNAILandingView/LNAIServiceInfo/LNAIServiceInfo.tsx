import Marquee from "react-fast-marquee";

import "./LNAIServiceInfo.css";

import {
  ImportLicense,
  PartnershipDeals,
  LegalDrafting,
  Affidavit,
  Will,
  LegalServicesBgTp,
  Company_taxAndCompilance,
  Accounting,
  MandatoryAnnualFilling,
  HardWorking,
  Estimate,
  Business_taxAndCompilance,
  Concept,
  Documents,
  Design,
  SigningADocument,
  Internet,
  PrivacyPolicy,
  RealEstate,
  Leave,
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
      <Marquee speed={50} direction={"left"} pauseOnHover={true} loop={0} gradient={true}>
      <div className="outer-slide-div-legalserices">
        <div className="lnai-service-info-cards-main-container-1 ">
          <div className="lnai-service-info-card">
            <img
              src={ImportLicense}
              alt="Import License"
              height={60}
              width={60}
            />
            <p>Import License</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={PartnershipDeals}
              alt="Import License"
              height={60}
              width={60}
            />
            <p>Partnership Deals</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={LegalDrafting}
              alt="Import License"
              height={60}
              width={60}
            />
            <p>Legal Drafting</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Affidavit} alt="Import License" height={60} width={60} />
            <p>Affidavit</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Will} alt="Import License" height={60} width={60} />
            <p>Will</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={Company_taxAndCompilance}
              alt="Changes Pvt. Ltd"
              height={60}
              width={60}
            />
            <p>Changes in Pvt. Limited Company</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Accounting} alt="Accounting" height={60} width={60} />
            <p>GST & other Indirect Tax</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={ImportLicense}
              alt="ImportLicense"
              height={60}
              width={60}
            />
            <p>Changes in LLP</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Design} alt="Design" height={60} width={60} />
            <p>Design Registration</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={SigningADocument}
              alt="SigningADocument"
              height={60}
              width={60}
            />
            <p>Business Contracts</p>
          </div>
        </div>
        <div className="lnai-service-info-cards-main-container-2 ">
          <div className="lnai-service-info-card">
            <img
              src={MandatoryAnnualFilling}
              alt="MandatoryAnnualFilling"
              height={60}
              width={60}
            />
            <p>Mandatory Annual Filling</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={HardWorking} alt="HardWorking" height={60} width={60} />
            <p>Labour Compliance</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Estimate} alt="Estimate" height={60} width={60} />
            <p>Accounting & Tax</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={Business_taxAndCompilance}
              alt="Business_taxAndCompilance"
              height={60}
              width={60}
            />
            <p>Convert you Business</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Concept} alt="Concept" height={60} width={60} />
            <p>Patent</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Documents} alt="Documents" height={60} width={60} />
            <p>Infringement</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Internet} alt="Internet" height={60} width={60} />
            <p>Website Policies</p>
          </div>
          <div className="lnai-service-info-card">
            <img
              src={PrivacyPolicy}
              alt="PrivacyPolicy"
              height={60}
              width={60}
            />
            <p>HR Policies</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={RealEstate} alt="RealEstate" height={60} width={60} />
            <p>Real Estate</p>
          </div>
          <div className="lnai-service-info-card">
            <img src={Leave} alt="Leave" height={60} width={60} />
            <p>Notice</p>
          </div>
        </div>
      </div>
      </Marquee>
    </div>
  );
};

export default LNAIServiceInfo;
