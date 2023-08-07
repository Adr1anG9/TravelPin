// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just £5/month.
          </h2>
          <p>
            Experience the world like never before with TravelPin! Offering
            unrivaled value, our platform empowers you to track, cherish, and
            share your travel memories with just a click. For the price of a cup
            of coffee, gain access to interactive maps, personalized travel
            stats, and an ever-growing global community of explorers. You'll
            marvel at how seamlessly you can record your journeys, build your
            unique travel profile, and relive every unforgettable moment. With
            TravelPin, not only do you invest in a cutting-edge travel tool,
            you're also investing in a lifetime of memories. Because we believe
            that every journey should be remembered, and great experiences
            shouldn't come with a hefty price tag.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
