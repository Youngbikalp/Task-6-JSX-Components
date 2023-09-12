import Header from "./header";
import styles from "../styles/contact.module.css";
function Contact() {
  return (
    <>
      <Header />
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Contact Us</h2>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className={styles.textareaField}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
