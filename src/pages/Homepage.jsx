import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          <img src="/maintext.png" alt="TravelPin" />
          <br />
          Every Pin, A Journey Recalled.
        </h1>
        <h2>
          Introducing TravelPin, your personalized world map tracking your
          voyage into every city you've set foot in. With us, your wonderful
          experiences are never forgotten. Pin your memorable moments and let
          your friends witness your journey as you traverse the globe. Welcome
          to TravelPin, where every journey is a story worth sharing.
        </h2>
        <Link to="/login" className="cta">
          Start Now !
        </Link>
      </section>
    </main>
  );
}
