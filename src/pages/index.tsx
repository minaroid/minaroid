import styles from "../styles/index.module.css";
import { useEffect, useState } from "react";

const Home = () => {
  const countDownDate = new Date("Mar 31, 2026 00:00:00").getTime();
  const [remainingTime, setRemainingTime] = useState("0d 0h 0m 0s");

  useEffect(() => {
    var x = setInterval(function () {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime(
        days + "d " + hours + "h " + minutes + "m " + seconds + "s "
      );

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, [countDownDate, setRemainingTime]);

  return (
    <div className={styles.bgimg}>
      <div className={styles.middle}>
        <h1>COMING SOON</h1>
        <hr style={{ width: "40%" }}></hr>
        <p style={{ fontSize: 20 }}>{remainingTime}</p>
      </div>
    </div>
  );
};

export default Home;
