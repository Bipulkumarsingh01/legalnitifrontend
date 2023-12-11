import { Testimonials } from "../../../assets";
import "./LNAITestimonials.css";

const LNAITestimonials = () => {
  return (
    <div className="lnai-landing-view-testimonial-container">
      <div className="lnai-landing-view-testimonial-heading-image-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 className="lnai-landing-view-testimonial-heading-highlight">
            Testimonials
          </h1>
          <h3 className="lnai-landing-view-testimonial-sub-heading">
            Our Customers Love What We Do
          </h3>
        </div>

        <img
          src={Testimonials}
          alt="Testimonials"
          height={150}
          width={200}
          className="lnai-landing-view-testimonial-image"
        />
      </div>

      <div className="lnai-landing-view-testimonial-items  outer-slide-div">
        {/* 1 */}
        <div className="lnai-landing-view-testimonial-items-main-container inner-slide-div">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Willium Tiwari
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="lnai-landing-view-testimonial-items-main-container inner-slide-div">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Mohit
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="lnai-landing-view-testimonial-items-main-container inner-slide-div">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Ashish Yadav
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="lnai-landing-view-testimonial-items-main-container inner-slide-div">
          <div className="lnai-landing-view-testimonial-item-container-outer">
            <div className="lnai-landing-view-testimonial-item-container-inner">
              <blockquote className="lnai-landing-view-testimonial-item-container-inner-blockquote"></blockquote>

              <p className="lnai-landing-view-testimonial-item-text">
                One of the standout features is the intuitive interface, which
                makes it easy for our team to navigate and utilize the platform
                effectively. we can manage our compliance tasks effortlessly
              </p>

              <h3 className="lnai-landing-view-testimonial-item-text-author">
                Nikhil Yadav
              </h3>

              <div className="lnai-landing-view-testimonial-item-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LNAITestimonials;
