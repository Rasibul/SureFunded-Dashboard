import TestimonialCard from "./TestimonialCard";
import start from "../../../assets/star.png";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Rodolfo Dimdam Jr.",
      icon: start,
      title: "One of the competitive prop firm is here SURE LEVERAGE",
      description:
        "Professional website and friendly user. Amazing challenges and very affordable. Profit Consistency rule is very good for all the traders to avoid overtrade when you are already profit to that month...",
        to:"https://www.trustpilot.com/reviews/65ca7c5dd80ddeb1ad0264e8"
    },
    {
      name: "King promize",
      icon: start,
      title: "An amazing prop firm that stands out…",
      description:
        "An amazing prop firm that stands out from the rest. Sure Leverage offers trader-friendly DD, No time limit on all their challenge phases which is top notch. And also pocket-friendly challenge cost.",
        to:"https://www.trustpilot.com/reviews/65b9ff5b37b19876a62b8a9a"
    },
    {
      name: "Omogunloye Iyanu",
      icon: start,
      title: "Trusted and reliable prop firm",
      description:
        "The absolute draw down system they have is amazing for beginners as it gives lots of room for errors. Use this prop firm when first trying to pass and get used to beating these challenges.",
        to:"https://www.trustpilot.com/reviews/65b9ff5b37b19876a62b8a9a"
    },
  ];
  return (
    <div className=" pb-8 md:pb-4 px-2">
      <h2 className="text-center text-xl sm:text-5xl font-bold text-white mb-8">
        <span className="text-white/60 text-lg">Testimonials</span> <br />
        What People Say?
      </h2>
      <div className="w-full">
        <Marquee autoFill={true} pauseOnHover={true}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
            >
              <TestimonialCard
                name={testimonial.name}
                icon={testimonial.icon}
                title={testimonial.title}
                description={testimonial.description}
                to= {testimonial.to}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <Link to="https://www.trustpilot.com/review/sureleverage.com">
        <p className="text-center text-base text-white underline underline-offset-4 mt-4 font-bold">
          Show Latest Reviews
        </p>
      </Link>
    </div>
  );
};

export default Testimonials;
