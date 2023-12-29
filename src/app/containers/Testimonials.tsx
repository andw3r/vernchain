"use client";
import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

import SliderImage from "../components/TestimonialsSlider/SliderImage";
import SliderButtons from "../components/TestimonialsSlider/SliderButtons";
import SliderContent from "../components/TestimonialsSlider/SliderContent";

const testimonialsData = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur. Ut etiam sit hendrerit metus odio sagittis. Odio orci mattis molestie aliquam egestas. Bibendum pharetra aliquam scelerisque tellus et maecenas ornare turpis elementum. Id dolor at blandit libero lacus sit ipsum. Et tellus adipiscing.",
    author: "Jim Francois",
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur. Ut etiam sit hendrerit metus odio sagittis. Odio orci mattis molestie aliquam egestas. Bibendum pharetra aliquam scelerisque tellus et maecenas ornare turpis elementum.",
    author: "Jane Doe",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className="container flex  my-[100px] relative">
      <div className="relative md:flex xs:hidden items-center justify-center lg:w-1/2 xs:w-1/3">
        <SliderImage key={currentTestimonial} />
      </div>

      <div className="lg:1/2 xs:w-2/3">
        <SectionHeader
          subtitle="Testimonials"
          title="Client Stories, Vernchain Success"
        />
        <SliderContent
          testimonialsData={testimonialsData}
          currentTestimonial={currentTestimonial}
        />
        <div className="absolute md:bottom-0 xs:-bottom-14 md:right-0 xs:right-3">
          <SliderButtons
            prevTestimonial={prevTestimonial}
            nextTestimonial={nextTestimonial}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
