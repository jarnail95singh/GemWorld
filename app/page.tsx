import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.subtitle}>Welcome to Gemworld - A polished web application prototype.</p>
    </main>
  );
}
