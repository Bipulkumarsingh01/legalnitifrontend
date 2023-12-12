import { Testimonials } from "../../../assets";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./LNAITestimonials.css";

const LNAITestimonials = () => {
  return (
    <div className="lnai-landing-view-testimonial-container">
      <div className="lnai-landing-view-testimonial-heading-image-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="lnai-landing-view-testimonial-heading-highlight">
            Testimonials
          </p>
          <p className="lnai-landing-view-testimonial-sub-heading">
            Our Customers Love What We Do
          </p>
        </div>

        <img
          src={Testimonials}
          alt="Testimonials"
          height={350}
          width={480}
          className="lnai-landing-view-testimonial-image"
        />
      </div>

      {/* <div className="lnai-landing-view-testimonial-items">
        <div className="lnai-landing-view-testimonial-items-main-container">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Yash Sengde
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>

        <div className="lnai-landing-view-testimonial-items-main-container">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Yash Sengde
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="lnai-landing-view-testimonial-items">
        <Carousel
          autoPlay={true}
          interval={2000}
          emulateTouch={true}
          showArrows={false}
          infiniteLoop={true}
          dynamicHeight={true}
          showStatus={false}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: "4rem",
                width: "100%",
                height: "100%",
                paddingTop: "2rem",
              }}
            >
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 1
                    </h3>
                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 2
                    </h3>

                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                gap: "4rem",
                width: "100%",
                height: "100%",
                paddingTop: "2rem",
              }}
            >
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 3
                    </h3>

                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 4
                    </h3>

                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                gap: "4rem",
                width: "100%",
                height: "100%",
                paddingTop: "2rem",
              }}
            >
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 5
                    </h3>

                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
              <div className="lnai-landing-view-testimonial-items-main-container">
                <div className="lnai-landing-view-testimonial-item-container-outer">
                  <div className="lnai-landing-view-testimonial-item-container-inner">
                    <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                    <p className="lnai-landing-view-testimonial-item-text">
                      One of the standout features is the intuitive interface,
                      which makes it easy for our team to navigate and utilize
                      the platform effectively. we can manage our compliance
                      tasks effortlessly
                    </p>

                    <h3 className="lnai-landing-view-testimonial-item-text-author">
                      Yash Sengde 6
                    </h3>

                    <div className="lnai-landing-view-testimonial-item-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LNAITestimonials;
