import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About TravelPin</h2>
          <p>
            Welcome to TravelPin, your ultimate travel companion. We are a
            dedicated team of avid travelers, tech enthusiasts, and
            memory-makers who believe that every journey, big or small, deserves
            to be remembered. Our story began with a simple idea - to create an
            affordable platform where travel enthusiasts could document their
            adventures, visualize their journeys, and share their stories. Since
            our inception, we've stayed true to that mission, offering our users
            a rich, interactive experience that doesn't break the bank.
          </p>
          <p>
            At TravelPin, we harness the power of cutting-edge geo-location
            technology and integrate it with a user-friendly interface to offer
            you a seamless travel tracking experience. With us, you don't just
            pin your travels; you craft a living memoir of your adventures. So
            come join us! Let's celebrate the joy of exploration and create a
            world of memories together, one pin at a time.
          </p>
        </div>
      </section>
    </main>
  );
}
