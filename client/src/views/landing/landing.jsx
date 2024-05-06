import { useEffect } from "react";
import style from "./landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('https://static1.pocketlintimages.com/wordpress/wp-content/uploads/140576-tv-news-feature-how-to-watch-f1-in-4k-ultra-hd-image1-mlmba7ehtv.jpg')`;
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
        src="/src/assets/pictures/formula.png"
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