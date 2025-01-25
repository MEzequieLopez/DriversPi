import { useEffect } from "react";
import style from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('https://images5.alphacoders.com/317/thumb-1920-317664.jpg')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundAttachment = null;
    };
  }, []);

  return (
    <div className={style.container}>
      <img
        src="https://clipground.com/images/logo-f1-png-8.png"
        alt=""
        className={style.imgClass}
      />

      <Link to="/home">
        <button className={style.button}>DRIVE TO SURVIVE</button>
      </Link>
    </div>
  );
};

export default Landing;