import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1>This is the home page</h1>
      </main>

      <footer className={styles.footer}>
        <h2>This is my footer</h2>
      </footer>
    </div>
  );
}
