import React, { useRef, useEffect } from "react";
import styles from "./Button.module.css";
import { FaRegCalendarDays } from "react-icons/fa6";
import gsap from "gsap";

const Button = () => {
  const firstButtonRef = useRef(null);
  const secondButtonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [firstButtonRef.current, secondButtonRef.current],
      {
        x: (index) => index === 0 ? -100 : 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.3,
        delay: 0.5
      }
    );
  }, []);

  return (
    <div className={`${styles.mainButton} py-8 sm:py-0`}>
      <div className={styles.buttons}>
        <button
          ref={firstButtonRef}
          type="button"
          className={`${styles.button} ${styles.firstButton}`}
        >
          FREE CONSULTATION
        </button>
        <button
          ref={secondButtonRef}
          type="button"
          className={`${styles.button} ${styles.secondButton}`}
        >
          <FaRegCalendarDays size={23} />
        </button>
      </div>
    </div>
  );
};

export default Button;