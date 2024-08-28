import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="A great selection of products available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        {/* Add your header/logo/navigation here */}
      </header>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
        </section>

        <section className={styles.filterSection}>
          {/* Filter options go here */}
        </section>

        <section className={styles.productGrid}>
          {/* Product grid */}
          <div className={styles.productCard}>
            <Image src="/images/bag.png" width={150} height={150} />
            <h2>PPXOC MILKYWAY DRESS IN</h2>
          </div>
          {/* Repeat for more products */}
        </section>
      </main>

      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}
