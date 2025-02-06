import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import img from "../../assets/teeth.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import "../../App.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    // Common animation configuration
    const animateElements = (selector, additionalProps = {}) => ({
      opacity: 1,
      y: 100,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      ...additionalProps,
    });

    // Text elements animation
    gsap.fromTo(
      ".hero-text-block, .line span",
      { opacity: 0, y: 100 },
      animateElements(".hero-col", { y: 0 })
    );

    // Line animation
    gsap.fromTo(
      ".line",
      { opacity: 0, scaleX: 0 },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-col",
          start: "top 85%",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".hero-image",
          start: "top 90%",
        },
      }
    );

    // Special animation for blue text
    gsap.fromTo(
      ".text-blue-600",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".text-blue-600",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="py-12 sm:py-0  overflow-hidden">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 */}
        <div className="flex justify-center flex-col p-0 hero-col">
          <h2 className="2xl:text-[4.8rem] text-[3rem] pb-10 leading-[1] uppercase font-bold overflow-hidden">
            <div className="line overflow-hidden">
              <span className="inline-block hero-text-block">
                <span className="text-blue-600 inline-block">A new</span> level
                of <span className="text-blue-600 inline-block">dental</span>
              </span>
            </div>
            <div className="line overflow-hidden">
              <span className="inline-block hero-text-block">
                <span className="text-blue-600">care</span>
              </span>
            </div>
          </h2>
          <div className="flex justify-end px-1 overflow-hidden">
            <p className="text-gray-600">
              <span className="inline-block line overflow-hidden">
                <span className="hero-text-block">premium</span>
              </span>
              <span className="px-5 inline-block line overflow-hidden">
                <span className="hero-text-block">dental</span>
              </span>
              <br />
              <span className="inline-block line overflow-hidden">
                <span className="hero-text-block">care services with an</span>
              </span>
              <br />
              <span className="inline-block line overflow-hidden">
                <span className="hero-text-block">individualized</span>
              </span>
              <span className="px-5 inline-block line overflow-hidden">
                <span className="hero-text-block">approach</span>
              </span>
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bg-white hero-col overflow-hidden">
          <img
            src={img}
            alt="teeth-image"
            className="w-full h-full hero-image object-contain opacity-0"
          />
        </div>

        {/* Column 3 */}
        <div className="bg-white flex items-end p-0 hero-col overflow-hidden">
          <h2 className="text-[5.8rem] leading-[1] uppercase font-bold">
            <div className="line overflow-hidden">
              <span className="inline-block hero-text-block">A perfect</span>
            </div>
            <div className="line overflow-hidden">
              <span className="inline-block hero-text-block">
                <span className="text-blue-600">smile is</span> our goal
              </span>
            </div>
          </h2>
        </div>
        <Button />
      </div>
    
    </section>
  );
};

export default HeroSection;
