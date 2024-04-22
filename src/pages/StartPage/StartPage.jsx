import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./StartPage.module.css";

const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/tutor");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleClick = () => {
    navigate("/tutor");
  };

  return (
    <div className={css.container}>
      <div className={css.topPart}>
        <img src="/images/start_page/logo_with_name.svg" alt="" />
      </div>
      <div className={css.middlePart}>
        <p className={css.title}>Let's make memories.</p>
        <div className={css.startLogoContainer}>
          <img src="/images/start_page/start_logo.svg" alt="" className={css.startLogo} />
          <img src="/images/start_page/arrow.svg" alt="" className={css.arrow} />
        </div>
        <p className={css.paymentText}>We accept this payment</p>
        <img src="/images/start_page/payment_method.svg" alt="" className={css.paymentLogo} />
      </div>
      <div className={css.bottomPart}>
        <img src="/images/start_page/tutor_btn.svg" alt="" onClick={handleClick} />
      </div>
    </div>
  );
};

export default StartPage;
