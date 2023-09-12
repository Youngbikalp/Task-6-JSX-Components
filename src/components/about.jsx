import Header from "./header";
import styles from "../styles/about.module.css";
function About() {
  return (
    <>
      <Header />
      <div className={styles.about}>
        <p>
          Our restaurant has been serving delicious meals to the community since
          1983. We take pride in providing a warm and welcoming atmosphere for
          our guests, where you can enjoy a memorable dining experience.
        </p>
      </div>
    </>
  );
}

export default About;
