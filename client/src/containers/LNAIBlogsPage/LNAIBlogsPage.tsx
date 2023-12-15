import { Button } from "@mui/material";
import { BlogPostMain, BlogPostSub, Clock } from "../../assets";
import { LNAIFooter, LNAINavBar } from "../../components";

import "./LNAIBlogsPage.css";

const LNAIBlogsPage = () => {
  return (
    <div>
      <LNAINavBar />
      <div className="lnai-blogs-page-parent-container">
        <div className="lnai-blogs-page-content-container">
          <div className="lnai-blogs-page-blog-item">
            <div className="lnai-blogs-page-blog-item-heading">
              <h1>What's New</h1>
              <hr />
            </div>
            <div className="lnai-blogs-page-blog-item-posts-parent-container">
              <div className="lnai-blogs-page-blog-item-posts-main-post">
                <img
                  src={BlogPostMain}
                  alt="BlogPostMain"
                  height={"70%"}
                  width={"100%"}
                />
                <div className="lnai-blogs-page-blog-item-posts-main-post-footer-content">
                  <Button variant="LNAIPurpleGradientLight">
                    Private Limited
                  </Button>
                  <div className="lnai-blogs-page-blog-item-posts-main-post-footer-timings-container">
                    <img src={Clock} alt="Clock" height={25} width={25} />
                    <span>4 mins read</span>
                  </div>
                </div>
                <div>
                  <h4>Private Placement - Section 42 of Companies Act 2013</h4>
                  <p>
                    Introduction A private placement is an efficient and
                    economical option for a company to raise...
                  </p>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-1">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    Process of Registration under RERA in Maharashtra -
                    maharerait.mahaonline.gov.in
                  </h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-2">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">GST</Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>How to Check GST ARN Status?</h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-3">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    What is the Previous Year and Assessment Year in Income Tax?
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lnai-blogs-page-blog-item">
            <div className="lnai-blogs-page-blog-item-heading">
              <h1>Starting a Business</h1>
              <hr />
            </div>
            <div className="lnai-blogs-page-blog-item-posts-parent-container">
              <div className="lnai-blogs-page-blog-item-posts-main-post">
                <img
                  src={BlogPostMain}
                  alt="BlogPostMain"
                  height={"70%"}
                  width={"100%"}
                />
                <div className="lnai-blogs-page-blog-item-posts-main-post-footer-content">
                  <Button variant="LNAIPurpleGradientLight">
                    Private Limited
                  </Button>
                  <div className="lnai-blogs-page-blog-item-posts-main-post-footer-timings-container">
                    <img src={Clock} alt="Clock" height={25} width={25} />
                    <span>4 mins read</span>
                  </div>
                </div>
                <div>
                  <h4>Private Placement - Section 42 of Companies Act 2013</h4>
                  <p>
                    Introduction A private placement is an efficient and
                    economical option for a company to raise...
                  </p>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-1">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    Process of Registration under RERA in Maharashtra -
                    maharerait.mahaonline.gov.in
                  </h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-2">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">GST</Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>How to Check GST ARN Status?</h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-3">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    What is the Previous Year and Assessment Year in Income Tax?
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lnai-blogs-page-blog-item-banner-image">Banner</div>

          <div className="lnai-blogs-page-blog-item">
            <div className="lnai-blogs-page-blog-item-heading">
              <h1>Intellectual Property</h1>
              <hr />
            </div>
            <div className="lnai-blogs-page-blog-item-posts-parent-container">
              <div className="lnai-blogs-page-blog-item-posts-main-post">
                <img
                  src={BlogPostMain}
                  alt="BlogPostMain"
                  height={"70%"}
                  width={"100%"}
                />
                <div className="lnai-blogs-page-blog-item-posts-main-post-footer-content">
                  <Button variant="LNAIPurpleGradientLight">
                    Private Limited
                  </Button>
                  <div className="lnai-blogs-page-blog-item-posts-main-post-footer-timings-container">
                    <img src={Clock} alt="Clock" height={25} width={25} />
                    <span>4 mins read</span>
                  </div>
                </div>
                <div>
                  <h4>Private Placement - Section 42 of Companies Act 2013</h4>
                  <p>
                    Introduction A private placement is an efficient and
                    economical option for a company to raise...
                  </p>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-1">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    Process of Registration under RERA in Maharashtra -
                    maharerait.mahaonline.gov.in
                  </h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-2">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">GST</Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>How to Check GST ARN Status?</h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-3">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    What is the Previous Year and Assessment Year in Income Tax?
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lnai-blogs-page-blog-item-banner-image">Banner</div>

          <div className="lnai-blogs-page-blog-item">
            <div className="lnai-blogs-page-blog-item-heading">
              <h1>Taxation</h1>
              <hr />
            </div>
            <div className="lnai-blogs-page-blog-item-posts-parent-container">
              <div className="lnai-blogs-page-blog-item-posts-main-post">
                <img
                  src={BlogPostMain}
                  alt="BlogPostMain"
                  height={"70%"}
                  width={"100%"}
                />
                <div className="lnai-blogs-page-blog-item-posts-main-post-footer-content">
                  <Button variant="LNAIPurpleGradientLight">
                    Private Limited
                  </Button>
                  <div className="lnai-blogs-page-blog-item-posts-main-post-footer-timings-container">
                    <img src={Clock} alt="Clock" height={25} width={25} />
                    <span>4 mins read</span>
                  </div>
                </div>
                <div>
                  <h4>Private Placement - Section 42 of Companies Act 2013</h4>
                  <p>
                    Introduction A private placement is an efficient and
                    economical option for a company to raise...
                  </p>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-1">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    Process of Registration under RERA in Maharashtra -
                    maharerait.mahaonline.gov.in
                  </h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-2">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">GST</Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>How to Check GST ARN Status?</h4>
                </div>
              </div>

              <div className="lnai-blogs-page-blog-item-posts-sub-post-3">
                <img
                  src={BlogPostSub}
                  alt="BlogPostSub"
                  height={125}
                  width={150}
                />
                <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content-parent-container">
                  <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-content">
                    <Button variant="LNAIPurpleGradientLight">
                      RERA Complaint
                    </Button>
                    <div className="lnai-blogs-page-blog-item-posts-sub-post-footer-timings-container">
                      <img src={Clock} alt="Clock" height={25} width={25} />
                      <span>5 mins read</span>
                    </div>
                  </div>
                  <h4>
                    What is the Previous Year and Assessment Year in Income Tax?
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="lnai-blogs-page-blog-item-view-more-button">
            <Button variant="LNAIPurpleGradientLight">View More</Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-15rem", paddingTop: "2rem" }}>
        <LNAIFooter getStarted={true} />
      </div>
    </div>
  );
};

export default LNAIBlogsPage;
