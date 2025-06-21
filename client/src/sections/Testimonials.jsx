import { useEffect, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import TestimonialForm from "../components/TestimonialForm";
import { getTestimonials } from "../services/testimonialService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // ✅ Fetch testimonials from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      }
    };

    fetchData();
  }, []);

  // ✅ Submit testimonial to backend
  const handleFormSubmit = async (formData) => {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("mentions", formData.mentions);
    data.append("review", formData.review);
    data.append("imgPath", formData.image);

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        body: data,
      });

      const saved = await res.json();
      setTestimonials((prev) => [saved, ...prev]);
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        {/* ✅ Testimonial submission form */}
        <TestimonialForm onSubmit={handleFormSubmit} />

        {/* ✅ Render testimonial cards */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={
                      testimonial.imgPath
                        ? `http://localhost:5000/${testimonial.imgPath}`
                        : "/images/default-user.png"
                    }
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
