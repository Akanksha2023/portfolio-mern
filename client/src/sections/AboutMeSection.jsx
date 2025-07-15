import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    // Section fade-in
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Element scroll-based animations
    const elements = [headingRef.current, textRef.current, videoRef.current];

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.to("#wave-emoji", {
  rotate: 20,
  yoyo: true,
  repeat: -1,
  duration: 0.4,
  ease: "power1.inOut",
});

  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-14 px-6 md:px-16 bg-black text-white"
    >
      <div ref={headingRef} className="text-center mb-8">
        <h1  className="font-semibold md:text-5xl text-3xl text-center">
  About Me{" "}
  <span id="wave-emoji" className="inline-block origin-bottom-left">👋</span>
</h1>

      </div>

      <div ref={textRef} className="max-w-xl mx-auto text-center text-gray-400 text-lg leading-relaxed mb-8">
        I’m Akanksha Jha, a full-stack developer passionate about creating scalable web applications with intuitive user interfaces and robust backend systems. Here's a quick video intro!
      </div>

      <div
  ref={videoRef}
  className="max-w-3xl mx-auto p-4 rounded-xl transition-shadow duration-300 bg-[#f5f5f5] shadow-xl hover:shadow-[0_0_25px_#e9eae7]"
>
  <div className="relative" style={{ paddingTop: "56.25%" }}>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="Intro Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full rounded-md"
    />
  </div>
</div>

    </section>
  );
};

export default AboutMe;
