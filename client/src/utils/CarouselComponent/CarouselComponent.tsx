import Carousel from "react-material-ui-carousel";
import { AayushiSingh, PawanKumarSingh, YashSengde } from "../../assets";

import "./CarouselComponent.css";

const CarouselComponent = () => {
  const items = [
    {
      id: 1,
      content1: (
        <div
          className="lnai-testimonial-card-component-parent-container"
        >
          <div
            className="lnai-testimonial-card-component-child-container"
          >
            <div className="lnai-landing-view-testimonial-items-main-container">
              <div className="lnai-landing-view-testimonial-item-container-outer">
                <div className="lnai-landing-view-testimonial-item-container-inner">
                  <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                  <p className="lnai-landing-view-testimonial-item-text">
                    One of the standout features is the intuitive interface,
                    which makes it easy for our team to navigate and utilize the
                    platform effectively. we can manage our compliance tasks
                    effortlessly
                  </p>

                  <h3 className="lnai-landing-view-testimonial-item-text-author">
                    Yash Sengde
                  </h3>

                  <img
                    src={YashSengde}
                    alt="YashSengde"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: "50%",
                      float: "right",
                      position: "absolute",
                      top: 0,
                      right: 20,
                      bottom: 0,
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lnai-landing-view-testimonial-items-main-container">
              <div className="lnai-landing-view-testimonial-item-container-outer">
                <div className="lnai-landing-view-testimonial-item-container-inner">
                  <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                  <p className="lnai-landing-view-testimonial-item-text">
                    The customer support team has been exceptional throughout
                    our journey. They are responsive, knowledgeable, and always
                    ready to assist with any questions or concerns we have.
                  </p>

                  <h3 className="lnai-landing-view-testimonial-item-text-author">
                    Pawan Kumar Singh
                  </h3>

                  <img
                    src={PawanKumarSingh}
                    alt="PawanKumarSingh"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: "50%",
                      float: "right",
                      position: "absolute",
                      top: 0,
                      right: 20,
                      bottom: 0,
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: 2,
      content1: (
        <div
          className="lnai-testimonial-card-component-parent-container"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <div
            className="lnai-testimonial-card-component-child-container"
          >
            <div className="lnai-landing-view-testimonial-items-main-container">
              <div className="lnai-landing-view-testimonial-item-container-outer">
                <div className="lnai-landing-view-testimonial-item-container-inner">
                  <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                  <p className="lnai-landing-view-testimonial-item-text">
                    The platform's AI capabilities ensure that we stay compliant
                    with the ever-changing legal landscape. It analyzes complex
                    regulations, identifies potential risks, and offers
                    actionable insights to mitigate them
                  </p>

                  <h3 className="lnai-landing-view-testimonial-item-text-author">
                    Aayushi Singh
                  </h3>

                  <img
                    src={AayushiSingh}
                    alt="AayushiSingh"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: "50%",
                      float: "right",
                      position: "absolute",
                      top: 0,
                      right: 20,
                      bottom: 0,
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="lnai-landing-view-testimonial-items-main-container">
              <div className="lnai-landing-view-testimonial-item-container-outer">
                <div className="lnai-landing-view-testimonial-item-container-inner">
                  <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

                  <p className="lnai-landing-view-testimonial-item-text">
                    One of the standout features is the intuitive interface,
                    which makes it easy for our team to navigate and utilize the
                    platform effectively. we can manage our compliance tasks
                    effortlessly
                  </p>

                  <h3 className="lnai-landing-view-testimonial-item-text-author">
                    Yash Sengde
                  </h3>

                  <img
                    src={YashSengde}
                    alt="YashSengde"
                    height={100}
                    width={100}
                    style={{
                      borderRadius: "50%",
                      float: "right",
                      position: "absolute",
                      top: 0,
                      right: 20,
                      bottom: 0,
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // {
    //   id: 3,
    //   content1: (
    //     <div>
    //       <div
    //         style={{
    //           display: "flex",
    //           width: "75%",
    //           height: "100%",
    //           paddingTop: "2rem",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <div className="lnai-landing-view-testimonial-items-main-container">
    //           <div className="lnai-landing-view-testimonial-item-container-outer">
    //             <div className="lnai-landing-view-testimonial-item-container-inner">
    //               <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

    //               <p className="lnai-landing-view-testimonial-item-text">
    //                 One of the standout features is the intuitive interface,
    //                 which makes it easy for our team to navigate and utilize the
    //                 platform effectively. we can manage our compliance tasks
    //                 effortlessly
    //               </p>

    //               <h3 className="lnai-landing-view-testimonial-item-text-author">
    //                 Yash Sengde 5
    //               </h3>

    //               <div className="lnai-landing-view-testimonial-item-circle"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="lnai-landing-view-testimonial-items-main-container">
    //           <div className="lnai-landing-view-testimonial-item-container-outer">
    //             <div className="lnai-landing-view-testimonial-item-container-inner">
    //               <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

    //               <p className="lnai-landing-view-testimonial-item-text">
    //                 One of the standout features is the intuitive interface,
    //                 which makes it easy for our team to navigate and utilize the
    //                 platform effectively. we can manage our compliance tasks
    //                 effortlessly
    //               </p>

    //               <h3 className="lnai-landing-view-testimonial-item-text-author">
    //                 Yash Sengde 6
    //               </h3>

    //               <div className="lnai-landing-view-testimonial-item-circle"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Carousel
      className="lnai-carosel-component"
      navButtonsAlwaysInvisible={true}
      indicators={true}
      autoPlay={true}
      indicatorIconButtonProps={{ className: "lnai-carousel-indicator" }}
      activeIndicatorIconButtonProps={{ className: "lnai-active-indicator" }}
      animation={"slide"}
      IndicatorIcon={
        <div
          style={{
            width: "5rem",
            height: "0.6rem",
            background: "#FFFFFF",
            border: "1px solid #000000",
            borderRadius: "1rem",
            margin: "1rem 0.5rem",
          }}
        ></div>
      }
    >
      {items.map((item) => (
        <div key={item.id}>{item.content1}</div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
