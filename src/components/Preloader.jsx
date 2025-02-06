import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import img from "../assets/teeth.png";

const Preloader = ({ onComplete }) => {
  const percentageRef = useRef(null);
  const lineRef = useRef(null);
  const imageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive setup
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const lineWidth = isMobile ? window.innerWidth * 0.8 : 500;
    const imageTravel = isMobile ? lineWidth - 40 : 730; // 40px = image width

    const tl = gsap.timeline({
      onComplete: () => {
        // Preloader Fade Out
        gsap.to(".preloader-container", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            // Ensure Preloader is removed completely
            onComplete();

            // Move Image to Hero Section
            const heroImage = document.querySelector(".hero-image");
            if (heroImage) {
              const heroRect = heroImage.getBoundingClientRect();
              const preloaderRect = imageRef.current.getBoundingClientRect();

              gsap.set(imageRef.current, {
                position: "absolute",
                left: preloaderRect.left,
                top: preloaderRect.top,
                width: preloaderRect.width,
                height: preloaderRect.height,
                zIndex: 1000,
              });

              gsap.to(imageRef.current, {
                left: heroRect.left,
                top: heroRect.top,
                width: heroRect.width,
                height: heroRect.height,
                duration: 1.2,
                ease: "power3.out",
                onComplete: () => {
                  // Hero image fade-in effect
                  gsap.to(heroImage, { opacity: 1, duration: 0.5 });
                },
              });
            }
          },
        });
      },
    });

    // Existing animations
    tl.to(
      {},
      {
        duration: 2.5,
        onUpdate: function () {
          setProgress(Math.floor(this.progress() * 100));
        },
        ease: "power2.inOut",
      }
    );

    tl.to(
      lineRef.current,
      { width: "100%", duration: 2.5, ease: "power2.inOut" },
      0
    );

    tl.fromTo(
      imageRef.current,
      { x: 0 },
      { x: imageTravel, duration: 2.5, ease: "power2.inOut" },
      0
    );

    tl.fromTo(
      percentageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2)",
      },
      0
    );
    // Animate main content
    gsap.fromTo(
      ".animate-dental span",
      {
        opacity: 0,
        y: 50, 
      },
      {
        opacity: 1, 
        y: 0, 
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        immediateRender: false, 
      }
    );
  }, [isMobile]);

  return (
    <div className="preloader-container" style={styles.preloaderContainer}>
      <h1 className="xl:text-[8rem] absolute top-20 xl:left-32 text-8xl uppercase text-start leading-[1] animate-dental">
        <span className="opacity-0 inline-block translate-y-10">R</span>
        <span className="text-blue-600  inline-block opacity-0 translate-y-10">o</span>
        <span className="opacity-0   inline-block translate-y-10">y</span>
        <span className="text-blue-600  inline-block opacity-0 translate-y-10">a</span>l
        <br />
        <span className="text-blue-600  inline-block opacity-0 translate-y-10">d</span>e
        <span className="text-blue-600  inline-block opacity-0 translate-y-10">n</span>t
      </h1>

      <div
        ref={percentageRef}
        style={{
          ...styles.percentage,
          fontSize: isMobile ? "40px" : "60px",
        }}
      >
        {progress}%
      </div>

      <div
        style={{
          ...styles.lineContainer,
          width: isMobile ? "80vw" : "800px",
        }}
      >
        <div ref={lineRef} style={styles.line}></div>
        <div ref={imageRef} style={styles.toothIcon}>
          <img
            className=" mt-[-20px]  xl:mt-[-50px]"
            src={img}
            alt="tooth"
            style={{
              ...styles.toothImage,
              width: isMobile ? "30px" : "70px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  preloaderContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    willChange: "opacity",
  },
  percentage: {
    color: "#3B82F6",
    marginBottom: "20px",
    willChange: "transform, opacity",
  },
  lineContainer: {
    height: "4px",
    backgroundColor: "#3B82F6",
    position: "relative",
    overflow: "visible",
  },
  line: {
    height: "100%",
    backgroundColor: "#E5E7EB",
    width: "0%",
    willChange: "width",
  },
  toothIcon: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50% , 50%)",
    willChange: "transform",
  },
  toothImage: {
    height: "auto",
    transition: "width 0.3s ease",
  },
};

export default Preloader;
