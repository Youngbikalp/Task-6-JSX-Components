import Header from "./header";
import styles from "../styles/home.module.css";
function Home() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <h1>All American Restaurant</h1>
        <p>
          Thank you for visiting our website. We are excited to give you all the
          most pleasure and authentic diner.
        </p>
      </div>
    </>
  );
}

export default Home;
