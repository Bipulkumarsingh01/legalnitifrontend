import { Testimonials } from "../../../assets";

import { CarouselComponent } from "../../../utils";

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
            marginLeft: "12rem",
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
          height={225}
          width={300}
          className="lnai-landing-view-testimonial-image"
        />
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <CarouselComponent />
      </div>
    </div>
  );
};

export default LNAITestimonials;
